const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const users = await prisma.user.findMany();

    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const user = await prisma.user.findUnique({ where: { id } });

    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.get("/:id/sold", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const userSoldTickets = await prisma.user.findUnique({
      where: {
        id: id,
      },
      include: {
        selling: true,
      },
    });
    res.json(userSoldTickets);
  } catch (err) {
    next(err);
  }
});
