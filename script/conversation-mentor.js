let historiqueMessage = [
    "Hihihi moi aussi !",
    "J’étais impatiente de découvrir mon mentee nice to meet you ! ",
    "On essaie : c’est notre mentalité ;)",
    "Alors du coup quelles sont tes ambitions, tes objetifs émlilie ? ",
    "Okay franchement c’est nickel ",
    "Je travaille dans une entreprise de bien-être justement du coup j’ai une assez bonne connaissance du sujet. En premier, je voulais savoir quels sont tes pain points ? ",
];
let counter = 0;

window.onload = () => {
    let boxMessage = document.getElementById("messageEnvoyer");

    const getMessage = () => {
        userMessage = historiqueMessage[counter];

        counter++;
        boxMessage
            .appendChild(document.createElement("div"))
            .appendChild(document.createElement("p"))
            .appendChild(
                document.createTextNode(userMessage)
            ).parentElement.parentElement.className = "bloc-1";
        userMessage = historiqueMessage[counter];

        counter++;
        boxMessage
            .appendChild(document.createElement("div"))
            .appendChild(document.createElement("p"))
            .appendChild(
                document.createTextNode(userMessage)
            ).parentElement.parentElement.className = "bloc-2 ";
    };
    document.getElementById("envoyer").addEventListener("click", (event) => {
        event.preventDefault();
        let myMessage = document.getElementById("userMessage").value;
        boxMessage
            .appendChild(document.createElement("div"))
            .appendChild(document.createElement("p"))
            .appendChild(
                document.createTextNode(myMessage)
            ).parentElement.parentElement.className = "user-message";
        document.getElementById("formulaire").reset();
        setTimeout(getMessage, 3000);
    });
};
