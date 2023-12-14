const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

router.get("/", async (res, req, next) => {
  try {
    const users = await prisma.user.findMany();

    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (res, req, next) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });

    res.json(user);
  } catch (err) {
    next(err);
  }
});
