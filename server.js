const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Server jalan");
});

app.get("/gacha", (req, res) => {

  const cards = [
    { name: "Pikachu", rarity: "Common" },
    { name: "Bulbasaur", rarity: "Common" },
    { name: "Charmander", rarity: "Rare" },
    { name: "Squirtle", rarity: "Rare" },
    { name: "Mewtwo", rarity: "Legendary" },
    { name: "Charizard", rarity: "Mythic" }
  ];

  function randomCard() {
    return cards[Math.floor(Math.random() * cards.length)];
  }

  let pack = [];

  for (let i = 0; i < 5; i++) {
    pack.push(randomCard());
  }

  res.json(pack);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
