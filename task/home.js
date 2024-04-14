const navbar=document.getElementsByClassName("navbar")
 window.addEventListener("scroll",()=>{
    if(window.scrollY>=200){
        navbar.classList.add("white");
    }else{
        navbar.classList.remove("white")
    }
 })



 
const kards=document.getElementById("kards");
 const modal=document.getElementById("VideoModal");
 const btn=document.getElementById("btnSee");
btn.addEventListener("click", () => {
    modal.style.display = "block";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


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








const blogContainer = document.getElementById("bloog");

class BlogPost {
    constructor(imgSrc, title) {
        this.imgSrc = imgSrc;
        this.title = title;
    }
}

let blogs = [
    {
        id: 1,
        imgSrc: "https://preview.colorlib.com/theme/hotell/images/img_3.jpg",
        title: "Far far away, behind the word mountains, far from the countries"
    },
  
        {
            id: 1,
            imgSrc: "https://preview.colorlib.com/theme/hotell/images/img_3.jpg",
            title: "Far far away, behind the word mountains, far from the countries"
        }
];

function addBlog(imgSrc, title) {
    const newBlog = new BlogPost(imgSrc, title);
    blogs.push(newBlog);
    renderBlogs(blogs);
}

function renderBlogs(arr) {
    let innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        innerHTML += `
        <div class="blog" style="display: flex;">
            <div class="card" style="width: 25rem; height: 30rem;">
            <img src="${arr[i].imgSrc}" class="card-img-top" alt="${arr[i].title2} Image"> <!-- Alt metni burada -->
                <div class="card-body"> 
                    <h5 class="card-subtitle mb-2 text-body-secondary" style="margin: 0 auto; color: black;">${arr[i].title2}</h5>
                    <br> <br>
                    <a href="#" class="card-link" style="color: grey; text-decoration: none;">Read-More</a>
                </div>
                <button type="button" id="btn2" class="btn btn-outline-success" onclick="deleteBlog(${arr[i].id})">Delete</button>
            </div>
        </div>`;
    }
    blogContainer.innerHTML = innerHTML;
}

function deleteBlog(id) {
    const delIndex = blogs.findIndex(blog => blog.id === id);
    if (delIndex !== -1) {
        blogs.splice(delIndex, 1);
        renderBlogs(blogs);
    }
}
renderBlogs(blogs);



const addmodal2=document.getElementById('addmodal2')
const addModal2=document.getElementById("addModal2")
const formModal2=document.getElementById("formModal2")
const addform2=document.getElementById("addform2")
const title2=document.getElementById("title2")
const img2=document.getElementById("img2")
const sub2=document.getElementById("sub2")
const can2=document.getElementById("can2")


addform2.addEventListener("submit",(e)=>{
    e.preventDefault()
    let img2inp=img2.value.trim()
    let title2inp=title2.value.trim()
    if(img2inp==''){
     alert('add img url')
    }   else if(title2inp==''){
        alert('add title')
    }
    else{
        if(title2inp.length>=3){
            addBlog(img2inp,title2inp)
            img2.value=''
            title2.value=''
        }else{
            alert("title 3+simvol elave et")
        }
    }
})

can2.addEventListener("click", function () {
    addModal.style.display = "none"; 
});
addmodal2.addEventListener("click", function () {
    addModal2.style.display = "block";
});
window.addEventListener('click', (event) => {
    if (event.target === addModal2) {
        addModal2.style.display = 'none';
    }
});



