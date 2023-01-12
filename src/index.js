/// <reference types="@fastly/js-compute" />

import { Router } from "@fastly/expressly";

const router = new Router();

// Use middleware to set a header
router.use((req, res) => {
  res.set("x-powered-by", "expressly");
});

// GET 200 response
router.get('/', (req, res) => {
  res.sendStatus(200); // "OK"
});

// POST simple message
router.post("/submit", async (req, res) => {
  let body = await req.text();
  res.send(`You posted: "${body}"`)
})

// 404/405 response for everything else

router.listen();
