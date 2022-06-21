from typing import Union
from turtle import title
from urllib import response
from ..models.build import Build, BuildA, BuildDeleteOpertion, BuildOut, BuildOutList, InBuild, InsertBuild, OutBuild
from fastapi import APIRouter, Response, status, Depends
from ..db import BuildsQueries
from ..models.common import ErrorMessage
from .accounts import User, get_current_active_user


router = APIRouter()
def row_to_create_build(row):
    build ={
        "id": row[0],
        "Name": row[1],
        "moboid": row[2],
        "cpuid": row[3],
        "psuid": row[4],
        "Private": row[5],
        "userid": row[6],
    }
    return build

def row_to_list_build(row):
    build ={
        "id": row[0],
        "userid": row[1],
        "username": row[2],
        "Name": row[3],
        "color": row[4],
        "size": row[5],
        "picture": row[6],
        "gpu": {
            "id": row[7],
            "manufacturer": row[8],
            "chipset": row[9],
        },
        "hdd": {
            "id": row[10],
            "brand": row[11],
            "capacity": row[12],
        },
        "ram": {
            "id": row[13],
            "brand": row[14],
        },
        "mobo": {
            "id": row[15],
            "brand": row[16],
            "socket_type": row[17],
            "max_memory": row[18],
        },
        "cpu": {
            "id": row[19],
            "processor": row[20],
            "cores": row[21],
            "socket_type": row[22],
        },
        "psu": {
            "id": row[23],
            "brand": row[24],
        },
        "likes": row[25]
    }
    return build

def row_to_build(row):
    build = {
        "id": row[0],
        "userid": row[1],
        "username": row[2],
        "Name": row[3],
        "Private": row[4],
        "color": row[5],
        "size": row[6],
        "picture": row[7],
        "gpu": {
            "id": row[8],
            "cardcount": row[9],
            "manufacturer": row[10],
            "chipset": row[11],
            "core_clock_speed": row[12],
            "video_memory": row[13],
            "memory_type": row[14],
            "height": row[15],
            "length": row[16],
            "width": row[17],
            "hdmi": row[18],
            "display_port": row[19],
        },
        "hdd": {
            "id": row[20],
            "hddcount": row[21],
            "brand": row[22],
            "capacity": row[23],
            "interface": row[24],
            "cache": row[25],
            "rpm": row[26],
        },
        "ram": {
            "id": row[27],
            "ramcount": row[28],
            "brand": row[29],
            "memory_type": row[30],
            "memory_speed": row[31],
            "memory_channels": row[32],
            "pin_configuration": row[33],
        },
        "mobo": {
            "id": row[34],
            "brand": row[35],
            "socket_type": row[36],
            "max_memory": row[37],
            "max_memory_per_slot": row[38],
            "pcie_slots": row[39],
            "memory_slots": row[40],
        },
        "cpu": {
            "id": row[41],
            "processor": row[42],
            "cores": row[43],
            "threads": row[44],
            "speed": row[45],
            "socket_type": row[46],
        },
        "psu": {
            "id": row[47],
            "brand": row[48],
            "wattage": row[49],
            "atx_connector": row[50],
            "atx_12v_connector": row[51],
            "graphics_connector": row[52],
            "molex_connector": row[53],
            "sata_connector": row[54]
        }
    }
    return build

@router.get("/api/builds", response_model=BuildA)
def build_list(query=Depends(BuildsQueries)):
    rows = query.get_all_builds()
    return {
        "builds": [row_to_list_build(row) for row in rows],
    }

# Example of how to get the current user for an endpoint
@router.get("/api/builds/mine", response_model=Build)
def my_build_list(query=Depends(BuildsQueries), current_user: User = Depends(get_current_active_user)):

    rows = query.get_build_by_user(current_user["id"])
    dict = {
        "builds": [row_to_build(row) for row in rows],
    }
    return dict


@router.post(
    "/api/build/create",
    response_model = OutBuild,
    responses = {
        200: {"model": OutBuild},
    },
)
def create_build(
    build: InsertBuild,
    query = Depends(BuildsQueries),
    current_user: User = Depends(get_current_active_user)
):

    row = query.create_build(build.Name, build.moboid, build.cpuid, build.psuid, current_user["id"], build.gpuid, build.cardcount, build.hddid, build.hddcount, build.ramid, build.ramcount, build.color, build.size, build.picture)
    return row_to_create_build(row)

@router.get(
    "/api/build/{build_id}",
    response_model=BuildOut,
)
def get_build(build_id: int, query=Depends(BuildsQueries)):
    row = query.get_build(build_id)
    return row_to_build(row)

@router.put(
    "/api/build/{build_id}",
    response_model = OutBuild,
    responses = {
        200: {"model": OutBuild},
        422: {"model": ErrorMessage}
    },
)
def update_build(
    build_id: int,
    build: InBuild,
    query=Depends(BuildsQueries),
):
    row = query.update_build(build_id,build.Name, build.moboid, build.cpuid, build.psuid,build.Private, build.gpuid, build.cardcount, build.hddid, build.hddcount, build.ramid, build.ramcount, build.color, build.size, build.picture)
    return row_to_create_build(row)

@router.delete(
    "/api/build/{build_id}",
    response_model=BuildDeleteOpertion,
)
def delete_build(
    build_id: int,
    query=Depends(BuildsQueries),
    current_user: User = Depends(get_current_active_user),
):
    try: 
        query.delete_build(build_id, current_user["id"])
        return {"result": True}
    except:
        return {"result": False}




