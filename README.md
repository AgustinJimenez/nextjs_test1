### INSTALL DEPENDENCIES

```
    yarn
```

### CREATE .ENV

```
    cp env.example.json env.json
```

### RUN SERVER ON DEV-MODE

```
    yarn start
```

### EXPORT TO PRODUCTION

```
    yarn build
```



### PROJECT DETAILS

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
---
- App core (to include providers)
```
src/pages/_app.tsx
```
#### Redux uses only one generic reducer to manage datas
```
src/redux/datasetReducer.ts
````
- Store structure
```
src/redux/initialState.ts
```
- Redux Actions
```
src/redux/actions.ts
```
- Redux Store Selectors
```
src/redux/selectors.ts
```

