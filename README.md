# ToolTip 컴포넌트

### 프로젝트 개요

###### ToolTip 컴포넌트는 React로 구현된 커스터마이즈 가능한 툴팁 컴포넌트입니다.

###### 이 문서는 컴포넌트의 구조, 속성, 그리고 사용 방법을 설명합니다.

### 설치 및 시작

#### 설치

##### 먼저, 프로젝트를 클론하고 필요한 패키지를 설치합니다.

#

```
git clone https://github.com/your-repo/your-project.git
cd your-project
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

#

```
import React from 'react';
import ToolTip from './ToolTip';

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

### 스타일링

#### CSS 클래스

##### .tooltip-wrapper: 툴팁 트리거 요소의 래퍼 클래스

##### .tooltip-button: 툴팁 트리거 요소의 클래스

##### .tooltip: 툴팁 요소의 클래스

##### .arrow-\*: 툴팁의 방향에 따라 추가되는 클래스

#### 예시 CSS

```
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
  content: '';
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
