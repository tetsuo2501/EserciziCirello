//Definizioni di classi

/*Classe che contiene il modello CD*/
var CD = function (titolo, artista, anno, paese, etichetta, prezzo) {
    'use strict';
    this.titolo = titolo;
    this.artista = artista;
    this.anno = anno;
    this.paese = paese;
    this.etichetta = etichetta;
    this.prezzo = prezzo;
    return this;
};

/* Classe che contiene il carrello */
var Carrello = function () {
    'use strict';
    this.elementi = [];
    this.aggiungi = function (n) {
        this.elementi.push(n);
    };
    this.clear = function clear() {
        this.elementi = [];
    };
};

//Variabili Globali
var carrello = new Carrello();
var elencocd = [];

/* Inizializza la pagina*/
function start() {
    'use strict';
    elencocd[0] = new CD("OK computer", "Radiohead", "UK", "Emi", "1996", "11");
    elencocd[1] = new CD("Let it be", "Beatles", "UK", "Apple", "1969", "12");
    elencocd[2] = new CD("let it bleed", "Rolling stones", "USA", "Universal music", "1970", "11");
    elencocd[3] = new CD("the great escape", "Blur", "UK", "EMI", "1995", "10");
    elencocd[4] = new CD("", "", "", "", "", ""); //Elemento nullo
}

/** Aggiorna gli elementi presenti nel modello
 *
 * @param n valore dell'array
 */
function aggiornaCampi(n) {
    'use strict';
    document.getElementById("artista").value = elencocd[n].artista;
    document.getElementById("anno").value = elencocd[n].anno;
    document.getElementById("paese").value = elencocd[n].paese;
    document.getElementById("etichetta").value = elencocd[n].etichetta;
    document.getElementById("prezzo").value = elencocd[n].prezzo;
}

/** Verifica valore di un elemento
 * @param el elemento
 * @returns value dell'elemento o '' in caso di elemento nullo*/
function valoreElemento(el) {
    'use strict';
    return el ? el.value : '';
}

/** Verifica se il campo appartiene all'array
 * @returns {boolean} true se appartiene all'array
 */
function campoValido() {
    'use strict';
    var el = valoreElemento(document.getElementById("option"));

    return el >= 0 || el < elencocd.length;
}

/**Aggiorna i campi in funzione dell'elemento selezionato*/
function aggiornaElementi() {
    'use strict';
    var el = valoreElemento(document.getElementById("option"));

    if (campoValido()) {
        aggiornaCampi(el);
    } else {
        aggiornaCampi(4);
    }
}


/**Aggiungi elemento al carrello*/
function buy() {
    'use strict';
    if (campoValido()) {
        carrello.aggiungi(document.getElementById("option").value);
    }
}
/**Genera una nuova pagina contenente tutti gli elementi presenti nel carrello*/
function checkout() {
    'use strict';
    var win = window.open("", "", "width=400,height=300");
    win.document.write('<html><head></head><body><ul id="elenco"></ul></body></html>');
    carrello.elementi.forEach(function (i) {
        var node = win.document.createElement('li');
        node.appendChild(win.document.createTextNode(elencocd[i].titolo));
        win.document.getElementById('elenco').appendChild(node);
    });
}
/** Elimina tutti gli oggetti presenti nel carrello*/
function erase() {
    'use strict';
    carrello.clear();
}

/* Carica il js dopo aver caricato il modello DOM */
window.onload = function () {
    'use strict';
    start();
    aggiornaElementi();
};
