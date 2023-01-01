function check() {
    retry = document.querySelector("input#iretry").value;
    factors = document.querySelector("input#ifactors").value;

    console = document.querySelector("#console");

    button = document.querySelector("button");

    alert("Check!");
    console.innerHTML = "";
    gscore = 0;
    for (r = 1; r <= retry; r++) {
        print("Попытка " + r + "<br/>");
        groupFactors = [];
        for (f = 1; f <= factors; f++) {
            groupFactors.push(Math.round(Math.random()));
            print("F"+ f+ ": " + groupFactors[f-1] + "<br/>");
        }
        score = 0;
        groupFactors.forEach(fact => {
            if (fact == 1) score++;
        })
        if (score == groupFactors.length) gscore++;
    }
    print("Итог " + gscore + " из " + retry);
    percents = Math.floor(gscore  / retry * 10000) / 100 
    print(" ("+percents+"%)")
}

function print(text) {
    console.innerHTML += text;
}

function cls() {
    console.innerHTML == ""; 
}