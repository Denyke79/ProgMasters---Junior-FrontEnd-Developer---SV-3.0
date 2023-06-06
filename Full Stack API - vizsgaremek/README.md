## **1. Az alkalmazás célja**

Ez a webes alkalmazás a Győri Óvodai és Iskolai Szociális Segítők adminisztrációs tevékenységeit hivatott segíteni, miközben a nem ott dolgozók számára is biztosít hasznos információkat.

---

## **2. Az alkalmazás telepítése**

- A célgépre le kell klónozni az adott GitHub repository tartalmát forkolás után.
- Indítsd el a Docker Desktop alkalmazást.
- Gyökérkönyvtárnak a klónozott könyvtárat kell beállítani `code . -r` segítségével.
- Indítsd el az apit a következő paranccsal: `npm run docker:build`, majd a `npm run docker:run` parancsot kiadva az API fut a localhost 8080-as portján.
- Backenden történt kódváltoztatás esetén állítsd le a konténert (Ctrl+C), majd indítsd újra a `npm run dev` paranccsal!
- technikai hiba esetén, lokális mongod-hez kapcsolódás: `npm run start`
- Ha további fejlesztések szükségesek, akkor telepíteni kell az Angular keretrendszert az `npm i -g @angular/cli` paranccsal.

---

## **3. Az alkalmazás indítása**

A megadott Docker container indítása és inicializálása.

- Docker Desktop alkalmazás indítása saját gépen.
- A Vizsgaremek/backend mappába belépve a terminálban: `npm run dev` parancsot kell kiadni.
- A Vizsgaremek/frontend mappába belépve a terminálban:`npm start` paranccsal indítható a frontend.

_Megjegyzés_:  
A belépéshez egy érvényes felhasználónév és jelszó páros (példa):

| Felhasználónév | Jelszó   |
| -------------- | -------- |
| admin          | admin_pw |

---

## **4. A végpontok dokumentációja**

[Swagger](https://localhost:3000/api/api-docs)

---

---

## **Linkek:**

- [A User Story (adminisztrátori szerepkör) itt érhető el.]
