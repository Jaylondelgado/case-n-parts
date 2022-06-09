CREATE TABLE IF NOT EXISTS public.rating
(
    Id SERIAL  PRIMARY KEY,
    Rating INT,
    BuildId INTEGER REFERENCES build,
    UserId INTEGER REFERENCES "user"
);

ALTER TABLE IF EXISTS public.rating
    OWNER to "great-value";