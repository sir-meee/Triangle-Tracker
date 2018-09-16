var length = parseInt(prompt("Enter the length"));
var height = parseInt(prompt("Enter the height"));
var hypotenuse = parseInt(prompt("Enter the hypotenuse"));
var triangle = [length, height, hypotenuse];
    if (length===height && height===hypotenuse && hypotenuse===length) {
      alert("Equilateral Triangle");
}
    else if (length===height || length===hypotenuse|| length===hypotenuse ) {
      alert("Isosceles Triangle");
  }
    else if (length!==height && height!==hypotenuse && length!=hypotenuse) {
      alert("Scalene Triangle");
  }
    else if ((length+height)<=hypotenuse || (length+hypotenuse)<=height || (height+hypotenuse)<=length) {
      alert("NOT a Triangle");
}
