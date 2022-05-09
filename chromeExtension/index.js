// Leads trucker
let myLeads = []
// let myLeads = `["www.google.com"]`
// turn a string into an array
// myLeads = JSON.parse(myLeads)
// push a value into the array
// myLeads.push("www.google.io")
// make the array into a string
// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)


const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const saveTabBtn = document.getElementById("tab-btn")

// localStorage.setItem("myLeads","www.google.dev")
// localStorage.getItem("myLeads")
// localStorage.clear()


// get leads from local storage
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads") )
console.log(leadsFromLocalStorage)
if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// const tabs = [
//     {url:"https://www.linkedin.com/in/per-harald-borgen/"}
// ]

saveTabBtn.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow:true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        localStorage.getItem("myLeads")
        render(myLeads)
    })
    })
    
function render(leads){
    let listItems = ""
    for (let i = 0; i < leads.length; i++){
        // listItems += "<li><a href='" + myLeads[i] + "' + target='_blank'>" + myLeads[i] + "</a></li>"
        listItems += `
        <li>
            <a href='${leads[i]}' + target='_blank'>
                ${leads[i]}
            </a>
        </li>`
        console.log(listItems)
        // create element
        // set text content
        // append element to ul
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // listItems.append(li)
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})
inputBtn.addEventListener("click",function (){
        myLeads.push(inputEl.value)
        // console.log(myLeads)
        inputEl.value = ""
        render(myLeads)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        localStorage.getItem("myLeads")
       
    }
)



