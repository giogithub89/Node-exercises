function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

var users = ["Tina", "Jorge", "Julien"];

async function future(player) {
  try {
    const result = await luckyDraw(player);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

users.map((user) => future(user));
