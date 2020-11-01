
const electron = require('electron');
const { app, BrowserWindow } = require('electron');
// Enable live reload for Electron too
require('electron-reload')(__dirname, {
    // Note that the path to electron may vary according to the main file
    electron: require(`${__dirname}/node_modules/electron`)
});

  // Keep a global reference of the window object, if you don't, the window will
  // be closed automatically when the JavaScript object is garbage collected.
  let win;

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on('ready', () => {
    // Create the browser window.
    win = new BrowserWindow({
      width: 640,
      height: 360,
      frame: false,
      alwaysOnTop: true,
      resizable: true,
      transparent: true,
      webPreferences: {nodeIntegration: true}
    });
    // get user's screen data to position app window above tray
    let screenElectron = electron.screen,
        mainScreen = screenElectron.getPrimaryDisplay();
    //win.setPosition(mainScreen.size.width - 995, mainScreen.size.height - 750);
    win.loadFile('lib/display.html');

    // Open the DevTools.
    win.webContents.openDevTools();

    // Emitted when the window is closed.
    win.on('closed', () => {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      win = null;
    });
  });

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow();
    }
  });

  // In this file you can include the rest of your app's specific main process
  // code. You can also put them in separate files and require them here.
