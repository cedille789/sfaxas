# SFaxas

Siulüsemüsifaxas, SFaxas는 인공 세계관 사트의 보드게임들을 플레이 할 수 있는 사이트입니다.

## DB

### USER

| FIELD            | TYPE          | DESCRIPTION                |
| ---------------- | ------------- | -------------------------- |
| id               | varchar(30)   | 유저 아이디 (= 닉네임)     |
| password         | varchar(2000) | 비밀번호 (암호화됨)        |
| salt             | varchar(64)   | 비밀번호 salt              |
| color            | int           | 색                         |
| games            | int           | 참여한 게임 수             |
| wins             | int           | 승리 횟수                  |
| joined_date      | datetime      | 가입한 시각                |
| last_interaction | datetime      | 마지막으로 상호작용한 시각 |

## API

### User

#### GET api/users

모든 유저 정보 불러오기

#### POST api/users/new

새로운 계정 생성

- password, color 정보가 전달되어야 함
- 유저 정보 반환

#### POST auth/signup

새로운 계정 생성

- password, color 정보가 전달되어야 함
- **로그인 되어있으면 안됨**
- 메인 페이지로 리다이렉트

#### POST auth/login

로그인

- id, password 정보가 전달되어야 함
- **로그인 되어있으면 안됨**
- 메인 페이지로 리다이렉트

#### GET api/users/{id}

유저 정보 조회

- 유저 정보 반환

#### PATCH api/users/{id}

유저 정보 수정

- **<u>세션 필요</u>**
- password, color 정보를 전달할 수 있음
- 유저 정보 반환

#### DELETE api/users/{id}

유저 삭제

- **<u>세션 필요</u>**
