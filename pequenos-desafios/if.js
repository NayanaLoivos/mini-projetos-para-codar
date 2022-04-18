function getGrade(score) {
    let grade;
    // Write your code here
    if(score >= 26) {
        grade = 'A';        
    }else if(score >= 21) {
        grade = 'B';
    }else if(score >= 16) {
        grade = 'C';
    }else if(score >= 11) {
        grade = 'D';
    }else if(score >= 6) {
        grade = 'E';
    }else {
        grade = 'F';
    }
    
    
    return grade;
}
console.log(getGrade(11));