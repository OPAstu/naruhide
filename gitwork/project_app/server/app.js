const express = require("express");

server: {
    const app = express();

    app.use(express.json()); // JSONのリクエストボディを解析するため
    
    const port = 3005;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}


/*
const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'xs373641_naru01',
    password: 'only1programming',
    database: 'xs373641_naruhide'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Server!');
});

// ログイン時の認証ロジック
app.post('/login', (req, res) => {
    const { name, password } = req.body;
    const query = 'SELECT password FROM account WHERE name = ?';

    db.query(query, [name], (err, result) => {
        if (err) throw err;

        if (result.length > 0) {
            // データベースに保存されている暗号化されたパスワードを取得
            const hashedPassword = result[0].password;

            // パスワードの照合
            if (password === hashedPassword) {
                res.send('Login successful');
            } else {
                res.send('Password does not match');
            }
        } else {
            res.send('User not found');
        }
    });
});
*/