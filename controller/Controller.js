import { LISTA } from "../modell/adat.js";
import Termekek from "../view/Termekek.js";

const kivTermekLista = []
const taroloElem = $(".tartalom");
new Termekek(LISTA, taroloElem)
 
$(window).on("vasarlas",(event)=>{
    console.log(event.detail)
})