/// <reference types="@fastly/js-compute" />

import { Router } from "@fastly/expressly";

const router = new Router();

//GET 200 response
router.get('/', (req, res) => {
  res.sendStatus(200); // "OK"
});

// POST simple message
router.post("/submit", async (req, res) => {
  let body = await req.text();
  res.send(`You posted: "${body}"`)
})

//use middleware to set a header
router.use((req, res) => {
  res.setHeader("x-powered-by", "expressly");
});

// 404/405 response for everything else

router.listen();
