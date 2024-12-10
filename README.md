# Frontend Assignment

## 프로젝트 설명

이 프로젝트는 Nota AI 프론트엔드 사전 과제를 위해 React를 사용하여 개발되었습니다.
해당 과제는 채팅 및 채팅 리스트 기본 기능을 구현하는 것을 목표로 하며, 기능적인 요구 사항을 충족시키는 데 중점을 두었습니다.

## 과제 요구사항

• 진행했던 전체 채팅 목록을 표시해 주세요.
• 현재 선택된 채팅을 확인할 수 있도록 표시 해주세요.
• 채팅 목록에는 대화의 첫 질문 내용과 채팅에서 사용한 모델명을 표시 해주세요.
• 채팅 목록에는 스크롤 처리를 해 주세요.
• New 버튼 클릭 시 우측 채팅내역이 초기화되며 , 현재 선택된 채팅이 비활성화됩니다.
• 모델을 선택하기 이전에는 입력란, 제출버튼이 비활성화되어야 합니다.
• 모델 목록을 불러오는 과정의 로딩 처리가 필요하며, 모델의 초기값은 불러온
모델 목록의 첫 번째 모델입니다.
• 모델을 변경하면 입력란, 채팅 내역 그리고 사이드의 현재 선택된 채팅도 초기화
되어야 합니다.
• 채팅목록에 새로운 채팅이 추가되는 시점은 새로운 질문이 제출된 이후입니다.
• 이전 대화내역을 선택한 경우, 채팅 내역을 표시해주며, 모델은 사용했던 모델로
선택되어야 합니다.
• 채팅 화면에는 로딩 처리가 필요합니다.
• 질문 입력란(Textarea)은 3줄 이상이 될 경우에만 스크롤 추가 해주세요.
• 채팅 내역은 위에서부터 쌓이기 시작하며 길어질 경우 스크롤을 추가해 주세요.
• 스크롤이 최하단에서 벗어난 경우 최하단으로 이동할 수 있는 버튼이 추가로
나타나며, 클릭 시 스크롤 최하단으로 이동합니다.

## 주요 기능

위의 과제 요구사항을 모두 구현 하였습니다.

• 전체 채팅 목록 표시: 진행했던 모든 채팅의 목록을 표시합니다.

• 현재 선택된 채팅 표시: 사용자가 선택한 채팅이 시각적으로 확인될 수 있도록 처리합니다.

• 채팅 목록 정보: 각 채팅 목록에는 대화의 첫 질문과 사용된 모델명이 표시됩니다.

• 스크롤 처리: 채팅 목록이 길어질 경우 스크롤 기능을 제공합니다.

• New 버튼 동작: New 버튼 클릭 시 우측 채팅 내역이 초기화됩니다. 현재 선택된 채팅이 비활성화됩니다.

• 모델 선택 전 상태: 모델 선택 전에는 질문 입력란과 제출 버튼이 비활성화됩니다.

• 모델 로딩 처리: 모델 목록을 불러오는 동안 로딩 UI를 표시합니다. 초기 모델 값은 불러온 목록의 첫 번째 모델입니다.

• 모델 변경 동작: 모델 변경 시 입력란, 채팅 내역, 현재 선택된 채팅이 초기화됩니다.

• 새로운 채팅 추가 시점: 새로운 질문이 제출된 이후 채팅 목록에 추가됩니다.

• 이전 대화내역 표시: 이전 대화내역을 선택하면 해당 채팅 내역이 표시됩니다. 모델은 사용했던 모델로 선택됩니다.

• 채팅 화면 로딩 처리: 채팅 화면 로딩 상태를 시각적으로 보여줍니다.

• 질문 입력란(Textarea): 텍스트가 3줄 이상일 경우 스크롤이 추가됩니다.

• 채팅 내역 스크롤 처리: 채팅 내역은 위에서부터 쌓이기 시작합니다. 길어질 경우 스크롤이 추가됩니다. 스크롤이 최하단에서 벗어난 경우, 최하단 이동 버튼이 나타나며, 클릭 시 최하단으로 이동합니다.

추가적으로

• 사용자 편의성을 위하여 채팅 리스트 사이드 바를 접는기능을 구현하였습니다.

• 사용자 편의성을 위하여 채팅 리스트에서 검색 기능을 만들어 모델이나 첫 대화내용을 검색하였을 때 조금 더 찾기 쉽게 구현하였습니다.

• 채팅을 입력할때 노타 서비스와 유사하게 type your message under 100 words 라는 option을 추가하였습니다.

## 개발 환경

Visual Studio Code: 코드 편집 및 디버깅에 사용

node: v18.20.4

yarn: 1.22.22

## 실행 방법

```
# 설치 확인
node -v

#만약 위의 version이 없다면 다음 실행
nvm install 18.20.4
nvm use 18.20.4
node -v


# 의존성 설치
yarn install

# 개발 서버 실행
yarn run dev

```

## 프로젝트 구조

```
project-root/
├── public/ # mockServiceWorker
├── src/
│ ├── components/ # UI 컴포넌트
│ │ ├── apis/ # 채팅 관련 api 재 정의
│ │ ├── contexts/  채팅과 채팅 리스트의 state를 관리하기 위한 context
│ │ └── interfaces/ 여러 interface들의 정의
│ │ └── pages/
│ │ │ ├── ChatList/ 채팅 리스트 관련 구현
│ │ │ └── CurrentChat/ 현재 채팅 관련 구현
│ ├── assets/ # icon 및 배경 관련 png 또는 svg
│ ├── mock/ # 기존에 제공된 mock 관련 api 정보
└── README.md # 이 파일
```
