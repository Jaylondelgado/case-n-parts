from re import A
from postgres.routers.build import build_list
from postgres.routers.accounts import get_current_active_user
from fastapi.testclient import TestClient
from main import app
from postgres.db import BuildsQueries
from unittest import TestCase
import json

client = TestClient(app)

    

class NormalBuildQueries(TestCase):
    def get_all_builds(self):
        return ["builds"]
    
    def create_build(self, Name, moboid, cpuid, psuid, userid, gpuid, cardcount, hddid, hddcount, ramid, ramcount, color, size, picture):
        return [1, "TEST BUILD", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

async def override_get_fake_user():
    return {"id": 1, "user": "jason", "password": "jason", "email": "jason@mail"}

async def override_build_list():
    return {
      "id": 1,
      "userid": 1,
      "username": "string",
      "Name": "TEST BUILD",
      "color": "string",
      "size": "string",
      "picture": "string",
      "gpu": {
        "id": 1,
        "manufacturer": "string",
        "chipset": "string"
      },
      "hdd": {
        "id": 1,
        "brand": "string",
        "capacity": "string"
      },
      "ram": {
        "id": 1,
        "brand": "string"
      },
      "mobo": {
        "id": 1,
        "brand": "string",
        "socket_type": "string",
        "max_memory": "string"
      },
      "cpu": {
        "id": 1,
        "processor": "string",
        "cores": "string",
        "socket_type": "string"
      },
      "psu": {
        "id": 1,
        "brand": "string"
      },
      "likes": 1
    }

app.dependency_overrides[get_current_active_user] = override_get_fake_user
app.dependency_overrides[build_list] = override_build_list


def test_post_build_returns_200():
    app.dependency_overrides[BuildsQueries] = NormalBuildQueries
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


# def test_get_all_builds_returns_200():
#     app.dependency_overrides[BuildsQueries] = NormalBuildQueries

#     response = client.get("/api/builds/")
#     d = response.json()

#     assert response.status_code == 200


#     app.dependency_overrides = {}

def test_formatted_response():
    app.dependency_overrides[BuildsQueries] = NormalBuildQueries

    response = client.get("/api/builds/")


    assert "builds" in response.json()  
# {
#   "builds": [
#     {
#       "id": 1,
#       "userid": 1,
#       "username": "string",
#       "Name": "TEST BUILD",
#       "color": "string",
#       "size": "string",
#       "picture": "string",
#       "gpu": {
#         "id": 1,
#         "manufacturer": "string",
#         "chipset": "string"
#       },
#       "hdd": {
#         "id": 1,
#         "brand": "string",
#         "capacity": "string"
#       },
#       "ram": {
#         "id": 1,
#         "brand": "string"
#       },
#       "mobo": {
#         "id": 1,
#         "brand": "string",
#         "socket_type": "string",
#         "max_memory": "string"
#       },
#       "cpu": {
#         "id": 1,
#         "processor": "string",
#         "cores": "string",
#         "socket_type": "string"
#       },
#       "psu": {
#         "id": 1,
#         "brand": "string"
#       },
#       "likes": 1
#     }
#   ]
# }