// Create a new <style> element
let styleSheet = document.createElement('style');

styleSheet.textContent='html p span.foreignWord:hover { background-color: pink }'

// Append the <style> element to the <head> of the document
document.head.appendChild(styleSheet);

// Get the <p> element
const paragraph = document.querySelectorAll('p');
paragraph.forEach(function (arrayItem) {
    // Get the text content of the <p> element
    let text=arrayItem.innerText

    // Split the text into an array of word
    const words = text.split(' ');
    // console.log(words)

    let spanText=""
    // Map each word to a new <span> element
    const spanWords = words.map(word => {
        let span = document.createElement('span')
        span.className="foreignWord"
        span.textContent = word
        span=span.outerHTML
        spanText+= ' ' + span
        }
    )
    
    // Set the innerHTML of the <p> element to the string of <span> elements
    arrayItem.innerHTML = spanText;
    });

const allWords = document.getElementsByClassName("foreignWord")
console.log(allWords)

let foreignWords = []

const logClick = () => {
    console.log("Clicked!")
}

for (let i=0 ; i< allWords.length ; i++) {
    // console.log(element.innerText)
    allWords[i].addEventListener('click', logClick)
}
    
console.log(foreignWords)
