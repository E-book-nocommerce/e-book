from app.api.controllers import author, book, publisher
from fastapi import FastAPI

app = FastAPI()


@app.get('/')
def read_root():
    res = 'Hello world!'
    return {'message': res}


@app.get('/items/{item_id}')
def read_item(item_id: int, input_string: str = None):
    return {'item_id': item_id, 'q': input_string}


app.include_router(author.router)
app.include_router(book.router)
app.include_router(publisher.router)
