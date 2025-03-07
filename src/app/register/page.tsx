"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegistrationForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    participantName: "",
    parentName: "",
    region: "",
    school: "",
    grade: "",
    phone: "",
    email: "",
    offline: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok) {
        alert(result.message);
        router.push("/"); // Перенаправление на главную
      } else {
        alert("Ошибка при отправке формы");
      }
    } catch (error) {
      console.error("Ошибка запроса:", error);
      alert("Произошла ошибка");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 p-4 sm:p-8">
      <div className="bg-white text-gray-900 p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-sm sm:max-w-md">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-yellow-300">
          Регистрация
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
          {[
            ["participantName", "ФИО участника"],
            ["parentName", "ФИО родителя/опекуна"],
            ["region", "Регион/город/район"],
            ["school", "Название школы"],
            ["grade", "Класс"],
            ["phone", "Телефон"],
            ["email", "E-mail"],
          ].map(([name, placeholder]) => (
            <input
              key={name}
              className="p-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-yellow-300 outline-none transition-all text-sm sm:text-base"
              type={name === "email" ? "email" : name === "phone" ? "tel" : "text"}
              name={name}
              placeholder={placeholder}
              value={String(formData[name as keyof typeof formData] ?? "")}
              onChange={handleChange}
              required
            />
          ))}
          <label className="flex items-center gap-2 sm:gap-3 cursor-pointer text-yellow-700 text-sm sm:text-base">
            <input
              type="checkbox"
              name="offline"
              checked={formData.offline}
              onChange={handleChange}
              className="w-4 h-4 sm:w-5 sm:h-5 accent-yellow-300"
            />
            Может участвовать оффлайн
          </label>
          <button
            type="submit"
            className="mt-3 sm:mt-4 bg-yellow-300 text-indigo-900 font-semibold p-3 rounded-lg shadow-md hover:bg-yellow-400 transition-all text-sm sm:text-base"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}
