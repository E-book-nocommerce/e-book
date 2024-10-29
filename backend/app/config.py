import os
from xml.dom import NOT_FOUND_ERR

from dotenv import load_dotenv

load_dotenv()


NOT_FOUND_ERR = 404


DATABASE_URL = os.getenv('DATABASE_URL')
