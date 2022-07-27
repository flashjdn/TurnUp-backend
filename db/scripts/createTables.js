import { query } from "../index.js";

//*********************** Events Table ***********************//

const createEventsTableSqlString = `
    CREATE TABLE IF NOT EXISTS events(
        eventId INT GENERATED ALWAYS AS IDENTITY,
        organiser TEXT,
        eventName TEXT,
        img TEXT,
        locLon DECIMAL(8,6),
        locLat DECIMAL(9,6),
        locName TEXT,
        date DATE,
        time TEXT,
        description TEXT,
        contact TEXT,
        rating INT,
        postDate TIMESTAMP 
        );`;

async function createEventsTable() {
  const res = await query(createEventsTableSqlString);
  console.log(`${res.command} Created new table named events`);
};

await createEventsTable();