(function () {
    function ClickableButton(label, onClickHandler) {
        this.label = label
        this.button = null
        this.onClickHandler = onClickHandler

        this.init()
    }

    ClickableButton.prototype.render = function () {
        this.button = document.createElement('button')
        this.button.innerText = this.label
        this.button.addEventListener('click', this.onClickHandler)
        document.body.appendChild(this.button)
    }

    ClickableButton.prototype.init = function () {
        this.render()
    }

    function SideBarMenu(color, direction) {
        this.isOpen = true
        this.isOnTheLeft = direction === 'left' ? true : false
        this.isOnTheRight = direction === 'right' ? true : false
        this.bgColor = color || 'red'
        this.menuDiv = null

        if (!this.isOnTheLeft && !this.isOnTheRight) this.isOnTheLeft = true
        this.init()
    }

    SideBarMenu.prototype.render = function () {
        if (this.menuDiv) this.menuDiv.remove()

        this.menuDiv = document.createElement('div')

        this.menuDiv.style.width = '200px'
        this.menuDiv.style.height = '100vh'
        this.menuDiv.style.backgroundColor = this.bgColor
        this.menuDiv.style.position = 'fixed'
        this.menuDiv.style.top = 0

        if (this.isOnTheLeft) this.menuDiv.style.left = 0
        if (this.isOnTheRight) this.menuDiv.style.right = 0
        if (!this.isOpen) this.menuDiv.style.display = "none"
        document.body.appendChild(this.menuDiv)
    }

    SideBarMenu.prototype.init = function () {
        new ClickableButton(
            'Toggle menu',
            this.toggleMenu.bind(this)
        )
        this.render()
    }

    SideBarMenu.prototype.toggleMenu = function () {
        this.isOpen = !this.isOpen
        this.render()
    }

    window.SideBarMenu = SideBarMenu
})()