# ToolTip 컴포넌트

### 프로젝트 개요

###### ToolTip 컴포넌트는 React로 구현된 커스터마이즈 가능한 툴팁 컴포넌트입니다.

###### 이 문서는 컴포넌트의 기능, 구조, 속성, 그리고 사용 방법을 설명합니다.

### 설치 및 시작

#### 설치

##### 먼저, 프로젝트를 클론하고 필요한 패키지를 설치합니다.

#

```
git clone https://github.com/catmaker/Tooltip.git
cd Tooltip
npm install
```

#

#### 시작

###### 개발 서버를 시작합니다.

#

```
npm start
```

#

#### 사용 방법

##### 기본 사용법

###### `ToolTip` 컴포넌트를 import 하고, 자식 요소를 포함하여 사용합니다.

##### 폴더 구조

```css
project/
│
├── src/
│   ├── components/
│   │   ├── ToolTip/
│   │   │   ├── ToolTip.tsx
│   │   │   └── ToolTip.css
│   ├── data/
│   │   └── tooltipConfig.tsx
│   ├── types/
│   │   └── tooltip.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.tsx
│   └── Main.tsx
└── package.json
```

#

```tsx
import React from "react";
import ToolTip from "./ToolTip";

const App = () => {
  return (
    <div>
      <ToolTip
        message="This is a tooltip message"
        direction="right"
        enterDelay={500}
        leaveDelay={200}
        hoverLeave={true}
      >
        <button>Hover over me</button>
      </ToolTip>
    </div>
  );
};

export default App;
```

##### 이 예제에서는 버튼에 마우스를 올리면 500ms 후에 툴팁이 나타나고, 200ms 후에 사라집니다.

### Props

#### `ToolTip` 컴포넌트의 Props

| Prop 이름              | 타입      | 기본값                                   | 설명                                                          |
| ---------------------- | --------- | ---------------------------------------- | ------------------------------------------------------------- |
| message                | string    | prompt text\nprompt text\nprompt text    | 툴팁에 표시될 메시지                                          |
| children               | ReactNode | "children props is required"             | 툴팁이 표시될 요소                                            |
| direction              | string    | top                                      | 툴팁이 나타나는 방향 (left, right, top, bottom 등)            |
| color                  | string    | #1A2735                                  | 툴팁 트리거 요소의 배경색                                     |
| enterDelay             | number    | 0                                        | 툴팁이 나타나기 전의 지연 시간 (ms)                           |
| leaveDelay             | number    | 1                                        | 툴팁이 사라지기 전의 지연 시간 (ms)                           |
| disabled               | boolean   | false                                    | 툴팁을 비활성화 할지 여부                                     |
| textColor              | string    | white                                    | 툴팁 트리거 요소의 텍스트 색상                                |
| display                | string    | flex                                     | 툴팁 트리거 요소의 디스플레이 속성                            |
| width                  | string    | auto                                     | 툴팁 트리거 요소의 너비                                       |
| height                 | string    | auto                                     | 툴팁 트리거 요소의 높이                                       |
| margin                 | object    | { top: 0, right: 0, bottom: 0, left: 0 } | 툴팁 트리거 요소의 마진                                       |
| padding                | string    | 5px                                      | 툴팁 트리거 요소의 패딩                                       |
| tooltipTextColor       | string    | white                                    | 툴팁의 텍스트 색상                                            |
| tooltipWidth           | string    | auto                                     | 툴팁의 너비                                                   |
| tooltipHeight          | string    | auto                                     | 툴팁의 높이                                                   |
| borderRadius           | string    | 0                                        | 툴팁 트리거 요소의 테두리 반경                                |
| tooltipBackgroundColor | string    | #1A2735                                  | 툴팁의 배경색                                                 |
| tooltipFontSize        | string    | 14px                                     | 툴팁 텍스트의 폰트 크기                                       |
| tooltipFlexDirection   | string    | column                                   | 툴팁의 Flex Direction                                         |
| tooltipBoxShadow       | string    | 0                                        | 툴팁의 그림자                                                 |
| boxShadow              | string    | 0                                        | 툴팁 트리거 요소의 그림자                                     |
| tooltipPadding         | string    | 5px                                      | 툴팁의 패딩                                                   |
| aniBorderColor         | string    | none                                     | 애니메이션 시 툴팁 트리거 요소의 테두리 색상                  |
| aniTextColor           | string    | none                                     | 애니메이션 시 툴팁 트리거 요소의 텍스트 색상                  |
| aniBackgroundColor     | string    | none                                     | 애니메이션 시 툴팁 트리거 요소의 배경색                       |
| hoverLeave             | boolean   | false                                    | 툴팁 위로 마우스를 올릴 때 툴팁이 사라지는 것을 방지할지 여부 |
| cursor                 | string    | pointer                                  | 툴팁 트리거 요소의 커서 스타일                                |

