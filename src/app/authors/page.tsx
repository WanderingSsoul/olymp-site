"use client";
import { useState } from "react";
import AuthorCard from "@/components/AuthorCard";

const authors = [
  {
    name: "Жан Анри",
    role: "Основатель олимпиады",
    bio: "",
    image: "/images/zhananri.jpg"
  },
  {
    name: "Ким Павел",
    role: "Основатель олимпиады",
    bio: "",
    image: "/images/zhananri.jpg"
  },
  {
    name: "Мансур Карим",
    role: "Соорганизатор",
    bio: "",
    image: "/images/zhananri.jpg"
  },
  {
    name: "Азат Анафин",
    role: "Соорганизатор",
    bio: "",
    image: "/images/zhananri.jpg"
  },
  {
    name: "Амир Рустембек",
    role: "Соорганизатор",
    bio: "",
    image: "/images/zhananri.jpg"
  },
  {
    name: "Владислав Ткаченко",
    role: "Соорганизатор",
    bio: "",
    image: "/images/zhananri.jpg"
  },
  {
    name: "Алтынай",
    role: "СММ дизайнерша",
    bio: "",
    image: "/images/zhananri.jpg"
  }
];

export default function Authors() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % authors.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + authors.length) % authors.length);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center p-6">
      {/* Фон */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/eron.jpg" // ← здесь меняешь фон
          alt="фон"
          className="w-full h-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Контент */}
      <div className="relative z-10 bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-lg flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-indigo-900 mb-6 sm:mb-8">
          Авторы олимпиады
        </h1>

        <div className="w-full flex items-center justify-center mb-6">
          <AuthorCard {...authors[currentIndex]} />
        </div>

        <div className="flex gap-4">
          <button
            onClick={prev}
            className="bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-bold px-4 py-2 rounded-xl shadow-md transition-all"
          >
            ← Назад
          </button>
          <button
            onClick={next}
            className="bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-bold px-4 py-2 rounded-xl shadow-md transition-all"
          >
            Вперёд →
          </button>
        </div>
      </div>
    </div>
  );
}
