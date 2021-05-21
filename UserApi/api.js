const cardRow = DOM.qs('#card-row')
const spiner = new bootstrap.Modal(document.getElementById('spiner'), {
    keyboard: false
  })
  const viewMore = new bootstrap.Modal(document.getElementById('view-more'), {
    keyboard: false
  })
const viewMoreContent = document.getElementById('view-more-content')
const messageBox = document.getElementById('message-box')
const messageBoxAdd = document.getElementById('message-box-add')
const messageBoxUpdate = document.getElementById('message-box-update')
let users = []

const addForm = document.getElementById("add-form")
const addCardBtn = document.getElementById("add-card-btn")
const saveBtn = document.getElementById("add-save-btn")
const addFormField = {
    title: document.getElementById("add-title"),
    body: document.getElementById("add-message"),
    poster: document.getElementById("add-poster")
}

const updateForm = document.getElementById("update-form")
// const addCardBtn = document.getElementById("add-card-btn")
const updateBtn = document.getElementById("update-save-btn")
const updateFormField = {
    id: document.getElementById("update-id"),
    title: document.getElementById("update-title"),
    body: document.getElementById("update-message"),
    poster: document.getElementById("update-poster")
}

const updateModal = new bootstrap.Modal(document.getElementById('updateModal'), {
    keyboard: false
  })

window.addEventListener('DOMContentLoaded', (event) => {

    if (!users.length) cardRow.innerHTML = components.loader()

    // fetch('http://localhost:3000/posts', )
    fetch('https://jsonplaceholder.typicode.com/posts', )
    .then((response) => response.json())
    .then((data) => {
        users = data
        cardRow.innerHTML = users.map((user) => components.userCard(user)).join("")
    });

});

// * ADD
const addCard = (e) => {
const card =  {
    userId: 1,
    id: DOM._id(),
    poster: addFormField.poster.value,
    title: addFormField.title.value,
    body: addFormField.body.value,
  }
  e.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...`
  e.disabled = true
//   fetch('http://localhost:3000/posts', {
  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(card)
    })
    .then((response) => {
    if  (response.ok) {
        messageBoxAdd.classList.remove('hide', 'd-none')
        messageBoxAdd.classList.add('show', 'd-block')  
            setTimeout( () => {
                messageBoxAdd.classList.remove('show', 'd-block')
                messageBoxAdd.classList.add('hide', 'd-none')
            }, 1500)
        users.unshift(card)
        cardRow.insertAdjacentHTML('afterbegin', components.userCard(card))
        addForm.reset()
        addCardBtn.click()
        e.innerHTML = `Save`
        e.disabled = false
    }
  })

}

// * UPDATE
const update = (e, id) => {
    const user = users.find((user) => user.id == id)
    updateFormField.id.value = user.id
    updateFormField.poster.value = `https://picsum.photos/id/1${user.id}/360/250`
    updateFormField.title.value = user.title
    updateFormField.body.value = user.body
    updateModal.show()
}

const storage = (e) => {
        e.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Loading...`
        e.disabled = true
    // fetch(`http://localhost:3000/posts/${ updateFormField.id.value}`, {
    fetch(`https://jsonplaceholder.typicode.com/posts/${ updateFormField.id.value}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ title:  updateFormField.title.value, body: updateFormField.body.value, poster: updateFormField.poster.value })
    } )
    .then((response) => {
        if (response.ok) {
            messageBoxUpdate.classList.remove('hide', 'd-none')
            messageBoxUpdate.classList.add('show', 'd-block')  
                setTimeout( () => {
                    messageBoxUpdate.classList.remove('show', 'd-block')
                    messageBoxUpdate.classList.add('hide', 'd-none')
            }, 1500)
            users = users.map((user) => {
                if (user.id == updateFormField.id.value) {
                    return { ... user, title: updateFormField.title.value, body: updateFormField.body.value}
                }
                else {
                    return user
                }
            })

        cardRow.innerHTML = users.map((user) => components.userCard(user)).join("")
        updateForm.reset()
        updateModal.hide()
        e.innerHTML = `Save`
        e.disabled = false
        }
    })
}

// * Remove
const remove = (e, id) => {
    e.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    Loading...`
    e.disabled = true
    // fetch(`http://localhost:3000/posts/${id}`, {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE",
    } )
    .then((response) => {
        if(response.ok) {
            messageBox.classList.remove('hide', 'd-none')
            messageBox.classList.add('show', 'd-block')  
            setTimeout( () => {
                messageBox.classList.remove('show', 'd-block')
                messageBox.classList.add('hide', 'd-none')
            }, 1500)
            users = users.filter( (user) => user.id != id)
            cardRow.innerHTML = users.map((user) => components.userCard(user)).join("")
        }
    })
}

// Open Wiew modal
const openModal = (e, id) => {
    e.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    Loading...`
    e.disabled = true

    // fetch(`http://localhost:3000/posts/${id}`)
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json())
    .then((data) => {
        viewMoreContent.innerHTML = components.view(data)
        setTimeout( () => {
            e.innerHTML = `View`
            e.disabled = false
        }, 1000)
        viewMore.show()
    })
}
