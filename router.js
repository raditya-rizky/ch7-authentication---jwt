const router = require("express").Router();

// Controllers
const auth = require("./controllers/authController");

const restrict = require("./middleware/restrict");

// Register Page
router.post("/api/v1/auth/register", auth.register);

// Login Page
router.post("/api/v1/auth/login", auth.login);

router.get("/api/v1/auth/whoami", restrict, auth.whoami);

module.exports = router;
