# About
DriveApp.File#makeCopy()で同名のファイル/フォルダが存在してしまう仕様のアンチGASライブラリ


### スクリプトID
`1-_N4XmFTnp9TIjQSlKF_8Ccb6DPia92sNq6waYFLTtROGg5cCbTxTYQ-`  

[Source Code](https://script.google.com/d/1-_N4XmFTnp9TIjQSlKF_8Ccb6DPia92sNq6waYFLTtROGg5cCbTxTYQ-/edit?usp=sharing)  

### duplicateFile()
`
function duplicateFile(folder, fileId, fileName) {
  const reg = new RegExp(`^${fileName}.*`);
  const files = folder.getFiles();

  let i = 0;
  while (files.hasNext()) {
    if (reg.test(files.next().getName())) {
      i++;
    }
  }

  if (i == 0) {
    var file = DriveApp.getFileById(fileId).makeCopy(fileName, folder);

  } else {
    console.log("Same file name : " + fileName);
    var file = DriveApp.getFileById(fileId).makeCopy(fileName + i, folder);
  }
  return file;
}
`
### createFolder()
`
function createFolder(parentFolder, folderName) {
  if (parentFolder == null){
    parentFolder = DriveApp.getRootFolder();
  }

  let folders = parentFolder.getFoldersByName(folderName);
  if (folders.hasNext()) {
    var folder = folders.next();
    console.log("Already exists folder : " + folder);

  } else {
    var folder = parentFolder.createFolder(folderName);
    console.log("Create folder : " + folder);
  }
  return folder;
}
`
