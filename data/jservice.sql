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

CREATE TABLE public.categories (
    id integer NOT NULL,
    title character varying(250) NOT NULL,
    canon boolean DEFAULT true
);


CREATE TABLE IF NOT EXISTS public.cpu
(
    processor character varying(60) COLLATE pg_catalog."default" NOT NULL,
    cores character varying(15) COLLATE pg_catalog."default" NOT NULL,
    threads character varying(70) COLLATE pg_catalog."default" NOT NULL,
    speed character varying(10) COLLATE pg_catalog."default" NOT NULL,
    socket_type character varying(30) COLLATE pg_catalog."default" NOT NULL
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.cpu
    OWNER to "great-value";

