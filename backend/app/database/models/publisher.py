import sqlalchemy as sa
from app.database.base import Base
from sqlalchemy.orm import Mapped, mapped_column


class Publisher(Base):
    __tablename__ = 'publishers'

    id: Mapped[int] = mapped_column(sa.BigInteger, primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column(sa.String, unique=True)
