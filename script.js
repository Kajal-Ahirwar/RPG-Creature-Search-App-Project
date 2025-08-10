const data = {
  "1": {
    name: "PYROLYNX",
    id: 1,
    weight: 42,
    height: 32,
    types: ["FIRE"],
    stats: {
      hp: 65,
      attack: 80,
      defense: 50,
      specialAttack: 90,
      specialDefense: 55,
      speed: 100
    }
  },
  "2": {
    name: "AQUOROC",
    id: 2,
    weight: 220,
    height: 53,
    types: ["WATER", "ROCK"],
    stats: {
      hp: 85,
      attack: 90,
      defense: 120,
      specialAttack: 60,
      specialDefense: 70,
      speed: 40
    }
  }
};

document.getElementById("search-button").addEventListener("click", () => {
  const input = document.getElementById("search-input").value.trim().toUpperCase();
  const creature = data[input] || Object.values(data).find(c => c.name === input);

  const nameEl = document.getElementById("creature-name");
  const idEl = document.getElementById("creature-id");
  const weightEl = document.getElementById("weight");
  const heightEl = document.getElementById("height");
  const typesEl = document.getElementById("types");
  const hpEl = document.getElementById("hp");
  const atkEl = document.getElementById("attack");
  const defEl = document.getElementById("defense");
  const spatkEl = document.getElementById("special-attack");
  const spdefEl = document.getElementById("special-defense");
  const speedEl = document.getElementById("speed");

  // Clear previous types
  typesEl.innerHTML = "";

  if (!creature) {
    alert("Creature not found");
    return;
  }

  nameEl.textContent = creature.name;
  idEl.textContent = `#${creature.id}`;
  weightEl.textContent = `Weight: ${creature.weight}`;
  heightEl.textContent = `Height: ${creature.height}`;
  creature.types.forEach(type => {
    const typeTag = document.createElement("p");
    typeTag.textContent = type;
    typesEl.appendChild(typeTag);
  });

  hpEl.textContent = creature.stats.hp;
  atkEl.textContent = creature.stats.attack;
  defEl.textContent = creature.stats.defense;
  spatkEl.textContent = creature.stats.specialAttack;
  spdefEl.textContent = creature.stats.specialDefense;
  speedEl.textContent = creature.stats.speed;
});