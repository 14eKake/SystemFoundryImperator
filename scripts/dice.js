export async function rollDice(number, target) {
  const roll = new Roll(`${number}d10`);
  await roll.evaluate({async: true});          // évaluation asynchrone
  await roll.toMessage();                      // envoi dans le chat
  const successes = roll.dice[0].results.filter(r => r.result <= target).length;
  return successes;
}
