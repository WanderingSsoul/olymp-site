<div className="absolute inset-0">
  <img
    src="/images/chel.jpg"
    alt="фон"
    className="w-full h-full object-cover object-center opacity-50"
  />
  <div className="absolute inset-0 bg-black/30" />
</div>
export default function Home() {
  return (
    <div className="items-center justify-start bg-cover bg-center text-center p-4 sm:p-6 min-h-screen flex flex-col items-center justify-center text-center p-6 relative overflow-hidden relative z-10"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/images/chel.jpg"
          alt="фон"
          className="w-full h-full object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      {/* Заголовок */}
      <h1 className="text-3xl sm:text-5xl font-extrabold drop-shadow-lg animate-pulse mb-4 sm:mb-6 text-black">
        Almaty Bullet Coding Cup
      </h1>
      <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90 text-black">
        Готов к битве умов? Присоединяйся!
      </p>

      {/* Блок с кнопками */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-5">
        <a
          href="/rules"
          className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-400 text-white font-semibold rounded-xl shadow-xl transform hover:scale-105 hover:bg-gray-200 transition-all duration-300"
        >
          📜 Положение
        </a>

        <a
          href="/register"
          className="px-6 sm:px-8 py-3 sm:py-4 bg-green-400 text-white font-semibold rounded-xl shadow-xl transform hover:scale-105 hover:bg-green-500 transition-all duration-300"
        >
          📝 Регистрация
        </a>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-4">
        <a
          href="/authors"
          className="px-6 sm:px-8 py-3 sm:py-4 bg-red-400 text-white font-semibold rounded-xl shadow-xl transform hover:scale-105 hover:bg-blue-20 transition-all duration-300"
        >
          📝 Авторы
        </a>
      </div>
      {/* Расписание */}
      <div className="backdrop-blur-md bg-white/50 p-6 sm:p-8 rounded-xl shadow-xl max-w-md sm:max-w-lg text-left text-black w-full">
      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-2">📅 Расписание</h2>
      <ul className="text-sm sm:text-lg space-y-1 sm:space-y-2">
        <li>09:00-09:30 – регистрация</li>
        <li>09:30-10:00 – рассадка по аудиториям</li>
        <li>10:00-10:30 – 1 матч</li>
        <li>10:30-10:45 – перерыв</li>
        <li>10:45-11:15 – 2 матч</li>
        <li>11:15-11:30 – перерыв</li>
        <li>11:30-12:00 – 3 матч</li>
        <li>12:00-12:15 – перерыв</li>
        <li>12:15-12:45 – 4 матч</li>
        <li>12:45-13:00 – перерыв</li>
        <li>13:00-13:30 – полуфинал</li>
        <li>13:30-13:45 – перерыв</li>
        <li>13:45-14:15 – финал и матч за 3-е место</li>
        <li>14:15-15:00 – перерыв</li>
        <li>15:00 – награждение</li>
        </ul>
      </div>

      {/* Декоративные элементы */}
      <div className="text-sm sm:text-xl mt-8 sm:mt-10 text-center max-w-xs sm:max-w-md px-4 py-2 rounded-xl bg-white/70 backdrop-blur-md shadow-md text-blue-800">
        ⚡ Успей зарегистрироваться до дедлайна!
      </div>


      {/* Отступ внизу для прокрутки */}
      <div className="h-10 sm:h-30"></div>
    </div>
  );
}