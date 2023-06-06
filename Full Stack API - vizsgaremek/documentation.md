# Óvodai és Iskolai Szociális Segítők Nyilvántartó rendszere

A győri Óvodai és Iskolai Szociális Segítők az eddig excel táblázatban nyilvántartott tevékenységnaplót szeretné webes API formában használni, egyúttal a külső látogatók számára információkat is szeretnének átadni.

Az elkészítendő rendszerbe felhasználók beléphetnek, különböző adminisztrációs tevékenységeket rögzíthetnek, módosíthatnak.

# Entitások

## User

Egy felhasználó, illetve szociális segítő. Rögzíthet, szerkeszthet és törölhet a tevékenység naplóból. Emellett tároljuk a nevét, jelszavát, felhasználónevét, szerepkörét és a hozzá tartozó intézményeket.

## Action

Egy tevékenységként rögzített elem, mely lefedi a napi munkavégzés során a különböző munkaformákat. Tároljuk a dátumát, a hozzá kapcsolodó intézmény adatait, az érintett gyerek vagy csoport nevét, létszámát, ehhez kapcsolodó tevékenységeket.

## Institution

Győr városában, illetve a Győri Járásban megtalálható összes óvoda, általán- és középiskola. Rendelkezik névvel, rövid névvel, segítővel és a segítő elérhetőségeivel.

# User story lista, feladatok

A felhasználó belép az alkalmazásba

- Login képernyő megvalósítása
- API login végpont implementálása (POST /login)
- JWT autentikáció implementáció, kliens oldali hozzáférés szabályozása autentikáció alapján

A felhasználó tevékenységet rögzít

- Új tevékenység rögzítése képernyő implementálása
- POST /action végpont implementálása a rögzítés véglegesítéséhez

A felhasználó tevékenységet szerkeszt

- Összes tevékenység képernyő implementálása
- GET /action végpont implementálása a tevékenységek listázásához
- GET /action/id végpont implementálása a kiválasztott tevékenység szerkesztéséhez
- Tevékenység szerkesztése képernyő implementálása
- PUT /action/id végpont implementálása a rögzítés véglegesítéséhez

A nem belépett felhasználó megtekinti az intézményeket

- Intézmények képernyő implementálása
- GET /institution végpont implementálása

# Képernyők

## Kezdőoldal

A felhasználó bejelentkezhet felhasználónév és jelszó megadásával. Ezután automatikusan a **Bejelentkezett felhasználó** képernyőre jut.

## Bemutatkozás

A nem bejelentkezett felhasználó is információkat kaphat a Szociális Segítői munkáról.

## Látógatóknak

A nem bejelentkezett felhasználó megtekintheti az összes intézményt Győrben és a Győri Járásban, illetve kereshet az intézmények és a hozzájuk tartozó segítők között is.

## GY.I.K

A nem bejelentkezett felhasználó is információkat kaphat a Szociális Segítői munkáról.

## Bejelentkezett felhasználó

A bejelentkezett felhasználó számára fontos határidők láthatóak itt, illetve el tud navigálni a **Statisztikák** képernyőre, a **Linkek** képernyőre és az **Adminisztráció** képernyőre. Csak belépés után érhető el.

## Adminisztráció

A bejelentkezett felhasználó itt láthatja az összes korábbi rögzített tevékenységét, melyet akár törölhet is. El tud navigálni az adott **Tevékenység szerkesztése** képernyőre, az adott **Tevékenység bővebben** képernyőre, illetve az **Új tevékenység** képernyőre. Csak belépés után érhető el.

## Linkek

A bejelentkezett felhasználó a napi munkát könnyító hasznos linkgyüjteményt talál. Csak belépés után érhető el.

## Tevékenység szerkesztése

A bejelentkezett felhasználó egy korábban rögzített tevékenységet tud módosítani. Csak belépés után érhető el.

## Tevékenység bővebben

A bejelentkezett felhasználó egy korábban rögzített tevékenység összes részletét meg tudja tekinteni, mely az **Adminisztráció** képernyőn nem fért el. Csak belépés után érhető el.

## Új tevékenység

A bejelentkezett felhasználó egy új tevékenységet tud rögzíteni. Csak belépés után érhető el.

# További fejlesztési tervek

Részletesebb szűrő implementálása az **Adminisztráció** képernyőre, ezzel együtt részletes statisztikák közlése **Statisztikák** képernyőn.
Az **Adminisztráció** képernyőn a felhasználó csak az általa rögzített tevékenységeket érje el.
A **Tevékenység bővebben** képernyőn egy automatikus PDF nyomtató gomb elhelyezése, mellyel a kötelezően tárolandó papíralapú nyomtatványok elkészítése sokkal gyorsabbá válik.

# További adatok a projektről

A projekt eddigi megvalósítása 2 hetet vett igénybe, a további fejlesztésekre 8 hét szükséges még.
