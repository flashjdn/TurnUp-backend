import express from "express";
import {
  getAllEvents,
  getEventsByOrganiser,
  getEventsById,
  getAttendedEvents,
  createEvent,
  deleteEvent,
  createUserEvents,
  deleteUserEvent,
  deleteUserEventsByEventId,
} from "../models/events.js";
import {
  getEventTags,
  createEventTags,
  deleteTagsByEvent,
} from "../models/events_tags.js";
import {
  getEventOrganiserById,
  getUserById,
  getEventAttendees,
  getUserFriends,
  getUserByEmail,
  createUser,
} from "../models/users.js";
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({ message: "you have reached the events endpoint" });
});

/* ___________________________EVENTS ROUTES_______________________________ */

router.get("/all", async function (req, res) {
  let data = await getAllEvents();
  const responseObject = {
    success: true,
    message: "All events retrieved",
    payload: data,
  };
  console.log(responseObject);
  res.json(data);
});

router.get("/att/:id", async function (req, res) {
  let data = await getAttendedEvents(req.params.id);
  const responseObject = {
    success: true,
    message: "Events by attendee have been retrieved",
    payload: data,
  };
  console.log(responseObject);
  res.json(data);
});

router.get("/event-org/:id", async function (req, res) {
  let data = await getEventsByOrganiser(req.params.id);
  const responseObject = {
    success: true,
    message: "Events by attendee have been retrieved",
    payload: data,
  };
  console.log(responseObject);
  res.json(data);
});

/* ___________________________TAGS ROUTES_______________________________ */

router.get("/tags/:id", async function (req, res) {
  let data = await getEventTags(req.params.id);
  const responseObject = {
    success: true,
    message: "All event tags retrieved",
    payload: data,
  };
  console.log(responseObject);
  res.json(data);
});

/* ___________________________USER ROUTES_______________________________ */

router.get("/user/:id", async function (req, res) {
  let data = await getUserById(req.params.id);
  const responseObject = {
    success: true,
    message: "User has been retrieved",
    payload: data,
  };
  console.log(responseObject);
  res.json(data);
});

router.get("/userem/:email", async function (req, res) {
  let data = await getUserByEmail(req.params.email);
  const responseObject = {
    success: true,
    message: "User has been retrieved",
    payload: data,
  };
  console.log(responseObject);
  res.json(data);
});

router.get("/organiser/:id", async function (req, res) {
  let data = await getEventOrganiserById(req.params.id);
  const responseObject = {
    success: true,
    message: "User has been retrieved",
    payload: data,
  };
  console.log(responseObject);
  res.json(data);
});

router.get("/attendees/:id", async function (req, res) {
  let data = await getEventAttendees(req.params.id);
  const responseObject = {
    success: true,
    message: "Attendees have been retrieved",
    payload: data,
  };
  console.log(responseObject);
  res.json(data);
});

router.get("/friends/:id", async function (req, res) {
  let data = await getUserFriends(req.params.id);
  const responseObject = {
    success: true,
    message: "Friends have been retrieved",
    payload: data,
  };
  console.log(responseObject);
  res.json(data);
});

/* _______________________________________POST REQUESTS_________________________________________*/
router.post("/all", async function (req, res) {
  console.log(req);
  let data = await createEvent(req.body);
  const responseObject = {
    success: true,
    message: "Event created",
    payload: data,
  };
  //console.log(responseObject);
  res.json(responseObject);
});

router.post("/newatt", async function (req, res) {
  console.log(req);
  let data = await createUserEvents(req.body);
  const responseObject = {
    success: true,
    message: "userEvent created",
    payload: data,
  };
  //console.log(responseObject);
  res.json(responseObject);
});

router.post("/user", async function (req, res) {
  console.log(req);
  let data = await createUser(req.body);
  const responseObject = {
    success: true,
    message: "User created",
    payload: data,
  };
  //console.log(responseObject);
  res.json(responseObject);
});

router.post("/eventTags", async function (req, res) {
  console.log(req);
  let data = await createEventTags(req.body);
  const responseObject = {
    success: true,
    message: "EventTags created",
    payload: data,
  };
  //console.log(responseObject);
  res.json(responseObject);
});

/* _______________________________________DELETE REQUESTS_________________________________________*/

router.delete("/deluserev", async function (req, res) {
  let data = await deleteUserEvent(req.body);
  const responseObject = {
    success: true,
    message: "Event deleted",
    payload: data,
  };
  //console.log(responseObject);
  res.json(responseObject);
});

router.delete("/delev", async function (req, res) {
  let data = await deleteEvent(req.body.eventid);
  const responseObject = {
    success: true,
    message: "Event deleted",
    payload: data,
  };
  //console.log(responseObject);
  res.json(responseObject);
});

router.delete("/deltags", async function (req, res) {
  let data = await deleteTagsByEvent(req.body.eventid);
  const responseObject = {
    success: true,
    message: "Event deleted",
    payload: data,
  };
  //console.log(responseObject);
  res.json(responseObject);
});

router.delete("/delusev", async function (req, res) {
  let data = await deleteUserEventsByEventId(req.body.eventid);
  const responseObject = {
    success: true,
    message: "UserEvents deleted",
    payload: data,
  };
  //console.log(responseObject);
  res.json(responseObject);
});
router.patch("/:id", async function (req, res) {
  let newEventDescription = req.body.eventDescription;
  let data = await editEvent(req.params.id, newEventDescription);
  const responseObject = {
    success: true,
    message: "Event edited",
    payload: data,
  };
  res.json(responseObject);
});

export { router as eventsRouter };
