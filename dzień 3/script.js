function ToDo() {
    this.tasks = []

    this.render()
}

ToDo.prototype.addTask = function (text) {
    this.tasks.push(new Task(text))

    this.render()
}

ToDo.prototype.render = function () {
    document.body.innerHTML = ''
    const ul = document.createElement('ul')

    this.makeUI()

    this.tasks.forEach(task => {
        const li = document.createElement('li')
        li.innerText = task.text
        ul.appendChild(li)
    })

    document.body.appendChild(ul)
}

ToDo.prototype.makeUI = function() {
    const input = document.createElement('input')
    const button = document.createElement('button')
    button.innerText = 'Dodaj zadanie'

    button.addEventListener('click', () => this.addTask(input.value))

    document.body.appendChild(input)
    document.body.appendChild(button)
}

function Task(text) {
    this.text = text
}

const ToDo1 = new ToDo()

ToDo1.addTask('wynieś śmieci')
console.log(ToDo1)