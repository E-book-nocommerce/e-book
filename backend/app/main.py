from fastapi import FastAPI

app = FastAPI()


@app.get('/')
def read_root():
    res = 'Hello world!'
    return {'message': res}


@app.get('/items/{item_id}')
def read_item(item_id: int, input_string: str = None):
    return {'item_id': item_id, 'q': input_string}
