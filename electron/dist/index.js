'use strict';

var _electron = require('electron');

var content = document.getElementById('content');
var saveBtn = document.getElementById('btn');

_electron.ipcRenderer.send('contentInit', 'test');
_electron.ipcRenderer.on('contentInited', (e, arg) => {
  console.log(e, arg);
  content.value = arg;
});
saveBtn.addEventListener('click', e => {
  _electron.ipcRenderer.send('fileSave', content.value);
});