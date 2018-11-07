class UserList {
    constuctor(container) {
        this.container = container
        this.users = []
    }

    render() {
        this.container.innerHTML = ''
        const ul = document.createElement('ul')

        this.users.forEach(user => {
            const li = document.createElement('li')

            li.innerText = `${name.first} ${name.last}`
        })

        this.container.appendChild(ul)
    }
}