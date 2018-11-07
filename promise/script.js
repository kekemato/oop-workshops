class UserList {
    constructor(container, numberOfUsers) {
        this.container = container
        this.users = []
        this.numberOfUsers = numberOfUsers

        this.init()
    }

    init() {
        this.render()
        this.fetchUsers()
    }

    fetchUsers() {
        fetch(`https://randomuser.me/api/?results=${this.numberOfUsers}`)
            .then(response => response.json())
            .then(data => {
                this.users = data.results
                this.render()
            })
    }

    render() {
        this.container.innerHTML = ''
        const ul = document.createElement('ul')

        this.users.forEach((user, index, array)=> {
            const li = document.createElement('li')
            const button = document.createElement('button')
            const span = document.createElement('span')

            span.innerText = `${user.name.first} ${user.name.last}`
            span.addEventListener('click', () => alert(user.email))

            button.innerText = 'usuń'
            button.addEventListener('click', () => {
                array.splice(index, 1)
                this.render()
            })

            ul.appendChild(li)
            li.appendChild(span)
            li.appendChild(button)

        })

        this.container.appendChild(ul)

    }

}

const list = new UserList(document.body, 6)