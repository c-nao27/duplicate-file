# About
Google Driveで同名のファイル/フォルダが存在してしまう仕様のアンチGASライブラリ  

[Source Code](https://script.google.com/d/1-_N4XmFTnp9TIjQSlKF_8Ccb6DPia92sNq6waYFLTtROGg5cCbTxTYQ-/edit?usp=sharing)  
[Library Document](https://script.google.com/macros/library/d/1-_N4XmFTnp9TIjQSlKF_8Ccb6DPia92sNq6waYFLTtROGg5cCbTxTYQ-/2)


### スクリプトID
~~~
1-_N4XmFTnp9TIjQSlKF_8Ccb6DPia92sNq6waYFLTtROGg5cCbTxTYQ-
~~~
  

## createFolder()
新しいフォルダ、または既に存在する同名のフォルダを取得して返します。
|引数名|型|説明|
|----|----|----|
|parentFolder|DriveApp.Folder|親フォルダ(rootに作成する場合はnull)|
|folderName|string|作成するフォルダの名前|


## duplicateFile()
引数で指定したフォルダの中にファイルを複製します。  
ファイル名が重複する場合は末尾に数字を付加して返します。
|引数名|型|説明|
|----|----|----|
|folder|DriveApp.Folder|ファイルを作成するフォルダ(rootに作成する場合はnull)|
|fileId|string|作成するファイルのID|
|fileName|string|作成するファイルの名前|
