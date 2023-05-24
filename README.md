# SFaxas

Siulüsemüsifaxas, SFaxas는 인공 세계관 사트의 보드게임들을 플레이 할 수 있는 사이트입니다.

## DB

### User

| FIELD    | TYPE          | DESCRIPTION            |
| -------- | ------------- | ---------------------- |
| id       | varchar(30)   | 유저 아이디 (= 닉네임) |
| password | varchar(2000) | 비밀번호 (암호화됨)    |
| color    | int           | 색                     |
| xp       | int           | 경험치                 |
| level    | int           | 레벨                   |
| salt     | varchar(64)   | 비밀번호 salt          |
| games    | int           | 참여한 게임 수         |
| wins     | int           | 승리 횟수              |

## API

### User

#### POST api/user

- 유저 생성
- password, color 정보가 전달되어야 함
- 유저 정보 반환

#### GET api/user/{id}

- 유저 정보 조회
- 유저 정보 반환

#### PATCH api/user/{id}

- 유저 정보 수정
- **<u>세션 필요</u>**
- password, color 정보를 전달할 수 있음
- 유저 정보 반환

#### DELETE api/user/{id}

- 유저 삭제
- **<u>세션 필요</u>**
