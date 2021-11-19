// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?
const getAge = (person) => {
  return new Date().getFullYear() - person.year;
};
const oneIsAdult = people.some((person) => getAge(person) >= 19);
console.log(oneIsAdult);

const allIsAdult = people.every((person) => getAge(person) >= 19);
console.log(allIsAdult);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const getComment = (id) => {
  return comments.find((comment) => comment.id === id);
};
console.log(getComment(823423));

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const deleteComment = (id) => {
  if (!getComment(id)) return;
  comments.splice(
    comments.findIndex((comment) => comment.id === id),
    1
  );
};

const commentIndex = comments.findIndex((comment) => comment.id === 823423);

const newComments = [
  ...comments.slice(0, commentIndex),
  ...comments.slice(commentIndex + 1),
];
console.table(newComments);

console.table(comments);
deleteComment(823423);
console.table(comments);
