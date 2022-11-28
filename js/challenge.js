const counter  = document.getElementById('counter')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const heart = document.getElementById('heart')
const pause = document.getElementById('pause')
const classlikes = document.querySelector('.likes')
const form = document.getElementById('comment-form')
const list = document.getElementById('list')

let time = 0
let clickcounter = 0
let counterText = counter.innerText

function timer(e){
  setInterval(() => {
    time ++
    counter.innerText = time
  }, 1000)
}
timer()

plus.addEventListener('click', (e) => {
  counter.innerHTML= time ++
})

minus.addEventListener('click', (e) => {
  counter.innerHTML= time --
})

heart.addEventListener('click', (e) =>{
  let createDiv = document.createElement('div')
  createDiv.innerText = `${time} has been clicked ${clickcounter} times!`
  classlikes.append(createDiv)
  // counter.innerText + ` was liked ${clickcounter} times!`
  
})

pause.addEventListener('click', (e) => {

})



form.addEventListener('submit', (e)=>{
  e.preventDefault()
  let textComment = e.target['comment-input'].value
  let createP = document.createElement('div')
  createP.innerText = textComment

  list.append(createP)
  form.reset()
})




// 1) See the timer increment every second once the page has loaded. **DONE**
// 2) Manually increment and decrement the counter using the plus and minus buttons. **DONE**


// 3) "Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.

// 4) Pause the counter, which should:
//     pause the counter
//     disable all buttons except the pause button
//     switch the label on the button from "pause" to "resume"
// 5) Click the "restart" button to restart the counter and re-enable the buttons.



// 6) Leave comments on my gameplay, such as: "Wow, what a fun game this is. **DONE**













// (function timer () {
//   let timeStart = 0
//   setInterval(() =>{
//     counter.innerText = timeStart++
//   }, 1000)
// })()