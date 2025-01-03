const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    // webPreferences: {
    //   // preload: path.join(__dirname, 'preload.js'),
    //   contextIsolation: true,
    //   enableRemoteModule: false,
    // },
  });

  mainWindow.loadFile(path.join(__dirname, '../public/index.html'));

  mainWindow.webContents.openDevTools();
});