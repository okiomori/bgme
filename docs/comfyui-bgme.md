# ComfyUI для BGME

ComfyUI установлен и подготовлен локально.

## Где он лежит

- Программа: `C:\Users\marin\AppData\Local\Programs\ComfyUI\ComfyUI.exe`
- Основная рабочая папка: `C:\Users\marin\AI`
- Папка моделей: `C:\Users\marin\AI\models`
- Входные картинки BGME: `C:\Users\marin\AI\input\bgme`
- Выходные картинки BGME: `C:\Users\marin\AI\output\bgme`
- Workflow-папка: `C:\Users\marin\AI\user\default\workflows`

## Что уже подготовлено

- Flux 2 Klein:
  - `C:\Users\marin\AI\models\diffusion_models\flux-2-klein-4b-fp8.safetensors`
  - `C:\Users\marin\AI\models\text_encoders\Qwen3-4B-Q4_K_M.gguf`
  - `C:\Users\marin\AI\models\vae\flux2-vae.safetensors`
- Nova Anime XL:
  - `C:\Users\marin\AI\models\checkpoints\novaAnimeXL_ilV125.safetensors`
- Дополнительная LoRA:
  - `C:\Users\marin\AI\models\loras\flux-2-klein-4B-outpaint-lora.safetensors`

## Как запускать

1. Дважды кликнуть:
   - `C:\Users\marin\Documents\bgme\open-comfyui.bat`
2. Дождаться открытия окна ComfyUI.

## Как работать для BGME

1. Кладите исходные картинки в:
   - `C:\Users\marin\AI\input\bgme`
2. Сохраняйте удачные результаты в:
   - `C:\Users\marin\AI\output\bgme`
3. Для Лиоры лучше стартовать не с text-to-image, а с image-to-image refinement.

## Если что-то снова не открывается

- Перезапустите ComfyUI.
- Проверьте, что модели всё ещё есть в `C:\Users\marin\AI\models`.
- Если workflow ругается на отсутствующие модели, значит он ссылается не на Flux/Nova, а на другой набор нод или на недокачанный Qwen-edit.
