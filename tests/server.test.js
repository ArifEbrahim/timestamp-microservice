const request = require("supertest");
const app = require("../server");

describe("Get /api/:date", () => {
    it("returns Unix timestamp when date is valid", async () => {
        const response = await request(app).get("/api/2022-01-16");
        expect(response.body).toEqual({ unix: 1642291200000 });
    });
});
