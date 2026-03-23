# Текст Для Администратора Компании

Здравствуйте. Для рабочего проекта нам нужен доступ не просто к ChatGPT, а именно к OpenAI API.

Что нужно проверить:

- У компании включен billing именно для OpenAI API Platform.
- У проекта есть активный budget / usage limit.
- Меня добавили в нужный project внутри организации OpenAI API.
- Ключ создается в той же organization / project, где реально включен billing.

Что сейчас блокирует работу:

- При попытке генерации персонажного арта API возвращает ошибку `billing_hard_limit_reached`.

Что нам нужно для проекта:

- Возможность вызывать OpenAI Image API для генерации 2D character art.
- Рабочий API key или доступ к project/service account, привязанному к активному billing.

Важно:

- Подписка на ChatGPT Business сама по себе не гарантирует доступ к API billing.
- Нужен именно активный OpenAI API project с оплаченным или разрешенным лимитом.

Если удобно, можно просто подтвердить:

- в какой organization и project мне нужно работать
- активен ли там billing
- есть ли ограничения по budget / hard limit
