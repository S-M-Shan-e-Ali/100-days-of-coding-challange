#! usr/bin/env node
import chalkAnimation from "chalk-animation";
import { start } from "./start.js";
console.clear();
const sleep = () => {
    return new Promise((res) => { setTimeout(res, 2000); });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow('\t\t\tLet Start The Text-Based Adventure-Game.\n\n');
    await sleep();
    rainbowTitle.stop();
}
await welcome();
start();
