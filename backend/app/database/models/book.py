from datetime import datetime
from enum import Enum as PyEnum

import sqlalchemy as sa
from app.database.base import Base
from app.database.models import Author
from app.database.models.dimension import Dimension
from app.database.models.publisher import Publisher
from sqlalchemy.orm import Mapped, mapped_column, relationship


class ReadingAge(PyEnum):
    CHILD = 0
    TEEN = 1
    ADULT = 2


class Language(PyEnum):
    ENGLISH = 'English'
    FRENCH = 'French'
    SPANISH = 'Spanish'


class Book(Base):
    __tablename__ = 'books'
    id: Mapped[int] = mapped_column(sa.BigInteger, primary_key=True, autoincrement=True)
    title: Mapped[str] = mapped_column(sa.String)
    description: Mapped[str] = mapped_column(sa.String)
    print_length: Mapped[int] = mapped_column(sa.Integer)
    published_date: Mapped[datetime] = mapped_column(sa.DateTime)
    price: Mapped[float] = mapped_column(sa.Float)
    availability: Mapped[bool] = mapped_column(sa.Boolean)
    quantity: Mapped[int] = mapped_column(sa.Integer)
    author_id: Mapped[int] = mapped_column(sa.BigInteger, sa.ForeignKey('authors.id'))
    publisher_id: Mapped[int] = mapped_column(sa.BigInteger, sa.ForeignKey('publishers.id'))
    author: Mapped['Author'] = relationship('Author')
    publisher: Mapped['Publisher'] = relationship('Publisher')
    dimension_id: Mapped[int] = mapped_column(sa.BigInteger, sa.ForeignKey('dimensions.id'))
    dimension: Mapped['Dimension'] = relationship('Dimension')
    reading_age: Mapped[ReadingAge] = mapped_column(sa.Enum(ReadingAge))
    language: Mapped[Language] = mapped_column(sa.Enum(Language))
