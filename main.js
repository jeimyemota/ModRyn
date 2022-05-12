const { app, BrowserWindow } = require('electron');
const path = require('path')


//loads index.html onto browser window
const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
    })
  
    win.loadFile('index.html')
  }
//waits for the ready event to be fired
  app.whenReady().then(() => {
    createWindow()
  //Opens a window if none are open in MACOS 
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })

  //To have the app quire when all windows are closed
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })