const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your nickname? ", answer1 => {
  console.log(`Thank you for your valuable feedback: ${answer1}`);

  rl.question("What's an activity you like doing? ", answer2 => {
    console.log(`Thank you for your valuable feedback: ${answer2}`);

    rl.question("What do you listen to while doing that? ", answer3 => {
      console.log(`Thank you for your valuable feedback: ${answer3}`);

      rl.question(
        "What is your favorite meal? (breakfast, brunch, dinner, etc.) ",
        answer4 => {
          console.log(`Thank you for your valuable feedback: ${answer4}`);

          rl.question(
            "What's your favorite thing to eat for that meal? ",
            answer5 => {
              console.log(`Thank you for your valuable feedback: ${answer5}`);

              rl.question("What sport is your absolute favorite? ", answer6 => {
                console.log(`Thank you for your valuable feedback: ${answer6}`);

                rl.question(
                  "What is your superpower? In a few words, tell us what you are amazing at! ",
                  answer7 => {
                    console.log(
                      `Thank you for your valuable feedback: ${answer7}`
                    );
                    console.log(
                      `${answer1} enjoys ${answer2} while listening to ${answer3}. ${answer1}\'s favorite meal of the day is ${answer4}, where they love to eat ${answer5}. Their favorite sport is ${answer6}. A superpower of ${answer1}\'s is ${answer7}.`
                    );

                    rl.close();
                  }
                );
              });
            }
          );
        }
      );
    });
  });
});
