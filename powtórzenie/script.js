// function Task(text){
//     this.text = text
//     this.isCompleted = false
// }

// Task.prototype.toggleTask = function(){
//     this.isCompleted = !this.isCompleted
// }

// class ToDo {
//     constructor(){
//         this.tasks = [ new Task('Wynieś śmieci'), new Task('zmyj gary')]
//     }

//     addTask(text) {
//         this.tasks.push(new Task(text))
//     }

//     toggleTask(i){
//         this.task[i].toggleTask()
//     }
// }

// const todo1 = new ToDo()

function Task(text){
    this.text = text
}

class ToDo {
    constructor(){
        this.tasks = []
    }

    addTask(text){
        this.tasks.push(new Task(text))
    }
}

const todo1 = new ToDo

todo1.addTask('nakarm kota')
todo1.addTask('ugotuj obiad')