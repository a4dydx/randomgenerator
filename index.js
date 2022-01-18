require('dotenv').config();

const R1 = process.env.RANDOM1
const R2 = process.env.RANDOM2
const R3 = process.env.RANDOM3
let replies = [R1, R2, R3]

let result = Math.floor((Math.random() * replies.length));
console.log(replies[result]);