const request = require("supertest");
const app = require("../server");

describe("Get /api/:date", () => {
    it("returns Unix timestamp when date is valid", async () => {
        const response = await request(app).get("/api/2022-01-16");
        expect(response.body).toHaveProperty('unix')
        expect(response.body.unix).toBe(1642291200000)
    });

    it('returns a utc time when date is valid', async () => {
        const response = await request(app).get("/api/2022-01-16");
        expect(response.body).toHaveProperty('utc');
        expect(response.body.utc).toBe('Sun, 16 Jan 2022 00:00:00 GMT')
    })
});
