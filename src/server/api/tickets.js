const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const tickets = await prisma.ticket.findMany();

    res.json(tickets);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});
