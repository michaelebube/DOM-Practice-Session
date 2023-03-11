/* DOM */

//document.body.style.backgroundColor = 'blue';
//document.body.style.color = 'yellow'
//const element = document.

/* Window Object */
console.log(window)
 console.dir(document)

 /* getElementById('element') 
const h1 = document.getElementById("title");
h1.style.color = "red";

const btn = document.getElementById('btn')
btn.style.backgroundColor = 'blue'
btn.style.color = 'white'
*/


//document.getElementById('btn').style.backgroundColor = "Purple"
//document.getElementById('btn').style.color = "white"

/* getElementsByTagName 
const headings = document.getElementsByTagName('h2')
headings[0].style.color = "red"
//console.log(headings.length)

 const items = document.getElementsByTagName('li')
// items.forEach(function(item) {
//     console.log(item);
// });
items[2].style.color = 'orange'
const betterItems = [...items];

betterItems.forEach(function(item) {
    //console.log(item);
})

console.log(items);
console.log(betterItems);
*/

/* getElementsByClassName 
const listItems = document.getElementsByClassName('special');
listItems[1].style.color = 'blue'
// console.log(listItems);
*/

/* querySelector (Any CSS Selector) && querySelectorAll 
const result = document.querySelector('#result');
result.style.backgroundColor = 'Blue'

const item = document.querySelector('.special')
console.log(item)

const lastItem = document.querySelector('li:last-child');
console.log(lastItem); */

// querySelectorAll with forEach method
/* const list = document.querySelectorAll('.special')
 //console.log(list);
 list.forEach(function(item) {
     console.log(item);
     item.style.color = 'yellow'
 }) */

/* Navigate the DOM - Children 
const result = document.querySelector('#result')
const allChildren = result.childNodes;
//console.log(allChildren);

const children = result.children;
console.log(children);

console.log(result.firstChild);
console.log(result.lastChild);
*/

/* Navigate the DOM - Parent Element 
 const heading = document.querySelector('h2');
 //console.log(heading.parentElement.parentElement.parentElement.parentElement.parentElement);
 const parent = heading.parentElement;
 parent.style.color = 'red'

*/

/* Navigate the DOM - previousSibling and nextSibling 
const first = document.querySelector('.first')
const second = first.nextSibling.nextSibling.style.color = 'red'
console.log(second);

const last = document.querySelector('#last');
const third = last.previousSibling.previousSibling;
console.log(third);
console.log(last.nextSibling.nextSibling);
*/

/* Navigate the DOM - previousElementSibling and nextElementSibling 
const first = document.querySelector('.first')
first.nextElementSibling.style.color = 'green'
console.log(first);
const last =  document.querySelector('#last')
*/

/* nodeValue and textContent 
//nodeValue
const item = document.getElementById('special')
const value = item.firstChild.nodeValue;
console.log(value);
// console.log(item.childNodes[0].nodeValue)

//textContent
const easyValue = item.textContent
console.log(easyValue);
*/

/* getAttribute() and setAttribute() 
const first = document.querySelector('.first')
const idValue = first.getAttribute('id')
//console.log(idValue);

const link = document.getElementById('link');
const showLink = link.getAttribute('href');
console.log(showLink);

const last = link.nextElementSibling;
last.setAttribute('class', 'first')
last.textContent = 'I also have a class of first'
console.log(last);

const links = document.querySelectorAll('.first')
console.log(links);
*/

/* classList and className 
const first = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')

const classValue = first.className
console.log(classValue);

second.className = 'text colors';
//second.className = 'colors';

// third.classList.add('colors');
// third.classList.add('text');
third.classList.add('text', 'colors');
third.classList.remove('text') 

const classValues = third.classList;
console.log(classValues);

let result = third.classList.contains('colors')
console.log(result);
if(result) {
    console.log('Hello Nigeria');
}
else {
    console.log('does not have the class');
}
*/

/* createElement('element), createTextNode('text content) , element.appendChild(childElement) 
const result = document.querySelector('#result')

// create empty element
const bodyDiv = document.createElement('div');
// create text node
const text = document.createTextNode('a simple body div');
bodyDiv.appendChild(text);
document.body.appendChild(bodyDiv);


const heading = document.createElement('h2')
const headingText = document.createTextNode('dynamic heading')
heading.appendChild(headingText);
heading.classList.add('blue');

result.appendChild(heading)

console.log(result.children);

*/

/* insertBefore 
const result = document.querySelector('#result');
const first = document.querySelector('.red')

// create empty element
const bodyDiv = document.createElement('div');
// create text node
const text = document.createTextNode('a simple body div');
bodyDiv.appendChild(text);

document.body.insertBefore(bodyDiv, result)
// result element

const heading = document.createElement('h2')
const headingText = document.createTextNode('dynamic heading')
heading.appendChild(headingText);
heading.classList.add('blue');

result.insertBefore(heading, first)

console.log(result.children);

*/

/* replaceChild 
const result = document.querySelector('#result');
const first = document.querySelector('.red')

// create empty element
const bodyDiv = document.createElement('div');
// create text node
const text = document.createTextNode('a simple body div');
bodyDiv.appendChild(text);

document.body.insertBefore(bodyDiv, result)
// result element

const heading = document.createElement('h2')
const headingText = document.createTextNode('dynamic heading')
heading.appendChild(headingText);
heading.classList.add('blue');

result.insertBefore(heading, first)

// He created a new element to explain the replaceChild method
const smallHeading = document.createElement('h6');
const smallHeadingText = document.createTextNode(`I am small heading text`)
smallHeading.classList.add('red')
smallHeading.appendChild(smallHeadingText);
document.body.replaceChild(smallHeading, bodyDiv)



console.log(result.children);
*/

/* prepend innerText 
const heading = document.createElement('h2');
heading.innerText = `I am dynamic heading`;
document.body.prepend(heading);
*/

/* remove, removeChild */


const result = document.querySelector('#result')
//result.remove();
const heading = result.querySelector('h1');
result.removeChild(heading);











