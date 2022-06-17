from ..models.ratings import RatingIn, RatingOut
from .accounts import User, get_current_active_user
from fastapi import APIRouter, Response, status, Depends
from ..db import RatingQueries
router = APIRouter()
def row_to_rating(row):
    rating = {
        "id": row[0],
        'liked': row[1],
        'buildid': row[2],
        'userid': row[3]
    }
    return rating


@router.post(
    "/api/rating/create",
    response_model = RatingOut,
    responses = {
        200: {"model": RatingOut},
    },
)
def create_build(
    rating: RatingIn,
    query = Depends(RatingQueries),
    current_user: User = Depends(get_current_active_user)
):

    row = query.create_rating(rating.buildid, current_user["id"],)
    return row_to_rating(row)