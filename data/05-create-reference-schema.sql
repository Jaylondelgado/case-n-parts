CREATE TABLE IF NOT EXISTS public.gpu_slots
(
    id SERIAL NOT NULL PRIMARY KEY,
    "name" CHARACTER VARYING(200) NOT NULL,
    "case" INT NOT NULL REFERENCES "case" (id),
    motherboard INT NOT NULL REFERENCES motherboard (id),
    "user_id" INT NOT NULL REFERENCES "user" (id),
    "private" BOOLEAN NOT NULL DEFAULT false
);

ALTER TABLE IF EXISTS public.build
    OWNER to "great-value";
