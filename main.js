const btn = document.getElementById("btn")
const flowers = document.querySelectorAll(".flower")

btn.addEventListener("click",()=>{
  window.location.reload()
})

function addPressEventOnFlowers(){
  flowers.forEach((flower)=>{
    flower.addEventListener("click",(e)=>{
        let elem = e.target
        if(elem.className == "circle"){
          elem.parentNode.remove()
        }
    })
  })
}

addPressEventOnFlowers()
