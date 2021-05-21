const components = {
    userCard(e) {
        return `<div class="col col-lg-4 col-md-6 mb-5" id="${e.id}">
            <div class="card row g-0">
            <div class="col-md-4">
            <img class="FCardPic" src="https://picsum.photos/id/1${e.id}/360/250" alt="Picture Not Found!"> 
            </div>
            <div class="col">
                <div class="card-body">
                <h5 class="card-title mb-3">${e.title ? e.title : `Have Not Title`}</h5>
                <p class="card-text mb-5 overflow-hidden dots">${e.body ? e.body : `Have Not Body`}</p>
                <div class="btns d-flex justify-content-between">
                <button type="button" class="btn btn-outline-primary" onclick="openModal(this, '${e.id}')">View</button>
                <div class="btn-group justify-content-between" role="group" aria-label="Basic outlined example">
                    <button type="button" class="btn btn-outline-success" onclick="update(this, '${e.id}')">Update</button>
                    <button type="button" class="btn btn-outline-danger" onclick="remove(this, '${e.id}')">Delete</button>
                </div>
                </div>
                </div>
            </div>
            </div>
        </div>`
    },
    view(e) {
        return `<div class="container overflow-auto overflow">
        <div class="modal-header">
            <h5 class="modal-title" id="view-moreLabel">${e.title ? e.title : `Have Not Title`}</h5>
          </div>
          <div class="modal-body">
            <img class="SCardPic" src="https://picsum.photos/id/1${e.id}/360/250" alt="NO IMAGE">
          </div>
          <p>${e.body ? e.body : `Have Not Body`}</p>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
    </div>`
    },
    loader() {
        return `<div class="d-flex justify-content-center loader">
                    <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                    </div>
                </div>`
    }
}

// src="${e.poster ? e.poster : `https://globalimpactnetwork.org/wp-content/themes/globalimpact/images/no-image-found-360x250.png`}" alt="Picture Not Found!"> 

{/* <img class="FCardPic" src="https://picsum.photos/id/1${e.id}/360/250" alt="Picture Not Found!"> */}