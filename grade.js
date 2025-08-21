// Student object (sample input)
const student = {
    name: "xyz",
    marks: [85, 92, 78, 88, 90]
};

// Function to calculate average
function calculateAverage(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return (sum / marks.length).toFixed(2); // average up to 2 decimal places
}

// Function to get grade
function getGrade(average) {
    if (average >= 90) return "A";
    else if (average >= 80) return "B";
    else if (average >= 70) return "C";
    else if (average >= 60) return "D";
    else return "F";
}

// Main function to display result
function displayResult(student) {
    const avg = calculateAverage(student.marks);
    const grade = getGrade(avg);

    console.log("Name: " + student.name);
    console.log("Average Marks: " + avg);
    console.log("Grade: " + grade);
}
displayResult(student);