// // // // const input1 = document.getElementById("entertask")
// // // // const output = document.getElementById("output")
// // // // const showbtn = document.getElementById("show")
// // // // const remove = document.getElementById("remove")
// // // // const taskcontainer =document.getElementById("task-container")


// // // // // function addTask() {

// // // // //     let data = input.value

// // // // //     output.value =data

// // // // // }



// // // // function addTask(){

   
// // // // //     if(input1.value !== " "){
        
// // // // //         let element = document.createElement('input')
// // // // //         let remove2 = document.createElement('button')
// // // // //         let edit2  = document.createElement('button')
// // // // //     element.className = "para"
// // // // //     element.id = "element"
    
// // // // //     remove2.id ="removebtn"
// // // // //     edit2.id ='editbtn'
    
// // // // //     element.value=input1.value 
// // // // //     taskcontainer.appendChild(element)
// // // // //     taskcontainer.appendChild(remove2)
// // // // //     taskcontainer.appendChild(edit2)
// // // // //     input1.value = " "
    
// // // // //     const br = document.createElement('br')
// // // // //     document.body.appendChild(br)
    
// // // // //     }
// // // // //     else{
// // // // //         alert("djjd")
// // // // //     }
     
    
// // // // // }
// // // // // removebtn.textContent = 'Remove';
// // // // // removebtn.addEventListener('click', e => {
// // // // //   // Remove both input and buttons grouped (in a wrapper)
// // // // //   removebtn.remove();
// // // // // });







// // // function addTask() {
// // //   const val = input1.value.trim();
// // //   if (!val) return alert("Please enter a task.");

// // //   // Create a container for each task, so removal is easier
// // //   const taskDiv = document.createElement('div');
// // //   taskDiv.className = 'task-item';

// // //   const element = document.createElement('input');
// // //   element.className = 'para';
// // //   element.type = 'text';
// // //   element.value = val;

// // //   const removeBtn = document.createElement('button');
// // //   removeBtn.textContent = '🗑️';
// // //   removeBtn.type = 'button';

// // //   const editBtn = document.createElement('button');
// // //   editBtn.textContent = '✏️';
// // //   editBtn.type = 'button';

// // //   // Append elements to the task container
// // //   taskDiv.append(element, removeBtn, editBtn);

// // //   // Add event listener to remove only this taskDiv
// // //   removeBtn.addEventListener('click', () => {
// // //     taskDiv.remove(); // removes entire task item
// // //   });

// // //   // If you want edit functionality:
// // //   editBtn.addEventListener('click', () => {
// // //     element.disabled = !element.disabled;
// // //     editBtn.textContent = element.disabled ? '✏️' : '✔️';
// // //   });

// // //   taskcontainer.appendChild(taskDiv);
// // //   input1.value = '';
// // // }




// // const input = document.getElementById('newInput');
// // const addBtn = document.getElementById('addBtn');
// // const todoUL = document.getElementById('todoUL');
// // const delbtn =document.getElementById('debtn');
// // addBtn.addEventListener('click', () => {
// //   const val = input.value.trim();
// //   if (!val) return alert("Please enter a task!");

// //   const li = document.createElement('input');
// //   li.value = val;

// //   const deleteBtn = document.createElement('button');
// //   deleteBtn.textContent = '✖';
// //   deleteBtn.style.padding='1rem';
// //   // deleteBtn.style.marginLeft='75%';
// //   deleteBtn.id ='delbtn'
// //   deleteBtn.addEventListener('click', () => {
// //     todoUL.removeChild(input);
// //   });

// //   // const editbtn = document.createElement('button');
// //   // editbtn.textContent ='✏️';
// //     // editbtn.style.marginLeft='10px'
// //   // editbtn.addEventListener('click',()=>{
// //   //   li.textContent = " ";
// //   // });

// //   todoUL.appendChild(li);
// //   todoUL.li.appendChild(deleteBtn);
// //   input.value = '';

// //   // li.appendChild(editbtn);
// //   // todoUL.appendChild(li);
  
// // });


// const input = document.getElementById('newInput');
// const addBtn = document.getElementById('addBtn');
// const todoUL = document.getElementById('todoUL');


// addBtn.addEventListener('click', () => {
//   const val = input.value.trim();
//   if (!val) return alert("Please enter a task!");

//   const li = document.createElement('li');
//   li.textContent = val;

//   const deleteBtn = document.createElement('button');
//   deleteBtn.textContent = '✖';
//   deleteBtn.style.marginLeft = '10px';
//   deleteBtn.addEventListener('click', () => {
//     todoUL.removeChild(li);
//   });

//   const editBtn = document.createElement('button');
//   editBtn.textContent = '✏️';
//   editBtn.style.marginLeft = '10px';
//   editBtn.addEventListener('click', () => {
//     const newVal = prompt("Edit your task:", li.firstChild.textContent);
//     if (newVal !== null) {
//       li.firstChild.textContent = newVal.trim();
//     }
//   });

//   li.appendChild(deleteBtn);
//   li.appendChild(editBtn);
//   todoUL.appendChild(li);
//   input.value = '';
// });


const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
  const val = input.value.trim();
  if (!val) return alert('Please enter a task!');

  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = val;
  span.className = 'text';

  const editBtn = document.createElement('button');
  editBtn.textContent = '✏️';
  editBtn.className = 'edit';
  editBtn.addEventListener('click', () => {
    const newVal = prompt('Edit task:', span.textContent);
    if (newVal !== null && newVal.trim() !== '') {
      span.textContent = newVal.trim();
    }
  });

  const delBtn = document.createElement('button');
  delBtn.textContent = '✖';
  delBtn.className = 'delete';
  delBtn.addEventListener('click', () => list.removeChild(li));

  span.addEventListener('click', () => li.classList.toggle('completed'));

  li.append(span, editBtn, delBtn);
  list.appendChild(li);
  input.value = '';
});
