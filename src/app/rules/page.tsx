export default function Rules() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 text-center p-4 sm:p-6">
      {/* Заголовок */}
      <h1 className="text-4xl sm:text-5xl font-extrabold drop-shadow-lg animate-pulse mb-6 text-black">
        📜 Положение Almaty Bullet Coding Cup
      </h1>

      {/* Основной контент */}
      <div className="bg-white p-4 sm:p-8 rounded-xl shadow-lg max-w-lg sm:max-w-4xl text-left text-black space-y-6">
        {/* Общие положения */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2">1. Общие положения</h2>
          <p className="text-base sm:text-lg">
            Первый турнир Almaty Bullet Coding Cup (ABCC) среди школьников проводится на базе
            Республиканской физико-математической школы г. Алматы (НАО РФМШ).
          </p>
          <ul className="list-disc pl-4 mt-2 space-y-1 text-base sm:text-lg">
            <li>Олимпиада проводится среди школьников Республики Казахстан.</li>
            <li>Формат: заочный (онлайн-отбор) и очный (финал в Алматы).</li>
            <li>Цель – популяризация IT и олимпиадного программирования.</li>
            <li>Задача – выявление талантливых школьников и их поддержка.</li>
          </ul>
        </div>

        {/* Регистрация */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2">2. Регистрация</h2>
          <p className="text-base sm:text-lg">
            Регистрация участников проводится на сайте{" "}
            <a
              href="http://almaty_bullet_coding_cup.com/"
              className="text-blue-600 underline"
            >
              almaty_bullet_coding_cup.com
            </a>
          </p>
          <ul className="list-disc pl-4 mt-2 space-y-1 text-base sm:text-lg">
            <li>Даты регистрации: 10 марта - 4 апреля 2025 года до 18:00.</li>
            <li>Необходимо указать личные данные, школу и контактную информацию.</li>
          </ul>
        </div>

        {/* Этапы олимпиады */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2">3. Этапы олимпиады</h2>
          <h3 className="text-lg sm:text-xl font-semibold mt-4">📅 Отборочный этап</h3>
          <ul className="list-disc pl-4 mt-2 space-y-1 text-base sm:text-lg">
            <li>Дата: 6 апреля 2025 (10:00 - 13:00, GMT+5).</li>
            <li>Формат: индивидуальный контест из 5 задач (ICPC формат).</li>
            <li>Доступ: ссылка, логин и пароль будут отправлены на e-mail.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-semibold mt-4">📅 Финальный этап</h3>
          <ul className="list-disc pl-4 mt-2 space-y-1 text-base sm:text-lg">
            <li>Проходят 64 человека по результатам отбора.</li>
            <li>Дата: 20 апреля 2025 года.</li>
            <li>Место проведения: Алматы, бульвар Бухар Жырау, 36.</li>
            <li>Формат: по олимпийской системе (1 vs 1).</li>
          </ul>
        </div>

        {/* Правила участия */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2">5. Правила участия</h2>
          <ul className="list-disc pl-4 mt-2 space-y-1 text-base sm:text-lg">
            <li>Допускаются два языка: казахский, русский.</li>
            <li>Матчи проводятся по олимпийской системе (1 vs 1).</li>
            <li>Если оба участника набирают 0 баллов, дается упрощенная задача.</li>
            <li>Неявка участника = техническое поражение.</li>
          </ul>
        </div>

        {/* Призы */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2">6. Призы</h2>
          <ul className="list-disc pl-4 mt-2 space-y-1 text-base sm:text-lg">
            <li>Все участники финала получат призы и ценные подарки.</li>
            <li>За каждый выигранный тур – эксклюзивный подарок.</li>
            <li>🏆 1 место – денежный приз + диплом + кубок.</li>
            <li>🥈 2 место – денежный приз + диплом + ценные подарки.</li>
            <li>🥉 3 место – денежный приз + диплом + ценные подарки.</li>
          </ul>
        </div>

        {/* Финансирование */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2">7. Финансирование</h2>
          <p className="text-base sm:text-lg">
            Все расходы (проезд, проживание, питание) несет отправляющая сторона
            (родители или школа участника).
          </p>
        </div>
        <div> 
          <h2 className="text-xl sm:text-2xl font-bold mb-2">8. Контакты:</h2>
          <p className="text-base sm:text-lg">
            +7 (778) 776 23 01 (Жан)
            +7 (707) 645 07 70 (Павел)
          </p>
        </div>
      </div>

      {/* Кнопка регистрации */}
      <div className="mt-6 sm:mt-8">
        <a
          href="/register"
          className="px-6 sm:px-8 py-3 sm:py-4 bg-green-400 text-white font-semibold rounded-xl shadow-xl transform hover:scale-105 hover:bg-green-500 transition-all duration-300"
        >
          📝 Зарегистрироваться
        </a>
      </div>

      {/* Декоративный текст */}
      <div className="sm:text-4xl text-lg sm:text-xl font-bold mt-6 sm:mt-10 opacity-90 text-black">
        ⚡ Участвуй и стань лучшим программистом ABCC! ⚡
      </div>

    </div>
  );
}
