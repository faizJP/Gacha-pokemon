async function openPack() {

  const res = await fetch("http://localhost:3000/gacha");
  const data = await res.json();

  const div = document.getElementById("result");

  div.innerHTML = "";

  data.forEach(card => {

    const p = document.createElement("p");

    p.textContent = card.name + " - " + card.rarity;

    div.appendChild(p);

  });

}
