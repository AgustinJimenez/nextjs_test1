# INSTALLATION GUIDE
#### INSTALL DEPENDENCIES

```
    yarn
```

#### CREATE ENVIROMENT VARIABLES FILE

```
    cp env.example.json env.json
```

#### RUN SERVER ON DEV-MODE

```
    yarn dev
```

#### RUN TESTS

```
    yarn test
```
# LIBRARIES

- NextJS
```
Gives you all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.
```
- React Bootstrap
```
Easy to install and use on react projects without unneeded dependencies like jQuery.
```
- Redux-Saga
```
Write complex business logics outside the components jungle, enable numerous approaches to tackling parallel execution, task concurrency, task racing, task cancellation, etc.
```
- Redux Persist
```
Enables persistence with redux storage.
```
- Redux Logger
```
Logs all redux actions
```
- React Paginated List
```
To paginate data collections
```
- Sass & Styled Components
```
To use sass for components styles
```
- Bundle Analyzer
```
It analyze and generates a bundle files size report
```
- Jest & Testing library
```
Useful for unit tests
```
# PROJECT DETAILS

- Api url routes
```
src/api/routes.ts
```
- All project Interfaces
```
src/interfaces
```
- Pages routes
```
src/routes
```
- Shared components
```
src/components
```
- App core (for providers)
```
src/pages/_app.tsx
```
- Public folder for assets
```
public
```
- Helpers methods
```
src/utils
```
- Project core configurations, webpack configurations and plugins
```
next.config.js
```
- Project uses only one generic reducer to manage store datas
```
src/redux/datasetReducer.ts
````
- Store structure
```
src/redux/initialState.ts
```
- Redux Actions (mostly just generic actions for data management)
```
src/redux/actions.ts
```
- Redux Store Selectors (generic selector and complex selectors)
```
src/redux/selectors.ts 
```