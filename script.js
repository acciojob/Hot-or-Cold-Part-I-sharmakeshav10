//your code here
const clickBtn = document.getElementById("btn");
const userInput = document.getElementById("guess");

function generateRandomNum() {
    clickBtn.addEventListener("click", function(){
        const randomNum = Math.floor(Math.random()*41) - 20;
        document.getElementById('num').textContent = randomNum;

        if(randomNum > (userInput.value - 5) && randomNum < (userInput.value + 5)) {
            document.getElementById('respond').textContent = "Hot";
        } else {
            document.getElementById('respond').textContent = "Cold";
        }
    })
}

generateRandomNum();



