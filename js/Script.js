const uni = document.getElementsByClassName("university")[0];
const elp3 = document.getElementsByClassName("elipse3")[0];

////
const shs = document.getElementsByClassName("shs")[0];
const elp4 = document.getElementsByClassName("elipse4")[0];
///
const jhs = document.getElementsByClassName("jhs")[0];
const elp5 = document.getElementsByClassName("elipse5")[0];
//
const data = document.getElementsByClassName("datascience")[0];
const elp6 = document.getElementsByClassName("elipse6")[0];
//
const deep = document.getElementsByClassName("deeplearning")[0];
const elp7 = document.getElementsByClassName("elipse7")[0];
//
const machine = document.getElementsByClassName("machine")[0];
const elp8 = document.getElementsByClassName("elipse8")[0];
//
const amalitech = document.getElementsByClassName("amalitech")[0];
const elp9 = document.getElementsByClassName("elipse9")[0];
//
const ugcs = document.getElementsByClassName("ugcs")[0];
const elp10 = document.getElementsByClassName("elipse10")[0];
//
const gacl = document.getElementsByClassName("gacl")[0];
const elp11 = document.getElementsByClassName("elipse11")[0];
let defaultColor = "";
function lightup(parent,child){
    
    parent.addEventListener("mouseenter",(e)=>{
    defaultColor =  child.style.background;
        child.style.background = "#E29014"
    })

    parent.addEventListener("mouseleave",(e)=>{
        child.style.background = defaultColor
    })
}
 
lightup(uni,elp3);
lightup(shs, elp4);
lightup(jhs, elp5);
lightup(data, elp6);
lightup(deep, elp7);
lightup(machine, elp8);
lightup(amalitech, elp9);
lightup(ugcs, elp10);
lightup(gacl, elp11);

