let student =[
    {name: 'Mark',mark: 30},
    {
        name: 'Jan',
        mark: 10
    },
    {
        name: 'Triakshan',
        grade: 69

    }

]

function addGrade(s, cb){
    setTimeout(() => {student.push(student);
                        cb();
                        }, 5000);
} 

function PrintGrades(){
    student.map((student)=>{
        console.log(student);
    }
);
}

addGrade({name:"Mpho",grade:99}, PrintGrades)