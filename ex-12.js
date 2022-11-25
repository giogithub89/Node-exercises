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

const future  = async(player) => {
    let result;
    try {
        result = await luckyDraw(player);
    }
    catch(error) {
        console.log(error)
    } 
}

users.map((user) =>
future(user)     
);