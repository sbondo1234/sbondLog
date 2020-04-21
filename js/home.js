﻿// Home
let portalInput = document.getElementById("portalInput");
let portalLabel = document.getElementById("portalLabel");

let githubLink = "https://github.com/sbondo1234/sbondLog";

if (portalInput != null && portalLabel != null) {
    portalLabel.innerHTML = portalInput.value;

    portalInput.addEventListener("input", function (e) {
        let val = this.value;
        portalLabel.innerHTML = val;
        val = val.toLowerCase();

        if (val == "github") {
            makeLink(githubLink);
        }
        else {
            removeLink();
        }
    });
}

function makeLink(link) {
    portalLink.href = link;
    portalLink.classList.remove("npe");
}

function removeLink() {
    portalLink.href = null;
    portalLink.classList.add("npe");
}