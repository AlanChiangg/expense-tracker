# 家庭記帳本

一個使用 Node.js + Express 打造的記帳本。

## 專案畫面

![image](https://github.com/AlanChiangg/expense-tracker/blob/main/public/image/img1.jpg)

![image](https://github.com/AlanChiangg/expense-tracker/blob/main/public/image/img2.jpg)


### Features - 產品功能

1. 使用者可以註冊會員、登入會員使用
2. 使用者可以透過Facebook登入使用
3. 使用者可以新增/刪除/修改消費資訊
4. 使用者可在首頁看到所有消費清單的總金額
5. 使用者可以根據「類別」篩選消費清單

## Environment SetUp - 環境建置

[Node.js](https://nodejs.org/en/)

## Installing - 專案安裝流程

1. 打開你的 terminal，Clone 此專案至本機電腦

```
git clone https://github.com/AlanChiangg/expense-tracker.git
```

2. 開啟終端機(Terminal)，進入存放此專案的資料夾

```
cd expense-tracker
```

3. 安裝 npm 套件

```
npm install
```

4. 安裝 nodemon 套件

```
npm i -g nodemon 
```

5. 安裝完畢後，設定環境變數，請參照.env.example

```   
FACEBOOK_ID=SKIP
FACEBOOK_SECRET=SKIP
FACEBOOK_CALLBACK=http://localhost:3000/auth/facebook/callback
SESSION_SECRET=ThisIsMySecret
MONGODB_URI=mongodb+srv://<Your MongoDB Account>:<Your MongoDB Password>@cluster0.xxxx.xxxx.net/<Your MongoDB Table><?retryWrites=true&w=majority
PORT=3000
```

6. 建立種子資料，已先預設兩組帳號

```
npm run seed
```

| Name | Email             | Password |
| :--- | :---------------- | :------- |
| 小新 | user1@example.com | 123      |
| 廣志 | user2@example.com | 123      |


7. 啟動伺服器，執行 app.js 檔案

```
npm run dev
```

8. 當 terminal 出現以下字樣，表示伺服器與資料庫已啟動並成功連結

```
App is running on http://localhost:3000
```

### 使用工具
- Visual Studio Code - 開發環境
- Express - 應用程式架構
- Express-Handlebars - 模板引擎
- MongoDB - 資料庫

### 使用套件
- bcryptjs: 2.4.3
- connect-flash: 0.1.1
- dotenv: 16.3.1
- express: 4.18.2
- express-handlebars: 7.0.7
- express-session: 1.17.3
- handlebars: 4.7.7
- handlebars-dateformat: 1.1.3
- handlebars-helpers: 0.10.0
- method-override: 3.0.0
- mongoose: 7.3.4
- passport: 0.6.0
- passport-facebook: 3.0.0
- passport-local: 1.0.0

### Contributor - 專案開發人員

> [AlanChiangg](https://github.com/AlanChiangg)