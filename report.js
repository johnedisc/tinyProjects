let bubScores = [];
let hiScoreIndex = [];
let solutionNum;

//Random Scores
for (let i = 0; i < 36; i++) {
    let randomScore = Math.floor((Math.random() * 60) + 1);
    
    bubScores.push(randomScore);
    
    document.write(`bubble solution #${i} score: ${bubScores[i]}<br>`);
    
}

//Find hiest scores
function findGreatest(arr) {
    let score = 0;
    let greatest = [];
    
    for (let i=0; i<arr.length; i++) {
        if (arr[i] > score) {
            score = arr[i]; }
    }
    
    greatest.push(score);
    
    let j = 0;
    let count = 0;
    
    
    while (arr.indexOf(score, j) != -1) {
        
        hiScoreIndex[count] = arr.indexOf(score, j);
        
        j = hiScoreIndex[count] + 1;
        
        
        count++;
        
        
        
    }
    
    
    
    
    
    return greatest;
}

const hiScore = findGreatest(bubScores);

document.write(`bubble tests: ${bubScores.length}<br>`)

document.write(`highest bubble score: ${hiScore[0]}<br>`);

solutionNum = `solution with the highest score:`;

for (let i = 0; i < hiScoreIndex.length; i++) {
    solutionNum += ` #${hiScoreIndex[i]}`
}

document.write(solutionNum);
