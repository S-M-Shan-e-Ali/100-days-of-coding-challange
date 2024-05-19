#! /usr/bin/env node
import chalkAnimation from "chalk-animation";
import { main } from "./main.js";
console.clear();
const sleep = () => {
    return new Promise((res) => { setTimeout(res, 2000); });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow('\t\t\tLet Start  OOP_myBank.\n\n');
    await sleep();
    rainbowTitle.stop();
}
await welcome();
console.clear();
main();
