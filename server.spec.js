import app from "./server";
import supertest from "supertest";

const request = supertest(app);

it("should have a GET /all endpoint", async () => {
    const res = await request.get("/all");

    expect(res.status).toBe(200);
});

it('should have a POST /fetchWeatherData endpoint', () => {
    const payload = {
        city: 'London',
        country: 'uk',
        feeling: 'I am feeling great',
    }

    return request.post('/add')
        .send(payload)
        .expect(200)
        .then(res => {
            expect(res.body).toEqual(payload);
        });
});
