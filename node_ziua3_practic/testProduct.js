const app = require("./app");
const request = require("supertest");

describe("GET /products", function() {
  it("responds with json", function(done) {
    request(app)
      .get("/products")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
describe("GET /products/:id", function() {
  it("responds with json", function(done) {
    request(app)
      .get("/products/:id")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
describe("GET /products", function() {
  it("responds with json", function(done) {
    request(app)
      .get("/products/bugugfjjfjgfj")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(404, done);
  });
});
// describe("GET /products/:id", function() {
//   it("responds with json", function(done) {
//     request(app)
//       .get("/products/:id")
//       .set("Accept", "application/json")
//       .expect("Content-Type", /json/)
//       .expect(200, done);
//   });
// });
