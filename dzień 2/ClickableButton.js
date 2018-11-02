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
