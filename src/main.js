const { BrowserWindow, app, globalShortcut } = require("electron");

const ejse = require("ejs-electron");
const Sale = require('./model/Sale');
const server = require('./server');

let indexWindow;

function createWindow(){
    indexWindow = new BrowserWindow({
        width: 1000,
        height: 800,
        backgroundColor: '#ffffff',
        show: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    indexWindow.loadURL('http://localhost:3000');
    indexWindow.once('ready-to-show', () => {
        indexWindow.show();
    });
}

app.whenReady().then(() => {
    createWindow();
    globalShortcut.register('esc', () => {
        indexWindow.loadURL('http://localhost:3000');
    })
});


