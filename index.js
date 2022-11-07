// Model

let lysetErPå = false;
let lysAvPå = 'Av';
let classAvPå = 'bulbOff';

// View

function view() {
    document.getElementById("app").innerHTML = /*HTML*/`
        <h1>Lysbryter</h1>
        <div class=${classAvPå}></div>
        <div class="button" onclick="checkLight()">${lysAvPå}</div>
`};


// Controller

function checkLight(){
    lysetErPå = !lysetErPå;
    lysAvPå = lysetErPå == false ? 'Av' : 'På';
    classAvPå = lysetErPå == false ? 'bulbOff' : 'bulbOn';
    view();
}