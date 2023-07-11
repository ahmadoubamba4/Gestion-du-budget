let depenses = [
    {"Titre": "Nourriture", "Montant": "40.000F CFA"},
    {"Titre": "Loyer",      "Montant": "30.000F CFA"},
    {"Titre": "Transport",  "Montant": "10.000F CFA"},
]


const table = document.querySelector(".table")
const tblBody = document.createElement("tbody")

function createTable(){
 for (let index = 0; index < 3; index++) {
    let row = document.createElement("tr");
    
    let buttonCell = document.createElement("td")
    let deleteButton = document.createElement("button")
    let buttonText = document.createTextNode("Supprimer")
    deleteButton.setAttribute("class", "delete-bn")
    deleteButton.appendChild(buttonText)


 for (let element = 0; element < 2; element++) {
    const cell = document.createElement("td");

    const cellText = document.createTextNode(Object.values(depenses[index])[element])
    deleteButton.setAttribute('name', depenses[index].name)
   buttonCell.appendChild(deleteButton)
   cell.appendChild(cellText)
    row.appendChild(cell)
   row.appendChild(buttonCell)
   row.setAttribute('id', depenses[index].name)

    
 }   

    tblBody.appendChild(row)
    
 }
 table.appendChild(tblBody)
 document.body.appendChild(table)
}

createTable()
let deleteButton = document.querySelectorAll(".delete-bn")
 deleteButton.forEach(function(button){

    button.addEventListener('click', function(){
        const name = this.getAttribute("name")
        let row = document.getElementById(name)
        row.parentNode.removeChild(row)


    })
 })

let modal = document.getElementById("budgetModal")
let plus = document.querySelector(".plus")
let close = document.querySelector(".close")

plus.onclick = function() {
    modal.style.display = 'block'
}

close.onclick = function() {
    modal.style.display = 'none'
}
let addDépenseButton = document.querySelector(".addDépenseButton")
addDépenseButton.onclick = function(event){
  event.preventDefault()
    const name = document.getElementById("name").value
    const nombre = document.getElementById("nombre").value
    if(!name || !nombre){
        alert("merci de tout remplir")
        return
    }
    const newDepense = { name, nombre }
    depenses.push(newDepense)

    let row = document.createElement("tr")

    let cell0 = row.insertCell(0)
    const celll0Text = document.createTextNode(name)
    cell0.appendChild(celll0Text)
    row.appendChild(cell0)

    let cell1 = row.insertCell(1)
    const celll1Text = document.createTextNode(nombre)
    cell1.appendChild(celll1Text)
    row.appendChild(cell1)

    let buttonCell = document.createElement("td")
    let deleteButton = document.createElement("button")
    let buttonText = document.createTextNode("Supprimer")
    deleteButton.setAttribute("class", "delete-bn")
    deleteButton.setAttribute('name', name)
    deleteButton.appendChild(buttonText)

    deleteButton.addEventListener('click', function(){
        const name = this.getAttribute("name")
        let row = document.getElementById(name)
        row.parentNode.removeChild(row)

    })
    buttonCell.appendChild(deleteButton)
    row.appendChild(buttonCell)

    row.setAttribute('id', name)
    tblBody.appendChild(row)
 
    table.appendChild(tblBody)

    document.body.appendChild(table)

    document.getElementById("name").value = ''
    document.getElementById("nombre").value = ''
    
}


 /*revenu*/
 function getRevenus(){
    return JSON.parse(localStorage.getItem('revenus'))
}


 let initialRevenus = getRevenus() || [
    /*{"Titre": "Salaire", "Montant": "300.000F CFA"},
    {"Titre": "Business",      "Montant": "100.000F CFA"},
    {"Titre": "Bonus",  "Montant": "30.000F CFA"},*/


]

const Table = document.querySelector(".Table")
const tblbody = document.createElement("tbody")

/*localStorage.setItem('cle3', 'valeur 3')
console.log(localStorage.getItem('cle3')) */

function setRevenus(revenus){
    localStorage.setItem("revenus", JSON.stringify(revenus))
}


setRevenus(initialRevenus)
let revenus = getRevenus()

function createtable(){
    for (let index = 0; index < 3; index++) {
       let row = document.createElement("tr");

       let buttonCell = document.createElement("td")
       let deletebutton = document.createElement("button")
       let buttonText = document.createTextNode("Supprimer")
       deletebutton.setAttribute("class", "delete-btn")
       deletebutton.appendChild(buttonText)
   
   
    for (let element = 0; element < 2; element++) {
       const cell = document.createElement("td");
   
       const cellText = document.createTextNode(Object.values(revenus[index])[element])
       deletebutton.setAttribute('firstname', revenus[index].firstname)
      buttonCell.appendChild(deletebutton)
      cell.appendChild(cellText)
       row.appendChild(cell)
      row.appendChild(buttonCell)
      row.setAttribute('id', revenus[index].firstname)
   
       
    }   
   
       tblbody.appendChild(row)
        
   }
    Table.appendChild(tblbody)
    document.body.appendChild(Table)
   }
   
   createtable()

   let deletebutton = document.querySelectorAll(".delete-btn")
 deletebutton.forEach(function (button) {

    button.addEventListener('click', function(){
        const firstname = this.getAttribute("firstname")
        let row = document.getElementById(firstname)
        row.parentNode.removeChild(row)
        


    })
 })




let method = document.getElementById("gestionMethod")
let moins = document.querySelector(".moins")
let ferme = document.querySelector(".ferme")

moins.onclick = function() {
    method.style.display = 'block'
}

ferme.onclick = function() {
    method.style.display = 'none'
}

let addRevenubutton = document.querySelector(".addRevenubutton")
addRevenubutton.onclick = function (event) {
    event.preventDefault()

    const firstname = document.getElementById("firstname").value
    const firstnombre = document.getElementById("firstnombre").value
    
  /* if (! firstname || ! nombre) {
        alert("merci de tout remplir")
        return
   }*/
   const newRevenu = { firstname, firstnombre }
    revenus.push(newRevenu)
    setRevenus(revenus)

    let row = document.createElement("tr")

    let cell0 = row.insertCell(0)
    const celll0Text = document.createTextNode(firstname)
    cell0.appendChild(celll0Text)
    row.appendChild(cell0)

    let cell1 = row.insertCell(1)
    const celll1Text = document.createTextNode(firstnombre)
    cell1.appendChild(celll1Text)
    row.appendChild(cell1)

    let buttonCell = document.createElement("td")
    let deletebutton = document.createElement("button")
    let buttonText = document.createTextNode("Supprimer")
    deletebutton.setAttribute("class", "delete-btn")
    deletebutton.setAttribute('firstname', firstname)
    deletebutton.appendChild(buttonText)

     deletebutton.addEventListener('click', function () {
        const firstname = this.getAttribute("firstname")
        let row = document.getElementById(firstname)
        row.parentNode.removeChild(row)
    })
    buttonCell.appendChild(deletebutton)
    row.appendChild(buttonCell)

    row.setAttribute('id', firstname)
    tblbody.appendChild(row)  
   Table.appendChild(tblbody)

   document.body.appendChild(Table)

   document.getElementById("firstname").value = ''
   document.getElementById("firstnombre").value =''

}
