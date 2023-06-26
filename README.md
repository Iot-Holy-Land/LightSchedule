# IOT 시간예약 전등 시스템
시작일 : 2023-05-18 <br>
종료일 : 2023-06-05


### LightSchedule이란?
: ```LightSchedule```는 평소에 잠에 청할 때 귀찮게 불을 끄러 갈 필요가 없다. <br />그리고 내가 평균적으로 언제 잠잘 준비를 할지도 알 수 있어서 건강한 수면패턴을 만드는데에 도움을 준다.

## 🛠사용한 기술🛠
### 프론트<br />
|프레임워크|언어|라이브러리|
|------|---|---|
|React|TS|react-query|
|x|x|recoil|
|x|x|css-in-js|

### 백엔드<br />
|언어|
|---|
|php|

### iot<br />
<strong>모듈 :</strong> esp32<br />
<strong>센서 :</strong> 서보모터, 부저, 조도센서<br />
|모듈|센서|
|------|---|
|esp32|서보모터|
|x|부저|
|x|조도센서|


## 기능별 작동구조
**알람호출기능** : js에서 new Date()라는 함수로 현재 날짜와 시간을 가져올 수 있다. <br /> 이를 이용하여 현재 날짜와 현재 시간을 따로 state에 저장시키고 현재시간을 0.5초마다 호출을 하여 계속 값을 비교하게 만들었고 만약 내가 입력한 값과 일치할 시 php를 통하여 esp32로 SUCCESS값을 넘긴다. <br>

**예약 기능** : react에서 input값을 state에 저장 후 그 값을 넘겨주고 싶은 php파일로 파라미터를 넘겨주면 php가 그 파라미터를 받아와 sql문에 따라 db에 insert한다.

## 화면

<img src="https://github.com/Iot-Holy-Land/LightSchedule-Client/assets/102664109/264c11b0-0ca4-4a63-ab96-d4be914402d2" width="500" height="250"/><br>
여기서 + 버튼을 누르면 이 화면으로 이동되고 <br>
<img src="https://github.com/Iot-Holy-Land/LightSchedule-Client/assets/102664109/470293e1-81a6-4d62-8fa3-742884866467" width="250" height="150"/><br>
예약하고 싶은 시간을 적고 추가를 누르면 다음과 같이 예약이 성공한다 <br>
<img src="https://github.com/Iot-Holy-Land/LightSchedule-Client/assets/102664109/a8e52a2e-6563-4554-bb43-720e03124aea" width="500" height="250"/>


## 느낀 점
: 처음 주제를 생각했었을 땐 그나마 괜찮고 좋은 아이디어라 생각을 하였지만... 이 iot를 만들면 만들수록 필요성을 못느끼게 되었다.. <br />
그러다 보니 결국은 시간예약 뿐 아니라 그냥 블루투스로 원거리로 바로 불을 껐다켰다 해주는 기능도 넣게 되고 처음 내 주제에서 조금 벗어난거 같다는 느낌이 들었다.<br />
그래도 처음부터 끝까지 내 힘으로 웹과 연동하여 만든 iot를 만들어 볼 수 있어서 좋았다.

## 🎮How to Run~
1. ```xampp``` Server on <br>
2. ```git clone "https://github.com/Iot-Holy-Land/LightSchedule-Server"```로 백엔드를 받아오기 <br>
3. ```git clone "https://github.com/Iot-Holy-Land/LightSchedule-Client"```로 프론트 받아오기 <br>
4. 아두이노 코드 가져와 arduino ide에 복붙하고 라이브러리 다운로드하기 <br>