```ts
export type Props = {
  message?: React.ReactNode;
  children?: React.ReactNode;
  direction?:
    | "left"
    | "right"
    | "bottom"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight"
    | "leftTop"
    | "leftBottom"
    | "rightTop"
    | "rightBottom"
    | "top";
  color?: string;
  enterDelay?: number;
  leaveDelay?: number;
  buttonBackgroundColor?: string;
  disabled?: boolean;
  textColor?: string;
  width?: string;
  height?: string;
  tooltipTextColor?: string;
  tooltipWidth?: string;
  tooltipHeight?: string;
  tooltipBackgroundColor?: string;
  tooltipFontSize?: string;
  tooltipFlexDirection?: FlexDirection;
  tooltipBoxShadow?: string;
  borderRadius?: string;
  boxShadow?: string;
  tooltipPadding?: string;
  aniBorderColor?: string;
  aniTextColor?: string;
  aniBackgroundColor?: string;
  hoverLeave?: boolean;
  padding?: string;
  margin?: Margin;
  display?: string;
  cursor?: string;
};

type Margin = {
  top: string;
  right: string;
  bottom: string;
  left: string;
};
type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
```

### 스타일링

#### CSS 클래스

##### .tooltip-wrapper: 툴팁 트리거 요소의 래퍼 클래스

##### .tooltip-button: 툴팁 트리거 요소의 클래스

##### .tooltip: 툴팁 요소의 클래스

##### .arrow-\*: 툴팁의 방향에 따라 추가되는 클래스

#### 예시 CSS

```css
.tooltip-wrapper {
  position: relative;
}

.tooltip-button {
  cursor: pointer;
}

.tooltip {
  position: absolute;
  z-index: 9999;
  background-color: var(--tooltipColor);
  color: white;
  padding: 5px;
  border-radius: 4px;
  white-space: pre-wrap;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.arrow-up::after,
.arrow-down::after,
.arrow-left::after,
.arrow-right::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
}

.arrow-up::after {
  border-width: 0 5px 5px 5px;
  border-color: transparent transparent var(--tooltipColor) transparent;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.arrow-down::after {
  border-width: 5px 5px 0 5px;
  border-color: var(--tooltipColor) transparent transparent transparent;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.arrow-left::after {
  border-width: 5px 5px 5px 0;
  border-color: transparent var(--tooltipColor) transparent transparent;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
}

.arrow-right::after {
  border-width: 5px 0 5px 5px;
  border-color: transparent transparent transparent var(--tooltipColor);
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
}
```

### 주요 기능

- ##### 마우스 이벤트 처리
  - `handleMouseOver` 및 `handleMouseOut` 함수를 사용합니다.
  - 마우스가 요소 위로 이동할 때 툴팁을 활성화합니다.
  - 마우스가 요소를 벗어날 때 툴팁을 비활성화합니다.
  - 이러한 이벤트 처리를 통해, 사용자는 요소 위에 마우스를 가져가면 툴팁을 표시할 수 있습니다.
- ##### 툴팁의 위치 설정
  - `getTooltipStyle` 함수를 사용하여 툴팁이 표시될 위치를 설정합니다.
  - 툴팁의 방향을 설정하고, 해당 방향에 따라 툴팁의 위치를 계산합니다.
- ##### 툴팁 스타일링

  - CSS 속성을 사용하여 툴팁의 스타일을 지정합니다.
  - 배경색, 텍스트 색상, 폰트 크기 등을 사용자 정의할 수 있습니다.

