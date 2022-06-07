from pydantic import BaseModel

class ColorIn(BaseModel):
    id: int
    name: str

class ColorOut(BaseModel):
    colors: list[ColorIn]

class SizeIn(BaseModel):
    id: int
    name: str

class SizeOut(BaseModel):
    sizes: list[SizeIn]