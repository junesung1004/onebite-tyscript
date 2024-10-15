// 서로소 유니온 타입(타입 좁히기 = 타입가드)
// 교집합이 없는 타입들로만 만든 유니온 타입을 말함
// number 타입이랑 string 타입을 생각하면 된다.(공통된게 하나도 없는걸 서로소 라고 한다.)

type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point}모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user: User) {
  if ("kickCount" in user) {
    // admin type인 경우
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if ("point" in user) {
    // member type인 경우
    console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
  } else if ("visitCount" in user) {
    // guest type인 경우
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
  }
}

//위 코드를 더 알아보기 쉽게 바꾼 코드
function login1(user: User) {
  if (user.tag === "ADMIN") {
    // admin type인 경우
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if (user.tag === "MEMBER") {
    // member type인 경우
    console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
  } else if (user.tag === "GUEST") {
    // guest type인 경우
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
  }
}

/*
복습겸 한가지 추가 예시
*/
// 비동기 작업의 결과를 처리하는 객체

type LoadingTask = {
  state: "LOADING";
};

type FaliedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

// type AsyncTask = {
//   state: "LOADING" | "FAILED" | "SUCCESS";
//   error?: {
//     message: string;
//   };
//   response?: {
//     data: string;
//   };
// };

type AsyncTask = LoadingTask | FaliedTask | SuccessTask;

//로딩 중 -> 콘솔에 로딩중
//실패 -> 에러메세지 출력
//성공 -> 데이터를 출력
function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING": {
      console.log("로딩중");
      break;
    }

    case "FAILED": {
      console.log(`에러 발생 : ${task.error.message}`);
      break;
    }

    case "SUCCESS": {
      console.log(`성공 : ${task.response.data}`);
      break;
    }
  }
}

const loading: AsyncTask = {
  state: "LOADING",
};

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류 발생 원인 ???",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "데이터~~!~!",
  },
};
