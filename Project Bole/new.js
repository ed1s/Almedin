function Bujic() {
    let ostoja = prompt("Unesi ime osobe iz svoje porodice: ");
    switch (ostoja) {
        case "Almedin":
            alert("To si ti baksuze :/");
            break;
        case "Bahra":
            alert("To ti je mati :)");
            break;
        case "Nermin":
        case "Bole":
        case "Ostoja":
            alert("To je tvoj adžo");
            break;
        case "Latifa":
            alert("To je tvoja draga nena");
            break;
        case "Edin":
            alert("To je tvoj babo bolan");
            break;            
        default:
            alert("De provjeri jesi l lijepo unio")                        

    }
}