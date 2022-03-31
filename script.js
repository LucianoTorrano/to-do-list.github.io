const taskToAdd = document.getElementById("textInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");


/******** ADD TASK-LIST ITEM *********/

addButton.addEventListener('click',(e)=>{

	e.preventDefault();

	if(taskToAdd.value != ''){

		emptyMessage.style.display = "none";
		let item = document.createElement('LI');
		let textItem = document.createTextNode(taskToAdd.value);
		item.appendChild(textItem);
		taskList.appendChild(item);
		item.appendChild(addDeleteBtn());


		taskToAdd.value = '';
	}
})

/**** DELETE TASK BUTTON *****/

function addDeleteBtn(){

	let deleteBtn = document.createElement("BUTTON");
	let icon = document.createElement('I');

	icon.classList.add('fas');
	icon.classList.add('fa-trash');
	deleteBtn.classList.add('deleteBtn');

	deleteBtn.appendChild(icon);

	deleteBtn.addEventListener('click',()=>{
		let item = deleteBtn.parentElement;
		taskList.removeChild(item);
	
		let listElements = document.querySelectorAll('LI');
		if(listElements.length === 0){
			emptyMessage.style.display = "inline-block";
		}

	});

	return deleteBtn;
}


/**** THEME SELECTOR ****/

const themeButton = document.getElementById("themeButton");
const container = document.querySelector(".container");
const wrapper = document.querySelector(".wrapper");
const themeBtnContainer = document.getElementById("themeBtnContainer");
const title = document.getElementById('title');

themeButton.addEventListener('click', ()=>{
	if(themeButton.classList.contains('fa-moon')){

		container.style.background = "url(images/ligthbackground.jpg)";
		wrapper.style.background = "url(images/ligthwrapped.jpg)"
		themeButton.classList.replace('fa-moon','fa-sun');
		themeButton.classList.replace('dark', 'light');
		themeBtnContainer.classList.replace('dark','light');
		title.classList.replace('darkTitle', 'lightTitle');
		addButton.classList.replace('btnDark', 'btnLight');
		taskToAdd.classList.replace('inputDark','inputLight');
		taskList.classList.replace('dark-list','light-list');
	}else{
		themeButton.classList.replace('fa-sun','fa-moon');
		themeButton.classList.replace('light','dark');
		container.style.background = "url(images/darkbackground.jpg)";
		wrapper.style.background = "url(images/darkwrapped.jpg)";
		themeBtnContainer.classList.replace('light','dark');
		title.classList.replace('lightTitle', 'darkTitle');
		addButton.classList.replace('btnLight', 'btnDark');
		taskToAdd.classList.replace('inputLight','inputDark');
		taskList.classList.replace('light-list','dark-list');
	}
})