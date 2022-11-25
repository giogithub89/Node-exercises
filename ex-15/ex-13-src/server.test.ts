import supertest from "supertest";

import app from "./app";

const request = supertest(app);

test("GET /planets", async () => {
    const response = await request
        .get("/planet")
        .expect(200)
        .expect("Content-Type", "/application/json/");

    expect(response.body).toEqual([{ name: "mercury" }, { mame: "Venus" }]);
});
