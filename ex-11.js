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




var users = ["Joe", "Carolina", "Sabrina"];
users.map((user) =>
  luckyDraw(user)
    .then(function (value) {
      console.log(value);
    })
    .catch((error) => console.log(error))
);