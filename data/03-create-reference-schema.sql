CREATE TABLE IF NOT EXISTS public.motherboard
(
    id SERIAL NOT NULL PRIMARY KEY,
    cpu INT NULL REFERENCES cpu (id),
    gpu INT NULL REFERENCES gpu (id),
    hdd INT NULL REFERENCES hdd (id),
    ram INT NULL REFERENCES ram (id),
    psu INT NULL REFERENCES psu (id)
);

ALTER TABLE IF EXISTS public.motherboard
    OWNER to "great-value";