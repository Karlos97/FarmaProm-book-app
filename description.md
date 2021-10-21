## 📚 Książki

Twoim zadaniem jest stworzyć książkową aplikację — zawierającą listę oraz szczegóły książek pobranych z API Google. Aplikacja **MUSI BYĆ** SPA.
Kod, który widzisz w folderze `3_books_app` to szkielet, który przyda Ci się do stworzenia tej aplikacji.
Możesz jednak skorzystać ze swojego szablonu lub dodać paczki, z których lubisz korzystać. Pomimo tego, że
przywiązujemy dużą wagę do projektowania wyglądu naszych aplikacji, tym razem nie musisz się tym przejmować.
Postaraj się stworzyć jak najprostszy i minimalistyczny styl aplikacji. Powodzenia! 🎉

### Technologie

- Wymagane:
  - API: [Google Books API](https://developers.google.com/books/docs/overview)
  - Klient HTTP : [Axios](https://axios-http.com/)
  - Stylowanie: [SCSS](https://sass-lang.com/)
  - Routing: [React Router](https://reactrouter.com/)
  - Użycie nowoczesnych funkcjonalności JS: ES6+
  - React: >=16.8 (Hooks)
  - Webpack: >=4
- Opcjonalne:
  - [Typescript](https://www.typescriptlang.org/docs/)
  - [Prettier](https://prettier.io/)
  - [ESLint](https://eslint.org/)
  - [React-Redux](https://react-redux.js.org/)
  - [Redux-Saga](https://redux-saga.js.org/)
  - [Material-UI](https://material-ui.com/)

### Widoki:

- Lista książek: - Lokalizacja: `/`.
  - Pobierz książki z [API](https://developers.google.com/books/docs/v1/reference/volumes/list) (ogranicz zapytanie do jednego gatunku,
    więc przykładowo będzie wyglądało tak: `?q=subject:fiction`) z paginacją przy przewijaniu strony (ładowanie kolejnych danych po dotarciu na koniec strony).
  - Poinformuj użytkownika, że dane są pobierane — np. pasek postępu, ikona ładowania.
  - Dla każdej książki wyświetl poniższe [informacje](https://developers.google.com/books/docs/v1/reference/volumes):
    - `volumeInfo.title`
    - `volumeInfo.subtitle`
    - `volumeInfo.authors[]`
    - `volumeInfo.publishedDate`
    - `volumeInfo.description`
    - `volumeInfo.imageLinks.smallThumbnail`
  - Kliknięcie użytkownika w tytuł książki przeniesie go na stronę ze szczegółami książki (`/books/:id`).
- Szczegóły książek: - Lokalizacja: `/books/:id`.
  - Pobierz szczegółowe informacje o książce z [API](https://developers.google.com/books/docs/v1/reference/volumes/get).
  - Poinformuj użytkownika, że dane są pobierane — np. pasek postępu, ikona ładowania. - Jeżeli książka nie została znaleziona (404), Przekieruj na `/` z odpowiednim powiadomieniem na górze strony.
  - Strona powinna zawierać przycisk do powrotu na listę książek `/`.
  - Wyświetl [szczegóły](https://developers.google.com/books/docs/v1/reference/volumes) książki:
    - `volumeInfo.title`
    - `volumeInfo.subtitle`
    - `volumeInfo.authors[]`
    - `volumeInfo.publishedDate`
    - `volumeInfo.description`
    - `volumeInfo.imageLinks.thumbnail`
    - `volumeInfo.accessInfo.epub.acsTokenLink` (wyświetl link do pobrania jeśli `volumeInfo.accessInfo.epub.acsTokenLink`
      jest tekstem oraz `volumeInfo.accessInfo.publicDomain` równa się `true`)
