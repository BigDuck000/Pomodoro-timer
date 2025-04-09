# Big Duck Pomodoro Timer

![Pomodoro Timer Screenshot](https://imgur.com/a/mt65qjb)

## Описание
Простой Pomodoro Timer с автоматической сменой фаз (работа/отдых) и темной/светлой темами.  
**Особенности:**
- 40 минут работы / 15 минут отдыха
- Бесконечный цикл (автоматический переход между фазами)
- Смена тем при переключении фаз
- Адаптивный дизайн
- Возможность паузы и сброса
- Готов к использованию как веб-приложение или десктоп-версия

## Технологии
- HTML5/CSS3/JavaScript
- Electron (для десктоп-версии)
- Google Fonts (Bebas Neue)

## Использование
1. **Работа:**  
   Нажмите "Start" для начала 40-минутного таймера работы  
   Фон становится черным, текст белым

2. **Отдых:**  
   После окончания работы автоматически запустится 15-минутный перерыв  
   Фон станет белым, текст черным

3. **Управление:**
   - **Start/Pause:** Запуск/пауза таймера
   - **Reset:** Сброс к начальной фазе работы
   - **Phase Switch:** Клик по "Work 40min" или "Break 15min" для ручного переключения

## Установка
### Веб-версия
Просто откройте `index.html` в браузере

### Десктоп-версия
1. Установите зависимости:
```bash
npm install
