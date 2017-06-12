const {app, BrowserWindow, Menu, globalShortcut} = require('electron')

const notify = require('electron-main-notification')

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    //titleBarStyle: 'hidden-inset',
    webPreferences: {nodeIntegration: false},
    alwaysOnTop: true,
    //darkTheme: true,
    center: true,
    autoHideMenuBar: true,
    title: 'Hackmud Chat Client'
  })

  //mainWindow.loadURL('file://' + __dirname + '/index.html')
  mainWindow.loadURL('https://www.hackmud.com/chat')

  //mainWindow.webContents.openDevTools()

  mainWindow.focus();

  mainWindow.on('closed', function() {
    mainWindow = null
  })

  const menuTemplate = [
    {
      label : app.getName(),
      submenu: [
        {
          label: 'About',
          click: () => {notify('Hackmud Chat ported by proxos#1678')
        }},
        {type: 'separator'},
        {
          label: 'Quit',
          click: () => {app.quit();}
        }

      ]

    }

  ];

  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);

  globalShortcut.register('CommandOrControl+Q', () => {
    app.quit()
  })

}

app.on('ready', createWindow)




app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function() {
  if (mainWindow === null) {
    createWindow()
  }
})