- ##### 지연 설정

  - `enterDelay` 및 `leaveDelay`를 사용하여 마우스 오버 및 아웃 후 툴팁이 표시되는 지연 시간을 설정할 수 있습니다.

- ##### 툴팁 컴포넌트 설정

  - `ToolTip` 컴포넌트의 `Props`를 통해 사용자 정의 가능한 여러 옵션을 설정할 수 있습니다.
  - 이를 통해 툴팁의 모양, 색상, 크기 등을 조정할 수 있습니다.

- ##### 사용 예제
  - `Main` 컴포넌트에서 다양한 방향과 스타일의 툴팁을 렌더링하여 사용 예제를 제공합니다.

### ProtoType

```tsx
import React from "react";
import ToolTip from "./ToolTip";

const App = () => {
  return (
    <div>
      <ToolTip />
    </div>
  );
};

export default App;
```

![prototype](https://github.com/catmaker/Tooltip/assets/114233139/6d2f3e76-929b-4eb3-8da2-e37e0d591645)

### 예시 데이터

##### 이 프로젝트에서 사용할 수 있는 예시 데이터를 제공합니다.

##### `TOOLTIP_DATA`

###### 툴팁 컴포넌트에 적용할 수 있는 다양한 스타일 및 설정을 포함한 예시 데이터입니다.

###### --> src/data/tooltipConfig.tsx에 위치

```tsx
const TOOLTIP_DATA = {
  top: [
    // 위 방향 툴팁 예시 데이터들...
  ],
  left: [
    // 왼쪽 방향 툴팁 예시 데이터들...
  ],
  right: [
    // 오른쪽 방향 툴팁 예시 데이터들...
  ],
  bottom: [
    // 아래 방향 툴팁 예시 데이터들...
  ],
  demo2: [
    // 데모2 예시 데이터들...
  ],
  demoBlock: [
    // 데모 블록 예시 데이터들...
  ],
  custom: [
    // 커스텀 툴팁 예시 데이터들...
  ],
  disable: [
    // 비활성화된 툴팁 예시 데이터들...
  ],
};

export default TOOLTIP_DATA;
```
#
### 툴팁 컴포넌트 동작 예시
![동작예시1번](https://github.com/catmaker/Tooltip/assets/114233139/12f4dfc6-cf56-4f98-8b9e-fe62d5277fdf)
###### 툴팁 컴포넌트에 마우스 오버 시 툴팁이 등장 하고 마우스 아웃 시 툴팁이 기본적으로 사라집니다.
###### 툴팁의 방향은 (`top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom`) 이 있습니다.
#

![동작예시2번](https://github.com/catmaker/Tooltip/assets/114233139/a24656cf-4dee-412d-ad2c-ce0f7918cb0a)
###### 툴팁 컴포넌트의 부모 요소가 scroll, hidden 일 경우에도 툴팁은 최상위권에서 등장합니다.
#
![동작예시3번](https://github.com/catmaker/Tooltip/assets/114233139/ca44c3db-8ba2-414d-9fdf-84a26d6f1f2f)
###### enterDelay, leaveDelay, hoverLeave를 전달하여 툴팁이 나오는 딜레이, 
###### 툴팁에 hover 시 사라지지 않는 기능을 커스텀하게 추가할 수 있습니다.
#
![동작예시4번](https://github.com/catmaker/Tooltip/assets/114233139/f8ce5095-d1e4-4140-aa8e-18e97399ebe2)
###### 툴팁의 내용은 string, number, icon, icon & string 등 여러가지 형태의 데이터를 받아 표현 할 수 있습니다.
#
![동작예시5번](https://github.com/catmaker/Tooltip/assets/114233139/8280b66c-4ce6-4d93-884e-8ccc9a2423bc)
###### 다양한 props를 받을 수 있게 설정해두어 다양한 커스텀이 가능합니다.
#
![동작예시6번](https://github.com/catmaker/Tooltip/assets/114233139/3b7098e4-4bc6-42aa-871c-872f33dcddc7)
###### 툴팁을 disabled props를 이용하여 툴팁을 안보이게 설정할 수 있습니다.

