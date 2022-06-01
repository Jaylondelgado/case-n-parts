from fastapi import FastAPI

from routers import parts

app = FastAPI()

app.include_router(parts.router)