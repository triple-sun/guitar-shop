# Запуск проекта

1. Установка внешних сервисов: `docker-compose up -d`
2. Задать переменные окружения ориентируясь на `env.example`
3. Запустить REST API сервис: `nx serve api`
4. Сгенерировать начальные данные: `npm run cli -- --generate <n> <connection string>`. `<n>` - количество товаров, `<connection string>` - ссылка для подключения к БД в формате `{user}:{password}@{host}:{port}`
5. Запустить фронтенд: `nx serve frontend`

REST Api реализован практически полностью, фронтенд - процентов на 30.
