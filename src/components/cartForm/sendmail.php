<?php

use PHPMailer\src\PHPMailer;
use PHPMailer\src\SMTP;
use PHPMailer\src\Exception;
require_once('PHPMailer/src/PHPMailer.php')
require_once('PHPMailer/src/SMTP.php')
require_once('PHPMailer/src/Exception.php')

    $mail = new PHPMailer(true);

        $mail->SMTPDebug = 1;
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'test200583@gmail.com';
        $mail->Password = 'rljh rhxp ejpd qngz';
        $mail->SMTPSecure = ssl;
        $mail->Port = 465;
        $mail->CharSet = 'UTF-8';

        $mail->setFrom('test200583@gmail.com');    // от кого
        $mail->addAddress('test200583@gmail.com'); // кому

        $mail->Subject = 'Тест';
        $mail->msgHTML("<html><body>
                <h1>Здравствуйте!</h1>
                <p>Это тестовое письмо.</p>
                </html></body>");
                // Отправляем
                if ($mail->send()) {
                  echo 'Письмо отправлено!';
                } else {
                  echo 'Ошибка: ' . $mail->ErrorInfo;
}
?>