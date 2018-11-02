function SideBarMenu() {
    this.isOpen = true
    this.isOnTheLeft = true
    this.isOnTheRight = false
    this.bgColor = 'red'
}

SideBarMenu.prototype.render = function render() {
    const menuDiv = document.createElement('div')
    menuDiv.style.width = '200px'
    menuDiv.style.height = '100vh'
    menuDiv.style.backgroundColor = this.bgColor
    menuDiv.style.position = 'fixed'
    menuDiv.style.top = 0;

    if (this.isOnTheLeft) menuDiv.style.left = 0;
    if (this.isOnTheRight) menuDiv.style.left = 0;
    if (!this.isOpen) menuDiv.style.display = "none"
    document.body.appendChild(menuDiv)
}

const menu1 = new SideBarMenu()
menu1.render()