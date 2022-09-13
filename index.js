async function fun(){
let res =await fetch("https://anime-facts-rest-api.herokuapp.com/api/v1");
let res1= await res.json();
console.log(res1);
return res1;
}

async function main(){
   try{ 
    let value =await fun();
    let final =(value.data)
    console.log(final);
    console.log(final[0].anime_name);
for(i=0;i<final.length;i++){
    let div = document.createElement("div");
div.setAttribute("class","col-4");
div.innerHTML=`<div class="card border-secondary mb-3" style="max-width: 18rem;">

<div class="card-body text-secondary">
  <h5 class="card-title">${final[i].anime_name}</h5>
  <img src=${final[i].anime_img} height="100px" width="100px"></img>
</div>
</div>`
row.append(div);}
}
catch(error) {
console.log(error);
}
}
main()
let container = document.createElement("div");
container.setAttribute("class","container")
let row = document.createElement("div");
row.setAttribute("class","row")
// let container = document.createElement("div");
container.append(row);
document.body.append(container);