const express = require("express");
const { protect } = require("../middleware/auth.middleware");
const { getDashboardData } = require("../controllers/dashboard.controller");

const router = express.Router();

router.get("/", protect, getDashboardData);

module.exports = router;