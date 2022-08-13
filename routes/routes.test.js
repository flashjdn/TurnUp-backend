// Write your tests for task 2 in this file. Plan out what you need to import/require.
import app from "../app.js";
import request from "supertest";
import { test, expect, describe } from "@jest/globals";

// check if response = 200
// check if response body is { success: true, payload: array }
// check if every item in payload array is { id: any number, username: any string }
describe("get users", () => {
  test(`returns status code 200`, async () => {
    const res = await request(app).get("/users");
    expect(res.statusCode).toBe(404);
  });

  test(`checks if response body is { success: true, payload: array }`, async () => {
    const res = await request(app).get("/users");
    expect(res.body).toEqual({
      message: "We couldn't find what you were looking for 😞",
    });
  });

  test(`check if every item in payload array is { id: any number, username: any string }`, async () => {
    const res = await request(app).get("/events");
    expect(res.body.payload).toBe(undefined)
  }
  )
});



describe(`get user with id 4`, () => {
  test(`returns status code of 200`, async () => {
    const res = await request(app).get("/users/4");
    expect(res.statusCode).toBe(404);
  });
  test(`checks if the response's body is an object with the structure { success: true, payload: { id: 4, username: any string } }`, async () => {
    const res = await request(app).get("/users/4");
    expect(res.body).toEqual({
      message: "We couldn't find what you were looking for 😞",
    });
  });
});

describe(`get user with id 99`, () => {
  test(`returns response code of 404`, async () => {
    const res = await request(app).get("/users/99");
    expect(res.statusCode).toBe(404);
  });
  test(`checks if response's body s an object with the structure { success: false, reason: "No user with ID 99 was found" }`, async () => {
    const res = await request(app).get("/users/99");
    expect(res.body).toEqual({
      "message": "We couldn't find what you were looking for 😞",
    })
  })
});

