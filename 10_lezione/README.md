# Lezione 10

## Framework per la grafica: Bootstrap

Framework (o librerie) per la grafica consentono di **snellire** il codice per la grafica web e di nascondere allo sviluppatore la complessità di certi comportamenti della pagina. Offrono infatti soluzioni rapide a problemi comuni, ad esempio:

 * responsività della griglia e degli elementi HTML al variare della grandezza del device
 * interazione più sofisticata con l'utente

In questa lezione vedremo [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/).

**Come utilizzare Bootstrap**

Bootstrap offre fogli di stile CSS e script Javascript che possono essere riusati _as-is_ nel codice di una pagina HTML.

Il metodo più rapido per utilizzare (importare) Bootstrap è inserire **i link** ai file che compongono la libreria disponibili online nell'elemento `head` della nostra pagina HTML.

~~~~
<!-- Bootstrap CSS -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
~~~~

[Vedi nell'esercizio a fine lezione come creare un file HTML con già inseriti i link a Bootstrap]

**Come funziona Bootstrap**

Nel nostro codice HTML utilizzeremo **classi** e suggerimenti per la **strutturazione** degli elementi HTML così come spiegato nella documentazione online di Bootstrap per ottenere degli effetti desiderati.

Ad esempio, applicheremo la classe `.container-fluid` all'elemento `body` per ottenere una pagina _full width responsive_, come spiegato [qui](https://getbootstrap.com/docs/4.3/layout/overview/#containers) .

~~~~
<body class="container-fluid">
  ...
</body>
~~~~

N.B. molti degli esempi nella documentazione online sono _mandatory_, ovvero il codice va utilizzato come proposto e nella sequenza/gerarchia proposta (e.g. creare tooltip o dropdown). In altri casi, ad esempio per singole classi da applicare a singoli elementi, queste possono essere applicate agli elementi di interesse e non solo a quelli riportati negli esempi (vedi l'esempio sopra `.container-fluid`).

#### Responsività in Bootstrap

Seguiamo il [tutorial](https://getbootstrap.com/docs/4.3/layout/overview/) di Bootstrap e vediamo gli elementi/classi che ci interessa riutilizzare. Di seguito una lista:

 * [`.container-fluid` e `.container`](https://getbootstrap.com/docs/4.3/layout/overview/#containers) per la responsività di elementi contenitori
 * [`.row`, `.col-`](https://getbootstrap.com/docs/4.3/layout/grid/#how-it-works) per la responsività e il floating di elementi contenitori in righe e colonne
 * [gli stili di base CSS](https://getbootstrap.com/docs/4.3/content/reboot/)
 * [bottoni](https://getbootstrap.com/docs/4.3/components/buttons/)
 * [card](https://getbootstrap.com/docs/4.3/components/card/)
 * [carousel di immagini](https://getbootstrap.com/docs/4.3/components/carousel/)
 * [collapsable elements](https://getbootstrap.com/docs/4.3/components/collapse/) e [dropdown](https://getbootstrap.com/docs/4.3/components/dropdowns/)
 * [modal](https://getbootstrap.com/docs/4.3/components/modal/)
 * [nav link](https://getbootstrap.com/docs/4.3/components/navs/), [navbar](https://getbootstrap.com/docs/4.3/components/navbar/) e [navbar toggler](https://getbootstrap.com/docs/4.3/components/navbar/#toggler)

## Boostrap in pratica

 1. Creiamo una nuova cartella `sito_lezione10`
 2. Apriamo Sublime Text e creaimo nuovo file HTML chiamato `index.html`
 3. Salviamo il file HTML nella cartella appena creata
 4. Copiamo e incolliamo nel file HTML [il codice qui riportato](https://getbootstrap.com/docs/4.3/getting-started/introduction/#starter-template)
 5. Inseriamo alcuni elementi HTML presi dal file della lezione precedente (e.g. menu, immagine, blocchi di testo) e vediamo il comportamento di Bootstrap
 6. Sperimentiamo alcune delle funzionalità di Bootstrap (griglie e responsivity, navigazione, bottoni)
 7. Sovrascriviamo alcune istruzioni per la grafica di default di Bootstrap con altre istruzioni utilizzando il metodo `!important`:
 ~~~~
 h1 {color: red !important;} /* sovrascrive una precedente istruzione contraddittoria sul colore di h1 */
 ~~~~
