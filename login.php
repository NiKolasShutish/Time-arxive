<?php
session_start();

// Пароль архива
$correct_password = "golovko2749";

// Получаем пароль из формы
$user_password = $_POST['password'] ?? '';

// Проверяем пароль
if ($user_password === $correct_password) {
    // Пароль верный - сохраняем в сессии
    $_SESSION['authenticated'] = true;
    $_SESSION['login_time'] = time();
    
    // Перенаправляем на архив
    header("Location: index.html?auth=success");
    exit();
} else {
    // Пароль неверный
    echo "
    <!DOCTYPE html>
    <html>
    <head>
        <title>ОШИБКА ДОСТУПА</title>
        <link rel='stylesheet' href='style.css'>
    </head>
    <body>
        <div class='terminal'>
            <div class='login-panel'>
                <h1>ОШИБКА ДОСТУПА</h1>
                <p style='color: #ff0000;'>Неверный код авторизации</p>
                <a href='index.html' style='color: #00ffff;'>Вернуться назад</a>
            </div>
        </div>
    </body>
    </html>
    ";
}
?>

