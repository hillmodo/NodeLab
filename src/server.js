const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

function randomize() {
    const random = Math.floor(Math.random() * Math.floor(6));
    return allTheFacts[random];
}

const allTheFacts = [{
    funFact: "You can hear a blue whales heartbeat 2 miles away.",
}, {
    funFact: "The speed of a computer mouse is measured in 'Mickeys'.",
}, {
    funFact: "About 700 grapes go into one bottle of wine.",
}, {
    funFact: "Fear of the number 13 is called triskaiekaphobia.",
}, {
    funFact: "A cow-bison hybrid is called a 'beefalo'.",
}, {
    funFact: "Scotland has 421 words for 'snow'.",
}];

app.get('/', (req, res) => {
    res.json(randomize().funFact);
});
app.listen(3000, () => {
    console.log("3000 is listening");
})