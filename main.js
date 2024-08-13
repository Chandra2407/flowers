const btn = document.getElementById("btn")
const flowers = document.querySelectorAll(".flower")
let pickUpLines = [
  " Are you a sunflower? Because you brighten up my day.",
  "Are you a rose? Because you make my heart bloom.",
  "Roses are red, violets are blue, I’m not a poet, but I’m falling for you.",
  "i know i was stupid, sorryyy seriously.",
  "Aur like please dont get mad about these corny pick up lines, mujhe achhe nhi mile. jb milenge tb update kr dunga",
  "also abhi tujhe same sentence multiple times dikh rha hoga, ise bhi fix kr dunga okay"
]

btn.addEventListener("click",()=>{
  window.location.reload()
})

function addPressEventOnFlowers(){
  flowers.forEach((flower)=>{
    flower.addEventListener("click",(e)=>{
        let elem = e.target
        if(elem.className == "circle"){
          elem.parentNode.remove()
          random = getRandomInt(0,pickUpLines.length-1)
          alert(pickUpLines[random])
        }
    })
  })
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

addPressEventOnFlowers()
