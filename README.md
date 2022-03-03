# Weather Api

## Zadanie

Napisz aplikację dostarczającą dane o pogodzie

- Aplikacja posiada input LAT i LON w które wpisuje się współrzędne
- Aplikacja wyświetla aktualne dane o pogodzie dla podanych w inputach współrzędnych - przynajmniej temperaturę, ciśnienie i wilgotność
- Aplikacja posiada przełącznik za pomocą którego można zmienić źródło z których pochodzą dane. np. 2 różne API internetowe
- Aplikacja wyświetla które źródło jest aktualnie używane.
- Korzystając z obu źródeł danych aplikacja ma wyglądać tak samo tj. Jeżeli wyświetlamy tylko temperaturę, ciśnienie i wilgotność ze źródła A, to ze źródła B mamy też tylko to wyświetlać. Jeżeli przy danych ze źródła A temperatura jest wyświetlana w ‘C po przełączeniu nadal ma się tak wyświetlać niezależnie czy ze źródła B przychodzi w ‘C czy nie

Wskazówki

- Przykładowe API z których mogą pochodzić dane: https://rapidapi.com/blog/access-global-weather-data-with-these-weather-apis/
- Nie zostawiaj w repozytorium kluczy prywatnych do API. Skorzystaj ze zmiennych środowiskowych. ENVów.
- Zapoznaj się z wzorcem projektowym ["Adapter"](https://refactoring.guru/pl/design-patterns/adapter) [(przykład)](https://refactoring.guru/pl/design-patterns/adapter/typescript/example). Może Ci on pomóc w lepszym poukładaniu kodu w aplikacji.
- Pamiętaj o testach :). Testy znajdują się w folderze cypress/integration. Wraz z przykładowym testem `example.ts`.
- Żeby testy przechodziły pamiętaj, że musi być włączony serwer ponieważ są to testy e2e.
- Zapoznaj się z tym jak kodować w Nest'cie poniżej.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches cypress tests.

### `npm test:watch`

Launches cypress test interface with watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
