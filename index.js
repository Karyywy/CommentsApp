import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from
"https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://we-are-champions-6d682-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const endorsementDB = ref(database, "endorsements")

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const commentBoardEl = document.getElementById("comment-board")

inputBtn.addEventListener("click", function() {
let inputValue = inputEl.value

push(endorsementDB, inputValue)

clearInputFieldEl()

})

onValue(endorsementDB, function(snapshot) {
    let endorsementsArray = Object.values(snapshot.val())
    
    clearCommentBoradEl()
    
    for (let i = 0; i < endorsementsArray.length; i++) {
        let currentEndorsements = endorsementsArray[i]
        
    appendItemTocommentBoardEl(endorsementsArray[i])
    }
})

function clearCommentBoradEl(){
    commentBoardEl.innerHTML = ""
}


function clearInputFieldEl(){
    inputEl.value = ""
}

function appendItemTocommentBoardEl(commentValue){
    commentBoardEl.innerHTML +=  `<li>${commentValue}</li>`
}