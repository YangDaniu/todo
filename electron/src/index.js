import {ipcRenderer} from 'electron'

var content = document.getElementById('content');
  var saveBtn = document.getElementById('btn');
  
  ipcRenderer.send('contentInit', 'test');
  ipcRenderer.on('contentInited', (e, arg)=> {
      console.log(e, arg);
      content.value = arg;
  })
  saveBtn.addEventListener('click', (e) => {
    ipcRenderer.send('fileSave', content.value);
  })