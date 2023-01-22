let Nineam = localStorage.getItem("9");
let Tenam = localStorage.getItem("10")
// date and time
setInterval(
    function () {
        $("#date").text(moment().format("DDD MMM, YYYY hh:mm:ss"))

    }, 1000
)

let $plannerItem9 = $("#plannerinput9")
let $plannerItem10 = $("#plannerinput10")
let $plannerItem11 = $("#plannerinput11")
let $plannerItem12 = $("#plannerinput12")
let plannerItemsArray = [$plannerItem9, $plannerItem10, $plannerItem11, $plannerItem12 ]
let $dailyPlannerRow = $(".dailyPlannerRow");
let $getItemButton9 = $("#getItemButton9");
let $getItemButton10 = $("#getItemButton10");
let $getItemButton11 = $("#getItemButton11");
let $getItemButton12 = $("#getItemButton12");

$plannerItem9.val(Nineam);
$plannerItem10.val(Tenam);

let timeAttribute = $("")
// colour of blocks
function setColours(plannerItem){
    let plannerHour = parseInt(plannerItem.attr("data-time"), 10)

    if (moment().hour() > plannerHour) {
        plannerItem.addClass("past")

    }
    else if (moment().hour() == plannerHour) {
        plannerItem.addClass("present")
    }
    else {
        console.log('future')
        plannerItem.addClass("future")
    }
}

for (let i = 0; i < plannerItemsArray.length; i++) {
    const plannerItem = plannerItemsArray[i];
    setColours(plannerItem) 
}



function handleItemSubmission(event) {
    // localStorage.setItem("9am", $plannerItem9.val())
    

    const plannerInputId = event.target.getAttribute("data-input")
    console.log(plannerInputId)

    let plannerInput = $(plannerInputId)[0]
    
    plannerInput.disabled = true;

    let buttonId = event.currentTarget.id
    let $clickedButton = $('#' + buttonId)
    
    $clickedButton.text('Locked');
    localStorage.setItem(plannerInput.getAttribute('data-time'), plannerInput.val());
   
}

$getItemButton9.on("click", handleItemSubmission);
$getItemButton10.on("click", handleItemSubmission);
$getItemButton11.on("click", handleItemSubmission);
$getItemButton12.on("click", handleItemSubmission);
