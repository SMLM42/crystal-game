var target = 100; var current = 0;
var gem1 = 0; var gem2 = 0; var gem3 = 0; var gem4 = 0;
var wins = 0; var losses = 0;

function randoGem() {
    // for (var i = 0; i < 5; i++) {
    // gem1 = [Math.floor(Math.random() * 12) + 1]
    gem1 = [Math.floor(Math.random() * 12) + 1]
    gem2 = [Math.floor(Math.random() * 12) + 1]
    gem3 = [Math.floor(Math.random() * 12) + 1]
    gem4 = [Math.floor(Math.random() * 12) + 1]
    target = [Math.floor(Math.random() * 102) + 19]
    $("#target").text(target)
    $("#current").text(current)
    // }
    $("#gem-1").val(gem1); $("#gem-2").val(gem2); $("#gem-3").val(gem3); $("#gem-4").val(gem4);
}
randoGem()

$(".gem").on("click", function () {
    if ((parseInt(current)) + (parseInt(this.value)) === (parseInt(target))) {
        wins++;
        $("#wins").text("Wins: " + wins);
        current = 0;
        randoGem();
    }
    else
        current = (parseInt(current) + parseInt(this.value))
    $("#current").text(current)
    console.log(current)
    score()
})

function score() {

    if (current > target) {
        losses++;
        $("#losses").text("Losses: " + losses)
        current = 0;
        randoGem();
        score()
    }
}
