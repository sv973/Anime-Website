/* =========================
   PLAYER DATA
========================= */

const players = {

    rin: {
        name: "RIN ITOSHI",
        position: "FW",
        nickname: "DESTROYER",

        speed: 94,
        shooting: 95,
        dribbling: 93,
        passing: 90,

        description:
            "Rin Itoshi is an exceptionally talented striker with incredible technical ability, field awareness, and an intense competitive drive."
    },

    nagi: {
        name: "SEISHIRO NAGI",
        position: "FW",
        nickname: "TRAP MASTER",

        speed: 88,
        shooting: 92,
        dribbling: 90,
        passing: 85,

        description:
            "Nagi possesses extraordinary natural talent. His ball control and trapping ability allow him to perform plays that seem impossible."
    },

    barou: {
        name: "SHOEI BAROU",
        position: "FW",
        nickname: "KING",

        speed: 91,
        shooting: 94,
        dribbling: 91,
        passing: 72,

        description:
            "Barou is a powerful striker who believes the field belongs to him. His physical strength and shooting make him a dangerous opponent."
    },

    isagi: {
        name: "YOICHI ISAGI",
        position: "FW",
        nickname: "EGOIST",

        speed: 87,
        shooting: 90,
        dribbling: 86,
        passing: 91,

        description:
            "Isagi's greatest weapon is his ability to read the field. His spatial awareness allows him to predict plays and find the perfect position."
    },

    bachira: {
        name: "MEGURU BACHIRA",
        position: "FW",
        nickname: "MONSTER",

        speed: 90,
        shooting: 87,
        dribbling: 96,
        passing: 89,

        description:
            "Bachira is an unpredictable dribbler who plays through instinct and creativity. His unique style makes him extremely difficult to defend."
    },

    reo: {
        name: "REO MIKAGE",
        position: "MF",
        nickname: "CHAMELEON",

        speed: 84,
        shooting: 83,
        dribbling: 88,
        passing: 94,

        description:
            "Reo is an extremely versatile player capable of adapting his style to different situations. His ability to reproduce techniques makes him dangerous."
    },

    karasu: {
        name: "TABITO KARASU",
        position: "MF",
        nickname: "PREDATOR",

        speed: 86,
        shooting: 85,
        dribbling: 90,
        passing: 92,

        description:
            "Karasu excels at analyzing his opponents and exploiting their weaknesses. His calm and strategic style makes him a dangerous midfielder."
    },

    chigiri: {
        name: "HYOMA CHIGIRI",
        position: "FW",
        nickname: "SPEEDSTER",

        speed: 98,
        shooting: 86,
        dribbling: 91,
        passing: 83,

        description:
            "Chigiri's greatest weapon is his incredible speed. Once he gets space on the field, he can accelerate past defenders."
    },

    kunigami: {
        name: "RENSUKE KUNIGAMI",
        position: "FW",
        nickname: "WILDCARD",

        speed: 89,
        shooting: 93,
        dribbling: 82,
        passing: 80,

        description:
            "Kunigami is a powerful striker with a strong left foot and impressive physical ability. His determination pushes him beyond his limits."
    }

};


/* =========================
   OPEN PLAYER
========================= */

function openPlayer(playerID) {

    const player = players[playerID];

    if (!player) {
        return;
    }

    document.getElementById("modalName")
        .textContent = player.name;

    document.getElementById("modalPosition")
        .textContent = player.position;

    document.getElementById("modalNickname")
        .textContent = player.nickname;

    document.getElementById("speed")
        .textContent = player.speed;

    document.getElementById("shooting")
        .textContent = player.shooting;

    document.getElementById("dribbling")
        .textContent = player.dribbling;

    document.getElementById("passing")
        .textContent = player.passing;

    document.getElementById("modalDescription")
        .textContent = player.description;

    document.getElementById("playerModal")
        .classList.add("active");

}


/* =========================
   CLOSE PLAYER
========================= */

function closePlayer() {

    document
        .getElementById("playerModal")
        .classList.remove("active");

}


/* =========================
   CLOSE MODAL
========================= */

document
    .getElementById("playerModal")
    .addEventListener(
        "click",
        function(event) {

            if (event.target === this) {
                closePlayer();
            }

        }
    );


/* =========================
   SEARCH PLAYERS
========================= */

function searchPlayers() {

    const search =
        document
            .getElementById("playerSearch")
            .value
            .toLowerCase();

    const cards =
        document.querySelectorAll(".player-card");

    cards.forEach(card => {

        const name =
            card
                .dataset
                .name
                .toLowerCase();

        if (name.includes(search)) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

}


/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const nav =
        document.querySelector(".navbar nav");

    if (nav.style.display === "flex") {

        nav.style.display = "none";

    } else {

        nav.style.display = "flex";

        nav.style.position = "absolute";

        nav.style.top = "75px";

        nav.style.left = "0";

        nav.style.width = "100%";

        nav.style.padding = "25px";

        nav.style.flexDirection = "column";

        nav.style.background = "#03060b";

        nav.style.borderBottom =
            "1px solid #008cff";

    }

}