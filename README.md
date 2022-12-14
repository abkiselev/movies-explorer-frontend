# Movies Explorer - приложение по поиску фильмов
Дипломный проект обучения на веб-факультете Яндекс Практикума. 
Сервис по поиску фильмов с личным кабинетом для сохранения избранных фильмов.

## Структура приложения
__Фронтенд-часть__ - в текущем репозитории  
__Бэкенд-часть__ - https://github.com/abkiselev/movies-explorer-api  
__Деплой и демо__ - https://diplom.ab-kiselev.ru  
__Макет в Figma__ - https://disk.yandex.ru/d/cVp52CVbFDSTTA  

## Используемые API
собственное API для регистрации/авторизации и хранения сохраненных фильмов: https://apidiplom.ab-kiselev.ru/movies  
публичное API для получения коллекции фильмов BeatFilm: https://api.nomoreparties.co/beatfilm-movies  

## Стек технологий
__Frontend:__ React, React Router, React Context, Валидация форм, Кастомные хуки, Защищенные роуты, Работа с API: публичное и собственное, LocalStorage, Cookies, HTML5, CSS3, БЭМ, CSS-анимации.

__Backend:__ Node JS, Express, MongoDB, Cors, Helmet, JWT, bcrypt, Celebrate.

## Функциональность и особенности
- Адаптивная, семантическая верстка
- Главная страница - лендинг с описанием и скроллом по якорям
- Отдельная страница с приложением по поиску и сохранению фильмов
- Регистрация/авторизация пользователей
- Поиск фильмов по ключевому слову
- Пагинация при клике на копнку «Ещё»
- Сохранение/удаление фильмов из результов поиска
- Просмотр и удаление фильмов из сохраненных в личном кабинете
- Редактирование информации о пользователе
- Валидация форм перед отправкой на сервер
- Прелоадеры с анимацией во время запросов к серверу

