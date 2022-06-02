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