const request = require("supertest");
const app = require("../server");

describe("App test", () => {
    it("returns hello world", async () => {
        const response = await request(app).get("/");
        expect(response.text).toEqual("Hello World");
    });
});
