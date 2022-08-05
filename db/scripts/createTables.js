import { query } from "../index.js";

//*********************** Events Table ***********************//

const createEventsTableSqlString = `
    CREATE TABLE IF NOT EXISTS events(
        eventId INT GENERATED ALWAYS AS IDENTITY,
        eventName TEXT,
        eventDescription TEXT,
        mainDescription TEXT,
        eventImg TEXT,
        eventTime TEXT,
        rating INT,
        organiser TEXT,
        email TEXT,
        address TEXT,
        lat DECIMAL(8,6),
        lng DECIMAL(9,6)
        );`;

async function createEventsTable() {
  const res = await query(createEventsTableSqlString);
  console.log(`${res.command} Created new table named events`);
}

//*********************** Users Table ***********************//

// const createUsersTableSqlString = `
//     CREATE TABLE IF NOT EXISTS users(
//         userId INT GENERATED ALWAYS AS IDENTITY,
//         userName TEXT,
//         email TEXT,
//         locLon DECIMAL(8,6),
//         locLat DECIMAL(9,6),
//         locName TEXT         
//         );`;

// async function createUsersTable() {
//   const res = await query(createUsersTableSqlString);
//   console.log(`${res.command} Created new table named users`);
// }

//*********************** Comments Table ***********************//

// const createCommentsTableSqlString = `
//     CREATE TABLE IF NOT EXISTS comments(
//         commentId INT GENERATED ALWAYS AS IDENTITY,
//         userName TEXT,
//         text TEXT,
//         postDate TIMESTAMP
//         );`;

// async function createCommentsTable() {
//   const res = await query(createCommentsTableSqlString);
//   console.log(`${res.command} Created new table named comments`);
// }

//*********************** User Events Table ***********************//

// const createUserEventsTableSqlString = `
//     CREATE TABLE IF NOT EXISTS userEvents(
//         userEventsId INT GENERATED ALWAYS AS IDENTITY,
//         userName TEXT,
//         eventName TEXT         
//         );`;

// async function createUserEventsTable() {
//   const res = await query(createUserEventsTableSqlString);
//   console.log(`${res.command} Created new table named User Events`);
// }

//*********************** Event Tags Table ***********************//

// const createEventTagsTableSqlString = `
//     CREATE TABLE IF NOT EXISTS eventTags(
//         eventTagId INT GENERATED ALWAYS AS IDENTITY,
//         tagName TEXT,
//         eventName TEXT         
//         );`;

// async function createEventTagsTable() {
//   const res = await query(createEventTagsTableSqlString);
//   console.log(`${res.command} Created new table named Event tags`);
// }

//*********************** Tags Table ***********************//

// const createTagsTableSqlString = `
//     CREATE TABLE IF NOT EXISTS tags(
//         tagsId INT GENERATED ALWAYS AS IDENTITY,
//         tagName TEXT        
//         );`;

// async function createTagsTable() {
//   const res = await query(createTagsTableSqlString);
//   console.log(`${res.command} Created new table named tags`);
// }

//*********************** User Friends Table ***********************//

// const createUserFriendsTableSqlString = `
//     CREATE TABLE IF NOT EXISTS userFriends(
//         userFriendsId INT GENERATED ALWAYS AS IDENTITY,
//         friend1 TEXT,
//         friend2 TEXT       
//         );`;

// async function createUserFriendsTable() {
//   const res = await query(createUserFriendsTableSqlString);
//   console.log(`${res.command} Created new table named user friends`);
// }

await createEventsTable();
// await createUsersTable();
// await createCommentsTable();
// await createUserEventsTable();
// await createEventTagsTable();
// await createTagsTable();
// await createUserFriendsTable();
