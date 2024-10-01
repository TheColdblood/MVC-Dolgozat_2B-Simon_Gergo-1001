export default class Termek {
    termekAdat = {};
    #szuloElem;
    
    constructor(adat, szuloElem){
        this.termekAdat = adat;
        this.#szuloElem = szuloElem;
        this.termekKiir();
        this.gombELEM = $(".vas:last");
        this.gombKattint();
    }

    termekKiir(){
        this.#szuloElem.append(`
        <div class="card col-lg-4 col-md-6">
            <div class="card-body">
                <h3 class="card-title d-flex justify-content-center">${this.termekAdat.nev}</h3>
                <p class="card-body d-flex justify-content-center"><img src="${this.termekAdat.kep}"</p>
                <p class="card-text d-flex justify-content-center">${this.termekAdat.ar} €</p>
                <p class="card-text d-flex justify-content-center">Raktáron: ${this.termekAdat.db} db</p>
                </div>
                <button class="vas btn btn-success">Vásárlás</button>
        </div>
        `)
    }

    gombKattint(){
        this.gombKattint.on("click", ()=>{
            console.log(this)
            const esem = new CustomEvent ("vasarlas", {detail: this.termekAdat})
            window.dispatchEvent(esem);
        })
    }

}