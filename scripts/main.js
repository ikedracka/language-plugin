// Create a new <style> element
const style = document.createElement('style');

// Set the textContent property of the <style> element to the CSS code
style.textContent = 'html p span:hover { border: 2px solid red; }';

// Append the <style> element to the <head> of the document
document.head.appendChild(style);

// Get the <p> element
const paragraph = document.querySelectorAll('p');
console.log(paragraph)
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
        span.textContent = word
        span=span.outerHTML
        spanText+= ' ' + span
        }
    )
    console.log(spanText)
    // const spanText=spanWords.join(' ')
    // const spanWords = words.map(word => {
    // const span = document.createElement('span');
    // span.textContent = word;
    // return span;})

    // Join the array of <span> elements into a string
    // const spanText = spanWords.join(' ');
    
    // Set the innerHTML of the <p> element to the string of <span> elements
    arrayItem.innerHTML = spanText;
    });
    

