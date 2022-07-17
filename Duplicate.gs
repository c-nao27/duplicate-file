/**
 *  Create new folder or Get already exists folder.
 *  @param {DriveApp.Folder} parentFolder Parent folder / null -> root
 *  @param {string} folderName folder name
 *  @return {DriveApp.Folder} got / created folder
 */
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

/**
 * Get file to copy. if duplicate file name, add a number to the end.
 * @param {DriveApp.Folder} folder Folder to create files / null -> root
 * @param {string} fileId File ID to create
 * @param {string} fileName File name to create
 * @return {DriveApp.File} Created file
 */
function duplicateFile(folder, fileId, fileName) {
  if (folder == null){
    folder = DriveApp.getRootFolder();
  }
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
