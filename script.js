const BASE_URL= "https://v6.exchangerate-api.com/v6/1672b4e43098b5d33cab7c1d/pair/USD/NPR";
const dropdown= document.querySelectorAll(".dropdown select");
const btn=document.querySelector()

for(let select of dropdown){
    for(let currCode in countryList){
      let newOption= document.createElement("option");
      newOption.innerText=currCode;
      newOption.value=currCode;
      if(select.name==="from" && currCode==="USD"){
        newOption.selected="selected";
      }
      else if(select.name==="to" && currCode==="NPR"){
        newOption.selected="selected";
      }
      select.append(newOption);
    }
    
    select.addEventListener("change",(evt)=>{
        updFlag(evt.target);
    });
}

const updFlag=(element)=>{
let currCode=element.value;
console.log(currCode);
let countrycode=countryList[currCode];
let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
let img=element.parentElement.querySelector("img");
img.src=newsrc;
};

btn.addEventListener("click",(evt)=>{

})
