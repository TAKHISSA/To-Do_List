let addTodoButton=document.getElementById("addTodo");
let todoContainer=document.getElementById("ToDoConatiner");
let inputtext=document.getElementById("inputText");
let clear=document.getElementById("ClearTodo");

addTodoButton.addEventListener('click', function(){
    let paragraph=document.createElement("p");
    todoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputtext.value;
    inputtext.value="";

paragraph.addEventListener('click' ,function(){
    paragraph.style.textDecorationLine='line-through';
})

paragraph.addEventListener('dblclick',function(){
    todoContainer.removeChild(paragraph);
})

clear.addEventListener('click',function(){
    paragraph.remove();
})
})