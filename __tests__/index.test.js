/**
 * @jest-environment node
 */
// import request from "supertest"
// import app from "../app"
const request = require("supertest");
const app = require("../app.js");

describe("This is the test for the Node Js Web Server", () => {
  test("Should return 200 response", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
  });

  test("Should contain 'web server' in response body", async () => {
    const response = await request(app).get("/");

    expect(response.text).toContain("web server");
  });
});
