import { Router } from "express";
import {
	moderatePost,
	flagUser,
	getPostById,
	getUserProfile,
	getFlaggedContentStats,
} from "../controllers/moderationController";

const router: Router = Router();

/**
 * @swagger
 * /moderation/post/{id}:
 *   get:
 *     summary: Retrieve a post by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the post
 *     responses:
 *       200:
 *         description: Post retrieved successfully
 *       404:
 *         description: Post not found
 */
router.get("/post/:id", getPostById);

/**
 * @swagger
 * /moderation/post/{id}/moderate:
 *   post:
 *     summary: Moderate a post by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the post to moderate
 *     responses:
 *       200:
 *         description: Post moderated successfully
 */
router.post("/post/:id/moderate", moderatePost);
/**
 * @swagger
 * /moderation/user/{id}/profile:
 *   get:
 *     summary: Retrieve a user profile by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 *       404:
 *         description: User not found
 */
router.get("/user/:id/profile", getUserProfile);

/**
 * @swagger
 * /moderation/user/{id}/flag:
 *   post:
 *     summary: Flag a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to flag
 *     responses:
 *       200:
 *         description: User flagged successfully
 */
router.post("/user/:id/flag", flagUser);
/**
 * @swagger
 * /moderation/content/flags/stats:
 *   get:
 *     summary: Retrieve statistics on flagged content
 *     responses:
 *       200:
 *         description: Flagged content statistics
 */
router.get("/content/flags/stats", getFlaggedContentStats);

export default router;