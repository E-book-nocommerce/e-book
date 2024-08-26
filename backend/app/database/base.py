import logging
from contextlib import contextmanager
from typing import ContextManager

from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, scoped_session, sessionmaker

from app.config import DATABASE_URL

logger = logging.getLogger(__name__)

POOL_SIZE = 15
MAX_OVERFLOW = 30

Session = sessionmaker(expire_on_commit=False)
engine = create_engine(DATABASE_URL, pool_size=POOL_SIZE, max_overflow=MAX_OVERFLOW)
Session.configure(bind=engine)
current_session = scoped_session(Session)


@contextmanager
def session(**kwargs) -> ContextManager[Session]:
    """Provide a transactional scope around a series of operations."""
    new_session = Session(**kwargs)
    try:  # noqa: WPS229
        yield new_session
        new_session.commit()
    except Exception as exc:
        logger.error(str(exc))
        new_session.rollback()
        raise
    finally:
        new_session.close()


class Base(DeclarativeBase):
    ...
