# gif-sync-react

> react에서 여러 gif 로드 시 싱크를 맞추는 로직 예제입니다. <br />
> 코드 해설은 [제 블로그](https://www.hyeonsooryu.com/5b4164ba-95d2-40b5-a12d-934c453ea359)에서 확인하실 수 있습니다.

# 실행 가이드

## 설치

```bash
$ git clone https://github.com/82surf/gif-sync-react.git

$ cd gif-sync-react

$ npm install
```

## 환경변수 설정

### S3 사용 시

프로젝트의 루트 경로에 `.env` 파일을 추가하고 환경 변수를 설정합니다.

```
REACT_APP_S3_URL_CLOTH={YOUR_URL_PATH}
REACT_APP_S3_URL_HAT={YOUR_URL_PATH}
REACT_APP_S3_URL_EFFECT={YOUR_URL_PATH}
```

### 로컬 이미지 사용 시

`src/components/Parent.jsx` 에서 로컬 이미지를 import한 후 사용합니다.

```javascript
import characterGif from "../static/images/cobby.gif";
import hatGif from "../static/images/hat.gif";
import clothGif from "../static/images/cloth.gif";
import effectGif from "../static/images/effect.gif";

// START -- 이미지 경로 변경은 여기를 수정해주세요.
const CHARACTER_URL = characterGif;
const HAT_URL = hatGif;
const CLOTH_URL = clothGif;
const EFFECT_URL = effectGif;
// END --

...
```

## 실행

```bash
$ npm start
```
