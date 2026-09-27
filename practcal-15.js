const students = [
    { name: "Prince", marks: 85 },
    { name: "Rahul", marks: 72 },
    { name: "Amit", marks: 90 }
];

let output = "";

students.forEach(student => {
    output += `
        <div>
            <h3>${student.name}</h3>
            <p>Marks: ${student.marks}</p>
        </div>
        <hr>
    `;
});

document.getElementById("data").innerHTML = output;
