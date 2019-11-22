const app = require("express")();
const cors = require("cors");
const bodyParser = require("body-parser").json();

const { Answer } = require("./db");

const PORT = 8080;
const whitelist = [
  "https://features.dailybruin.com",
  "https://laughing-nobel-8ca292.netlify.com"
];
const corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200
};

app.use(bodyParser);
app.use(cors(corsOptions));

app.get("/", async (req, res) => {
  console.log("Received GET request");
  let answers = await Answer.find();
  answers = answers ? answers : [];
  res.json(answers);
});

app.post("", limiter, async (req, res) => {
  console.log("Received POST request");
  const { question, answer } = req.body;
  let answer = await Answer.create({ question, answer });
  res.json(answer);
});

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}!`);
});
