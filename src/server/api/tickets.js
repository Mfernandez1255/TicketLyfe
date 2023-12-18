// const { ServerError } = require("../errors/ServerError");
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
    let {
      eventName,
      location,
      dateTime,
      description,
      seatSection,
      imageUrl,
      price,
      seller,
    } = req.body;

    const id = {
      connect: { id: (seller = res.locals.user.id) },
    };
    const sellTicket = await prisma.ticket.create({
      data: {
        eventName: eventName,
        location: location,
        dateTime: dateTime,
        description: description,
        seatSection: seatSection,
        imageUrl: imageUrl,
        price: price,
        seller: id,
      },
    });
    res.json(sellTicket);
  } catch (err) {
    next(err);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const { buyerId } = req.body;

    const updatedTicket = await prisma.ticket.update({
      where: { id: id },
      data: {
        buyerId: buyerId,
      },
    });
    res.json(updatedTicket);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const deletedTicket = await prisma.ticket.delete({
      where: {
        id: id,
      },
    });
    res.json(deletedTicket);
  } catch (err) {
    next(err);
  }
});
