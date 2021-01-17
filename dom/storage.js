const cars = [
    {
        id: 'hh0001',
        name: 'audi',
        model: 'a4',
        year: 2010,
        fuel: [ 'petrol']
    },
    {
        id: 'hh0002',
        name: 'dodge',
        model: 'caravan',
        year: 2012,
        fuel: [ 'petrol', 'electro']
    },
    {
        id: 'hh0003',
        name: 'bmw',
        model: 'm5',
        year: 2006,
        fuel: ['disel']
    },
    {
        id: 'hh0004',
        name: 'toyota',
        model: 'prius',
        year: 2012,
        fuel: ['hybrid']
    },
    {
        id: 'hh0005',
        name: 'hyndai',
        model: 'avante',
        year: 2015,
        fuel: [ 'petrol','hybrid']
    },
    {
        id: 'hh0006',
        name: 'hummer',
        model: 'h1',
        year: 2009,
        fuel: [ 'petrol', 'disel']
    },
    {
        id: 'hh0007',
        name: 'honda',
        model: 'civic',
        year: 2001,
        fuel: ['hybrid', 'electro']
    },
    {
        id: 'hh0008',
        name: 'nissan',
        model: 'vanette',
        year: 2017,
        fuel: ['disel', 'hybrid', 'electro']
    },
    {
        id: 'hh0009',
        name: 'merc',
        model: 'cls 500',
        year: 2015,
        fuel: [ 'petrol', 'disel', 'electro']
    },
    {
        id: 'hh0010',
        name: 'fiat',
        model: 'stilo',
        year: 2016,
        fuel: ['electro']
    },
    {
        id: 'hh0011',
        name: 'bmw',
        model: 'x6',
        year: 2018,
        fuel: ['petrol','disel']
    },
    {
        id: 'hh0012',
        name: 'merc',
        model: 'vito',
        year: 2006,
        fuel: ['disel']
    },
    {
        id: 'hh0013',
        name: 'ford',
        model: 'edge',
        year: 2010,
        fuel: ['petrol']
    },
    {
        id: 'hh0014',
        name: 'isuzu',
        model: 'aska',
        year: 2001,
        fuel: ['petrol']
    },
    {
        id: 'hh0015',
        name: 'mazda',
        model: 'rx 7',
        year: 2011,
        fuel: ['petrol', 'disel']
    }
]

// ? method 1 / load
// window.onload = function() {
//     document.querySelector('.vehicleSizeControl').innerHTML = cars.length
// }

// ? method 2 / load
window.addEventListener('load', () => {
    document.querySelector('.vehicleSizeControl').innerHTML = cars.length
})


const card = document.querySelector('.carCards').innerHTML = cars.map( (e) => {
    return  `<div class="m-3 card col-lg-2" id="${e.id}">
                    <div class="card-body">
                    <h5 class="card-title"><i class="fas fa-car fa-xs"></i> Vehicle</h5>
                    <p class="vehNameClass">name: ${e.name}</p>
                    <p class="vehModelClass">model: ${e.model}</p>
                    <p class="vehFuelClass">fuel: ${ e.fuel.map((item) => `<span class="badge badge-dark">${item}</span>`).join(' ')}</p>
                    <p class="vehYearClass">year: ${e.year}</p>
                    <hr>
                    <button type="button" class="btn btn-success" onclick="editVehicle('${e.id}')"><i class="fas fa-pen-nib fa-sm"></i></button>
                    <button type="button" class="btn btn-danger" onclick="removeItem('${e.id}')"><i class="fas fa-minus-circle fa-sm"></i></button>
                    <input type="checkbox" class="ml-1 following" aria-label="Checkbox for following text input" onclick="check('${e.id}')">
                    </div>
                </div>`
} ).join(" ")

// ? remove function
function removeItem(id) {
    if (confirm("Do you really want to remove item?")) {
        document.querySelector(`#${id}`).remove()
        document.querySelector('.hideButton').style.display = "inline-block"
        document.querySelector('.vehicleSizeControl').innerHTML = document.querySelectorAll('.card').length
    }

    if(document.querySelectorAll('.cardColor').length == 0){
        document.querySelector('.hideButtonDanger').style.display = "none"
    }

    const allCards = document.querySelectorAll('.card')
    const selectedCards = document.querySelectorAll('.cardColor')

    if (selectedCards.length == allCards.length) {
        document.querySelector('.followingAll').checked = true
    }
}

// ? check function
function check(id) {
    document.querySelector(`#${id}`).classList.toggle('cardColor')

    const allCards = document.querySelectorAll('.card')
    const selectedCards = document.querySelectorAll('.cardColor')

    if (selectedCards.length < allCards.length) {
        document.querySelector('.followingAll').checked = false
    }
    else {
        document.querySelector('.followingAll').checked = true
    }

    if (selectedCards.length > 0) {
        document.querySelector('.hideButtonDanger').style.display = "inline-block"
    }
    else {
        document.querySelector('.hideButtonDanger').style.display = "none"
    }
}

