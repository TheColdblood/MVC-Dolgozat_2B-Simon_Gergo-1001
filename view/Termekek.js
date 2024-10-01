import Termek from "../view/Termek.js";
export default class Termekek{
#lista = [];
#szuloElem;
constructor(lista, szuloElem){
    this.#lista = lista;
    this.#szuloElem = szuloElem;
    this.termekekKiir();
}

termekekKiir(){
    this.#lista.forEach((elem)=>{
        new Termek(elem, this.#szuloElem)
    })
}

}