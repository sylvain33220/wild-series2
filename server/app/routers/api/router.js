const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

// const sayWelcome = (req,res) => {
//     res.send("Welcome to wild-series !!!")
// }

// router.get("/", sayWelcome)

const { sayWelcome } = require("../../controllers/sayActions")

router.get("/", sayWelcome);

const programsRouter = require("../programs/router")

router.use("/programs", programsRouter)

const categoriesRouteur = require("./categories/router")

router.use("/categories", categoriesRouteur)

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);





/* ************************************************************************* */

module.exports = router;
