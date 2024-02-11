const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

function startBot(message) {
    (message) ? logger(message, "[ Starting ]") : "";

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "mirai.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    child.on("close", (codeExit) => {
        if (codeExit != 0 || global.countRestart && global.countRestart < 5) {
            startBot("Restarting...");
            global.countRestart += 1;
            return;
        } else return;
    });

    child.on("error", function (error) {
        logger("An error occurred: " + JSON.stringify(error), "[ Starting ]");
    });
};

axios.get("https://raw.githubusercontent.com/duongcongnam/Miraiv2/main/package.json").then((res) => {
    logger(res['data']['name'], "[ NAME ]");
    logger("Version: " + res['data']['version'], "[ VERSION ]");
    logger(res['data']['description'], "[ DESCRIPTION ]");
const chalk = require('chalkercli');
const rainbow = chalk.rainbow(` 
======================================================
╏                                                    ╏
╏                                                    ╏
╏                  pcoder                            ╏
╏                                                    ╏
╏                                                    ╏
╏            𝐍𝐀𝐌𝐄 : Nguyễn Trương Thiện Phát        ╏
╏            𝐁𝐈𝐑𝐓𝐇𝐃𝐀𝐘 : 2009                        ╏
╏            𝐆𝐈𝐓𝐇𝐔𝐁 : github.com/Kenne400k          ╏
╏            𝐙𝐀𝐋𝐎 : 0387457339                       ╏
╏            𝐅𝐁 : fb.me/100072447776739              ╏
╏                                                    ╏
======================================================

`).stop(); // Don't start the animation

rainbow.render(); // Display the first frame

const frame = rainbow.frame(); // Get the second frame
console.log(frame);
});
startBot();
/*axios.get("https://raw.githubusercontent.com/d-jukie/miraiv2_fix/main/package.json").then((res) => {
    const local = JSON.parse(readFileSync('./package.json'));
    if (semver['lt'](local.version, res['data']['version'])) {
        if (local.autoUpdate == !![]) {
            logger('A new update is available, start update processing...', '[ UPDATE ]');
            const updateBot = {};
            updateBot.cwd = __dirname
            updateBot.stdio = 'inherit' 
            updateBot.shell = !![];
            const child = spawn('node', ['update.js'], updateBot);
            child.on('exit', function () {
                return process.exit(0);
            })
            child.on('error', function (error) {
                logger('Unable to update:' + JSON.stringify(error), '[ CHECK UPDATE ]');
            });
        } else logger('A new update is available! Open terminal/cmd and type "node update" to update!', '[ UPDATE ]'), 
        startBot();
    } else logger('You are using the latest version!', '[ CHECK UPDATE ]'), startBot();
}).catch(err => logger("Unable to check update.", "[ CHECK UPDATE ]"));*/
// THIZ BOT WAS MADE BY ME(CATALIZCS) AND MY BROTHER SPERMLORD - DO NOT STEAL MY CODE (つ ͡ ° ͜ʖ ͡° )つ ✄ ╰⋃╯
