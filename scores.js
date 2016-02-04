var students = ["Joe", "Jack", "Jane", "Jill"];
var gradeMean = [90, 68, 92, 88];

//Using the data above write a JavaScript that is linked to an html page that determines who has the lowest score.
//Write the answer in sentence form that includes both the name of the student and the score they have.
//Write the answer to both the console and the html page using the document write or other command.

var currentLow = 0;
var grade;

for (var i = 0; i <students.length; i++){

grade = gradeMean[i];

  if (grade <= gradeMean[currentLow]){
    currentLow = i;
  }



}
//console.log(gradeMean[currentLow]);
//console.log(students[currentLow]);
console.log("The lowest score is " + gradeMean[currentLow] + ". This score was earned by " + students[currentLow] + ".")
document.getElementById("lowest").innerHTML = "The lowest score is " + gradeMean[currentLow] + ". This score was earned by " + students[currentLow]+ "."
