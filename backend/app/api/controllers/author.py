from app.api.schemas.author import Author as AuthorSchema
from app.api.schemas.author import AuthorCreate
from app.config import NOT_FOUND_ERR
from app.database.models import Author
from app.database.session import get_db
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

router = APIRouter()


@router.post('/authors/', response_model=AuthorSchema)
def create_author(author: AuthorCreate, db: Session = Depends(get_db)):
    db_author = Author(name=author.name)
    db.add(db_author)
    db.commit()
    db.refresh(db_author)
    return db_author


@router.get('/authors/{author_id}', response_model=AuthorSchema)
def read_author(author_id: int, db: Session = Depends(get_db)):
    db_author = db.query(Author).filter(Author.id == author_id).first()
    if db_author is None:
        raise HTTPException(status_code=NOT_FOUND_ERR, detail='Author not found')
    return db_author


@router.get('/authors/', response_model=list[AuthorSchema])
def read_authors(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    authors = db.query(Author).offset(skip).limit(limit).all()
    return authors


@router.put('/authors/{author_id}', response_model=AuthorSchema)
def update_author(author_id: int, author: AuthorCreate, db: Session = Depends(get_db)):
    db_author = db.query(Author).filter(Author.id == author_id).first()
    if db_author is None:
        raise HTTPException(status_code=NOT_FOUND_ERR, detail='Author not found')
    db_author.name = author.name
    db.commit()
    db.refresh(db_author)
    return db_author


@router.delete('/authors/{author_id}')
def delete_author(author_id: int, db: Session = Depends(get_db)):
    db_author = db.query(Author).filter(Author.id == author_id).first()
    if db_author is None:
        raise HTTPException(status_code=NOT_FOUND_ERR, detail='Author not found')
    db.delete(db_author)
    db.commit()
    return {'ok': True}