// ? check all item function
function checkAllItems() {

    const allCards = document.querySelectorAll('.card')
    const followingCards = document.querySelectorAll('.following')

    if (event.target.checked) {
        allCards.forEach( (e) => {
            e.classList.add('cardColor')
        } )
        followingCards.forEach( (e) => {
            e.checked = true
        } )
        document.querySelector('.hideButtonDanger').style.display = "inline-block"
    }

    else {
        allCards.forEach( (e) => {
            e.classList.remove('cardColor')
        } )
        followingCards.forEach( (e) => {
            e.checked = false
        } )
        document.querySelector('.hideButtonDanger').style.display = "none"
    }
}

// ? remove function checked items
function removeAllCheckItems() {

    const selected = document.querySelectorAll('.cardColor')

    if (confirm("Do you really want to remove items?")) {
        if (selected.length > 0) {
            selected.forEach( (e) => {
                e.remove()
            document.querySelector('.hideButton').style.display = "inline-block"
            document.querySelector('.hideButtonDanger').style.display = "none"
            document.querySelector('.vehicleSizeControl').innerHTML = document.querySelectorAll('.card').length
            } )
        }
    }

    if (document.querySelectorAll('.card').length == 0) {
        document.querySelector('.followingAll').disabled = true
        document.querySelector('.main-btn-danger').disabled = true
        document.querySelector('.hideButton').style.display = "inline-block"
        document.querySelector('.vehicleSizeControl').innerHTML = document.querySelectorAll('.card').length
    }
}

// ? +Add function

function addVehicle() {
    const vName = document.querySelector('.vehicleName').value
    const vModel = document.querySelector('.vehicleModel').value
    const vAge = document.querySelector('.vehicleAge').value
    const vArr = []
    const vFuel = document.querySelectorAll('.add-check-input')
    const vDate = `e_${Date.now()}`

    vFuel.forEach( (e) => {
        if (e.checked) vArr.push(e.value)
    } )

    const newVechile = `<div class="m-3 card col-lg-2" id="${vDate}">
                        <div class="card-body">
                        <h5 class="card-title"><i class="fas fa-car fa-xs"></i> Vehicle</h5>
                        <p class="vehNameClass">name: ${vName}</p>
                        <p class="vehModelClass">model: ${vModel}</p>
                        <p class="vehFuelClass">fuel: ${vArr.map((item) => `<span class="badge badge-dark">${item}</span>`).join(' ')}</p>
                        <p class="vehYearClass">year: ${vAge}</p>
                        <hr>
                        <button type="button" class="btn btn-success" onclick="editVehicle('${vDate}')"><i class="fas fa-pen-nib fa-sm"></i></button>
                        <button type="button" class="btn btn-danger" onclick="removeItem('${vDate}')"><i class="fas fa-minus-circle fa-sm"></i></button>
                        <input type="checkbox" class="ml-1 following" aria-label="Checkbox for following text input" onclick="check('${vDate}')">
                        </div>
                    </div>`

    document.querySelector('.carCards').insertAdjacentHTML("afterbegin", newVechile)

    document.querySelector('.vehicleSizeControl').innerHTML = document.querySelectorAll('.card').length

    vFuel.forEach( (e) => {
        e.checked = false
    } )

    while(vArr.length > 0) {
        vArr.shift();
    }

    document.querySelector('.followingAll').style.display = 'inline-block'
    document.querySelector('.followingAll').disabled = false
    document.querySelector('.followingAll').checked = false

    document.querySelector('.hideButtonDanger').disabled = false
    document.querySelector('.hideButtonDanger').checked = false


    document.querySelector('.close').click()
}

    

// ? Edit function

function editVehicle(id) {
    document.querySelector('.vehNameClassInput').value = document.querySelector(`#${id} .vehNameClass`).innerHTML.split(':')[1]
    document.querySelector('.vehModelClassInput').value = document.querySelector(`#${id} .vehModelClass`).innerHTML.split(':')[1]
    document.querySelector('.vehYearClassInput').value = document.querySelector(`#${id} .vehYearClass`).innerHTML.split(':')[1]
    document.querySelector('.update-btn').setAttribute('data-updated-id', id)

    const checkedList = []
    const [...editCheckInput] = document.querySelectorAll('.edit-check-input')

    document.querySelectorAll(`#${id} .badge`).forEach( (e) => {
        checkedList.push(e.innerHTML.toLowerCase())
    })

    editCheckInput.forEach( (e) => {
        e.checked = false
    } )

    editCheckInput.forEach( (e) => {
        if (checkedList.indexOf(e.value.toLowerCase()) != -1) {
            e.checked = true
        }
    })


    document.querySelector('.editModalbtn').click()
}

// ? update function

function updateVehicle(e) {
    const updatedId = e.dataset.updatedId
    
    document.querySelector(`#${updatedId} .vehNameClass`).innerHTML = `name: ${document.querySelector('.vehNameClassInput').value}`
    document.querySelector(`#${updatedId} .vehModelClass`).innerHTML = `model: ${document.querySelector('.vehModelClassInput').value}`
    document.querySelector(`#${updatedId} .vehYearClass`).innerHTML = `year: ${document.querySelector('.vehYearClassInput').value}`

    const arr = []
    document.querySelectorAll(`.edit-check-input`).forEach( (e) => {
        if (e.checked) {
            arr.push(e.value)
        }
    } )
    document.querySelector(`#${updatedId} .vehFuelClass`).innerHTML = `fuel: ${arr.map((item) => `<span class="badge badge-dark">${item}</span>`).join(' ')}`


    document.querySelector('.close-btn').click()
}