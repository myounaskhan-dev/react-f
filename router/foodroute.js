import express from "express";

import {
  addfood,
  getfoods,
  getfood,
  deletefood
} from "../contoller/controller.js";

const router = express.Router();

router.post("/", addfood);
router.get("/", getfoods);
router.get("/:id", getfood);
router.delete("/:id", deletefood);

export default router;