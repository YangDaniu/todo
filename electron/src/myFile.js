 var fs = require('fs');
 import * as path from 'path'
 const {
     ipcMain
 } = require('electron');

 const filename = path.join(__dirname, 'test.txt');

 ipcMain.on('contentInit', (e, arg) => {
     fs.readFile(filename, 'utf8', (err, data) => {
         if (err) throw err;
         e.sender.send('contentInited', data);
     });
 })

 ipcMain.on('fileSave', (e, arg) => {
     fs.writeFile(filename, arg, (err) => {
         if (err) throw err;
         e.sender.send('fileSaved', 'success');
         //  console.log('The file has been saved!');
     });
 })