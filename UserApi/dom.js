const DOM = {
    _id() {
        return Math.random().toString(36).substr(2, 10);
    },
    qs(selector) {
        return document.querySelector(selector)
    },
    qsAll(selector) {
        return document.querySelectorAll(selector)
    },
    insertHtml(element, position, template) {
        element.insertAdjacentHTML(position, template);
    },
    shuffle(array) {
        return [...array].sort(() => Math.random() - 0.5);
    }
}



