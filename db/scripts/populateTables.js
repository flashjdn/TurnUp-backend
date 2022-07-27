import eventsLib from "../libs/eventsLib.js";
import { query } from "../index.js";

//*********************** Populate Events Table ***********************//
async function populateEventsTable(eventArray) {
  for (let i = 0; i < eventArray.length; i++) {
    const res = await query(`
        INSERT INTO events (organiser, eventName, img, locLon, locLat, locName, date, time, description, contact, rating, postDate)
        VALUES
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, CURRENT_TIMESTAMP) RETURNING *;
    `, [eventArray[i].organiser,
    eventArray[i].eventName,
    eventArray[i].img,
    eventArray[i].locLon,
    eventArray[i].locLat,
    eventArray[i].locName,
    eventArray[i].date,
    eventArray[i].time,
    eventArray[i].description,
    eventArray[i].contact,
    eventArray[i].rating]);
    console.log(res)
  }
  console.log("Table has been populated")
};

await populateEventsTable(eventsLib);

