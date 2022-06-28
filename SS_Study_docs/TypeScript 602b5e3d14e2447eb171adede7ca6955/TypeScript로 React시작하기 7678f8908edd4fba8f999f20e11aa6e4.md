# TypeScript로 React시작하기

[[React] Typescript로 React시작하기](https://velog.io/@swimme/React-Typescript-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0)

- React-TypeScript

```
npx create-react-app . --template=typescript

npm install -S styled-components react-router-dom dotenv
npm install --save-dev @types/styled-components babel-plugin-styled-components @types/react-router-dom
npm install -D gh-pages
npm audit fix

# npx 대신 npm install -g (전역) 도 ok
```

- **JSX** : JavaScript eXtension
    - JS에서 HTML문법을 사용할 수 있게 한 extension
    - 마크업 구조를 HTML페이지 대신 JS/TS에서 사용할 수 있게 함
    - 원리상 React.createElement() 호출하여 컴파일 됨