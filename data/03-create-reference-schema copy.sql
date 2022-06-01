CREATE TABLE IF NOT EXISTS public.motherboard
(
    id SERIAL NOT NULL PRIMARY KEY,
    cpu INT NOT NULL REFERENCES cpu (id),
    gpu INT NOT NULL REFERENCES gpu (id),
    hdd INT NOT NULL REFERENCES hdd (id),
    ram INT NOT NULL REFERENCES ram (id),
    psu INT NOT NULL REFERENCES psu (id)
);

ALTER TABLE IF EXISTS public.motherboard
    OWNER to "great-value";

CREATE TABLE IF NOT EXISTS public.case
(
    id SERIAL NOT NULL PRIMARY KEY,
    color INT NOT NULL REFERENCES color (id),
    size INT NOT NULL REFERENCES size (id)
);

ALTER TABLE IF EXISTS public.case
    OWNER to "great-value";