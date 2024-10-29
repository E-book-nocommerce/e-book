import sqlalchemy as sa
from app.database.base import Base
from sqlalchemy.orm import Mapped, mapped_column


class Dimension(Base):
    __tablename__ = 'dimensions'

    id: Mapped[int] = mapped_column(sa.BigInteger, primary_key=True, autoincrement=True)
    length: Mapped[float] = mapped_column(sa.Float)
    width: Mapped[float] = mapped_column(sa.Float)
    height: Mapped[float] = mapped_column(sa.Float)
