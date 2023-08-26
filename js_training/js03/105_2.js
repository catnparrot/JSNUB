const album = {
  id: 1,
  title: "LOVE YOURSELF",
};

const song1 = { name: "Euphoria" };
const song2 = { name: "Metaphor" };

album.list = [];
album.list.push(song1, song2);
album.singer = "SAS";

delete album.id;
album.singer = "RM";

console.log(album);

Object.seal(album);

// *
album.comment = "Answer"; //no add
album.singer = "JK"; //no changed
delete album.title; //no edit

console.log(album);
