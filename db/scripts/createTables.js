import { query } from "../index.js";

//*********************** Events Table ***********************//

const createEventsTableSqlString = `
    CREATE TABLE IF NOT EXISTS events(
        eventId INT GENERATED ALWAYS AS IDENTITY,
        organiser TEXT,
        eventName TEXT,
        img TEXT,
        lng DECIMAL(8,6),
        lat DECIMAL(9,6),
        address TEXT,
        date DATE,
        time TIME,
        eventDescription TEXT,
        mainDescription TEXT,
        email TEXT,
        rating INT
        );`;

async function createEventsTable() {
  const res = await query(createEventsTableSqlString);
  console.log(`${res.command} Created new table named events`);
}

//*********************** Users Table ***********************//

const createUsersTableSqlString = `
    CREATE TABLE IF NOT EXISTS users(
        userId INT GENERATED ALWAYS AS IDENTITY,
        userName TEXT,
        email TEXT,
        img TEXT
        );`;

async function createUsersTable() {
  const res = await query(createUsersTableSqlString);
  console.log(`${res.command} Created new table named users`);
}

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

const createUserEventsTableSqlString = `
    CREATE TABLE IF NOT EXISTS userEvents(
        userEventsId INT GENERATED ALWAYS AS IDENTITY,
        userId INT,
        eventId INT         
        );`;

async function createUserEventsTable() {
  const res = await query(createUserEventsTableSqlString);
  console.log(`${res.command} Created new table named userEvents`);
}

//*********************** Event Tags Table ***********************//

const createEventTagsTableSqlString = `
    CREATE TABLE IF NOT EXISTS eventTags(
        eventTagId INT GENERATED ALWAYS AS IDENTITY,
        tagId INT,
        eventId INT         
        );`;

async function createEventTagsTable() {
  const res = await query(createEventTagsTableSqlString);
  console.log(`${res.command} Created new table named Event tags`);
}

//*********************** Tags Table ***********************//

const createTagsTableSqlString = `
    CREATE TABLE IF NOT EXISTS tags(
        tagId INT GENERATED ALWAYS AS IDENTITY,
        tagName TEXT        
        );`;

async function createTagsTable() {
  const res = await query(createTagsTableSqlString);
  console.log(`${res.command} Created new table named tags`);
}

//*********************** User Friends Table ***********************//

const createUserFriendsTableSqlString = `
    CREATE TABLE IF NOT EXISTS userFriends(
        userFriendsId INT GENERATED ALWAYS AS IDENTITY,
        friend1 INT,
        friend2 INT       
        );`;

async function createUserFriendsTable() {
  const res = await query(createUserFriendsTableSqlString);
  console.log(`${res.command} Created new table named user friends`);
}

await createEventsTable();
await createUsersTable();
// await createCommentsTable();
await createUserEventsTable();
await createEventTagsTable();
await createTagsTable();
await createUserFriendsTable();
