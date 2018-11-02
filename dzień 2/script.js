function SideBarMenu (){
    this.isOpen = true
    this.isOnTheLeft = true
    this.isOnTheRight = false
    this.bgColor = 'red'
}

const menu1 = new SideBarMenu()

let div = document.createElement('div')
document.body.appendChild(div)