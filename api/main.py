from fastapi import FastAPI

from postgres.routers import parts, build

app = FastAPI()

app.include_router(parts.router)
app.include_router(build.router)