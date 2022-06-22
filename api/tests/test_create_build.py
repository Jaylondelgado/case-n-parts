from re import A
from postgres.routers.accounts import get_current_active_user
from fastapi.testclient import TestClient
from main import app
from postgres.db import BuildsQueries
from unittest import TestCase

client = TestClient(app)

class InsertBuildQueries(TestCase):
    def create_build(self, Name, moboid, cpuid, psuid, userid, gpuid, cardcount, hddid, hddcount, ramid, ramcount, color, size, picture):
        return [1, "TEST BUILD", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

async def override_get_fake_user():
    return {"id": 1, "user": "jason", "password": "jason", "email": "jason@mail"}

app.dependency_overrides[get_current_active_user] = override_get_fake_user



def test_post_build_returns_200():
    app.dependency_overrides[BuildsQueries] = InsertBuildQueries

    response = client.post(
        "/api/build/create",
        json={
        "Name": "TEST BUILD",
        "moboid": 1,
        "cpuid": 1,
        "psuid": 1,
        "gpuid": 1,
        "cardcount": 1,
        "hddid": 1,
        "hddcount": 1,
        "ramid": 1,
        "ramcount": 1,
        "color": 1,
        "size": 1,
        "picture": 1
    })

    assert response.status_code == 200
    assert response.json() == {
    "id": 1,
    "Name": "TEST BUILD",
    "moboid": 1,
    "cpuid": 1,
    "psuid": 1,
    "Private": True,
    "userid": 1
}

    app.dependency_overrides = {}