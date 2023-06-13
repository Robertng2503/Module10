class Text {
    constructor(keyword, color) {
        this.keyword = keyword;
        this.color = color;
    }

    render() {
        return `<text x="150" y="125" font-size="45" text-anchor="middle" fill="${this.color}">${this.keyword}</text>`
    }
}

module.exports = Text;