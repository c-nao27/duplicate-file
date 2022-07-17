# About
DriveApp.File#makeCopy()で同名のファイル/フォルダが存在してしまう仕様のアンチGASライブラリ  
https://script.google.com/d/1-_N4XmFTnp9TIjQSlKF_8Ccb6DPia92sNq6waYFLTtROGg5cCbTxTYQ-/edit?usp=sharing
https://script.google.com/macros/library/d/1-_N4XmFTnp9TIjQSlKF_8Ccb6DPia92sNq6waYFLTtROGg5cCbTxTYQ-/1


### スクリプトID
`1-_N4XmFTnp9TIjQSlKF_8Ccb6DPia92sNq6waYFLTtROGg5cCbTxTYQ-`  


### createFolder(DriveApp.Folder, string)
新しいフォルダー、または既に存在する同名のフォルダーを取得して返します。
|引数名|型|説明|
|----|----|----|
|parentFolder|DriveApp.Folder|親フォルダ|
|folderName|string|フォルダ名|


~~~javascript
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
~~~


### duplicateFile(DriveApp.Folder フォルダ, string ファイルID, string ファイル名)
引数で指定したフォルダの中にファイルを複製します。  
ファイル名が重複する場合は末尾に数字を付加して返します。

~~~javascript
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
~~~
