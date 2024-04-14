

let id=4;
class Service {
    constructor(icon,title, content) {
      this.id =id++; 
      this.icon = icon;
      this.title = title;
      this.content = content;
      this.createdAt = moment().format("MMM Do YY");
    
    }
}
let services=[
    {
     id:1,
     icon:"fa-solid fa-map",
     title:"The Map",
     content:" Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
        id:2,
        icon:"fa-solid fa-suitcase",
        title:"Suitcase",
        content:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      
       },
       {
        id:3,
        icon:"fa-solid fa-person",
        title:"Trekking",
        content:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
       
       }   
];

function addServices(icon,title,content){
    const newCard=new Service(icon,title,content);
    services.push(newCard);
    renderUI(services);
}

function renderUI(arr){
    let innerHTML='';
    for(let i=0;i<arr.length;i++){
        innerHTML +=`
        <div class="cards" style="display: flex;">
        <div class="card" style=" width: 20rem; height: 20rem;">
            <div class="icon" style="margin:20px;">
            <i class="${arr[i].icon}"></i>
            </div>
            <div class="card-body ">
                <h5 class=" card-subtitle mb-2 text-body-secondary" style="margin: 0 auto; color: black;">
                    ${arr[i].title}</h5>
                <p class="card-text" style="color: gray;">${arr[i].content}</p>
                <a href="#" class="card-link" style="color: grey; text-decoration: none;">Learn-More</a>
            </div>
            <button type="button" class="btn btn-outline-success"onclick="deleteService(${arr[i].id})">Delete</button>
        </div>
    </div>`;
    }
  kards.innerHTML=innerHTML;
}
  function deleteService(id) {
    const delb = services.findIndex(service => service.id === id);
    if (delb !== -1) {
        services.splice(delb, 1);
        renderUI(services);
    }
}
renderUI(services);


const addmodal=document.getElementById('addmodal')
const addModal=document.getElementById("addModal")
const formModal=document.getElementById("formModal")
const addform=document.getElementById("addform")
const title=document.getElementById("title")
const icon=document.getElementById("icon")
const content=document.getElementById("content")
const sub=document.getElementById("sub")
const can=document.getElementById("can")


addform.addEventListener("submit",(e)=>{
    e.preventDefault()
    let titleInp=title.value.trim()
    let iconInp=icon.value.trim()
    let contentInp=content.value.trim()
    if(titleInp==''){
     alert('add title')
    }else if(iconInp==''){
        alert('add icon')
    }
    else if(contentInp==''){
        alert('add content')
    }else{
        if (titleInp.length>=3){
            if(contentInp.length>=10){
                addServices(titleInp,iconInp,contentInp)
                title.value='';
                icon.value='';
                content.value='';
                addModal.style.display = "none";
            }else{
                alert("contente 10+ simvol elave et")
            }
            
        }else{
            alert("title-a 3+ simvol elave et")
        }
        
    }
})
can.addEventListener("click", function () {
    addModal.style.display = "none"; 
});
addmodal.addEventListener("click", function () {
    addModal.style.display = "block";
});
window.addEventListener('click', (event) => {
    if (event.target === addModal) {
        addModal.style.display = 'none';
    }
});