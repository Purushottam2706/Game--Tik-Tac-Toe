let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let winner = document.querySelector(".whoWins");
let won = [[0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 5, 8],
[2, 4, 6],
[3, 4, 5],
[6, 7, 8]];

let turn0 = true;
function resetfun() {

}
reset.addEventListener("click", () => {
    for (let x of boxes) {
        x.innerHTML = "";
    }
})

function check() {
    for (let x of won) {
        let pos1 = boxes[x[0]].innerText;
        let pos2 = boxes[x[1]].innerText;
        let pos3 = boxes[x[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "" && pos1 === pos2 && pos2 === pos3) {
            winner.innerHTML = `Player ${pos1} wins`
            return true
        }
    }
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerHTML = 'O';
            turn0 = false;
        }
        else {
            box.innerHTML = 'X';
            turn0 = true;
        }
        box.disabled = true;
        check();
        if (check())
            for (let x of boxes)
                x.disabled = true;
    });
});
