import { test, expect, describe } from "@jest/globals";
import request from "supertest";
import app from "../app.js";


// TEST the get all comments function

// describe("GET all events", function () {
//   test("Check whether we receive 200 status code", async function getAllEvents() {
//     await new Promise((resolve) => setTimeout(() => resolve(), 2000));
//     const response = await request(app)
//       .get("/events/all")
//       .set("Accept", "application/json");
//     expect(response.statusCode).toBe(200);
//     console.log(response.statusCode);
//   });
//   test("Check whether an object is returned", async function getAllEvents() {
//     await new Promise((resolve) => setTimeout(() => resolve(), 2000));
//     const response = await request(app)
//       .get("/events/all")
//       .set("Accept", "application/json");
//     expect(response.body).toMatchObject({});
//   });
//   test("Check that the array returned has the correct object items", async function getAllEvents() {
//     await new Promise((resolve) => setTimeout(() => resolve(), 2000));
//     const response = await request(app)
//       .get("/events/all")
//       .set("Accept", "application/json");
//     expect(response.body).toEqual(
//       expect.arrayContaining([
//         expect.objectContaining({
//           eventid: expect.any(Number),
//           eventname: expect.any(String),
//           eventdescription: expect.any(String),
//           maindescription: expect.any(String),
//           img: expect.any(String),
//           date: expect.any(String),
//           time: expect.any(String),
//           rating: expect.any(Number),
//           email: expect.any(String),
//           address: expect.any(String),
//           // lat: expect.any((Number.isNaN()).toBe(false)),
//           // lng: expect.any(Number),
//         }),
//       ])
//     );
//   });
// });

// TEST the post comments function

describe("POST new events", function () {
  test("Check whether new event is added to database", async function createEvent() {
    await new Promise((resolve) => setTimeout(() => resolve(), 2000));
    const response = await request(app)
      .post("/events/all")
      .set("Accept", "application/json")
      .send({ maindescription: "test comment" })
    expect(response.body).toMatchObject({
      success: true,
      message: expect.any(String),
      payload: expect.any(Object),
    });
  });
  test("Check that the maindescription has a string", async function createEvent() {
    await new Promise((resolve) => setTimeout(() => resolve(), 2000));
    const testEventName = "This is the name of the event";
    const testDescriptionText = "This is a description.";
    const response = await request(app)
      .post("/events/all/")
      .set("Accept", "application/json")
      .send({
        maindescription: testDescriptionText,
        eventname: testEventName
      })
    console.log(response);
    expect(response.body.payload.rows[0]).toMatchObject({
      eventname: testEventName,
      maindescription: testDescriptionText,
      address: expect.any(String)
    });
  });
});

// TEST the delete comments function

// describe("DELETE comment with specific ID", function () {
//   test("Check whether a comment is deleted at all", async function () {
//     await new Promise((resolve) => setTimeout(() => resolve(), 2000));
//     const response = await request(app)
//       .delete("/page/1")
//       .set("Accept", "application/json")
//       .send({ commentId: 20 });
//     expect(response.statusCode).toBe(200);
//     expect(response.body.payload.command).toBe("DELETE");
//   });
//   test("Check whether an empty array is returned when deleting", async function () {
//     await new Promise((resolve) => setTimeout(() => resolve(), 2000));
//     const response = await request(app)
//       .delete("/page/1")
//       .set("Accept", "application/json")
//       .send({ commentId: 20 });
//     expect(response.body.payload.rows).toStrictEqual([]);
//   });
// });
