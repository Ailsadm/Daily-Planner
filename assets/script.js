setInterval(
    function () {
        $("#date").text(moment().format("DDD MMM, YYYY hh:mm:ss"))

    }, 1000)

let $plannerItems = $(".plannerItem");
let $dailyPlannerRow = $(".dailyPlannerRow");

function handleItemSubmission(event){
    let plannerItem = $('input[name="planner-input"]').val();

    let dailyPlannerItem = $("<li>")
}

$dailyPlannerRow.on("submit", handleItemSubmission);