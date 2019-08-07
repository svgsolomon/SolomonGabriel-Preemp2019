const app = require("./app");
const request = require("supertest");

describe("GET /categories", function() {
  it("responds with json", function(done) {
    request(app)
      .get("/categories")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
describe("GET /categories/:id", function() {
  it("responds with json", function(done) {
    request(app)
      .get("/categories/:id")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
describe("GET /products", function() {
  it("responds with json", function(done) {
    request(app)
      .get("/products")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(404, done);
  });
});
