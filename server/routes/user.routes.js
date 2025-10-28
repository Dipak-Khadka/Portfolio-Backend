import express from "express";
import userCtrl from "../controllers/user.controller.js";

const router = express.Router();

// POST - Create new user
router.route("/api/users")
  .post(userCtrl.create);

// GET - List all users
router.route("/api/users")
  .get(userCtrl.list);

// GET, PUT, DELETE - Single user by ID (NO AUTH for testing)
router.route("/api/users/:userId")
  .get(userCtrl.read)
  .put(userCtrl.update)
  .delete(userCtrl.remove);

// Parameter middleware
router.param("userId", userCtrl.userByID);

export default router;
