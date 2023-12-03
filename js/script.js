// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

const teamMembersArray = [
    
    {
        "nome": "Wayne",
        "cognome": "Barnett",
        "ruolo": "Founder & Ceo",
        "image": "wayne-barnett-founder-ceo.jpg"
    },

    {
        "nome": "Angela",
        "cognome": "Carrol",
        "ruolo": "Chief Editor",
        "image": "angela-carrol-chief-editor.jpg"
    },

    {
        "nome": "Walter",
        "cognome": "Gordon",
        "ruolo": "Office Manager",
        "image": "walter-gordon-office-manager.jpg"
    },

    {
        "nome": "Angela",
        "cognome": "Lopez",
        "ruolo": "Social Media Manager",
        "image": "angela-lopez-social-media-manager.jpg"
    },

    {
        "nome": "Scott",
        "cognome": "Estrada",
        "ruolo": "Developer",
        "image": "scott-estrada-developer.jpg"
    },

    {
        "nome": "Barbara",
        "cognome": "Ramos",
        "ruolo": "Graphic Designer",
        "image": "barbara-ramos-graphic-designer.jpg"
    }
];

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

for (let chiave in teamMembersArray) {
    console.log(chiave, teamMembersArray[chiave]);
}

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sotto forma di stringhe

console.log('Milestone 2'); 

const infoTeam = document.querySelector(".container");


for(let i = 0; i < teamMembersArray.length; i++) {

    let teamMembers = teamMembersArray[i];

    for (let chiave in teamMembers) {
        console.log(chiave, teamMembers[chiave]);

        infoTeam.innerHTML += chiave + " = " + teamMembers[chiave] + "<br>";
    }
}



