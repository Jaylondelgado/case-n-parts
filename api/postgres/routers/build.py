from ..models.build import Build
from fastapi import APIRouter, Response, status, Depends
from ..db import PartsQueries, BuildsQueries

router = APIRouter()
def row_to_build(row):
    build = {
        "id": row[0],
        "name": row[1],
        "color": row[2],
        "size": row[3],
        "gpu": {
            "id": row[4],
            "card_count": row[5],
            "manufacturer": row[6],
            "core_clock_speed": row[7],
            "video_memory": row[8],
            "memory_type": row[9],
            "height": row[10],
            "length": row[11],
            "width": row[12],
            "hdmi": row[13],
            "display_port": row[14],
        },
        "hdd": {
            "id": row[15],
            "hddcount": row[16],
            "capacity": row[17],
            "interface": row[18],
            "cache": row[19],
            "rpm": row[20],
        },
        "ram": {
            "id": row[21],
            "ramcount": row[22],
            "memory_type": row[23],
            "memory_speed": row[24],
            "memory_channels": row[25],
            "pin_configuration": row[26],
        },
        "mobo": {
            "id": row[27],
            "socket_type": row[28],
            "max_memory": row[29],
            "max_memory_per_slot": row[30],
            "pcie_slots": row[31],
            "memory_slots": row[32],
        },
        "cpu": {
            "id": row[33],
            "processor": row[34],
            "cores": row[35],
            "threads": row[36],
            "speed": row[37],
            "socket_type": row[38],
        },
        "psu": {
            "id": row[39],
            "wattage": row[40],
            "atx_connector": row[41],
            "atx_12v_connector": row[42],
            "graphics_connector": row[43],
            "molex_connector": row[44],
            "sata_connector": row[45],
            "floppy_connector": row[46]
        }
    }
    return build

@router.get("/api/builds", response_model=Build)
def gpu_list(query=Depends(BuildsQueries)):
    rows = query.get_all_builds()
    return {
        "gpus": [row_to_build(row) for row in rows],
    }
