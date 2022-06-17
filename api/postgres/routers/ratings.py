from fastapi import APIRouter, Response, status, Depends
from ..db import RatingQueries
from ..models.ratings import RatingOut
from .accounts import User, get_current_active_user
router = APIRouter()

def row_to_create_rating(row):
    rating ={
        'id': row[0],
        'liked': row[1],
        'buildid': row[2],
        'userid': row[3],
    }
    return rating

def row_to_list_rating(row):
    rating ={
        'id': row[0],
        'liked': row[1],
        'buildid': row[2],
        'userid': row[3],
    }
    return rating

@router.get("/api/ratings", response_model=RatingOut)
def rating_list(query=Depends(RatingQueries)):
    rows = query.get_ratings()
    return {
        "ratings": [row_to_list_rating(row) for row in rows],
    }

@router.post('/api/ratings/create', response_model= RatingOut, responses={200: {'model': RatingOut}})
def create_rating(rating: RatingOut, query=(RatingQueries), current_user: User = Depends(get_current_active_user)):
    row = query.create_ratings(rating.liked, rating.buildid, current_user["id"])
    return row_to_create_rating(row)