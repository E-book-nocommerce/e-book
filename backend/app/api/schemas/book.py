from datetime import datetime

from app.database.models.book import Language, ReadingAge
from pydantic import BaseModel


class BookBase(BaseModel):
    title: str
    description: str
    print_length: int
    published_date: datetime
    price: float
    available: bool
    quantity: int
    reading_age: ReadingAge
    language: Language





class BookCreate(BookBase):
    author_id: int
    publisher_id: int
    dimension_id: int

class Book(BookBase):
    id: int

    class Config:
        from_attributes = True
