//your code here
const clickBtn = document.getElementById("btn");

function generateRandomNum() {
    clickBtn.addEventListener("click", function(){
        const randomNum = Math.floor(Math.random()*41) - 20;
        // document.getElementById('num').textContent = randomNum;
    })
}

generateRandomNum();



