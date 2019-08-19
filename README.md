### Instalacja

Żeby uruchomić projekt lokalnie u siebie należy zainstalować parcel js wpisując w konsoli

```sh
npm install -g parcel-bundler
```
lub 
```sh
yarn global add parcel-bundler
```
Następnie przejść w konsoli do katalogu z projektem i wpisać

```sh
parcel index.html
```
dzięki czemu uruchomimy serwer developerski parcel pod adresem http://localhost:1234/

Używaj serwera deweloperskiego jeśli nie masz własnego serwera, lub jeśli aplikacja renderowana jest w całości po stronie klienta. Jeśli masz swój serwer, możesz zamiast tego uruchomić Parcel w trybie watch. W tym trybie Parcel też automatycznie przebudowuje aplikację po dokonaniu zmiany w pliku i wspiera hot module replacement, ale nie uruchamia serwera web.

```sh
parcel watch index.html
```