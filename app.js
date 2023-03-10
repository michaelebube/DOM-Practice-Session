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


