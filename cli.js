import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });

const question = "What is your name?";
const answer = await rl.question(question);

console.log(`Hello, ${answer}!`);

rl.close();