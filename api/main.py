from fastapi import FastAPI

from postgres.routers import parts

app = FastAPI()

app.include_router(parts.router)