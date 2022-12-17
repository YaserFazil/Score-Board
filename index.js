var homScores = 0
var gueScores = 0


var homScore = document.getElementById("hom-score")
var gueScore = document.getElementById("gue-score")

gueScore.textContent = 0

function add1Home() {
    homScores += + 1
   homScore.textContent = homScores
}


function add2Home() {
    homScores += +2
    homScore.textContent = homScores

}


function add3Home() {
    homScores += +3
    homScore.textContent = homScores

}



function add1Guest() {
    gueScores += + 1
    gueScore.textContent = gueScores
 }
 
 
 function add2Guest() {
    gueScores += +2
     gueScore.textContent = gueScores
 
 }
 
 
 function add3Guest() {
    gueScores += +3
     gueScore.textContent = gueScores
 
 }


 function resetAll() {
    gueScores = gueScores = 0
    homScores = homScores = 0
    gueScore.textContent = gueScores
    homScore.textContent = homScores
 }