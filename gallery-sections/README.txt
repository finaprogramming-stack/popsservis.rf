Как рулить разделами фото:

photos.json - главный файл, где указано, в каких разделах показывается каждое фото.
photoId - ID фото.
sections - список разделов, где фото видно.

Пример:
{
  "photoId": 56,
  "sections": ["all", "truby-profil"]
}

Перекинуть фото из труб в краны:
{
  "photoId": 56,
  "sections": ["all", "krany-manipulyatory"]
}

Скрыть фото вообще везде:
{
  "photoId": 56,
  "sections": []
}

Ключи разделов:
all - Все
kamazy - Битумовозы
traly - Тралы-прицепы
kater - Катер
bortovaya-tehnika - КМД
krany-manipulyatory - Краны|манипуляторы
detali-zapchasti - Детали и запчасти
truby-profil - Трубы и профиль
kuzova-ramy - Кузова и рамы
drugie-raboty - Другие работы
prom-oborudovanie - Промышленное оборудование
metall-fasad-derevo - Металл, фасады и дерево
prochee - Прочее

Можно писать русские алиасы в sections, например "все", "тралы", "краны", "трубы". Но надежнее оставлять ключи выше.
