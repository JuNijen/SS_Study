# Swift naming & API 디자인 가이드

# Apple사 공식 Swift naming & API 디자인 가이드

[Swift.org](https://www.swift.org/documentation/api-design-guidelines/)

## **Promote Clear Usage (명확한 사용을 촉진하라)**

### 모호성을 피하기 위해 모든 단어를 포함한다.

### 불필요한 말은 생략한다.

이미 보유하고 있는 정보와 중복되는 단어는 생략해야 한다.

특히, 단순히 type 정보를 반복하는 단어는 생략하라.

경우에 따라 모호성을 피하기 위해 type 정보를 반복해야 하지만, 일반적으로 type 보다는 매개변수의 역할을 설명하는 단어를 사용하는 것이 좋다.

### type이 아닌, 역할에 따라 변수, 매개변수 및 관련 유형의 이름을 지정한다.

### 매개변수의 역할을 명확히 하기 위해서 type 정보를 설명하는 명사를 둔다.

매개변수의 타입이 기본타입(Any, AnyObject, Int, String…)인 경우 이에 대한 정보 및 컨텍스트가 의도를 완전히 전달하지 못할 수 있다.

## Str**ive for Fluent Usage (유창한 사용을 위해 노력하라)**

### 영어 구문을 문법적으로 구성하도록 하는 메서드 및 기능 이름을 선호하라.

### factory method의 이름은 **“`make`”**로 시작하라.

### **initializer와 [factory methods](https://en.wikipedia.org/wiki/Factory_method_pattern)의 호출에서 첫 번째 인수는 기본 이름으로 시작해서는 안된다.**

### **side-effects에 따른 함수 및 메서드 이름 지정**

- 사이드 이펙트가 없는 것은 명사구로 읽어야 한다.
- 사이드 이펙트가 있는 경우 명령형 동사구로 읽어야 한다.
- **Mutating/ Nonmutating**을 일관되게 지정한다.
    - 작업이 동사에 의해 **자연스럽게 설명될 때** 변형 방법에 대해 동사의 명령형을 사용하고 “ed” 또는 “ing” 접미사를 적용하여 이름을 지정합니다.
    
    | Mutating | Nonmutating |
    | --- | --- |
    | x.sort() | z = x.sorted() |
    | x.append(y) | z = x.appending(y) |
    
    [mutable과 immutable 값과 mutating한 메서드와 non-mutating 한 메서드를 비교하시오. | 2ssue's dev note](https://2ssue.github.io/common_questions_for_Web_Developer/docs/Javascript/immutable&mutable.html#%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%8B%E1%85%A1%E1%84%83%E1%85%AE%E1%84%86%E1%85%A7%E1%86%AB-%E1%84%8C%E1%85%A9%E1%87%82%E1%84%8B%E1%85%B3%E1%86%AB-%E1%84%80%E1%85%A5%E1%86%BA)
    
    | Mutating | Nonmutating |
    | --- | --- |
    | x = y.union(z) | y.formUnion(z) |
    | j = c.successor(i) | c.formSuccessor(&i) |
- **Boolean methods 및 properties**의 사용은 용도의 변경이 없을 경우 receiver에 대한 주장으로 읽어야 한다.
- **무언가를 설명하는 프로토콜**은 **명사**로 읽어야 한다. (e.g. `Collection`).
- **기능을 설명하는 프로토콜**은 **접미사** **`able`, `ible`**, 또는  **`ing`** (e.g.  `Equatable`,  `ProgressReporting`)을 사용하여 명명해야 한다.
- 다른 **타입, 속성, 변수 및 상수의 이름은 명사로** 읽어야 한다.

## **Use Terminology Well (용어를 잘 사용하라)**

- **Term of Art** : [명사] 특정 분야 또는 직업 내에서 정확하고 전문적인 의미를 갖는 단어 또는 구.
    
    더 일반적인 단어가 의미를 전달하는 경우 **모호한 용어를 사용하지 마십시오. (ex : 표피 → 피부)**
    
    전문적 표현을 사용하는 경우 **확립된 의미를 고수**하십시오.
    
    전문 용어를 사용하는 유일한 이유는 모호하거나 불명확한 것을 정확하게 표현하기 때문이다.
    
- **약어 사용을 피하라.** 특히 비표준 약어는 효과적으로 Term of Art이다. 약어가 아닌 형식으로 올바르게 번역하는 데에 달려있기 때뭉니다.
    
    > 사용하는 약어의 의도된 의미는 검색을 통해 쉽게 찾을 수 있어야 합니다.
    > 
- **선례를 받아들여라.** 기존 문화에 순응하지 않으면서 완전한 초보자를 위한 용어를 최적하하지 마십시오.
    
    익숙한 용어를 사용하면 검색 및 질문에 용이해진다.
    
    수학적 표현과 같이 프로그래밍 영역 내에서 널리 사용되는 용어는 장황한 설명보다 선호된다. (ex : verticalPositionOnUnitCircleAtOriginOfEndOfRadiusWithAngle(x) → sin(x))
    

# **Conventions (규약)**

## **General Conventions (일반 협약)**

- **O(1)이 아닌 계산된 속성의 복잡성을 문서화하라.**
- **Free functions보다 메서드 및 속성을 선호하라.**
    
    Free functions은 특수한 경우에만 사용된다.
    
- **대소문자 규칙을 따르라.**
    
    타입 및 프로토콜의 이름은 `UpperCamelCase`. 그 외는 전부 `lowerCamelCase`.
    
    일반적으로 모두 대문자로 나타나는 **약어 및 이니셜**은 대소문자 규칙에 따라 구분해야 한다.
    
- 메서드는 동일한 기본 의미를 공유하거나 별개의 도메인에서 작동할 때 base name을 공유할 수 있습니다.
    

## **Parameters (매개변수)**

`func move(from **start**: Point, to **end**: Point)`

- **문서를 제공할 때 매개변수 이름을 선택하라.**
    
    매개변수 이름은 함수나 메서드의 사용 지점에 나타나지 않지만 중요한 설명 역할을 합니다.
    
- 일반적인 사용을 단순화할 때 **기본 매개변수를 활용하라.**
    
    일반적으로 사용되는 단일 값이 있는 매개변수는 기본값의 후보이다.
    
- 매개변수 목록의 끝에서 **기본값을 사용하여 매개변수를 찾는 것을 선호하라.** 기본값이 없는 매개변수는 일반적으로 메소드의 의미론에 더 필수적이며 메소드가 호출되는 안정적인 초기 사용 패턴을 제공한다.

## **Argument Labels (인수 레이블)**

`argumentLabel(인수 레이블)`은 함수를 호출할 때 사용되고, `parameterName(매개변수 이름)` 은 함수 구현에 사용됩니다. 기본적으로 매개변수는 매개변수 이름을 인수 레이블로 사용합니다. 구분해서 사용하려면 매개변수 이름 앞에 공백을 두고 인수 레이블을 작성합니다. 인수 레비을을 쓰고싶지 않을 때 `_` 로 대신할 수 있습니다

[Swift | 함수와 First Class Citizen](https://ahyeonlog.tistory.com/30)

> func move(from start: Point,to end: Point)
x.move(from: x,to: y)
> 
- **인수를 유용하게 구분할 수 없는 경우 모든 레이블을 생략하십시오**
    
    (ex : `min(number1, number2)`: `zip(sequence1, sequence2)`)
    
- **값 보존 유형 변환을 수행하는 이니셜라이저에서 첫 번째 인수 레이블** 을 생략하십시오.
    
    ex : `Int64(someUInt32)`
    
- 첫 번째 인수가 전치사구의 일부를 형성할 때 인수 레이블을 지정하라. 인수 레이블은 일반적으로 전치사에서 시작해야 한다.
    
    ex : `x.removeBoxes(havingLength: 12)`
    
- **그렇지 않고 첫 번째 인수가 문법 구의 일부를 형성하는 경우 레이블을 생략하고** 기본 이름에 선행 단어를 추가합니다.`x.addSubview(y)`
    
- • **다른 모든 인수에 레이블을 지정합니다** .

# 특별 지시

API에 표시되는 튜플 멤버 및 **name closure parameters에 레이블을 지정합니다.**

- 오버로드 세트의 모호성을 피하기 위해 제약 없는 다형성 (ex : Any, 제약 없는 일반 매개변수)에 **각별히 주의**하라.
    

self, this와 같은 구문이 필요한 경우도 있으나(초기화 등)

swift self is required 서치해서 자료 체크 해 보기.