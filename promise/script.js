class UserList {
    constructor(container, number) {
        this.container = container
        this.users = []
        this.number = number

        this.init()
    }

    init() {
        this.render()
        this.fetchUsers(this.number)
    }

    fetchUsers(number) {
        fetch(`https://randomuser.me/api/?results=${number}`)
            .then(response => response.json())
            .then(data => {
                this.users = data.results
                this.render()
            })
    }

    render() {
        this.container.innerHTML = ''
        const ul = document.createElement('ul')

        this.users.forEach(user => {
            const li = document.createElement('li')

            li.innerText = `${user.name.first} ${user.name.last}`

            ul.appendChild(li)
            li.addEventListener('click', () => alert(user.email))
        })

        this.container.appendChild(ul)

    }

}

const list = new UserList(document.body, 6)