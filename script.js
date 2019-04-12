const imAboutTo = "I'm about to"
const ifYouKnow = "if you know"
const whatIMean = "what I mean."
const root = document.querySelector('#root')

var i = 0
window.setInterval(function(){
  root.innerHTML = ""
  let whatImAboutToDo = aboutTo[i];
  let phrases = [imAboutTo,  whatImAboutToDo, ifYouKnow, whatIMean]
  phrases.forEach(phrase => {
    phrase.split(" ").map(eachWord => {
      const word = document.createElement('div')
      word.setAttribute('class', 'row')
      eachWord.split('').map(char => {
        const letter = document.createElement('div')
        letter.setAttribute('class', 'letter')
        letter.innerText = char
        word.append(letter)
          })
          root.append(word)
          }
        )
      }
    )
    i >= aboutTo.length - 1 ? i = 0 : i++
  }, 3000)



// window.setInterval(i++, 30000)
