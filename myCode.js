  console.log(87)

  function edit(){
    console.log(7878)
const startBtn = document.querySelector("#load-next-post");
startBtn.innerHTML = "Start Onboarding"

const stepsCount =document.querySelector("#completion-count");
stepsCount.innerHTML = stepsCount.innerText.replace("Lessons", "Steps")

const courseTitle =document.querySelector(".category-title");
courseTitle.innerHTML = "Onboarding Steps"
  } 
  
window.addEventListener("load",edit) 
