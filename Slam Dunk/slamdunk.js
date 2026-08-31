/* =========================
   PLAYER DATA
========================= */

const players = {

    sakuragi: {

        name: "HANAMICHI SAKURAGI",

        position: "PF",

        nickname: "THE BASKETBALL GENIUS",

        speed: 90,

        shooting: 82,

        defense: 95,

        rebound: 99,

        description:
            "Hanamichi Sakuragi begins basketball with little experience but quickly discovers an extraordinary natural athletic ability. His energy, determination, and rebounding ability make him a powerful force on the court."

    },


    rukawa: {

        name: "KAEDE RUKAWA",

        position: "SF",

        nickname: "ACE",

        speed: 94,

        shooting: 96,

        defense: 88,

        rebound: 85,

        description:
            "Kaede Rukawa is Shohoku's highly talented ace. His scoring ability, athleticism, and individual skill make him one of the team's most dangerous offensive players."

    },


    akagi: {

        name: "TAKENORI AKAGI",

        position: "C",

        nickname: "THE GORILLA",

        speed: 78,

        shooting: 84,

        defense: 97,

        rebound: 96,

        description:
            "Takenori Akagi is Shohoku's captain and center. His strength, discipline, leadership, and defensive presence make him the foundation of the team."

    },


    mitsui: {

        name: "HISASHI MITSUI",

        position: "SG",

        nickname: "THREE-POINT SHOOTER",

        speed: 82,

        shooting: 99,

        defense: 79,

        rebound: 75,

        description:
            "Hisashi Mitsui is one of Shohoku's greatest long-range shooters. His ability to hit three-pointers makes him a major threat whenever he finds space."

    },


    miyagi: {

        name: "RYOTA MIYAGI",

        position: "PG",

        nickname: "SPEEDSTER",

        speed: 98,

        shooting: 80,

        defense: 88,

        rebound: 70,

        description:
            "Ryota Miyagi is Shohoku's fast and energetic point guard. His speed, ball handling, and ability to push the offense make him an important part of the team."

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

    document.getElementById("defense")
        .textContent = player.defense;

    document.getElementById("rebound")
        .textContent = player.rebound;

    document.getElementById("modalDescription")
        .textContent = player.description;

    document
        .getElementById("playerModal")
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
   SEARCH
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
            card.dataset.name.toLowerCase();

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

        nav.style.background = "#0b0b0b";

        nav.style.borderBottom =
            "1px solid #e30613";

    }

}


/* =========================
   CLOSE MODAL ON BACKGROUND
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