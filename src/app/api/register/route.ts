import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { NextRequest } from "next/server";
dotenv.config();

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    console.log("Полученные данные:", data);

    const transporter = nodemailer.createTransport({
      host: "smtp.yandex.ru",
      port: 465,
      secure: true,
      auth: {
        user: process.env.YANDEX_USER, // Используем переменную окружения
        pass: process.env.YANDEX_PASS,
      },
    });

    const mailOptions = {
      from: process.env.YANDEX_USER, // Должен совпадать с user
      to: "matpapki@gmail.com",
      subject: "Новая регистрация",
      text: `
        📌 Новая заявка:
        - 👤 Имя участника: ${data.participantName}
        - 👨‍👩‍👧‍👦 Родитель/опекун: ${data.parentName}
        - 🌍 Регион: ${data.region}
        - 🏫 Школа: ${data.school}
        - 📚 Класс: ${data.grade}
        - 📞 Телефон: ${data.phone}
        - 📧 Email: ${data.email}
        - 🚶 Оффлайн-участие: ${data.offline ? "Да" : "Нет"}
      `,
      html: `
        <h2>📌 Новая заявка:</h2>
        <ul>
          <li><strong>👤 Имя участника:</strong> ${data.participantName}</li>
          <li><strong>👨‍👩‍👧‍👦 Родитель/опекун:</strong> ${data.parentName}</li>
          <li><strong>🌍 Регион:</strong> ${data.region}</li>
          <li><strong>🏫 Школа:</strong> ${data.school}</li>
          <li><strong>📚 Класс:</strong> ${data.grade}</li>
          <li><strong>📞 Телефон:</strong> ${data.phone}</li>
          <li><strong>📧 Email:</strong> ${data.email}</li>
          <li><strong>🚶 Оффлайн-участие:</strong> ${data.offline ? "Да" : "Нет"}</li>
        </ul>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email успешно отправлен!");

    return NextResponse.json({ message: "Форма успешно отправлена!" }, { status: 200 });
  } catch (error) {
    console.error("Ошибка отправки email:", error);
    return NextResponse.json({ error: "Ошибка при обработке формы" }, { status: 500 });
  }
}
