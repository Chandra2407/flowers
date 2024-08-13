const btn = document.getElementById("btn")
const flowers = document.querySelectorAll(".flower")
let pickUpLines = [
  " Are you a sunflower? Because you brighten up my day.",
  "Are you a rose? Because you make my heart bloom.",
  "Roses are red, violets are blue, I’m not a poet, but I’m falling for you.",
  "i know i was stupid, sorryyy seriously.",
  "also abhi tujhe same sentence multiple times dikh rha hoga, ise bhi fix kr dunga okay",
  "there are three type of flowers in this garden, can you guess them???",
  "Are you a daisy? Because I’m crazy about you.",
  "I can't be-leaf how amazing you are!",
  "How do sunflowers stay so positive? They always look on the sunny side!",
  "What do you call a clumsy flower? A Whoopsi-Daisy.",
  "What do you call a flower that runs on electricity? A power plant!",
  "Why did the rose refuse to go to the party? It didn't want to get caught in a thorny situation!",
  "Why did the gardener take a photo of a flower? To help it photosynthesize",
  "I'm rooting for you, my little sunflower.",
  "Life would be rosy if we could just bloom wherever we're planted!"
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
