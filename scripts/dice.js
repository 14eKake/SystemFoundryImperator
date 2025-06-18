export async function rollDice(number, target) {
  const r = new Roll(`${number}d10`).roll({async: false});
  await r.toMessage();
  let successes = r.dice[0].results.filter(d => d.result <= target).length;
  return successes;
}
