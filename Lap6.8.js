function solve(input){

    let name = input[0];
    let sumOfGrades = 0;
    let index = 1;
    let excluded = 0;
    let currentGrade = Number(input[index]);



    while (index <= 12 ){
       
        if (currentGrade < 4){
            excluded++;
        }
            sumOfGrades +=currentGrade;

            if(excluded > 1){
                console.log(`${name} has been excluded at ${index - 1} grade`);
                break;
            }
    index++;
    currentGrade = Number(input[index]);
    }

    if (excluded <= 1) {
    let avg = sumOfGrades / 12;
    console.log(`${name} graduated. Average grade: ${avg.toFixed(2)}`);
    }

}


solve (["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])

solve (["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])

