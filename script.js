function check() {
    retry = document.querySelector("input#iretry").value;
    factors = document.querySelector("input#ifactors").value;

    output = document.querySelector("#output");

    button = document.querySelector("button");

    alert("Check!");
    output.innerHTML = "<div id=\"console\">test</div>";
    console = document.querySelector("#console");
    console.innerHTML = "";
    gscore = 0;
    for (r = 1; r <= retry; r++) {
        groupFactors = [];
        html = "<div id='"+r+"'> Попытка " + r + "<br/>";
        for (f = 1; f <= factors; f++) {
            groupFactors.push(Math.round(Math.random()));
            html += ("F"+ f+ ": " + groupFactors[f-1] + "<br/>");
        }
        html += "</div>";
        print(html);
        score = 0;
        groupFactors.forEach(fact => {
            if (fact == 1) score++;
        })
        if (score == groupFactors.length) {
            gscore++;
            console.querySelectorAll("div")[r-1].classList.add("green");
        }
    }
    output.innerHTML += ("Итог " + gscore + " из " + retry);
    percents = Math.floor(gscore  / retry * 10000) / 100 ;
    output.innerHTML += (" ("+percents+"%)");
}

function print(text) {
    console.innerHTML += text;
}

function cls() {
    console.innerHTML == ""; 
}