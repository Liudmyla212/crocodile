function getRectangleArea(width, height) {
  return width * height;
}
const getRectangleAreaExpression = function (width, height) {
  return width * height;
};
const getRectangleAreaArrow = (width, height) => {
  return width * height;
};
console.log(getRectangleArea(5, 10));
console.log(getRectangleAreaExpression(5, 10));
console.log(getRectangleAreaArrow(5, 10));