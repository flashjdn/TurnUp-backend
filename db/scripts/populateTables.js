import eventsLib from "../libs/eventsLib.js";
/*import usersLib from "../libs/usersLib.js";
import commentsLib from "../libs/commentsLib";
import userEventsLib from "../libs/userEventsLib";
import eventTagsLib from "../libs/eventTagsLib";
import tagsLib from "../libs/tagsLib";
import userFriendsLib from "../libs/userFriendsLib";*/
import { query } from "../index.js";

//*********************** Populate Events Table ***********************//
async function populateEventsTable(eventArray) {
  for (let i = 0; i < eventArray.length; i++) {
    const res = await query(
      `
        INSERT INTO events (organiser, eventName, img, locLon, locLat, locName, date, time, description, contact, rating, postDate)
        VALUES
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, CURRENT_TIMESTAMP) RETURNING *;
    `,
      [
        eventArray[i].organiser,
        eventArray[i].eventName,
        eventArray[i].img,
        eventArray[i].locLon,
        eventArray[i].locLat,
        eventArray[i].locName,
        eventArray[i].date,
        eventArray[i].time,
        eventArray[i].description,
        eventArray[i].contact,
        eventArray[i].rating,
      ]
    );
    console.log(res);
  }
  console.log("Table has been populated");
}

//*********************** Populate Users Table ***********************//
async function populateUsersTable(userArray) {
  for (let i = 0; i < userArray.length; i++) {
    const res = await query(
      `
        INSERT INTO users (userName, email, locLon, locLat, locName)
        VALUES
        ($1, $2, $3, $4, $5) RETURNING *;
    `,
      [
        userArray[i].userName,
        userArray[i].email,
        userArray[i].locLon,
        userArray[i].locLat,
        userArray[i].locName,
      ]
    );
    console.log(res);
  }
  console.log("User table has been populated");
}

//*********************** Populate Comments Table ***********************//
async function populateCommentsTable(commentsArray) {
  for (let i = 0; i < commentsArray.length; i++) {
    const res = await query(
      `
        INSERT INTO comments (userName, text, postDate)
        VALUES
        ($1, $2, $3) RETURNING *;
    `,
      [
        commentsArray[i].userName,
        commentsArray[i].text,
        commentsArray[i].postDate,
      ]
    );
    console.log(res);
  }
  console.log("Comments table has been populated");
}

//*********************** Populate User Events Table ***********************//
async function populateUserEventsTable(userEventsArray) {
  for (let i = 0; i < userEventsArray.length; i++) {
    const res = await query(
      `
        INSERT INTO userEvents (userName, eventName)
        VALUES
        ($1, $2) RETURNING *;
    `,
      [userEventsArray[i].userName, userEventsArray[i].eventName]
    );
    console.log(res);
  }
  console.log("User events table has been populated");
}

//*********************** Event Tags Table ***********************//
async function populateEventTagsTable(eventTagsArray) {
  for (let i = 0; i < eventTagsArray.length; i++) {
    const res = await query(
      `
        INSERT INTO eventTags (tagName, eventName)
        VALUES
        ($1, $2) RETURNING *;
    `,
      [eventTagsArray[i].tagName, eventTagsArray[i].eventName]
    );
    console.log(res);
  }
  console.log("Event tags table has been populated");
}

//*********************** Tags Table ***********************//
async function populateTagsTable(tagsArray) {
  for (let i = 0; i < tagsArray.length; i++) {
    const res = await query(
      `
        INSERT INTO tags (tagName)
        VALUES
        ($1) RETURNING *;
    `,
      [tagsArray[i].tagName]
    );
    console.log(res);
  }
  console.log("Tags table has been populated");
}

//*********************** User Friends Table ***********************//
async function populateUserFriendsTable(userFriendsArray) {
  for (let i = 0; i < userFriendsArray.length; i++) {
    const res = await query(
      `
        INSERT INTO userFriends (friend1, friend2)
        VALUES
        ($1, $2) RETURNING *;
    `,
      [userFriendsArray[i].friend1, userFriendsArray[i].friend2]
    );
    console.log(res);
  }
  console.log("User friends table has been populated");
}

await populateEventsTable(eventsLib);
/*await populateUsersTable(usersLib);
await populateCommentsTable(commentsLib);
await populateUserEventsTable(userEventsLib);
await populateEventTagsTable(eventTagsLib);
await populateTagsTable(tagsLib);
await populateUserFriendsTable(userFriendsLib);*/
