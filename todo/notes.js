// note taking app

let toDoID = 0;

// todo constructor
function ToDo(note) {
    this.noteID = toDoID;
    this.noteText = note;
    toDoID++;
}



let form = document.getElementById('form');
let notes = document.getElementById('notes');

form.addEventListener('submit', newNote);



function newNote(e) {
    e.preventDefault();
    let note = document.getElementById('note').value;
    const newToDo = new ToDo(note);
    let li = document.createElement('li');
    li.className = 'note';
    li.appendChild(document.createTextNode(newToDo.noteText));
    notes.appendChild(li);
    document.getElementById('note').value = '';
}