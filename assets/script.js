// date and time
setInterval(
    function () {
        $("#date").text(moment().format("DDD MMM, YYYY hh:mm:ss"))

    }, 1000
)

let Nineam = localStorage.getItem("9");
let Tenam = localStorage.getItem("10")
let ElevenAm = localStorage.getItem("11");
let TwelvePm = localStorage.getItem("12");
let OnePM = localStorage.getItem("13");
let TwoPM = localStorage.getItem("14");
let ThreePM = localStorage.getItem("15");
let FourPM = localStorage.getItem("16");


let $plannerItem9 = $("#plannerinput9")
let $plannerItem10 = $("#plannerinput10")
let $plannerItem11 = $("#plannerinput11")
let $plannerItem12 = $("#plannerinput12")
let $plannerItem13 = $("#plannerinput13")
let $plannerItem14 = $("#plannerinput14")
let $plannerItem15 = $("#plannerinput15")
let $plannerItem16 = $("#plannerinput16")
let plannerItemsArray = [$plannerItem9, $plannerItem10, $plannerItem11, $plannerItem12, $plannerItem13, $plannerItem14, $plannerItem15, $plannerItem16]

let $getItemButton9 = $("#getItemButton9");
let $getItemButton10 = $("#getItemButton10");
let $getItemButton11 = $("#getItemButton11");
let $getItemButton12 = $("#getItemButton12");
let $getItemButton13 = $("#getItemButton13");
let $getItemButton14 = $("#getItemButton14");
let $getItemButton15 = $("#getItemButton15");
let $getItemButton16 = $("#getItemButton16");


$plannerItem9.val(Nineam);
$plannerItem10.val(Tenam);
$plannerItem11.val(ElevenAm);
$plannerItem12.val(TwelvePm);
$plannerItem13.val(OnePM);
$plannerItem14.val(TwoPM);
$plannerItem15.val(ThreePM);
$plannerItem16.val(FourPM);


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
        plannerItem.addClass("future")
    }
}

for (let i = 0; i < plannerItemsArray.length; i++) {
    const plannerItem = plannerItemsArray[i];
    setColours(plannerItem) 
}


// text item submission
function handleItemSubmission(event) {
    const plannerInputId = event.target.getAttribute("data-input")
    console.log(plannerInputId)

    let plannerInput = $(plannerInputId)[0]
    
    plannerInput.disabled = true;

    let buttonId = event.currentTarget.id
    let $clickedButton = $('#' + buttonId)
    
    $clickedButton.text('Locked');
    localStorage.setItem(plannerInput.getAttribute('data-time'), $(plannerInputId).val());
   
}

$getItemButton9.on("click", handleItemSubmission);
$getItemButton10.on("click", handleItemSubmission);
$getItemButton11.on("click", handleItemSubmission);
$getItemButton12.on("click", handleItemSubmission);
$getItemButton13.on("click", handleItemSubmission);
$getItemButton14.on("click", handleItemSubmission);
$getItemButton15.on("click", handleItemSubmission);
$getItemButton16.on("click", handleItemSubmission);
