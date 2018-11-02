function SideBarMenu(color, direction) {
    this.isOpen = true
    this.isOnTheLeft = direction === 'left' ? true : false
    this.isOnTheRight = direction === 'right' ? true : false
    this.bgColor = color || 'red'

    if (!this.isOnTheLeft && !this.isOnTheRight) this.isOnTheLeft = true
}

SideBarMenu.prototype.render = function render() {
    const menuDiv = document.createElement('div')
    menuDiv.style.width = '200px'
    menuDiv.style.height = '100vh'
    menuDiv.style.backgroundColor = this.bgColor
    menuDiv.style.position = 'fixed'
    menuDiv.style.top = 0

    if (this.isOnTheLeft) menuDiv.style.left = 0
    if (this.isOnTheRight) menuDiv.style.right = 0
    if (!this.isOpen) menuDiv.style.display = "none"
    document.body.appendChild(menuDiv)
}

const menu1 = new SideBarMenu()
menu1.render()

const menu2 = new SideBarMenu('green', 'right')
menu2.render()