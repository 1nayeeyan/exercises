function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    this.sayInfo = function() {
        info = String(`${title} by ${author}, ${pages}, ${status}`)
        return info
    }
}

const TheHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read')
const HarryPotter = new Book('Harry Potter and the Philosophers stone', 'J.K.Rowling', '366 pages', 'read')

console.log(HarryPotter.sayInfo());