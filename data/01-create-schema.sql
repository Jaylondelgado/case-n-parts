-- gpu_id INT NULL REFERENCES tabletnae (id)
--
-- PostgreSQL database dump
--

-- Dumped from database version 13.4 (Debian 13.4-4.pgdg100+1)
-- Dumped by pg_dump version 13.4 (Debian 13.4-4.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: cpu; Type: TABLE; Schema: public; Owner: jservice
--


CREATE TABLE IF NOT EXISTS public.cpu
(
    Id SERIAL NOT NULL PRIMARY KEY,
    Processor character varying(60) COLLATE pg_catalog."default" NOT NULL,
    Cores character varying(20) COLLATE pg_catalog."default" NOT NULL,
    Threads character varying(70) COLLATE pg_catalog."default" NOT NULL,
    Speed character varying(10) COLLATE pg_catalog."default" NOT NULL,
    Socket_type character varying(30) COLLATE pg_catalog."default" NOT NULL
);

ALTER TABLE IF EXISTS public.cpu
    OWNER to "great-value";

--
-- Name: gpu; Type: TABLE; Schema: public; Owner: jservice
--

CREATE TABLE IF NOT EXISTS public.gpu
(
    Id SERIAL NOT NULL PRIMARY KEY,
    Manufacturer character varying(60) COLLATE pg_catalog."default" NOT NULL,
    Chipset character varying(100) COLLATE pg_catalog."default" NOT NULL,
    Core_Clock_Speed character varying(15) COLLATE pg_catalog."default" NOT NULL,
    Video_Memory int NOT NULL,
    Memory_Type character varying(100) COLLATE pg_catalog."default" NOT NULL,
    Height character varying(30) COLLATE pg_catalog."default" NOT NULL,
    Length character varying(30) COLLATE pg_catalog."default" NOT NULL,
    Width character varying(30) COLLATE pg_catalog."default" NOT NULL,
    Hdmi character varying(30) COLLATE pg_catalog."default" NOT NULL,
    Display_Port character varying(40) COLLATE pg_catalog."default" NOT NULL
);

--
-- Name: gpu_id_seq; Type: SEQUENCE; Schema: public; Owner: jservice
--

ALTER TABLE IF EXISTS public.gpu
    OWNER to "great-value";

--
-- Name: hdd; Type: TABLE; Schema: public; Owner: jservice
--

CREATE TABLE IF NOT EXISTS public.hdd
(
    Id SERIAL NOT NULL PRIMARY KEY,
    Brand character varying(30) COLLATE pg_catalog."default" NOT NULL,
    Capacity character varying(5) COLLATE pg_catalog."default" NOT NULL,
    Interface character varying(25) COLLATE pg_catalog."default" NOT NULL,
    Cache character varying(30) COLLATE pg_catalog."default" NOT NULL,
    Rpm character varying(30) COLLATE pg_catalog."default" NOT NULL
);


ALTER TABLE IF EXISTS public.hdd
    OWNER to "great-value";


--
-- Name: ram; Type: TABLE; Schema: public; Owner: jservice
--

CREATE TABLE IF NOT EXISTS public.ram
(
    Id SERIAL NOT NULL PRIMARY KEY,
    Brand character varying(30) COLLATE pg_catalog."default" NOT NULL,
    Memory_Type character varying(8) COLLATE pg_catalog."default" NOT NULL,
    Memory_Speed character varying(20) COLLATE pg_catalog."default" NOT NULL,
    Memory_Channels character varying(10) COLLATE pg_catalog."default" NOT NULL,
    Pin_Configuration character varying(20) COLLATE pg_catalog."default" NOT NULL
);


ALTER TABLE IF EXISTS public.ram
    OWNER to "great-value";

--
-- Name: psu; Type: TABLE; Schema: public; Owner: jservice
--

CREATE TABLE IF NOT EXISTS public.psu
(
    Id SERIAL NOT NULL PRIMARY KEY,
    Brand character varying(50) COLLATE pg_catalog."default" NOT NULL,
    Wattage character varying(30) COLLATE pg_catalog."default" NOT NULL,
    Atx_Connector character varying(30) COLLATE pg_catalog."default" NOT NULL,
    Atx_12v_Connector character varying(30) COLLATE pg_catalog."default" NOT NULL,
    Graphics_Connector character varying(30) COLLATE pg_catalog."default" NOT NULL,
    Molex_Connector int NOT NULL,
    Sata_Connector int NOT NULL
);

CREATE TABLE IF NOT EXISTS public.mobos
(
    Id SERIAL NOT NULL PRIMARY KEY,
    Socket_Type CHARACTER VARYING(5) NOT NULL,
    Max_Memory CHARACTER VARYING(10) NOT NULL,
    Max_Memory_Per_Slot CHARACTER VARYING(10) NOT NULL,
    Pcie_Slots INT NOT NULL,
    Memory_Slots INT NOT NULL
);

ALTER TABLE IF EXISTS public.mobos
    OWNER to "great-value";


ALTER TABLE IF EXISTS public.psu
    OWNER to "great-value";

CREATE TABLE IF NOT EXISTS public.color
(
    Id SERIAL NOT NULL PRIMARY KEY,
    Name character varying(30)
);


ALTER TABLE IF EXISTS public.color
    OWNER to "great-value";

CREATE TABLE IF NOT EXISTS public.user
(
    Id SERIAL NOT NULL PRIMARY KEY,
    User_Name character varying(200),
    password TEXT
);


ALTER TABLE IF EXISTS public.user
    OWNER to "great-value";

CREATE TABLE IF NOT EXISTS public.size
(
    Id SERIAL NOT NULL PRIMARY KEY,
    Name character varying(10)
);


ALTER TABLE IF EXISTS public.size
    OWNER to "great-value";