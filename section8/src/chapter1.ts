/*
인덱스드 엑세스 타입
*/

//1. 객체 예시
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

function printAuthorInfo(author: PostList[0]["author"]) {
  console.log(`${author.id} - ${author.name}`);
}

const post: PostList[0] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "june",
    age: 25,
  },
};

printAuthorInfo(post.author);

//튜플타입
type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
