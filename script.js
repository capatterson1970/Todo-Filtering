// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [];
let todoUserID = 0;

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
    //document.getElementById("len").innerHTML = arrayOfTodos.length;

}

const populateTodos = () => {
    /*Start with getting just the first item and its title property.*/

    //Then capture the ol item into a variable (getElementById)
    let todoList = document.getElementById('todo-list');

    //createText inside the li using the title property.
    let todoTitle = "";
    let todoComplete = "";
    

    for (i=0; i < arrayOfTodos.length; i++) {
        todoTitle = document.createTextNode(arrayOfTodos[i].title);
        
        //createElement to make a new LI
        let todoItem = document.createElement("LI");
            if (arrayOfTodos[i].completed) {
                // add a class to the li to make text red
                todoItem.classList.add("istrue");
            } else {
                todoItem.classList.add("isfalse");
            }

        //Now append the text to the new element
        todoItem.appendChild(todoTitle);

        //Then append the element to the ol element.
        todoList.appendChild(todoItem);

        //Put all of that inside your populateTodos function. 
    } // end of for loop
    
} // end of function

const filterList = arrayOfTodos.filter(item => item.userID === todoUserID)

const populateFilteredTodos = () => {
    /*Start with getting just the first item and its title property.*/

    //Then capture the ol item into a variable (getElementById)
    let todoList = document.getElementById('todo-list');

    //createText inside the li using the title property.
    let todoTitle = "";
    let todoComplete = "";
    let todoUserID = 0;

    for (i=0; i < filterList.length; i++) {
        todoTitle = document.createTextNode(filterList[i].title);
        
        //createElement to make a new LI
        let todoItem = document.createElement("LI");
            if (filterList[i].completed) {
                // add a class to the li to make text red
                todoItem.classList.add("istrue");
            } else {
                todoItem.classList.add("isfalse");
            }

        //Now append the text to the new element
        todoItem.appendChild(todoTitle);

        //Then append the element to the ol element.
        todoList.appendChild(todoItem);

        //Put all of that inside your populateTodos function. 
    } // end of for loop

 //console.log(arrayOfTodos[100].title) // => 14
 //console.log(arrayOfTodos[150].title) // => 20
}