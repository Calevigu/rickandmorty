const { Router } = require("express");
const getCharById = require("../controllers/getCharById.js");
const { postFav, deleteFav } = require("../controllers/handleFavorites.js");
const login = require("../controllers/login.js");

const router = Router();

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports=router;