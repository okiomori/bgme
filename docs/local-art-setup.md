# Локальная art-студия для BGME

Я уже установил базу локально:

- `Krita` установлена в `C:\Users\marin\Apps\Krita`
- плагин `Krita AI Diffusion` установлен в `C:\Users\marin\AppData\Roaming\krita`
- рабочие папки BGME уже созданы в `C:\Users\marin\Documents\bgme\art`

## Где лежат важные папки

- `C:\Users\marin\Documents\bgme\art\refs` - референсы
- `C:\Users\marin\Documents\bgme\art\prompts` - prompt-файлы
- `C:\Users\marin\Documents\bgme\art\krita` - рабочие `.kra`
- `C:\Users\marin\Documents\bgme\art\exports` - готовые PNG
- `C:\Users\marin\Documents\bgme\art\characters` - собранные персонажи по папкам

## Как открыть art-студию

Запустите:

- `C:\Users\marin\Documents\bgme\start-bgme-art-studio.bat`

Это откроет Krita и сразу покажет арт-папку проекта.

## Что сделать в Krita в первый запуск

1. Откройте `Settings -> Dockers -> AI Image Generation`
2. Если плагин попросит backend, выбирайте `Managed`
3. Для генерации под вашу `RTX 4070` оставляйте `CUDA`
4. Дождитесь первой автоматической загрузки backend и моделей

Важно: этот первый шаг делается внутри интерфейса Krita. Я подготовил окружение, но сам GUI-выбор managed backend в фоне за вас нажать не могу.

## Как работать без опыта в дизайне

Самый простой сценарий:

1. Откройте prompt-файл персонажа из `art\prompts`
2. Скопируйте текст в генератор
3. Сначала делайте портрет или bust, а не full body
4. Когда лицо и настроение получились, переходите к full body
5. Правки делайте через inpaint по частям: лицо, волосы, руки, одежда

## Какой порядок лучше для BGME

1. `portrait bust`
2. `waist-up concept`
3. `full body`
4. `expression variant`
5. `key art export`

## Что пока не делаем

- не делаем 3D-модель и риг
- не делаем сразу финальный splash-art всех героев
- не пытаемся за один prompt получить идеал

## На что смотреть при выборе удачного результата

- силуэт читается за секунду
- есть один главный акцент
- волосы, ткань и материал не спорят друг с другом
- персонаж подходит миру заросших руин и moss-gothic тону BGME

## Что делать, если не нравится результат

- меняйте prompt и пробуйте снова
- добавляйте референсы в генерацию
- делайте inpaint по частям, а не целиком
- не стесняйтесь использовать готовые PNG как референсы для следующей генерации

## Автогенерация и автоподключение в игру

Если нужно быстро собрать визуальную часть персонажей без ручной правки `src/main.js`, используйте автоконвейер:

1. Убедитесь, что в терминале задан `OPENAI_API_KEY`.
2. При необходимости отредактируйте промпты в `art\prompts\heroes.json`.
3. Запустите:
   - `generate-heroes-and-apply.bat`

Что сделает конвейер:

- сгенерирует портреты героев в `art\characters\<hero-id>-canon-bust.png`
- автоматически обновит поле `art` у героев в `src\main.js`

Альтернативно через npm:

- `npm run art:generate:heroes`
- `npm run art:apply`
- или сразу `npm run art:pipeline`
