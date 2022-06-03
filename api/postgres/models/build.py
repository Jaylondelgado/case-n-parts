from re import S
from pydantic import BaseModel
from .parts import Cpu, Gpu, Hdd, Mobo, Psu, Ram

class BuildOut(BaseModel):
    id: int
    name: str
    color: str
    size: str
    gpu: Gpu
    hdd: Hdd
    ram: Ram
    mobo: Mobo
    cpu: Cpu
    psu: Psu
class Build(BaseModel):
    builds: list[BuildOut]

class InsertBuild(BaseModel):
    Name: str
    moboid: int
    cpuid: int
    psuid: int

class OutBuild(BaseModel):
    id: int
    Name: str
    moboid: int
    cpuid: int
    psuid: int
    Private: bool

