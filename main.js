/*******TO GET AN ELEMENT BY ID****** */ 

// const grandparent = document.getElementById('grandparent-id');
// const grandparent = document.querySelector('#grandparent-id')

// const grandparent = document.querySelector('.grandparent')
// grandparent.style.backgroundColor = "#333";
// changeColor(grandparent);

/*******************TO GET EN ELEMENT BY CLASS************************ */

// const parent = Array.from(document.getElementsByClassName('parent'))
// parent.forEach(changeColor);

/****************queryselector gets the first element************** */

// const parent = document.querySelector('.parent'); 
// changeColor(parent);


/***********************To get All elememnts using querySelectorAll******************* */

// const parents = document.querySelectorAll('.parent');
// parents.forEach(changeColor);

/***********************To Get the children of this grandparent*********************** */

// const grandparent = document.querySelector('.grandparent');
// const parents = Array.from(grandparent.children);
// parents.forEach(changeColor);

/*******************Calling one child from parent from grandparent******************* */

// const grandparent = document.querySelector('.grandparent');
// const parents = Array.from(grandparent.children);
// const parentOne = parents[0];

// const children = parentOne.children; //Getting the first child
// changeColor(children[0]);

// const children = Array.from(parentOne.children); // to get all children
// children.forEach(changeColor);


/*******************Calling one child from grandparent******************* */

// const grandparent = document.querySelector('.grandparent');
// const children = grandparent.querySelectorAll('.child'); // to get all children

// children.forEach(changeColor);


/********************from child to parent to grandparent******************** */

// const childOne = document.querySelector('#child-one');
// const parent = childOne.parentElement
// const grandparent = parent.parentElement
// changeColor(grandparent);

/********************from child jumps to grandparent******************** */

// const childOne = document.querySelector('#child-one');
// const grandparent = childOne.closest('.grandparent');  // closest method moves upwards

// changeColor(grandparent);


/*********************SELECTING SIBLING ELEMENTS****************************** */

const childOne = document.querySelector('#child-one');

const childTwo = childOne.nextElementSibling

// changeColor(childTwo);

changeColor(childTwo.previousElementSibling);


function changeColor(element){
    element.style.backgroundColor = "#333";
}