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

router.get("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const ticket = await prisma.ticket.findUnique({ where: { id } });

    res.json(ticket);
  } catch (err) {
    console.error("Error retrieving ticket:", err);
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const {
      eventName,
      location,
      dateTime,
      description,
      seatSection,
      imageUrl,
      price,
    } = req.body;

    const sellTicket = await prisma.ticket.create({
      data: {
        eventName: eventName,
        location: location,
        dateTime: dateTime,
        description: description,
        seatSection: seatSection,
        imageUrl: imageUrl,
        price: price,
      },
    });
    res.json(sellTicket);
  } catch (err) {
    next(err);
  }
});
