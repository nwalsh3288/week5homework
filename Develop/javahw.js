
// today's date
var d = new Date();
var month = d.getMonth()+1;
var day = d.getDate();
var output = d.getFullYear() + '/' +
    (month<10 ? '0' : '') + month + '/' +
    (day<10 ? '0' : '') + day;
$("#currentDay").append(d);


$(document).ready(function(){
   
// retrieve key from local storage
    var retrieveText1 = localStorage.getItem("one oclock");
    var retrieveText2 = localStorage.getItem("two oclock");
    var retrieveText3 = localStorage.getItem("three oclock");
    var retrieveText4 = localStorage.getItem("four oclock");
    var retrieveText5 = localStorage.getItem("five oclock");
    var retrieveText6 = localStorage.getItem("six oclock");
    var retrieveText7 = localStorage.getItem("seven oclock");
    var retrieveText8 = localStorage.getItem("eight oclock");
    var retrieveText9 = localStorage.getItem("nine oclock");
    var retrieveText10 = localStorage.getItem("ten oclock");
    var retrieveText11 = localStorage.getItem("elevn oclock");
    var retrieveText12 = localStorage.getItem("twelve oclock");

// parse text value from local storage
    var parse1 = JSON.parse(retrieveText1);
    var parse2 = JSON.parse(retrieveText2);
    var parse3 = JSON.parse(retrieveText3);
    var parse4 = JSON.parse(retrieveText4);
    var parse5 = JSON.parse(retrieveText5);
    var parse6 = JSON.parse(retrieveText6);
    var parse7 = JSON.parse(retrieveText7);
    var parse8 = JSON.parse(retrieveText8);
    var parse9 = JSON.parse(retrieveText9);
    var parse10 = JSON.parse(retrieveText10);
    var parse11 = JSON.parse(retrieveText11);
    var parse12 = JSON.parse(retrieveText12);
    console.log(parse1, parse2);


// display on HTML with text box ID
    $("#one").html(parse1);
    $("#two").html(parse2);
    $("#three").html(parse3);
    $("#four").html(parse4);
    $("#five").html(parse5);
    $("#six").html(parse6);
    $("#seven").html(parse7);
    $("#eight").html(parse8);
    $("#nine").html(parse9);
    $("#ten").html(parse10);
    $("#eleven").html(parse11);
    $("#twelve").html(parse12);


    // WHEN I click the save button for that timeblock      
        // logic .onclick and save/grab what user had entered

        $(".save1").on("click",function() {
            // capture textbox content by moving through the DOM from save1 to associated textbox
            // setting varrible to texted entered in textbox
            var textEnteredIntoField = $(this)[0].parentNode.children[1].children[0].children[0].value
            // console.log(textEnteredIntoField);
            // setting varrible to html "save" attribute
            var elementBeingClickedOn = $(this).attr("data-time");
            // console.log(elementBeingClickedOn);
            localStorage.setItem(elementBeingClickedOn, JSON.stringify(textEnteredIntoField));
           
        });
    
    
});


//         // GRAB TEXT    
//         //    capture textbox content by moving through the DOM from save1 to associated textbox
//         var textEnteredIntoField = $(this)[0].parentNode.children[1].children[0].children[0].value
//         var elementBeingClickedOn = $(this).attr("data-time");
//         console.log(textEnteredIntoField);
//         console.log(elementBeingClickedOn);

//             // path goes from the save button to the text area

//         // GRAB TEXTBOX ID (that we named one, two, three, etc) - know which hour the text coming from
//         //  saving to the back end and organizing it so that it displays in the right section on the screen
//         // identifying the ID that we need to save this note for - how we are going to populate page where we saved it
//         var idFromHTMLRepresentingHour = $(this)[0].parentNode.children[1].children[0].children[0].id
//         console.log(idFromHTMLRepresentingHour);


//         // setting textboxID ID to user entered text
//         idfromHTMLRepresentingHour = textEnteredIntoField;

//         localStorage.setItem(elementBeingClickedOn, JSON.stringify(textEnteredIntoField));

//         // local storage --> getitem function --> put the text area -- entering in those values there
//         localStorage.getItem("one oclock");
        
//         });
//         // var storedTodos = JSON.parse(localStorage.getItem("todos"));

       