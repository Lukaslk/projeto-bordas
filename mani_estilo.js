var topEsq = 0
var topDir = 0
var botDir = 0
var botEsq = 0


function modTopEsq(lte /* lateral esquerdo superior*/ ) {
    topEsq = Number(lte)

    quadrado()
}

function modTopDir(ltd /* lateral direito superior*/) {
    topDir = Number(ltd)

    quadrado()
}

function modBotDir(ltdb /* lateral Direita inferior*/) {
    botDir = Number(ltdb)

    quadrado()
}

function modBotEsq(lteb /* lateral Esquerdo inferior*/) {
    botEsq = Number(lteb)
    
    quadrado()
}

function quadrado() {
    var squad = document.getElementById("squad").style

    squad.borderTopLeftRadius = (topEsq) + "px"
    squad.borderTopRightRadius = (topDir) + "px"
    squad.borderBottomRightRadius = (botDir) + "px"
    squad.borderBottomLeftRadius = (botEsq) + "px"
    
    

    document.getElementById("boxCopiar").value = 
    'border-top-left-radius: ' + topEsq + ';' + '\n' +
    'border-top-right-radius: ' + topDir + ';' + '\n' +
    'border-bottom-right-radius: ' + botDir + ';' + '\n' +
    'border-bottom-left-radius: ' + botEsq + ';' 

    
}

function myFunction() {
    var copyText = document.getElementById("boxCopiar");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

