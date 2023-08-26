// 객체에 속성 추가 방지 (seal)
const album = {
  name: "LOVE YOURSELF",
};

album.song = "Euphoria";
album.singer = "RM";

console.log(album);

Object.seal(album);

// *
album.comment = "Answer"; //no add
album.singer = "JK"; //no changed
delete album.name; //no edit

console.log(album);
