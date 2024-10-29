from typing import List

from app.api.schemas.publisher import Publisher as PublisherSchema
from app.api.schemas.publisher import PublisherCreate
from app.config import NOT_FOUND_ERR
from app.database.models import Publisher
from app.database.session import get_db
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

router = APIRouter()


@router.post('/publishers/', response_model=PublisherSchema)
def create_publisher(publisher: PublisherCreate, db: Session = Depends(get_db)):
    db_publisher = Publisher(
        name=publisher.name,
    )
    db.add(db_publisher)
    db.commit()
    db.refresh(db_publisher)
    return db_publisher


@router.get('/publishers/{publisher_id}', response_model=PublisherSchema)
def read_publisher(publisher_id: int, db: Session = Depends(get_db)):
    db_publisher = db.query(Publisher).filter(Publisher.id == publisher_id).first()
    if db_publisher is None:
        return HTTPException(status_code=NOT_FOUND_ERR, detail='Not Found')
    return db_publisher


@router.get('/publishers/', response_model=List[PublisherSchema])
def read_publishers(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    publishers = db.query(Publisher).offset(skip).limit(limit).all()
    return publishers


@router.put('/publishers/{publisher_id}', response_model=PublisherSchema)
def update_publisher(publisher_id: int, publisher: PublisherCreate, db: Session = Depends(get_db)):
    db_publisher = db.query(Publisher).filter(Publisher.id == publisher_id).first()
    if db_publisher is None:
        raise HTTPException(status_code=NOT_FOUND_ERR, detail='Not Found')
    db_publisher.name = publisher.name
    db.commit()
    db.refresh()
    return db_publisher


@router.delete('/publishers/{publisher_id}')
def delete_publisher(publisher_id: int, db: Session = Depends(get_db)):
    db_publisher = db.query(Publisher).filter(Publisher.id == publisher_id).first()
    if db_publisher is None:
        raise HTTPException(status_code=NOT_FOUND_ERR, detail='Not Found')
    db.delete(db_publisher)
    db.commit()
    return {'ok': True}
