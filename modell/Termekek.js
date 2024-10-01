import { LISTA } from "./adat.js";

export default class Termekek{
    #lista;

    constructor(){
        this.#lista = LISTA;
        this.getLista();
        this.listaTorol();
    };

    getLista(){
        return this.#lista;
    };

    listaTorol(){
        
    };

}