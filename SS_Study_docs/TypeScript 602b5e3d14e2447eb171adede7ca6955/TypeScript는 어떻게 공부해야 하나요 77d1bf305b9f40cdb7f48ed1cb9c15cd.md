# TypeScript는 어떻게 공부해야 하나요?

[TypeScript는 어떻게 공부해야 하나요? | 요즘IT](https://yozm.wishket.com/magazine/detail/1376/)

### TypeScript 학습 로드맵

1. **셋팅이 되어있는 프로젝트로 시작 해 보라.**
    
    tsc의 옵션을 하나하나 이해하려고 하면 시작하기도 전에 지칠 수 있다. 좋은 세팅들과 변환 도구들이 많으니 “내 개발 경험을 해치지 않고 조금 더 편하게 개발 해 주는 플러그인” 이라는 생각으로 접근하라.
    
    초기 세팅으로는 [Vite](https://vitejs.dev/)나 [tsup](https://www.npmjs.com/package/tsup)을 추천한다고.
    
2. **변수 선언과 함수 인자부터**
    
    javaScript를 쓰듯이 사용 해 보고, [변수 선언과 함수 인자에 타입을 넣는 것](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)으로 시작하라.
    
3. **타입 선언보다는 가급적 자동 추론을 사용하자.**
    
    가능하면 Type을 적게 적자.
    
4. **백엔드 스키마 interface를 만드는 것을 연습 해 보자.**
5. Callback을 인자로 만드는 방법을 공부하자.
6. 유틸리티를 사용하는 법

### ECMASCRIPT?

이건 또 뭐야 나중에 알아보자.

### TypeScript의 장단점

- **단점**
    1. tsc의 속도가 엄청나게 느리다. (tsc는 또 뭐야?)
        1. Babel에서 TypeScript의 문법만 제거해서 javaScript로 만들어주는 플러그인 개발을 성공하게 되며 tsc로 컴파일 하지 않고서 빌드 속도를 대폭 올릴 수 있게 되었다.
        2. JavaScript가 아닌 Go 언어로 만들어져 스크립트가 아니라 native방식으로 동작하는 esbuild는 기존 번들 툴의 100배가량 빠른 속도를 자랑한다.
    2. 잘 동작하던 것들이 에러가 뜬다??? (무슨말이야?)
- **장점**
    
    **위에 언급한 것들은 단점이 아니게 되었으니 아무튼 써라**