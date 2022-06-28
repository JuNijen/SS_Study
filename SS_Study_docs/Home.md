# SS_Study
React, Coding Convention study


## Swift naming & API 디자인 가이드
[:: Wiki Link ::](https://github.com/JuNijen/SS_Study/wiki/Swift-naming-&-design-guide)

## 코딩 컨벤션 :: Swift Style Guide
[:: Wiki Link ::](https://github.com/JuNijen/SS_Study/wiki/Coding-convention---Swift-style-guide)

## React
[:: Wiki Link ::](https://github.com/JuNijen/SS_Study/wiki/React---Mainpage)


# Ssocion

[Readme](Ssocion%2083cb7b12ac384b7ab3d6617542095f73/Readme%20b1be7f57abb544d7b0e08ab4e77cba00.md)

****React에서 Mobx 경험기 (Redux와 비교기)****

[React에서 Mobx 경험기 (Redux와 비교기) | 우아한형제들 기술블로그](https://techblog.woowahan.com/2599/)

**MobX 공식**

[MobX에 대하여 · MobX](https://ko.mobx.js.org/README.html)

### 2022.06.16

reactjs를 가볍게 리뷰 해 봤는데 reacitve x  자체와는 크게 연관성이 없고 view rendering에 특화 된 셋트라 비동기 바인딩은 지원하지 않기 때문에 일반적으로 redux 를 많이 이용해 온것으로 확인 됩니다. 다만 redux 같은 경우 boiling plate 코드를 상당수 포함하는 대형 라이브러리로 별도의 추가 라이브러리 또한 사용해야 하는 문제가 있습니다.
우선 이 리뷰의 목적에 관해서 설명 하자면
어떠한 API 요청 (웹프론트에서는 흔하게 AJAX로 호칭)을 하는 경우를 예로 들었을때

1. 버튼 액션
2. AJAX 호출
3. AJAX response (future 패턴)
4. 받은 데이터 가공
5. UI 갱신

간단한 버튼 액션만으로도 최소 이정도의 타이핑이 필요합니다. 이러한 개발 피로도와 복잡성해소 타이핑을 줄이기 위해서 '상태' 관리 모듈이 쓰이기 시작했는데
그중 js 생태계에서는 흔하게 널리 쓰이는 모듈은 redux 입니다. 그럼 여기서 우리의 선택지는 세가지 정도가 있는데..

1. 널리 쓰이는 redux를 사용한다
    - 장점: 축적된 레퍼런스가 많다
    - 단점: 덩치가 크고, 러닝 커브 (기타 라이브러리 까지 알아야함)
2. mobx를 사용한다
    - 장점: 아주 단순히 상태 관리많을 위한 적은 타이핑
    - 단점: 복잡한 처리를 위해서는 다른 수단이필요
3. RxJS를 사용한다
    - 장점: 모든 react와 js 이벤트를 스트림화 하여 제어 가능
    *단점: Rx 오퍼레이션에 관한 러닝커브, 모든 이벤트를
    직접 제어해야하는 피로감

저는 이중에 mobx 를 기본적으로 선택하고, 선택적으로 RxJS를 사용했으면 하는데
어떻게들 생각 하시나요

```jsx
buttton action
	class id (div?)->  
		AJAX 
		1. call back function (고전 JSP, JS 같은 경우)
		2. future, promise, response -> closure
		3. state binding 

@state boolean didClickSombutton = false
@binding someRequest() { .... }
```

**IntelliJ**

Android studio랑 사실상 같은 기반. 웹에 특화되어 있다고.


# Style Guide

[Swift naming & API 디자인 가이드](Style%20Guide%20840c20250aff49d889d7fed0e86c635e/Swift%20naming%20&%20API%20%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB%20%E1%84%80%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B3%2095b8a4e41eb84a34824c2ddd62f4776d.md)

[코딩 컨벤션 :: **Swift Style Guide**](Style%20Guide%20840c20250aff49d889d7fed0e86c635e/%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B5%E1%86%BC%20%E1%84%8F%E1%85%A5%E1%86%AB%E1%84%87%E1%85%A6%E1%86%AB%E1%84%89%E1%85%A7%E1%86%AB%20Swift%20Style%20Guide%2008bf56944d934e3ba81506357a6083fe.md)

[****코드를 리뷰하는 방법****](Style%20Guide%20840c20250aff49d889d7fed0e86c635e/%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3%E1%84%85%E1%85%B3%E1%86%AF%20%E1%84%85%E1%85%B5%E1%84%87%E1%85%B2%E1%84%92%E1%85%A1%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%87%E1%85%A1%E1%86%BC%E1%84%87%E1%85%A5%E1%86%B8%2009a90b67dc9b4d06928e03c03a2a8d0a.md)