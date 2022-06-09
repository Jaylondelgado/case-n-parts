from pydantic import BaseModel

class RatingOut(BaseModel):
    id: int
    rating: int
    build_id: int
    user_id: int

class Rating(BaseModel):
    ratings: list[RatingOut]