from pydantic import BaseModel



class CpuOut(BaseModel):
    id: int
    processor: str
    cores: str
    threads: str
    speed: str
    socket_type: str

class Cpu(BaseModel):
    cpus: list[CpuOut]

class GpuOut(BaseModel):
    id: int
    manufacturer: str
    core_clock_speed: str
    video_memory: str
    memory_type: str
    height: str
    length: str
    width: str
    hdmi: str
    display_port: str

class Gpu(BaseModel):
    gpus: list[GpuOut]

class HddOut(BaseModel):
    id: int
    capacity: str
    interface: str
    cache: str
    rpm: str

class Hdd(BaseModel):
    hdds: list[HddOut]

class PsuOut(BaseModel):
    id: int
    wattage: str
    atx_connector: str 
    atx_12v_connector: str
    graphics_connector: str
    molex_connector: str
    sata_connector: str
    floppy_connector: str

class Psu(BaseModel):
    psus: list[PsuOut]