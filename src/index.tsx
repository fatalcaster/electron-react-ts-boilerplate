import { BrowserWindow, app } from "electron";
import React from "react";
import ReactDOM from "react-dom";
import { Login } from "./pages/login";

function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });
    win.loadFile("./../public/index.html");
}

const main = async () => {
    app.on("ready", createWindow);
    ReactDOM.render(<Login />, document.getElementById("app"));
};

main();
