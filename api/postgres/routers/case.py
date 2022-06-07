from fastapi import APIRouter, Response, status, Depends
from ..models.case import SizeOut, ColorOut
from ..db import CaseQueries
router = APIRouter()

def row_to_color(row):
    color = {
        "id": row[0],
        "name": row[1]
    }
    return color

def row_to_size(row):
    size = {
        "id": row[0],
        "name": row[1]
    }
    return size
@router.get("/api/size", response_model=SizeOut)
def size_list(query=Depends(CaseQueries)):
    rows = query.list_size()
    return {
        "sizes": [row_to_size(row) for row in rows],
    }

@router.get("/api/color", response_model=ColorOut)
def size_list(query=Depends(CaseQueries)):
    rows = query.list_color()
    return {
        "colors": [row_to_size(row) for row in rows],
    }