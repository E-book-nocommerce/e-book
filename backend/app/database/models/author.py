import sqlalchemy as sa
from app.database.base import Base
from sqlalchemy.orm import Mapped, mapped_column


class Author(Base):
    __tablename__ = 'authors'

    id: Mapped[int] = mapped_column(sa.BigInteger, primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column(sa.String, unique=True)