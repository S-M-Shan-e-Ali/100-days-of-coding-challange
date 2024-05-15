#! /usr/bin/env node
import chalkAnimation from "chalk-animation";
import { start } from "./countfunction.js";
console.clear();
const sleep = () => {
    return new Promise((res) => { setTimeout(res, 2000); });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow('\t\t\t\t\tS.M.S.ALI COUNTDOWN TIMER\n\n');
    await sleep();
    rainbowTitle.stop();
}
await welcome();
start();
