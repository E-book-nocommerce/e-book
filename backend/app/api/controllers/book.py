from typing import List

from app.api.schemas.book import Book as BookSchema
from app.api.schemas.book import BookCreate
from app.config import NOT_FOUND_ERR
from app.database.models import Book
from app.database.session import get_db
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

router = APIRouter()


@router.post('/books/', response_model=BookSchema)
def create_book(book: BookCreate, db: Session = Depends(get_db)):
    db_book = Book(
        title=book.title,
        description=book.description,
        print_length=book.print_length,
        price=book.price,
        availability=book.availability,
        quantity=book.quantity,
        reading_age=book.reading_age,
        language=book.language,
        author_id=book.author_id,
        publisher_id=book.publisher_id,
        dimension_id=book.dimension_id,
    )
    db.add(db_book)
    db.commit()
    return db_book


@router.get('/books/{book_id}', response_model=BookSchema)
def read_book(book_id: int, db: Session = Depends(get_db)):
    db_book = db.query(Book).filter(Book.id == book_id).first()
    if db_book is None:
        raise HTTPException(status_code=NOT_FOUND_ERR, detail='Book not found')
    return db_book


@router.get('/books/', response_model=List[BookSchema])
def read_books(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    db_books = db.query(Book).offset(skip).limit(limit).all()
    return db_books


@router.put('/books/{book_id}', response_model=BookSchema)
def update_book(book_id: int, book: BookCreate, db: Session = Depends(get_db)):
    db_book = db.query(Book).filter(Book.id == book_id).first()
    if db_book is None:
        raise HTTPException(status_code=NOT_FOUND_ERR, detail='Book not found')
    db_book.title = book.title
    db_book.description = book.description
    db_book.print_length = book.print_length
    db_book.price = book.price
    db_book.availability = book.availability
    db_book.quantity = book.quantity
    db_book.reading_age = book.reading_age
    db_book.language = book.language
    db_book.author_id = book.author_id
    db_book.publisher_id = book.publisher_id
    db_book.dimension_id = book.dimension_id
    db.commit()
    db.refresh(db_book)
    return db_book


@router.delete('/books/{book_id}')
def delete_book(book_id: int, db: Session = Depends(get_db)):
    db_book = db.query(Book).filter(Book.id == book_id).first()
    if db_book is None:
        raise HTTPException(status_code=NOT_FOUND_ERR, detail='Book not found')
    db.delete(db_book)
    db.commit()
    return {'ok': True}
