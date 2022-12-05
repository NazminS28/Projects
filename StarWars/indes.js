
async function main(){
    var query = document.getElementById('query').value;
    data= await getdata(query);
    console.log(data);
    append(data);
}
async function getdata(query){
let url=`https://swapi.dev/api/people/?search=${query}`
let res=await fetch (url);
let data=await res.json();
return data.results;

}

function append(data) {
    if(!data){
        return;
    }
    container = document.querySelector('#container');
    container.innerHTML =null;
    container.style.visibility="visible"
    data.forEach(function(el) {
        
let mm=document.createElement("div");
mm.setAttribute("id","maut1");
let div=document.createElement("div");
div.setAttribute("id","ssta");
let n=document.createElement("h4");
n.innerText=el.name;
let p=document.createElement("p");
p.innerText=el.birth_year;
let div2=document.createElement("div");
let gender=document.createElement("p");
gender.innerText=el.gender;
div2.append(gender);
div.append(n,p);
mm.append(div,div2)
container.append(mm);

    });
    }
    let id;
function debounce(func,delay){
    clearTimeout(id)
    id=setTimeout(()=>{
        func()
    },delay)
}

