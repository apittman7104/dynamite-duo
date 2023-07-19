import { getHeroes } from "./database.js";

const heroes = getHeroes();

import { getVillains } from "./database.js";
debugger;
const villains = getVillains();

const theExistingMainElement = document.querySelector("#container");

export const HeroList = () => {
  let heroHTML = "<ul>";

  for (const hero of heroes) {
    heroHTML += `<li>${hero.name}</li>`;
  }

  heroHTML += "</ul>";

  return heroHTML;
};

export const VillainList = () => {
  let villainHTML = "<ul>";

  for (const villain of villains) {
    villainHTML += `<li>${villain.name}</li>`;
  }

  villainHTML += "</ul>";

  return villainHTML;
};
