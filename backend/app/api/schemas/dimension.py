from pydantic import BaseModel


class DimensionBase(BaseModel):
    length: float
    width: float
    height: float

class DimensionCreate(DimensionBase):
    pass

class Dimension(DimensionBase):
    id: int

    class Config:
        from_attributes = True


