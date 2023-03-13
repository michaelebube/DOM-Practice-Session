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

/* remove, removeChild 


const result = document.querySelector('#result')
//result.remove();
const heading = result.querySelector('h1');
result.removeChild(heading);
*/

/* innerHTML && textContent 
const list = document.getElementById('first')
const div = document.getElementById('second')
const item = document.querySelector('.item')


console.log(div.textContent);
console.log(list.innerHTML);

const randomVar = 'random value'

const ul = document.createElement('ul');
ul.innerHTML = `<li class="item">${randomVar}</li>
    <li>list item</li>  <li>list item</li>`
    document.body.appendChild(ul);

div.textContent = 'hello world'
div.innerHTML = 'hello people'
*/

/* CSS 
const random = document.querySelector('.random');
// longer process
// random.style.backgroundColor = 'blue'
// random.style.color = 'white'
// random.style.fontSize = '3rem'
// random.style.backgroundColor = 'capitalize'

//Shorter Way
random.classList.add('title')
*/

/* Click Event -  addEventlistener() 
const btn = document.querySelector('.btn');
const heading = document.querySelector('h2')

// btn.addEventListener('click', function() {
//     // console.log('hey you clicked me');
//     heading.classList.add('red')
// });

function changeColors() {
    let hasClass = heading.classList.contains('red')
    if(hasClass) {
        heading.classList.remove( 'red')
    }
    else{
        heading.classList.add('red')
    }
}
btn.addEventListener('click', changeColors);
*/

/* Other Event Listeners
//click- fires after full action occurs
//mousedown - button is pressed
//mouseup - button is released
//mouseenter - moved onto of an element
//mouseleave - moved out of an element

const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
    console.log('you clicked me');
});
btn.addEventListener('mousedown', function() {
    console.log('down');
});
btn.addEventListener('mouseup', function() {
    console.log('up');
});

heading.addEventListener('mouseenter', function() {
    heading.classList.add('blue')
});
heading.addEventListener('mouseleave', function() {
    heading.classList.remove('blue')
});
*/


/* Key Events
const nameInput = document.getElementById('name')
// nameInput.addEventListener('keypress', function() {
//     console.log('you pressed a key');
// });
// nameInput.addEventListener('keydown', function() {
//     console.log('you are holding a key down');
// });
nameInput.addEventListener('keyup', function() {
    //console.dir(nameInput);
    console.log(nameInput.value);
});
 */

/* Event Object 
const heading = document.querySelector('h1')
const btn = document.querySelector('.btn')
const link = document.getElementById('link')

heading.addEventListener('click', (event) => {
    // headings.classList.add('blue')
    console.log(event.currentTarget);
    console.log(this);
}); 

btn.addEventListener('click', function(event) {
    // headings.classList.add('blue')
    event.currentTarget.classList.add('blue');
    console.log(event.type);
}); 

function someFunc(e) {
    e.preventDefault(); 
}

link.addEventListener('click', someFunc);
*/

/* currentTarget and target
const btns = document.querySelectorAll('.btn')

btns.forEach(function(btn) {
btn.addEventListener('click', function(e) {
// console.log(e.currentTarget);
// e.currentTarget.style.color = 'green';
console.log('target', e.target);
console.log('currentTarget', e.currentTarget);
e.target.style.color = 'green'
});
});
 */

/* Event Propagation - Event Bubbling and Event Capturing 
const container = document.querySelector('.container');
const list = document.querySelector('.list-items')

function showBubbling(e) {
    console.log('current target',e.currentTarget);
    // console.log('target',e.target);
    // if(e.target.classList.contains('link')) {
    //     console.log('you clicked on the click');
    // }
}

// How to stop Event Propagation

function stopPropagation(e) {
    console.log('you click on the list');

    e.stopPropagation();
}

//Event Bubbling 

// container.addEventListener('click', showBubbling);
// document.addEventListener('click', showBubbling)
// window.addEventListener('click', showBubbling)
// list.addEventListener('click', showBubbling)

// Event Capturing 

container.addEventListener('click', showBubbling, {capture: true});
document.addEventListener('click', showBubbling, {capture: true})
window.addEventListener('click', showBubbling, {capture: true})
list.addEventListener('click', showBubbling, {capture: true})
*/

/* Event Propagation Example 
const container = document.querySelector('.container')
const btn = document.querySelector('.btn')
// const heading = document.querySelector('.heading')

function sayHello(){
    console.log('Hello there');
}

btn.addEventListener('click', function() {
    const element = document.createElement('h1')
    element.classList.add('heading')
    element.textContent = `I'm inside the container`
    container.appendChild(element);
})
container.addEventListener('click', function(e) {
    if (e.target.classList.contains('heading')) {
        console.log('hello there');
    }
})

// heading.addEventListener('click', sayHello )
*/

/* Form Submit Event Listener 
const form = document.getElementById('form');
const namee = document.getElementById('name');
const password = document.getElementById('password');

form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    console.log('form submitted')
    console.log(namee.value);
    console.log(password.value);
});
*/

/* Web Storage API - Local Storage 
// localStorage.setItem('name','john')
// sessionStorage.setItem('name','Michael')

localStorage.setItem('namel', 'john');
// localStorage.setItem('name', 'peter')
localStorage.setItem('friend', 'peter');
localStorage.setItem('job', 'developer');
localStorage.setItem('address', 'street 123');

const namel = localStorage.getItem('namel');
console.log(namel);

localStorage.removeItem('namel');

const anotherName = localStorage.getItem('namel');
console.log(anotherName);

localStorage.clear();
*/

/* Local Storage With Multiple Values */
//JSON.stringify()

const friends = ['john', 'mike', 'mandie'];
localStorage.setItem('friends', JSON.stringify(friends));

const values = JSON.parse(localStorage.getItem('friends'));
console.log(values[2]);

let fruits;

if(localStorage.getItem('fruits')) {
fruits = JSON.parse(localStorage.getItem('fruits'));
}
else{
    fruits = []
}
console.log(fruits);
// fruits.push('apple')
fruits.push('orange');


 localStorage.setItem('fruits', JSON.stringify(fruits))











