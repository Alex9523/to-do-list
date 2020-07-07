let ul = document.querySelector('ul')

function done(e){
    let tar = e.target 
    if (tar.closest('.collection-item').classList.contains('cross'))
        tar.closest('.collection-item').classList.remove('cross')
    else 
        tar.closest('.collection-item').classList.add('cross')
}

function addTask() {
    let createNewTask = document.querySelector('.myinput').value
    let newLi = document.createElement('div')
    newLi.innerHTML = `<li  class="collection-item">
                            <h5>${createNewTask}</h5>
                            <span class="del">
                                <i class="small material-icons">check</i>
                                <i onclick="remove(event)" class="small material-icons">delete</i>
                            </span>
                        <li>`
    ul.appendChild(newLi)
    document.querySelector('.myinput').value = ''
}

function remove(e){
    let rem = e.target
    rem.parentNode.parentNode.remove(rem)
}