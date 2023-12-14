const AppHighScores = require("../models/models.js");



exports.listAllScores = (req, res) => {
  AppHighScores.find()
    .then((guess22) => {
      console.log({ guess22 });
      res.json(guess22);
    })
    .catch((err) => {
      res
        .status(404)
        .json({ message: "There isnt any guess available", error: err.message });
    });
};


let randomNumber = Math.floor(Math.random() * 100) + 1;
const reset = () => {

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
let count = 0;


exports.guess = (req, res) => {
  const guess = req.body.guess;
  const name = req.body.name;

  if (guess < randomNumber) {
    count++;
    res.send({ result: 'Too Low '  });
  } else if (guess > randomNumber) {
    count++;
    res.send({ result: 'Too High '  });
  } else {
    res.send({ result: 'You Win!' })
    count++;
    const score = new AppHighScores({
      name: name,
      score: count
    })
    count = 0;
    reset();
    score.save(function (err, doc) {
    });

  }
};



exports.deleteScore = (req, res) => {
  AppHighScores.findByIdAndRemove(req.params.id, req.body)
    .then((guess) => {
      console.log({ guess });
      res.json({
        message: "Cheers!! You have successfully deleted your guess",
        guess,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your guess is not there",
        error: err.message,
      });
    });
};