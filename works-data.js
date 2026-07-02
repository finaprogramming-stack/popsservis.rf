const worksCases = [];

const worksItems = [
  {
    "id": 10001,
    "name": "1",
    "fileName": "1.jpeg",
    "src": "./assets/allimages/bitumovoz/1.jpeg",
    "alt": "Битумовоз: состояние до работ",
    "project": "Битумовоз",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Битумовоз",
      "1"
    ],
    "category": "bitumovoz",
    "categoryLabel": "Битумовоз"
  },
  {
    "id": 10002,
    "name": "2",
    "fileName": "2.jpeg",
    "src": "./assets/allimages/bitumovoz/2.jpeg",
    "alt": "Битумовоз: этап подготовки",
    "project": "Битумовоз",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Битумовоз",
      "2"
    ],
    "category": "bitumovoz",
    "categoryLabel": "Битумовоз"
  },
  {
    "id": 10003,
    "name": "3",
    "fileName": "3.jpg",
    "src": "./assets/allimages/bitumovoz/3.jpg",
    "alt": "Битумовоз: промежуточный контроль",
    "project": "Битумовоз",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Битумовоз",
      "3"
    ],
    "category": "bitumovoz",
    "categoryLabel": "Битумовоз"
  },
  {
    "id": 10004,
    "name": "4",
    "fileName": "4.jpeg",
    "src": "./assets/allimages/bitumovoz/4.jpeg",
    "alt": "Битумовоз: готовый результат",
    "project": "Битумовоз",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Битумовоз",
      "4"
    ],
    "category": "bitumovoz",
    "categoryLabel": "Битумовоз"
  },
  {
    "id": 10005,
    "name": "5",
    "fileName": "5.jpg",
    "src": "./assets/allimages/bitumovoz/5.jpg",
    "alt": "Битумовоз: состояние до работ",
    "project": "Битумовоз",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Битумовоз",
      "5"
    ],
    "category": "bitumovoz",
    "categoryLabel": "Битумовоз"
  },
  {
    "id": 10006,
    "name": "6",
    "fileName": "6.jpg",
    "src": "./assets/allimages/bitumovoz/6.jpg",
    "alt": "Битумовоз: этап подготовки",
    "project": "Битумовоз",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Битумовоз",
      "6"
    ],
    "category": "bitumovoz",
    "categoryLabel": "Битумовоз"
  },
  {
    "id": 20001,
    "name": "1",
    "fileName": "1.jpeg",
    "src": "./assets/allimages/vodnaya-tehnika/1.jpeg",
    "alt": "Водная техника: состояние до работ",
    "project": "Водная техника",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Водная техника",
      "1"
    ],
    "category": "vodnaya-tehnika",
    "categoryLabel": "Водная техника"
  },
  {
    "id": 20002,
    "name": "2",
    "fileName": "2.jpeg",
    "src": "./assets/allimages/vodnaya-tehnika/2.jpeg",
    "alt": "Водная техника: этап подготовки",
    "project": "Водная техника",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Водная техника",
      "2"
    ],
    "category": "vodnaya-tehnika",
    "categoryLabel": "Водная техника"
  },
  {
    "id": 20003,
    "name": "3",
    "fileName": "3.jpeg",
    "src": "./assets/allimages/vodnaya-tehnika/3.jpeg",
    "alt": "Водная техника: промежуточный контроль",
    "project": "Водная техника",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Водная техника",
      "3"
    ],
    "category": "vodnaya-tehnika",
    "categoryLabel": "Водная техника"
  },
  {
    "id": 20004,
    "name": "4",
    "fileName": "4.jpeg",
    "src": "./assets/allimages/vodnaya-tehnika/4.jpeg",
    "alt": "Водная техника: готовый результат",
    "project": "Водная техника",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Водная техника",
      "4"
    ],
    "category": "vodnaya-tehnika",
    "categoryLabel": "Водная техника"
  },
  {
    "id": 20005,
    "name": "5",
    "fileName": "5.jpg",
    "src": "./assets/allimages/vodnaya-tehnika/5.jpg",
    "alt": "Водная техника: состояние до работ",
    "project": "Водная техника",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Водная техника",
      "5"
    ],
    "category": "vodnaya-tehnika",
    "categoryLabel": "Водная техника"
  },
  {
    "id": 20006,
    "name": "6",
    "fileName": "6.jpg",
    "src": "./assets/allimages/vodnaya-tehnika/6.jpg",
    "alt": "Водная техника: этап подготовки",
    "project": "Водная техника",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Водная техника",
      "6"
    ],
    "category": "vodnaya-tehnika",
    "categoryLabel": "Водная техника"
  },
  {
    "id": 20007,
    "name": "7",
    "fileName": "7.jpg",
    "src": "./assets/allimages/vodnaya-tehnika/7.jpg",
    "alt": "Водная техника: промежуточный контроль",
    "project": "Водная техника",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Водная техника",
      "7"
    ],
    "category": "vodnaya-tehnika",
    "categoryLabel": "Водная техника"
  },
  {
    "id": 20008,
    "name": "8",
    "fileName": "8.jpg",
    "src": "./assets/allimages/vodnaya-tehnika/8.jpg",
    "alt": "Водная техника: готовый результат",
    "project": "Водная техника",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Водная техника",
      "8"
    ],
    "category": "vodnaya-tehnika",
    "categoryLabel": "Водная техника"
  },
  {
    "id": 20009,
    "name": "9",
    "fileName": "9.jpg",
    "src": "./assets/allimages/vodnaya-tehnika/9.jpg",
    "alt": "Водная техника: состояние до работ",
    "project": "Водная техника",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Водная техника",
      "9"
    ],
    "category": "vodnaya-tehnika",
    "categoryLabel": "Водная техника"
  },
  {
    "id": 20010,
    "name": "10",
    "fileName": "10.jpg",
    "src": "./assets/allimages/vodnaya-tehnika/10.jpg",
    "alt": "Водная техника: этап подготовки",
    "project": "Водная техника",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Водная техника",
      "10"
    ],
    "category": "vodnaya-tehnika",
    "categoryLabel": "Водная техника"
  },
  {
    "id": 20011,
    "name": "11",
    "fileName": "11.jpg",
    "src": "./assets/allimages/vodnaya-tehnika/11.jpg",
    "alt": "Водная техника: промежуточный контроль",
    "project": "Водная техника",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Водная техника",
      "11"
    ],
    "category": "vodnaya-tehnika",
    "categoryLabel": "Водная техника"
  },
  {
    "id": 20012,
    "name": "12",
    "fileName": "12.jpg",
    "src": "./assets/allimages/vodnaya-tehnika/12.jpg",
    "alt": "Водная техника: готовый результат",
    "project": "Водная техника",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Водная техника",
      "12"
    ],
    "category": "vodnaya-tehnika",
    "categoryLabel": "Водная техника"
  },
  {
    "id": 20013,
    "name": "13",
    "fileName": "13.jpg",
    "src": "./assets/allimages/vodnaya-tehnika/13.jpg",
    "alt": "Водная техника: состояние до работ",
    "project": "Водная техника",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Водная техника",
      "13"
    ],
    "category": "vodnaya-tehnika",
    "categoryLabel": "Водная техника"
  },
  {
    "id": 20014,
    "name": "14",
    "fileName": "14.jpg",
    "src": "./assets/allimages/vodnaya-tehnika/14.jpg",
    "alt": "Водная техника: этап подготовки",
    "project": "Водная техника",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Водная техника",
      "14"
    ],
    "category": "vodnaya-tehnika",
    "categoryLabel": "Водная техника"
  },
  {
    "id": 20015,
    "name": "15",
    "fileName": "15.jpg",
    "src": "./assets/allimages/vodnaya-tehnika/15.jpg",
    "alt": "Водная техника: промежуточный контроль",
    "project": "Водная техника",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Водная техника",
      "15"
    ],
    "category": "vodnaya-tehnika",
    "categoryLabel": "Водная техника"
  },
  {
    "id": 20016,
    "name": "16",
    "fileName": "16.jpg",
    "src": "./assets/allimages/vodnaya-tehnika/16.jpg",
    "alt": "Водная техника: готовый результат",
    "project": "Водная техника",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Водная техника",
      "16"
    ],
    "category": "vodnaya-tehnika",
    "categoryLabel": "Водная техника"
  },
  {
    "id": 20017,
    "name": "17",
    "fileName": "17.jpg",
    "src": "./assets/allimages/vodnaya-tehnika/17.jpg",
    "alt": "Водная техника: состояние до работ",
    "project": "Водная техника",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Водная техника",
      "17"
    ],
    "category": "vodnaya-tehnika",
    "categoryLabel": "Водная техника"
  },
  {
    "id": 20018,
    "name": "18",
    "fileName": "18.jpg",
    "src": "./assets/allimages/vodnaya-tehnika/18.jpg",
    "alt": "Водная техника: этап подготовки",
    "project": "Водная техника",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Водная техника",
      "18"
    ],
    "category": "vodnaya-tehnika",
    "categoryLabel": "Водная техника"
  },
  {
    "id": 20019,
    "name": "19",
    "fileName": "19.jpg",
    "src": "./assets/allimages/vodnaya-tehnika/19.jpg",
    "alt": "Водная техника: промежуточный контроль",
    "project": "Водная техника",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Водная техника",
      "19"
    ],
    "category": "vodnaya-tehnika",
    "categoryLabel": "Водная техника"
  },
  {
    "id": 20020,
    "name": "20",
    "fileName": "20.jpg",
    "src": "./assets/allimages/vodnaya-tehnika/20.jpg",
    "alt": "Водная техника: готовый результат",
    "project": "Водная техника",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Водная техника",
      "20"
    ],
    "category": "vodnaya-tehnika",
    "categoryLabel": "Водная техника"
  },
  {
    "id": 20021,
    "name": "21",
    "fileName": "21.jpg",
    "src": "./assets/allimages/vodnaya-tehnika/21.jpg",
    "alt": "Водная техника: состояние до работ",
    "project": "Водная техника",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Водная техника",
      "21"
    ],
    "category": "vodnaya-tehnika",
    "categoryLabel": "Водная техника"
  },
  {
    "id": 20022,
    "name": "22",
    "fileName": "22.jpg",
    "src": "./assets/allimages/vodnaya-tehnika/22.jpg",
    "alt": "Водная техника: этап подготовки",
    "project": "Водная техника",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Водная техника",
      "22"
    ],
    "category": "vodnaya-tehnika",
    "categoryLabel": "Водная техника"
  },
  {
    "id": 20023,
    "name": "23",
    "fileName": "23.jpg",
    "src": "./assets/allimages/vodnaya-tehnika/23.jpg",
    "alt": "Водная техника: промежуточный контроль",
    "project": "Водная техника",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Водная техника",
      "23"
    ],
    "category": "vodnaya-tehnika",
    "categoryLabel": "Водная техника"
  },
  {
    "id": 20024,
    "name": "24",
    "fileName": "24.jpg",
    "src": "./assets/allimages/vodnaya-tehnika/24.jpg",
    "alt": "Водная техника: готовый результат",
    "project": "Водная техника",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Водная техника",
      "24"
    ],
    "category": "vodnaya-tehnika",
    "categoryLabel": "Водная техника"
  },
  {
    "id": 30001,
    "name": "1",
    "fileName": "1.jpeg",
    "src": "./assets/allimages/drugoe/1.jpeg",
    "alt": "Другое: состояние до работ",
    "project": "Другое",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Другое",
      "1"
    ],
    "category": "drugoe",
    "categoryLabel": "Другое"
  },
  {
    "id": 30002,
    "name": "2",
    "fileName": "2.jpeg",
    "src": "./assets/allimages/drugoe/2.jpeg",
    "alt": "Другое: этап подготовки",
    "project": "Другое",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Другое",
      "2"
    ],
    "category": "drugoe",
    "categoryLabel": "Другое"
  },
  {
    "id": 30003,
    "name": "3",
    "fileName": "3.jpg",
    "src": "./assets/allimages/drugoe/3.jpg",
    "alt": "Другое: промежуточный контроль",
    "project": "Другое",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Другое",
      "3"
    ],
    "category": "drugoe",
    "categoryLabel": "Другое"
  },
  {
    "id": 30004,
    "name": "4",
    "fileName": "4.jpg",
    "src": "./assets/allimages/drugoe/4.jpg",
    "alt": "Другое: готовый результат",
    "project": "Другое",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Другое",
      "4"
    ],
    "category": "drugoe",
    "categoryLabel": "Другое"
  },
  {
    "id": 30005,
    "name": "5",
    "fileName": "5.jpeg",
    "src": "./assets/allimages/drugoe/5.jpeg",
    "alt": "Другое: состояние до работ",
    "project": "Другое",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Другое",
      "5"
    ],
    "category": "drugoe",
    "categoryLabel": "Другое"
  },
  {
    "id": 30006,
    "name": "6",
    "fileName": "6.jpeg",
    "src": "./assets/allimages/drugoe/6.jpeg",
    "alt": "Другое: этап подготовки",
    "project": "Другое",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Другое",
      "6"
    ],
    "category": "drugoe",
    "categoryLabel": "Другое"
  },
  {
    "id": 30007,
    "name": "7",
    "fileName": "7.jpeg",
    "src": "./assets/allimages/drugoe/7.jpeg",
    "alt": "Другое: промежуточный контроль",
    "project": "Другое",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Другое",
      "7"
    ],
    "category": "drugoe",
    "categoryLabel": "Другое"
  },
  {
    "id": 30008,
    "name": "8",
    "fileName": "8.jpeg",
    "src": "./assets/allimages/drugoe/8.jpeg",
    "alt": "Другое: готовый результат",
    "project": "Другое",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Другое",
      "8"
    ],
    "category": "drugoe",
    "categoryLabel": "Другое"
  },
  {
    "id": 30009,
    "name": "9",
    "fileName": "9.jpeg",
    "src": "./assets/allimages/drugoe/9.jpeg",
    "alt": "Другое: состояние до работ",
    "project": "Другое",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Другое",
      "9"
    ],
    "category": "drugoe",
    "categoryLabel": "Другое"
  },
  {
    "id": 30010,
    "name": "10",
    "fileName": "10.jpg",
    "src": "./assets/allimages/drugoe/10.jpg",
    "alt": "Другое: этап подготовки",
    "project": "Другое",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Другое",
      "10"
    ],
    "category": "drugoe",
    "categoryLabel": "Другое"
  },
  {
    "id": 30011,
    "name": "11",
    "fileName": "11.jpeg",
    "src": "./assets/allimages/drugoe/11.jpeg",
    "alt": "Другое: промежуточный контроль",
    "project": "Другое",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Другое",
      "11"
    ],
    "category": "drugoe",
    "categoryLabel": "Другое"
  },
  {
    "id": 30012,
    "name": "12",
    "fileName": "12.jpeg",
    "src": "./assets/allimages/drugoe/12.jpeg",
    "alt": "Другое: готовый результат",
    "project": "Другое",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Другое",
      "12"
    ],
    "category": "drugoe",
    "categoryLabel": "Другое"
  },
  {
    "id": 30013,
    "name": "13",
    "fileName": "13.jpg",
    "src": "./assets/allimages/drugoe/13.jpg",
    "alt": "Другое: состояние до работ",
    "project": "Другое",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Другое",
      "13"
    ],
    "category": "drugoe",
    "categoryLabel": "Другое"
  },
  {
    "id": 30014,
    "name": "14",
    "fileName": "14.jpg",
    "src": "./assets/allimages/drugoe/14.jpg",
    "alt": "Другое: этап подготовки",
    "project": "Другое",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Другое",
      "14"
    ],
    "category": "drugoe",
    "categoryLabel": "Другое"
  },
  {
    "id": 30015,
    "name": "15",
    "fileName": "15.jpg",
    "src": "./assets/allimages/drugoe/15.jpg",
    "alt": "Другое: промежуточный контроль",
    "project": "Другое",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Другое",
      "15"
    ],
    "category": "drugoe",
    "categoryLabel": "Другое"
  },
  {
    "id": 30016,
    "name": "16",
    "fileName": "16.jpeg",
    "src": "./assets/allimages/drugoe/16.jpeg",
    "alt": "Другое: готовый результат",
    "project": "Другое",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Другое",
      "16"
    ],
    "category": "drugoe",
    "categoryLabel": "Другое"
  },
  {
    "id": 30017,
    "name": "17",
    "fileName": "17.jpg",
    "src": "./assets/allimages/drugoe/17.jpg",
    "alt": "Другое: состояние до работ",
    "project": "Другое",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Другое",
      "17"
    ],
    "category": "drugoe",
    "categoryLabel": "Другое"
  },
  {
    "id": 30018,
    "name": "18",
    "fileName": "18.jpg",
    "src": "./assets/allimages/drugoe/18.jpg",
    "alt": "Другое: этап подготовки",
    "project": "Другое",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Другое",
      "18"
    ],
    "category": "drugoe",
    "categoryLabel": "Другое"
  },
  {
    "id": 30019,
    "name": "19",
    "fileName": "19.jpg",
    "src": "./assets/allimages/drugoe/19.jpg",
    "alt": "Другое: промежуточный контроль",
    "project": "Другое",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Другое",
      "19"
    ],
    "category": "drugoe",
    "categoryLabel": "Другое"
  },
  {
    "id": 30020,
    "name": "20",
    "fileName": "20.jpg",
    "src": "./assets/allimages/drugoe/20.jpg",
    "alt": "Другое: готовый результат",
    "project": "Другое",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Другое",
      "20"
    ],
    "category": "drugoe",
    "categoryLabel": "Другое"
  },
  {
    "id": 30021,
    "name": "21",
    "fileName": "21.jpg",
    "src": "./assets/allimages/drugoe/21.jpg",
    "alt": "Другое: состояние до работ",
    "project": "Другое",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Другое",
      "21"
    ],
    "category": "drugoe",
    "categoryLabel": "Другое"
  },
  {
    "id": 30022,
    "name": "22",
    "fileName": "22.jpg",
    "src": "./assets/allimages/drugoe/22.jpg",
    "alt": "Другое: этап подготовки",
    "project": "Другое",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Другое",
      "22"
    ],
    "category": "drugoe",
    "categoryLabel": "Другое"
  },
  {
    "id": 30023,
    "name": "23",
    "fileName": "23.jpg",
    "src": "./assets/allimages/drugoe/23.jpg",
    "alt": "Другое: промежуточный контроль",
    "project": "Другое",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Другое",
      "23"
    ],
    "category": "drugoe",
    "categoryLabel": "Другое"
  },
  {
    "id": 30024,
    "name": "24",
    "fileName": "24.jpg",
    "src": "./assets/allimages/drugoe/24.jpg",
    "alt": "Другое: готовый результат",
    "project": "Другое",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Другое",
      "24"
    ],
    "category": "drugoe",
    "categoryLabel": "Другое"
  },
  {
    "id": 30025,
    "name": "25",
    "fileName": "25.jpg",
    "src": "./assets/allimages/drugoe/25.jpg",
    "alt": "Другое: состояние до работ",
    "project": "Другое",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Другое",
      "25"
    ],
    "category": "drugoe",
    "categoryLabel": "Другое"
  },
  {
    "id": 30026,
    "name": "26",
    "fileName": "26.jpg",
    "src": "./assets/allimages/drugoe/26.jpg",
    "alt": "Другое: этап подготовки",
    "project": "Другое",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Другое",
      "26"
    ],
    "category": "drugoe",
    "categoryLabel": "Другое"
  },
  {
    "id": 30027,
    "name": "27",
    "fileName": "27.jpg",
    "src": "./assets/allimages/drugoe/27.jpg",
    "alt": "Другое: промежуточный контроль",
    "project": "Другое",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Другое",
      "27"
    ],
    "category": "drugoe",
    "categoryLabel": "Другое"
  },
  {
    "id": 30028,
    "name": "28",
    "fileName": "28.jpg",
    "src": "./assets/allimages/drugoe/28.jpg",
    "alt": "Другое: готовый результат",
    "project": "Другое",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Другое",
      "28"
    ],
    "category": "drugoe",
    "categoryLabel": "Другое"
  },
  {
    "id": 30029,
    "name": "29",
    "fileName": "29.jpg",
    "src": "./assets/allimages/drugoe/29.jpg",
    "alt": "Другое: состояние до работ",
    "project": "Другое",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Другое",
      "29"
    ],
    "category": "drugoe",
    "categoryLabel": "Другое"
  },
  {
    "id": 30030,
    "name": "30",
    "fileName": "30.jpg",
    "src": "./assets/allimages/drugoe/30.jpg",
    "alt": "Другое: этап подготовки",
    "project": "Другое",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Другое",
      "30"
    ],
    "category": "drugoe",
    "categoryLabel": "Другое"
  },
  {
    "id": 30031,
    "name": "31",
    "fileName": "31.jpg",
    "src": "./assets/allimages/drugoe/31.jpg",
    "alt": "Другое: промежуточный контроль",
    "project": "Другое",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Другое",
      "31"
    ],
    "category": "drugoe",
    "categoryLabel": "Другое"
  },
  {
    "id": 30032,
    "name": "32",
    "fileName": "32.jpg",
    "src": "./assets/allimages/drugoe/32.jpg",
    "alt": "Другое: готовый результат",
    "project": "Другое",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Другое",
      "32"
    ],
    "category": "drugoe",
    "categoryLabel": "Другое"
  },
  {
    "id": 30033,
    "name": "33",
    "fileName": "33.jpg",
    "src": "./assets/allimages/drugoe/33.jpg",
    "alt": "Другое: состояние до работ",
    "project": "Другое",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Другое",
      "33"
    ],
    "category": "drugoe",
    "categoryLabel": "Другое"
  },
  {
    "id": 30034,
    "name": "34",
    "fileName": "34.jpg",
    "src": "./assets/allimages/drugoe/34.jpg",
    "alt": "Другое: этап подготовки",
    "project": "Другое",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Другое",
      "34"
    ],
    "category": "drugoe",
    "categoryLabel": "Другое"
  },
  {
    "id": 30035,
    "name": "35",
    "fileName": "35.jpg",
    "src": "./assets/allimages/drugoe/35.jpg",
    "alt": "Другое: промежуточный контроль",
    "project": "Другое",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Другое",
      "35"
    ],
    "category": "drugoe",
    "categoryLabel": "Другое"
  },
  {
    "id": 30036,
    "name": "36",
    "fileName": "36.jpg",
    "src": "./assets/allimages/drugoe/36.jpg",
    "alt": "Другое: готовый результат",
    "project": "Другое",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Другое",
      "36"
    ],
    "category": "drugoe",
    "categoryLabel": "Другое"
  },
  {
    "id": 30037,
    "name": "37",
    "fileName": "37.jpg",
    "src": "./assets/allimages/drugoe/37.jpg",
    "alt": "Другое: состояние до работ",
    "project": "Другое",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Другое",
      "37"
    ],
    "category": "drugoe",
    "categoryLabel": "Другое"
  },
  {
    "id": 30038,
    "name": "38",
    "fileName": "38.jpg",
    "src": "./assets/allimages/drugoe/38.jpg",
    "alt": "Другое: этап подготовки",
    "project": "Другое",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Другое",
      "38"
    ],
    "category": "drugoe",
    "categoryLabel": "Другое"
  },
  {
    "id": 40001,
    "name": "1",
    "fileName": "1.jpg",
    "src": "./assets/allimages/kmd/1.jpg",
    "alt": "КМД: состояние до работ",
    "project": "КМД",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "КМД",
      "1"
    ],
    "category": "kmd",
    "categoryLabel": "КМД"
  },
  {
    "id": 40002,
    "name": "2",
    "fileName": "2.jpg",
    "src": "./assets/allimages/kmd/2.jpg",
    "alt": "КМД: этап подготовки",
    "project": "КМД",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "КМД",
      "2"
    ],
    "category": "kmd",
    "categoryLabel": "КМД"
  },
  {
    "id": 40003,
    "name": "3",
    "fileName": "3.jpg",
    "src": "./assets/allimages/kmd/3.jpg",
    "alt": "КМД: промежуточный контроль",
    "project": "КМД",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "КМД",
      "3"
    ],
    "category": "kmd",
    "categoryLabel": "КМД"
  },
  {
    "id": 40004,
    "name": "4",
    "fileName": "4.jpg",
    "src": "./assets/allimages/kmd/4.jpg",
    "alt": "КМД: готовый результат",
    "project": "КМД",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "КМД",
      "4"
    ],
    "category": "kmd",
    "categoryLabel": "КМД"
  },
  {
    "id": 40005,
    "name": "5",
    "fileName": "5.jpg",
    "src": "./assets/allimages/kmd/5.jpg",
    "alt": "КМД: состояние до работ",
    "project": "КМД",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "КМД",
      "5"
    ],
    "category": "kmd",
    "categoryLabel": "КМД"
  },
  {
    "id": 40006,
    "name": "6",
    "fileName": "6.jpg",
    "src": "./assets/allimages/kmd/6.jpg",
    "alt": "КМД: этап подготовки",
    "project": "КМД",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "КМД",
      "6"
    ],
    "category": "kmd",
    "categoryLabel": "КМД"
  },
  {
    "id": 40007,
    "name": "7",
    "fileName": "7.jpg",
    "src": "./assets/allimages/kmd/7.jpg",
    "alt": "КМД: промежуточный контроль",
    "project": "КМД",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "КМД",
      "7"
    ],
    "category": "kmd",
    "categoryLabel": "КМД"
  },
  {
    "id": 40008,
    "name": "8",
    "fileName": "8.jpeg",
    "src": "./assets/allimages/kmd/8.jpeg",
    "alt": "КМД: готовый результат",
    "project": "КМД",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "КМД",
      "8"
    ],
    "category": "kmd",
    "categoryLabel": "КМД"
  },
  {
    "id": 40009,
    "name": "9",
    "fileName": "9.jpeg",
    "src": "./assets/allimages/kmd/9.jpeg",
    "alt": "КМД: состояние до работ",
    "project": "КМД",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "КМД",
      "9"
    ],
    "category": "kmd",
    "categoryLabel": "КМД"
  },
  {
    "id": 40010,
    "name": "10",
    "fileName": "10.jpeg",
    "src": "./assets/allimages/kmd/10.jpeg",
    "alt": "КМД: этап подготовки",
    "project": "КМД",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "КМД",
      "10"
    ],
    "category": "kmd",
    "categoryLabel": "КМД"
  },
  {
    "id": 40011,
    "name": "11",
    "fileName": "11.jpeg",
    "src": "./assets/allimages/kmd/11.jpeg",
    "alt": "КМД: промежуточный контроль",
    "project": "КМД",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "КМД",
      "11"
    ],
    "category": "kmd",
    "categoryLabel": "КМД"
  },
  {
    "id": 40012,
    "name": "12",
    "fileName": "12.jpg",
    "src": "./assets/allimages/kmd/12.jpg",
    "alt": "КМД: готовый результат",
    "project": "КМД",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "КМД",
      "12"
    ],
    "category": "kmd",
    "categoryLabel": "КМД"
  },
  {
    "id": 40013,
    "name": "13",
    "fileName": "13.jpg",
    "src": "./assets/allimages/kmd/13.jpg",
    "alt": "КМД: состояние до работ",
    "project": "КМД",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "КМД",
      "13"
    ],
    "category": "kmd",
    "categoryLabel": "КМД"
  },
  {
    "id": 40014,
    "name": "14",
    "fileName": "14.jpeg",
    "src": "./assets/allimages/kmd/14.jpeg",
    "alt": "КМД: этап подготовки",
    "project": "КМД",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "КМД",
      "14"
    ],
    "category": "kmd",
    "categoryLabel": "КМД"
  },
  {
    "id": 40015,
    "name": "15",
    "fileName": "15.jpg",
    "src": "./assets/allimages/kmd/15.jpg",
    "alt": "КМД: промежуточный контроль",
    "project": "КМД",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "КМД",
      "15"
    ],
    "category": "kmd",
    "categoryLabel": "КМД"
  },
  {
    "id": 40016,
    "name": "16",
    "fileName": "16.jpg",
    "src": "./assets/allimages/kmd/16.jpg",
    "alt": "КМД: готовый результат",
    "project": "КМД",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "КМД",
      "16"
    ],
    "category": "kmd",
    "categoryLabel": "КМД"
  },
  {
    "id": 50001,
    "name": "1",
    "fileName": "1.jpeg",
    "src": "./assets/allimages/krany-kmu/1.jpeg",
    "alt": "Краны и КМУ: состояние до работ",
    "project": "Краны и КМУ",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Краны и КМУ",
      "1"
    ],
    "category": "krany-kmu",
    "categoryLabel": "Краны и КМУ"
  },
  {
    "id": 50002,
    "name": "2",
    "fileName": "2.jpeg",
    "src": "./assets/allimages/krany-kmu/2.jpeg",
    "alt": "Краны и КМУ: этап подготовки",
    "project": "Краны и КМУ",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Краны и КМУ",
      "2"
    ],
    "category": "krany-kmu",
    "categoryLabel": "Краны и КМУ"
  },
  {
    "id": 50003,
    "name": "3",
    "fileName": "3.jpeg",
    "src": "./assets/allimages/krany-kmu/3.jpeg",
    "alt": "Краны и КМУ: промежуточный контроль",
    "project": "Краны и КМУ",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Краны и КМУ",
      "3"
    ],
    "category": "krany-kmu",
    "categoryLabel": "Краны и КМУ"
  },
  {
    "id": 50004,
    "name": "4",
    "fileName": "4.jpg",
    "src": "./assets/allimages/krany-kmu/4.jpg",
    "alt": "Краны и КМУ: готовый результат",
    "project": "Краны и КМУ",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Краны и КМУ",
      "4"
    ],
    "category": "krany-kmu",
    "categoryLabel": "Краны и КМУ"
  },
  {
    "id": 50005,
    "name": "5",
    "fileName": "5.jpeg",
    "src": "./assets/allimages/krany-kmu/5.jpeg",
    "alt": "Краны и КМУ: состояние до работ",
    "project": "Краны и КМУ",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Краны и КМУ",
      "5"
    ],
    "category": "krany-kmu",
    "categoryLabel": "Краны и КМУ"
  },
  {
    "id": 50006,
    "name": "6",
    "fileName": "6.jpeg",
    "src": "./assets/allimages/krany-kmu/6.jpeg",
    "alt": "Краны и КМУ: этап подготовки",
    "project": "Краны и КМУ",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Краны и КМУ",
      "6"
    ],
    "category": "krany-kmu",
    "categoryLabel": "Краны и КМУ"
  },
  {
    "id": 50007,
    "name": "7",
    "fileName": "7.jpg",
    "src": "./assets/allimages/krany-kmu/7.jpg",
    "alt": "Краны и КМУ: промежуточный контроль",
    "project": "Краны и КМУ",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Краны и КМУ",
      "7"
    ],
    "category": "krany-kmu",
    "categoryLabel": "Краны и КМУ"
  },
  {
    "id": 50008,
    "name": "8",
    "fileName": "8.jpeg",
    "src": "./assets/allimages/krany-kmu/8.jpeg",
    "alt": "Краны и КМУ: готовый результат",
    "project": "Краны и КМУ",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Краны и КМУ",
      "8"
    ],
    "category": "krany-kmu",
    "categoryLabel": "Краны и КМУ"
  },
  {
    "id": 50009,
    "name": "9",
    "fileName": "9.jpg",
    "src": "./assets/allimages/krany-kmu/9.jpg",
    "alt": "Краны и КМУ: состояние до работ",
    "project": "Краны и КМУ",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Краны и КМУ",
      "9"
    ],
    "category": "krany-kmu",
    "categoryLabel": "Краны и КМУ"
  },
  {
    "id": 50010,
    "name": "10",
    "fileName": "10.jpg",
    "src": "./assets/allimages/krany-kmu/10.jpg",
    "alt": "Краны и КМУ: этап подготовки",
    "project": "Краны и КМУ",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Краны и КМУ",
      "10"
    ],
    "category": "krany-kmu",
    "categoryLabel": "Краны и КМУ"
  },
  {
    "id": 50011,
    "name": "11",
    "fileName": "11.jpg",
    "src": "./assets/allimages/krany-kmu/11.jpg",
    "alt": "Краны и КМУ: промежуточный контроль",
    "project": "Краны и КМУ",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Краны и КМУ",
      "11"
    ],
    "category": "krany-kmu",
    "categoryLabel": "Краны и КМУ"
  },
  {
    "id": 50012,
    "name": "12",
    "fileName": "12.jpg",
    "src": "./assets/allimages/krany-kmu/12.jpg",
    "alt": "Краны и КМУ: готовый результат",
    "project": "Краны и КМУ",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Краны и КМУ",
      "12"
    ],
    "category": "krany-kmu",
    "categoryLabel": "Краны и КМУ"
  },
  {
    "id": 50013,
    "name": "13",
    "fileName": "13.jpeg",
    "src": "./assets/allimages/krany-kmu/13.jpeg",
    "alt": "Краны и КМУ: состояние до работ",
    "project": "Краны и КМУ",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Краны и КМУ",
      "13"
    ],
    "category": "krany-kmu",
    "categoryLabel": "Краны и КМУ"
  },
  {
    "id": 50014,
    "name": "14",
    "fileName": "14.jpeg",
    "src": "./assets/allimages/krany-kmu/14.jpeg",
    "alt": "Краны и КМУ: этап подготовки",
    "project": "Краны и КМУ",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Краны и КМУ",
      "14"
    ],
    "category": "krany-kmu",
    "categoryLabel": "Краны и КМУ"
  },
  {
    "id": 60001,
    "name": "1",
    "fileName": "1.jpg",
    "src": "./assets/allimages/kuzova-ramy/1.jpg",
    "alt": "Кузова и рамы: состояние до работ",
    "project": "Кузова и рамы",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "1"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60002,
    "name": "2",
    "fileName": "2.jpg",
    "src": "./assets/allimages/kuzova-ramy/2.jpg",
    "alt": "Кузова и рамы: этап подготовки",
    "project": "Кузова и рамы",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "2"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60003,
    "name": "3",
    "fileName": "3.jpg",
    "src": "./assets/allimages/kuzova-ramy/3.jpg",
    "alt": "Кузова и рамы: промежуточный контроль",
    "project": "Кузова и рамы",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "3"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60004,
    "name": "4",
    "fileName": "4.jpg",
    "src": "./assets/allimages/kuzova-ramy/4.jpg",
    "alt": "Кузова и рамы: готовый результат",
    "project": "Кузова и рамы",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "4"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60005,
    "name": "5",
    "fileName": "5.jpeg",
    "src": "./assets/allimages/kuzova-ramy/5.jpeg",
    "alt": "Кузова и рамы: состояние до работ",
    "project": "Кузова и рамы",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "5"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60006,
    "name": "6",
    "fileName": "6.jpeg",
    "src": "./assets/allimages/kuzova-ramy/6.jpeg",
    "alt": "Кузова и рамы: этап подготовки",
    "project": "Кузова и рамы",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "6"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60007,
    "name": "7",
    "fileName": "7.jpeg",
    "src": "./assets/allimages/kuzova-ramy/7.jpeg",
    "alt": "Кузова и рамы: промежуточный контроль",
    "project": "Кузова и рамы",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "7"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60008,
    "name": "8",
    "fileName": "8.jpeg",
    "src": "./assets/allimages/kuzova-ramy/8.jpeg",
    "alt": "Кузова и рамы: готовый результат",
    "project": "Кузова и рамы",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "8"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60009,
    "name": "9",
    "fileName": "9.jpeg",
    "src": "./assets/allimages/kuzova-ramy/9.jpeg",
    "alt": "Кузова и рамы: состояние до работ",
    "project": "Кузова и рамы",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "9"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60010,
    "name": "10",
    "fileName": "10.jpeg",
    "src": "./assets/allimages/kuzova-ramy/10.jpeg",
    "alt": "Кузова и рамы: этап подготовки",
    "project": "Кузова и рамы",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "10"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60011,
    "name": "11",
    "fileName": "11.jpeg",
    "src": "./assets/allimages/kuzova-ramy/11.jpeg",
    "alt": "Кузова и рамы: промежуточный контроль",
    "project": "Кузова и рамы",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "11"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60012,
    "name": "12",
    "fileName": "12.jpeg",
    "src": "./assets/allimages/kuzova-ramy/12.jpeg",
    "alt": "Кузова и рамы: готовый результат",
    "project": "Кузова и рамы",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "12"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60013,
    "name": "13",
    "fileName": "13.jpeg",
    "src": "./assets/allimages/kuzova-ramy/13.jpeg",
    "alt": "Кузова и рамы: состояние до работ",
    "project": "Кузова и рамы",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "13"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60014,
    "name": "14",
    "fileName": "14.jpeg",
    "src": "./assets/allimages/kuzova-ramy/14.jpeg",
    "alt": "Кузова и рамы: этап подготовки",
    "project": "Кузова и рамы",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "14"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60015,
    "name": "15",
    "fileName": "15.jpg",
    "src": "./assets/allimages/kuzova-ramy/15.jpg",
    "alt": "Кузова и рамы: промежуточный контроль",
    "project": "Кузова и рамы",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "15"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60016,
    "name": "16",
    "fileName": "16.jpeg",
    "src": "./assets/allimages/kuzova-ramy/16.jpeg",
    "alt": "Кузова и рамы: готовый результат",
    "project": "Кузова и рамы",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "16"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60017,
    "name": "17",
    "fileName": "17.jpeg",
    "src": "./assets/allimages/kuzova-ramy/17.jpeg",
    "alt": "Кузова и рамы: состояние до работ",
    "project": "Кузова и рамы",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "17"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60018,
    "name": "18",
    "fileName": "18.jpeg",
    "src": "./assets/allimages/kuzova-ramy/18.jpeg",
    "alt": "Кузова и рамы: этап подготовки",
    "project": "Кузова и рамы",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "18"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60019,
    "name": "19",
    "fileName": "19.jpeg",
    "src": "./assets/allimages/kuzova-ramy/19.jpeg",
    "alt": "Кузова и рамы: промежуточный контроль",
    "project": "Кузова и рамы",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "19"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60020,
    "name": "20",
    "fileName": "20.jpeg",
    "src": "./assets/allimages/kuzova-ramy/20.jpeg",
    "alt": "Кузова и рамы: готовый результат",
    "project": "Кузова и рамы",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "20"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60021,
    "name": "21",
    "fileName": "21.jpeg",
    "src": "./assets/allimages/kuzova-ramy/21.jpeg",
    "alt": "Кузова и рамы: состояние до работ",
    "project": "Кузова и рамы",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "21"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60022,
    "name": "22",
    "fileName": "22.jpeg",
    "src": "./assets/allimages/kuzova-ramy/22.jpeg",
    "alt": "Кузова и рамы: этап подготовки",
    "project": "Кузова и рамы",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "22"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60023,
    "name": "23",
    "fileName": "23.jpeg",
    "src": "./assets/allimages/kuzova-ramy/23.jpeg",
    "alt": "Кузова и рамы: промежуточный контроль",
    "project": "Кузова и рамы",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "23"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60024,
    "name": "24",
    "fileName": "24.jpeg",
    "src": "./assets/allimages/kuzova-ramy/24.jpeg",
    "alt": "Кузова и рамы: готовый результат",
    "project": "Кузова и рамы",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "24"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60025,
    "name": "25",
    "fileName": "25.jpeg",
    "src": "./assets/allimages/kuzova-ramy/25.jpeg",
    "alt": "Кузова и рамы: состояние до работ",
    "project": "Кузова и рамы",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "25"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60026,
    "name": "26",
    "fileName": "26.jpeg",
    "src": "./assets/allimages/kuzova-ramy/26.jpeg",
    "alt": "Кузова и рамы: этап подготовки",
    "project": "Кузова и рамы",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "26"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60027,
    "name": "27",
    "fileName": "27.jpeg",
    "src": "./assets/allimages/kuzova-ramy/27.jpeg",
    "alt": "Кузова и рамы: промежуточный контроль",
    "project": "Кузова и рамы",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "27"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60028,
    "name": "28",
    "fileName": "28.jpeg",
    "src": "./assets/allimages/kuzova-ramy/28.jpeg",
    "alt": "Кузова и рамы: готовый результат",
    "project": "Кузова и рамы",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "28"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60029,
    "name": "29",
    "fileName": "29.jpeg",
    "src": "./assets/allimages/kuzova-ramy/29.jpeg",
    "alt": "Кузова и рамы: состояние до работ",
    "project": "Кузова и рамы",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "29"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60030,
    "name": "30",
    "fileName": "30.jpeg",
    "src": "./assets/allimages/kuzova-ramy/30.jpeg",
    "alt": "Кузова и рамы: этап подготовки",
    "project": "Кузова и рамы",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "30"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60031,
    "name": "31",
    "fileName": "31.jpeg",
    "src": "./assets/allimages/kuzova-ramy/31.jpeg",
    "alt": "Кузова и рамы: промежуточный контроль",
    "project": "Кузова и рамы",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "31"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60032,
    "name": "32",
    "fileName": "32.jpeg",
    "src": "./assets/allimages/kuzova-ramy/32.jpeg",
    "alt": "Кузова и рамы: готовый результат",
    "project": "Кузова и рамы",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "32"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60033,
    "name": "33",
    "fileName": "33.jpeg",
    "src": "./assets/allimages/kuzova-ramy/33.jpeg",
    "alt": "Кузова и рамы: состояние до работ",
    "project": "Кузова и рамы",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "33"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60034,
    "name": "34",
    "fileName": "34.jpeg",
    "src": "./assets/allimages/kuzova-ramy/34.jpeg",
    "alt": "Кузова и рамы: этап подготовки",
    "project": "Кузова и рамы",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "34"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60035,
    "name": "35",
    "fileName": "35.jpeg",
    "src": "./assets/allimages/kuzova-ramy/35.jpeg",
    "alt": "Кузова и рамы: промежуточный контроль",
    "project": "Кузова и рамы",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "35"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60036,
    "name": "36",
    "fileName": "36.jpeg",
    "src": "./assets/allimages/kuzova-ramy/36.jpeg",
    "alt": "Кузова и рамы: готовый результат",
    "project": "Кузова и рамы",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "36"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60037,
    "name": "37",
    "fileName": "37.jpg",
    "src": "./assets/allimages/kuzova-ramy/37.jpg",
    "alt": "Кузова и рамы: состояние до работ",
    "project": "Кузова и рамы",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "37"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60038,
    "name": "38",
    "fileName": "38.jpg",
    "src": "./assets/allimages/kuzova-ramy/38.jpg",
    "alt": "Кузова и рамы: этап подготовки",
    "project": "Кузова и рамы",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "38"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60039,
    "name": "39",
    "fileName": "39.jpg",
    "src": "./assets/allimages/kuzova-ramy/39.jpg",
    "alt": "Кузова и рамы: промежуточный контроль",
    "project": "Кузова и рамы",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "39"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60040,
    "name": "40",
    "fileName": "40.jpg",
    "src": "./assets/allimages/kuzova-ramy/40.jpg",
    "alt": "Кузова и рамы: готовый результат",
    "project": "Кузова и рамы",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "40"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60041,
    "name": "41",
    "fileName": "41.jpg",
    "src": "./assets/allimages/kuzova-ramy/41.jpg",
    "alt": "Кузова и рамы: состояние до работ",
    "project": "Кузова и рамы",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "41"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60042,
    "name": "42",
    "fileName": "42.jpg",
    "src": "./assets/allimages/kuzova-ramy/42.jpg",
    "alt": "Кузова и рамы: этап подготовки",
    "project": "Кузова и рамы",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "42"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60043,
    "name": "43",
    "fileName": "43.jpg",
    "src": "./assets/allimages/kuzova-ramy/43.jpg",
    "alt": "Кузова и рамы: промежуточный контроль",
    "project": "Кузова и рамы",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "43"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60044,
    "name": "44",
    "fileName": "44.jpg",
    "src": "./assets/allimages/kuzova-ramy/44.jpg",
    "alt": "Кузова и рамы: готовый результат",
    "project": "Кузова и рамы",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "44"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60045,
    "name": "45",
    "fileName": "45.jpg",
    "src": "./assets/allimages/kuzova-ramy/45.jpg",
    "alt": "Кузова и рамы: состояние до работ",
    "project": "Кузова и рамы",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "45"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60046,
    "name": "46",
    "fileName": "46.jpg",
    "src": "./assets/allimages/kuzova-ramy/46.jpg",
    "alt": "Кузова и рамы: этап подготовки",
    "project": "Кузова и рамы",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "46"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60047,
    "name": "47",
    "fileName": "47.jpg",
    "src": "./assets/allimages/kuzova-ramy/47.jpg",
    "alt": "Кузова и рамы: промежуточный контроль",
    "project": "Кузова и рамы",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "47"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60048,
    "name": "48",
    "fileName": "48.jpg",
    "src": "./assets/allimages/kuzova-ramy/48.jpg",
    "alt": "Кузова и рамы: готовый результат",
    "project": "Кузова и рамы",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "48"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60049,
    "name": "49",
    "fileName": "49.jpg",
    "src": "./assets/allimages/kuzova-ramy/49.jpg",
    "alt": "Кузова и рамы: состояние до работ",
    "project": "Кузова и рамы",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "49"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60050,
    "name": "50",
    "fileName": "50.jpg",
    "src": "./assets/allimages/kuzova-ramy/50.jpg",
    "alt": "Кузова и рамы: этап подготовки",
    "project": "Кузова и рамы",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "50"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60051,
    "name": "51",
    "fileName": "51.jpg",
    "src": "./assets/allimages/kuzova-ramy/51.jpg",
    "alt": "Кузова и рамы: промежуточный контроль",
    "project": "Кузова и рамы",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "51"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60052,
    "name": "52",
    "fileName": "52.jpg",
    "src": "./assets/allimages/kuzova-ramy/52.jpg",
    "alt": "Кузова и рамы: готовый результат",
    "project": "Кузова и рамы",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "52"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60053,
    "name": "53",
    "fileName": "53.jpg",
    "src": "./assets/allimages/kuzova-ramy/53.jpg",
    "alt": "Кузова и рамы: состояние до работ",
    "project": "Кузова и рамы",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "53"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60054,
    "name": "54",
    "fileName": "54.jpg",
    "src": "./assets/allimages/kuzova-ramy/54.jpg",
    "alt": "Кузова и рамы: этап подготовки",
    "project": "Кузова и рамы",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "54"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60055,
    "name": "55",
    "fileName": "55.jpg",
    "src": "./assets/allimages/kuzova-ramy/55.jpg",
    "alt": "Кузова и рамы: промежуточный контроль",
    "project": "Кузова и рамы",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "55"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60056,
    "name": "56",
    "fileName": "56.jpg",
    "src": "./assets/allimages/kuzova-ramy/56.jpg",
    "alt": "Кузова и рамы: готовый результат",
    "project": "Кузова и рамы",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "56"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60057,
    "name": "57",
    "fileName": "57.jpg",
    "src": "./assets/allimages/kuzova-ramy/57.jpg",
    "alt": "Кузова и рамы: состояние до работ",
    "project": "Кузова и рамы",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "57"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 60058,
    "name": "58",
    "fileName": "58.jpg",
    "src": "./assets/allimages/kuzova-ramy/58.jpg",
    "alt": "Кузова и рамы: этап подготовки",
    "project": "Кузова и рамы",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Кузова и рамы",
      "58"
    ],
    "category": "kuzova-ramy",
    "categoryLabel": "Кузова и рамы"
  },
  {
    "id": 70001,
    "name": "WhatsApp Image 2025-11-11 at 08.07.38 (2)",
    "fileName": "WhatsApp Image 2025-11-11 at 08.07.38 (2).jpeg",
    "src": "./assets/allimages/svar-raboty/WhatsApp Image 2025-11-11 at 08.07.38 (2).jpeg",
    "alt": "Свар. работы: состояние до работ",
    "project": "Свар. работы",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Свар. работы",
      "WhatsApp Image 2025-11-11 at 08.07.38 (2)"
    ],
    "category": "svar-raboty",
    "categoryLabel": "Свар. работы"
  },
  {
    "id": 70002,
    "name": "WhatsApp Image 2025-11-11 at 08.07.41",
    "fileName": "WhatsApp Image 2025-11-11 at 08.07.41.jpeg",
    "src": "./assets/allimages/svar-raboty/WhatsApp Image 2025-11-11 at 08.07.41.jpeg",
    "alt": "Свар. работы: этап подготовки",
    "project": "Свар. работы",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Свар. работы",
      "WhatsApp Image 2025-11-11 at 08.07.41"
    ],
    "category": "svar-raboty",
    "categoryLabel": "Свар. работы"
  },
  {
    "id": 70003,
    "name": "WhatsApp Image 2025-11-11 at 08.07.41 (2)",
    "fileName": "WhatsApp Image 2025-11-11 at 08.07.41 (2).jpeg",
    "src": "./assets/allimages/svar-raboty/WhatsApp Image 2025-11-11 at 08.07.41 (2).jpeg",
    "alt": "Свар. работы: промежуточный контроль",
    "project": "Свар. работы",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Свар. работы",
      "WhatsApp Image 2025-11-11 at 08.07.41 (2)"
    ],
    "category": "svar-raboty",
    "categoryLabel": "Свар. работы"
  },
  {
    "id": 70004,
    "name": "WhatsApp Image 2025-11-11 at 08.07.41 (4)",
    "fileName": "WhatsApp Image 2025-11-11 at 08.07.41 (4).jpeg",
    "src": "./assets/allimages/svar-raboty/WhatsApp Image 2025-11-11 at 08.07.41 (4).jpeg",
    "alt": "Свар. работы: готовый результат",
    "project": "Свар. работы",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Свар. работы",
      "WhatsApp Image 2025-11-11 at 08.07.41 (4)"
    ],
    "category": "svar-raboty",
    "categoryLabel": "Свар. работы"
  },
  {
    "id": 70005,
    "name": "WhatsApp Image 2025-11-11 at 08.07.43 (1)",
    "fileName": "WhatsApp Image 2025-11-11 at 08.07.43 (1).jpeg",
    "src": "./assets/allimages/svar-raboty/WhatsApp Image 2025-11-11 at 08.07.43 (1).jpeg",
    "alt": "Свар. работы: состояние до работ",
    "project": "Свар. работы",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Свар. работы",
      "WhatsApp Image 2025-11-11 at 08.07.43 (1)"
    ],
    "category": "svar-raboty",
    "categoryLabel": "Свар. работы"
  },
  {
    "id": 80001,
    "name": "1",
    "fileName": "1.jpg",
    "src": "./assets/allimages/traly-pricepy/1.jpg",
    "alt": "Тралы и прицепы: состояние до работ",
    "project": "Тралы и прицепы",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Тралы и прицепы",
      "1"
    ],
    "category": "traly-pricepy",
    "categoryLabel": "Тралы и прицепы"
  },
  {
    "id": 80002,
    "name": "2",
    "fileName": "2.jpg",
    "src": "./assets/allimages/traly-pricepy/2.jpg",
    "alt": "Тралы и прицепы: этап подготовки",
    "project": "Тралы и прицепы",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Тралы и прицепы",
      "2"
    ],
    "category": "traly-pricepy",
    "categoryLabel": "Тралы и прицепы"
  },
  {
    "id": 80003,
    "name": "3",
    "fileName": "3.jpg",
    "src": "./assets/allimages/traly-pricepy/3.jpg",
    "alt": "Тралы и прицепы: промежуточный контроль",
    "project": "Тралы и прицепы",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Тралы и прицепы",
      "3"
    ],
    "category": "traly-pricepy",
    "categoryLabel": "Тралы и прицепы"
  },
  {
    "id": 80004,
    "name": "4",
    "fileName": "4.jpg",
    "src": "./assets/allimages/traly-pricepy/4.jpg",
    "alt": "Тралы и прицепы: готовый результат",
    "project": "Тралы и прицепы",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Тралы и прицепы",
      "4"
    ],
    "category": "traly-pricepy",
    "categoryLabel": "Тралы и прицепы"
  },
  {
    "id": 80005,
    "name": "5",
    "fileName": "5.jpg",
    "src": "./assets/allimages/traly-pricepy/5.jpg",
    "alt": "Тралы и прицепы: состояние до работ",
    "project": "Тралы и прицепы",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Тралы и прицепы",
      "5"
    ],
    "category": "traly-pricepy",
    "categoryLabel": "Тралы и прицепы"
  },
  {
    "id": 80006,
    "name": "6",
    "fileName": "6.jpg",
    "src": "./assets/allimages/traly-pricepy/6.jpg",
    "alt": "Тралы и прицепы: этап подготовки",
    "project": "Тралы и прицепы",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Тралы и прицепы",
      "6"
    ],
    "category": "traly-pricepy",
    "categoryLabel": "Тралы и прицепы"
  },
  {
    "id": 80007,
    "name": "7",
    "fileName": "7.jpg",
    "src": "./assets/allimages/traly-pricepy/7.jpg",
    "alt": "Тралы и прицепы: промежуточный контроль",
    "project": "Тралы и прицепы",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Тралы и прицепы",
      "7"
    ],
    "category": "traly-pricepy",
    "categoryLabel": "Тралы и прицепы"
  },
  {
    "id": 80008,
    "name": "8",
    "fileName": "8.jpg",
    "src": "./assets/allimages/traly-pricepy/8.jpg",
    "alt": "Тралы и прицепы: готовый результат",
    "project": "Тралы и прицепы",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Тралы и прицепы",
      "8"
    ],
    "category": "traly-pricepy",
    "categoryLabel": "Тралы и прицепы"
  },
  {
    "id": 80009,
    "name": "9",
    "fileName": "9.jpg",
    "src": "./assets/allimages/traly-pricepy/9.jpg",
    "alt": "Тралы и прицепы: состояние до работ",
    "project": "Тралы и прицепы",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Тралы и прицепы",
      "9"
    ],
    "category": "traly-pricepy",
    "categoryLabel": "Тралы и прицепы"
  },
  {
    "id": 80010,
    "name": "10",
    "fileName": "10.jpg",
    "src": "./assets/allimages/traly-pricepy/10.jpg",
    "alt": "Тралы и прицепы: этап подготовки",
    "project": "Тралы и прицепы",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Тралы и прицепы",
      "10"
    ],
    "category": "traly-pricepy",
    "categoryLabel": "Тралы и прицепы"
  },
  {
    "id": 80011,
    "name": "11",
    "fileName": "11.jpg",
    "src": "./assets/allimages/traly-pricepy/11.jpg",
    "alt": "Тралы и прицепы: промежуточный контроль",
    "project": "Тралы и прицепы",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Тралы и прицепы",
      "11"
    ],
    "category": "traly-pricepy",
    "categoryLabel": "Тралы и прицепы"
  },
  {
    "id": 80012,
    "name": "12",
    "fileName": "12.jpg",
    "src": "./assets/allimages/traly-pricepy/12.jpg",
    "alt": "Тралы и прицепы: готовый результат",
    "project": "Тралы и прицепы",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Тралы и прицепы",
      "12"
    ],
    "category": "traly-pricepy",
    "categoryLabel": "Тралы и прицепы"
  },
  {
    "id": 80013,
    "name": "13",
    "fileName": "13.jpg",
    "src": "./assets/allimages/traly-pricepy/13.jpg",
    "alt": "Тралы и прицепы: состояние до работ",
    "project": "Тралы и прицепы",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Тралы и прицепы",
      "13"
    ],
    "category": "traly-pricepy",
    "categoryLabel": "Тралы и прицепы"
  },
  {
    "id": 80014,
    "name": "14",
    "fileName": "14.jpg",
    "src": "./assets/allimages/traly-pricepy/14.jpg",
    "alt": "Тралы и прицепы: этап подготовки",
    "project": "Тралы и прицепы",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Тралы и прицепы",
      "14"
    ],
    "category": "traly-pricepy",
    "categoryLabel": "Тралы и прицепы"
  },
  {
    "id": 80015,
    "name": "15",
    "fileName": "15.jpg",
    "src": "./assets/allimages/traly-pricepy/15.jpg",
    "alt": "Тралы и прицепы: промежуточный контроль",
    "project": "Тралы и прицепы",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Тралы и прицепы",
      "15"
    ],
    "category": "traly-pricepy",
    "categoryLabel": "Тралы и прицепы"
  },
  {
    "id": 80016,
    "name": "16",
    "fileName": "16.jpg",
    "src": "./assets/allimages/traly-pricepy/16.jpg",
    "alt": "Тралы и прицепы: готовый результат",
    "project": "Тралы и прицепы",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Тралы и прицепы",
      "16"
    ],
    "category": "traly-pricepy",
    "categoryLabel": "Тралы и прицепы"
  },
  {
    "id": 80017,
    "name": "17",
    "fileName": "17.jpg",
    "src": "./assets/allimages/traly-pricepy/17.jpg",
    "alt": "Тралы и прицепы: состояние до работ",
    "project": "Тралы и прицепы",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Тралы и прицепы",
      "17"
    ],
    "category": "traly-pricepy",
    "categoryLabel": "Тралы и прицепы"
  },
  {
    "id": 80018,
    "name": "18",
    "fileName": "18.jpg",
    "src": "./assets/allimages/traly-pricepy/18.jpg",
    "alt": "Тралы и прицепы: этап подготовки",
    "project": "Тралы и прицепы",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Тралы и прицепы",
      "18"
    ],
    "category": "traly-pricepy",
    "categoryLabel": "Тралы и прицепы"
  },
  {
    "id": 80019,
    "name": "19",
    "fileName": "19.jpeg",
    "src": "./assets/allimages/traly-pricepy/19.jpeg",
    "alt": "Тралы и прицепы: промежуточный контроль",
    "project": "Тралы и прицепы",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Тралы и прицепы",
      "19"
    ],
    "category": "traly-pricepy",
    "categoryLabel": "Тралы и прицепы"
  },
  {
    "id": 80020,
    "name": "20",
    "fileName": "20.jpg",
    "src": "./assets/allimages/traly-pricepy/20.jpg",
    "alt": "Тралы и прицепы: готовый результат",
    "project": "Тралы и прицепы",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Тралы и прицепы",
      "20"
    ],
    "category": "traly-pricepy",
    "categoryLabel": "Тралы и прицепы"
  },
  {
    "id": 80021,
    "name": "21",
    "fileName": "21.jpg",
    "src": "./assets/allimages/traly-pricepy/21.jpg",
    "alt": "Тралы и прицепы: состояние до работ",
    "project": "Тралы и прицепы",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Тралы и прицепы",
      "21"
    ],
    "category": "traly-pricepy",
    "categoryLabel": "Тралы и прицепы"
  },
  {
    "id": 80022,
    "name": "22",
    "fileName": "22.jpg",
    "src": "./assets/allimages/traly-pricepy/22.jpg",
    "alt": "Тралы и прицепы: этап подготовки",
    "project": "Тралы и прицепы",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Тралы и прицепы",
      "22"
    ],
    "category": "traly-pricepy",
    "categoryLabel": "Тралы и прицепы"
  },
  {
    "id": 80023,
    "name": "23",
    "fileName": "23.jpg",
    "src": "./assets/allimages/traly-pricepy/23.jpg",
    "alt": "Тралы и прицепы: промежуточный контроль",
    "project": "Тралы и прицепы",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Тралы и прицепы",
      "23"
    ],
    "category": "traly-pricepy",
    "categoryLabel": "Тралы и прицепы"
  },
  {
    "id": 80024,
    "name": "24",
    "fileName": "24.jpg",
    "src": "./assets/allimages/traly-pricepy/24.jpg",
    "alt": "Тралы и прицепы: готовый результат",
    "project": "Тралы и прицепы",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Тралы и прицепы",
      "24"
    ],
    "category": "traly-pricepy",
    "categoryLabel": "Тралы и прицепы"
  },
  {
    "id": 80025,
    "name": "25",
    "fileName": "25.jpeg",
    "src": "./assets/allimages/traly-pricepy/25.jpeg",
    "alt": "Тралы и прицепы: состояние до работ",
    "project": "Тралы и прицепы",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Тралы и прицепы",
      "25"
    ],
    "category": "traly-pricepy",
    "categoryLabel": "Тралы и прицепы"
  },
  {
    "id": 80026,
    "name": "26",
    "fileName": "26.jpeg",
    "src": "./assets/allimages/traly-pricepy/26.jpeg",
    "alt": "Тралы и прицепы: этап подготовки",
    "project": "Тралы и прицепы",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Тралы и прицепы",
      "26"
    ],
    "category": "traly-pricepy",
    "categoryLabel": "Тралы и прицепы"
  },
  {
    "id": 80027,
    "name": "27",
    "fileName": "27.jpg",
    "src": "./assets/allimages/traly-pricepy/27.jpg",
    "alt": "Тралы и прицепы: промежуточный контроль",
    "project": "Тралы и прицепы",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Тралы и прицепы",
      "27"
    ],
    "category": "traly-pricepy",
    "categoryLabel": "Тралы и прицепы"
  },
  {
    "id": 80028,
    "name": "28",
    "fileName": "28.jpeg",
    "src": "./assets/allimages/traly-pricepy/28.jpeg",
    "alt": "Тралы и прицепы: готовый результат",
    "project": "Тралы и прицепы",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Тралы и прицепы",
      "28"
    ],
    "category": "traly-pricepy",
    "categoryLabel": "Тралы и прицепы"
  },
  {
    "id": 90001,
    "name": "1",
    "fileName": "1.jpeg",
    "src": "./assets/allimages/truby-metallokonstrukcii/1.jpeg",
    "alt": "Трубы и металлоконструкции: состояние до работ",
    "project": "Трубы и металлоконструкции",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Трубы и металлоконструкции",
      "1"
    ],
    "category": "truby-metallokonstrukcii",
    "categoryLabel": "Трубы и металлоконструкции"
  },
  {
    "id": 90002,
    "name": "2",
    "fileName": "2.jpeg",
    "src": "./assets/allimages/truby-metallokonstrukcii/2.jpeg",
    "alt": "Трубы и металлоконструкции: этап подготовки",
    "project": "Трубы и металлоконструкции",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Трубы и металлоконструкции",
      "2"
    ],
    "category": "truby-metallokonstrukcii",
    "categoryLabel": "Трубы и металлоконструкции"
  },
  {
    "id": 90003,
    "name": "3",
    "fileName": "3.jpeg",
    "src": "./assets/allimages/truby-metallokonstrukcii/3.jpeg",
    "alt": "Трубы и металлоконструкции: промежуточный контроль",
    "project": "Трубы и металлоконструкции",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Трубы и металлоконструкции",
      "3"
    ],
    "category": "truby-metallokonstrukcii",
    "categoryLabel": "Трубы и металлоконструкции"
  },
  {
    "id": 90004,
    "name": "4",
    "fileName": "4.jpeg",
    "src": "./assets/allimages/truby-metallokonstrukcii/4.jpeg",
    "alt": "Трубы и металлоконструкции: готовый результат",
    "project": "Трубы и металлоконструкции",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Трубы и металлоконструкции",
      "4"
    ],
    "category": "truby-metallokonstrukcii",
    "categoryLabel": "Трубы и металлоконструкции"
  },
  {
    "id": 90005,
    "name": "5",
    "fileName": "5.jpg",
    "src": "./assets/allimages/truby-metallokonstrukcii/5.jpg",
    "alt": "Трубы и металлоконструкции: состояние до работ",
    "project": "Трубы и металлоконструкции",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Трубы и металлоконструкции",
      "5"
    ],
    "category": "truby-metallokonstrukcii",
    "categoryLabel": "Трубы и металлоконструкции"
  },
  {
    "id": 90006,
    "name": "6",
    "fileName": "6.jpg",
    "src": "./assets/allimages/truby-metallokonstrukcii/6.jpg",
    "alt": "Трубы и металлоконструкции: этап подготовки",
    "project": "Трубы и металлоконструкции",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Трубы и металлоконструкции",
      "6"
    ],
    "category": "truby-metallokonstrukcii",
    "categoryLabel": "Трубы и металлоконструкции"
  },
  {
    "id": 90007,
    "name": "7",
    "fileName": "7.jpg",
    "src": "./assets/allimages/truby-metallokonstrukcii/7.jpg",
    "alt": "Трубы и металлоконструкции: промежуточный контроль",
    "project": "Трубы и металлоконструкции",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Трубы и металлоконструкции",
      "7"
    ],
    "category": "truby-metallokonstrukcii",
    "categoryLabel": "Трубы и металлоконструкции"
  },
  {
    "id": 90008,
    "name": "8",
    "fileName": "8.jpg",
    "src": "./assets/allimages/truby-metallokonstrukcii/8.jpg",
    "alt": "Трубы и металлоконструкции: готовый результат",
    "project": "Трубы и металлоконструкции",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Трубы и металлоконструкции",
      "8"
    ],
    "category": "truby-metallokonstrukcii",
    "categoryLabel": "Трубы и металлоконструкции"
  },
  {
    "id": 90009,
    "name": "9",
    "fileName": "9.jpg",
    "src": "./assets/allimages/truby-metallokonstrukcii/9.jpg",
    "alt": "Трубы и металлоконструкции: состояние до работ",
    "project": "Трубы и металлоконструкции",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Трубы и металлоконструкции",
      "9"
    ],
    "category": "truby-metallokonstrukcii",
    "categoryLabel": "Трубы и металлоконструкции"
  },
  {
    "id": 90010,
    "name": "10",
    "fileName": "10.jpg",
    "src": "./assets/allimages/truby-metallokonstrukcii/10.jpg",
    "alt": "Трубы и металлоконструкции: этап подготовки",
    "project": "Трубы и металлоконструкции",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Трубы и металлоконструкции",
      "10"
    ],
    "category": "truby-metallokonstrukcii",
    "categoryLabel": "Трубы и металлоконструкции"
  },
  {
    "id": 90011,
    "name": "11",
    "fileName": "11.jpg",
    "src": "./assets/allimages/truby-metallokonstrukcii/11.jpg",
    "alt": "Трубы и металлоконструкции: промежуточный контроль",
    "project": "Трубы и металлоконструкции",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Трубы и металлоконструкции",
      "11"
    ],
    "category": "truby-metallokonstrukcii",
    "categoryLabel": "Трубы и металлоконструкции"
  },
  {
    "id": 90012,
    "name": "12",
    "fileName": "12.jpg",
    "src": "./assets/allimages/truby-metallokonstrukcii/12.jpg",
    "alt": "Трубы и металлоконструкции: готовый результат",
    "project": "Трубы и металлоконструкции",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Трубы и металлоконструкции",
      "12"
    ],
    "category": "truby-metallokonstrukcii",
    "categoryLabel": "Трубы и металлоконструкции"
  },
  {
    "id": 90013,
    "name": "13",
    "fileName": "13.jpg",
    "src": "./assets/allimages/truby-metallokonstrukcii/13.jpg",
    "alt": "Трубы и металлоконструкции: состояние до работ",
    "project": "Трубы и металлоконструкции",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Трубы и металлоконструкции",
      "13"
    ],
    "category": "truby-metallokonstrukcii",
    "categoryLabel": "Трубы и металлоконструкции"
  },
  {
    "id": 90014,
    "name": "14",
    "fileName": "14.jpg",
    "src": "./assets/allimages/truby-metallokonstrukcii/14.jpg",
    "alt": "Трубы и металлоконструкции: этап подготовки",
    "project": "Трубы и металлоконструкции",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Трубы и металлоконструкции",
      "14"
    ],
    "category": "truby-metallokonstrukcii",
    "categoryLabel": "Трубы и металлоконструкции"
  },
  {
    "id": 90015,
    "name": "15",
    "fileName": "15.jpeg",
    "src": "./assets/allimages/truby-metallokonstrukcii/15.jpeg",
    "alt": "Трубы и металлоконструкции: промежуточный контроль",
    "project": "Трубы и металлоконструкции",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Трубы и металлоконструкции",
      "15"
    ],
    "category": "truby-metallokonstrukcii",
    "categoryLabel": "Трубы и металлоконструкции"
  },
  {
    "id": 90016,
    "name": "16",
    "fileName": "16.jpeg",
    "src": "./assets/allimages/truby-metallokonstrukcii/16.jpeg",
    "alt": "Трубы и металлоконструкции: готовый результат",
    "project": "Трубы и металлоконструкции",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Трубы и металлоконструкции",
      "16"
    ],
    "category": "truby-metallokonstrukcii",
    "categoryLabel": "Трубы и металлоконструкции"
  },
  {
    "id": 100001,
    "name": "1",
    "fileName": "1.jpeg",
    "src": "./assets/allimages/fasady/1.jpeg",
    "alt": "Фасады: состояние до работ",
    "project": "Фасады",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Фасады",
      "1"
    ],
    "category": "fasady",
    "categoryLabel": "Фасады"
  },
  {
    "id": 100002,
    "name": "2",
    "fileName": "2.jpeg",
    "src": "./assets/allimages/fasady/2.jpeg",
    "alt": "Фасады: этап подготовки",
    "project": "Фасады",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Фасады",
      "2"
    ],
    "category": "fasady",
    "categoryLabel": "Фасады"
  },
  {
    "id": 100003,
    "name": "3",
    "fileName": "3.jpg",
    "src": "./assets/allimages/fasady/3.jpg",
    "alt": "Фасады: промежуточный контроль",
    "project": "Фасады",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Фасады",
      "3"
    ],
    "category": "fasady",
    "categoryLabel": "Фасады"
  },
  {
    "id": 100004,
    "name": "4",
    "fileName": "4.jpg",
    "src": "./assets/allimages/fasady/4.jpg",
    "alt": "Фасады: готовый результат",
    "project": "Фасады",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Фасады",
      "4"
    ],
    "category": "fasady",
    "categoryLabel": "Фасады"
  },
  {
    "id": 100005,
    "name": "5",
    "fileName": "5.jpg",
    "src": "./assets/allimages/fasady/5.jpg",
    "alt": "Фасады: состояние до работ",
    "project": "Фасады",
    "stage": "состояние до работ",
    "step": "состояние до работ",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Фасады",
      "5"
    ],
    "category": "fasady",
    "categoryLabel": "Фасады"
  },
  {
    "id": 100006,
    "name": "6",
    "fileName": "6.jpeg",
    "src": "./assets/allimages/fasady/6.jpeg",
    "alt": "Фасады: этап подготовки",
    "project": "Фасады",
    "stage": "этап подготовки",
    "step": "этап подготовки",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Фасады",
      "6"
    ],
    "category": "fasady",
    "categoryLabel": "Фасады"
  },
  {
    "id": 100007,
    "name": "7",
    "fileName": "7.jpeg",
    "src": "./assets/allimages/fasady/7.jpeg",
    "alt": "Фасады: промежуточный контроль",
    "project": "Фасады",
    "stage": "промежуточный контроль",
    "step": "промежуточный контроль",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Фасады",
      "7"
    ],
    "category": "fasady",
    "categoryLabel": "Фасады"
  },
  {
    "id": 100008,
    "name": "8",
    "fileName": "8.jpeg",
    "src": "./assets/allimages/fasady/8.jpeg",
    "alt": "Фасады: готовый результат",
    "project": "Фасады",
    "stage": "готовый результат",
    "step": "готовый результат",
    "date": "",
    "title": "",
    "description": "",
    "tags": [
      "Фасады",
      "8"
    ],
    "category": "fasady",
    "categoryLabel": "Фасады"
  }
];
