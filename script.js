const imAboutTo = "I'm about to"
const ifYouKnow = "if you know"
const whatIMean = "what I mean."

phrases = [imAboutTo, "merge into traffic", ifYouKnow, whatIMean]

const root = document.querySelector('#root')

phrases.forEach(phrase => {
  const row = document.createElement('div')
  row.setAttribute('class', 'row')

  phrase.split('').map(char => {
    const div = document.createElement('div')
    div.setAttribute('class', 'letter')
    div.innerText = char
    row.append(div)
  })
  root.append(row)
}




)



//
// function appendRow(x){
//   return document.querySelector('#root').append(x)
// }
//
// function createDiv(x){
//   const div = document.createElement('div')
//   div.setAttribute('class', 'letter')
//   div.innerText = x
//   return div
// }
//
// function createRow(x){
//   const row = document.createElement('div')
//   row.setAttribute('class', 'row')
//   row.append(x)
//   return
// }
//
// function spreadToArray(phrases){
//   return phrases.map(phrase =>
//     phrase.split("")
//   )
// }
//
// spreadToArray(phrases).forEach(phrase =>  console.log(createDiv(phrase)))
