// console.log(document.body)
let liCollection = document.getElementsByTagName('li');
// console.log(liCollection);
for(let li of liCollection){
    let liText = li.innerText;
    console.log(liText);
}

let allHeadings = document.getElementsByTagName('h1');
for(let heading of allHeadings){
    let headingText = heading.innerText;
    console.log(headingText);
}