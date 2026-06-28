# Как выложить Wonderoom на GitHub

1. Создайте новый пустой репозиторий на GitHub.
2. Откройте терминал в папке проекта:

```powershell
cd "C:\Users\fastn\Documents\Codex\2026-06-28\wonderoom-next-js-15-app-router"
```

3. Инициализируйте Git, если репозиторий еще не создан:

```powershell
git init
git add .
git commit -m "Initial Wonderoom website"
git branch -M main
```

4. Подключите ваш репозиторий и отправьте код:

```powershell
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

Замените `USERNAME` и `REPOSITORY` на ваши данные GitHub.

## Перед публикацией

- Не загружайте `node_modules`.
- Не загружайте `.next`.
- Проверьте, что реальные фотографии проектов лежат в `public/images/projects`.
- Когда появится домен, замените `https://wonderoom.studio` в SEO-файлах на реальный адрес сайта.
