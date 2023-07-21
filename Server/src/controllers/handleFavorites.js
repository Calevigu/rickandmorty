let myFavorites = [];

const postFav = (req, res) => {
  const character = req.body;

  myFavorites.push(character);

  res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;

  filteredFav = myFavorites.filter((fav) => fav.id !== Number(id));

  myFavorites = filteredFav;

  res.status(200).json(filteredFav);
};

module.exports = {
  postFav,
  deleteFav,
};