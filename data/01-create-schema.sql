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
    processor character varying(60) COLLATE pg_catalog."default" NOT NULL,
    cores character varying(20) COLLATE pg_catalog."default" NOT NULL,
    threads character varying(70) COLLATE pg_catalog."default" NOT NULL,
    speed character varying(10) COLLATE pg_catalog."default" NOT NULL,
    socket_type character varying(30) COLLATE pg_catalog."default" NOT NULL
);

ALTER TABLE IF EXISTS public.cpu
    OWNER to "great-value";

CREATE SEQUENCE IF NOT EXISTS public.cpu_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

--
-- Name: gpu; Type: TABLE; Schema: public; Owner: jservice
--

CREATE TABLE IF NOT EXISTS public.gpu
(
    manufacturer character varying(60) COLLATE pg_catalog."default" NOT NULL,
    core_clock_speed character varying(15) COLLATE pg_catalog."default" NOT NULL,
    video_memory int NOT NULL,
    memory_type character varying(100) COLLATE pg_catalog."default" NOT NULL,
    height character varying(30) COLLATE pg_catalog."default" NOT NULL,
    length character varying(30) COLLATE pg_catalog."default" NOT NULL,
    width character varying(30) COLLATE pg_catalog."default" NOT NULL,
    hdmi character varying(30) COLLATE pg_catalog."default" NOT NULL,
    display_port character varying(40) COLLATE pg_catalog."default" NOT NULL
);

--
-- Name: gpu_id_seq; Type: SEQUENCE; Schema: public; Owner: jservice
--

ALTER TABLE IF EXISTS public.cpu
    OWNER to "great-value";

CREATE SEQUENCE IF NOT EXISTS public.harddrive_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

--
-- Name: harddrive; Type: TABLE; Schema: public; Owner: jservice
--

CREATE TABLE IF NOT EXISTS public.hdd
(
    capacity character varying(5) COLLATE pg_catalog."default" NOT NULL,
    interface character varying(25) COLLATE pg_catalog."default" NOT NULL,
    cache character varying(30) COLLATE pg_catalog."default" NOT NULL,
    rpm character varying(30) COLLATE pg_catalog."default" NOT NULL
);


ALTER TABLE IF EXISTS public.hdd
    OWNER to "great-value";

CREATE SEQUENCE IF NOT EXISTS public.harddrive_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

--
-- Name: harddrive; Type: TABLE; Schema: public; Owner: jservice
--

CREATE TABLE IF NOT EXISTS public.ram
(
    memory_type character varying(8) COLLATE pg_catalog."default" NOT NULL,
    memory_speed character varying(20) COLLATE pg_catalog."default" NOT NULL,
    memory_channels character varying(10) COLLATE pg_catalog."default" NOT NULL,
    pin_configuration character varying(20) COLLATE pg_catalog."default" NOT NULL
);


ALTER TABLE IF EXISTS public.ram
    OWNER to "great-value";

CREATE SEQUENCE IF NOT EXISTS public.ram_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

--
-- Name: psu; Type: TABLE; Schema: public; Owner: jservice
--

CREATE TABLE IF NOT EXISTS public.psu
(
    wattage character varying(20) COLLATE pg_catalog."default" NOT NULL,
    atx_connector character varying(20) COLLATE pg_catalog."default" NOT NULL,
    atx_12v_connector character varying(20) COLLATE pg_catalog."default" NOT NULL,
    graphics_connector character varying(20) COLLATE pg_catalog."default" NOT NULL,
    molex_connector int NOT NULL,
    sata_connector int NOT NULL,
    floppy_connector int NOT NULL
);


ALTER TABLE IF EXISTS public.psu
    OWNER to "great-value";

CREATE SEQUENCE IF NOT EXISTS public.psu_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


