from fastapi import FastAPI

from routers import cpus

app = FastAPI()

app.include_router(cpus.router)