'use strict';

var _path = require('path');

var path = _interopRequireWildcard(_path);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var fs = require('fs');

var _require = require('electron');

const ipcMain = _require.ipcMain;


const filename = path.join(__dirname, 'test.txt');

ipcMain.on('contentInit', (e, arg) => {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) throw err;
        e.sender.send('contentInited', data);
    });
});

ipcMain.on('fileSave', (e, arg) => {
    fs.writeFile(filename, arg, err => {
        if (err) throw err;
        e.sender.send('fileSaved', 'success');
        //  console.log('The file has been saved!');
    });
});