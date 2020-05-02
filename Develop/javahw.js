
// today's date
var d = new Date();
var month = d.getMonth()+1;
var day = d.getDate();
var output = d.getFullYear() + '/' +
    (month<10 ? '0' : '') + month + '/' +
    (day<10 ? '0' : '') + day;
$("#currentDay").append(d);


$(document).ready(function(){
   

    // WHEN I click the save button for that timeblock      
        // logic .onclick and save/grab what user had entered

        $(".save1").on("click",function() {
            // capture textbox content by moving through the DOM from save1 to associated textbox
            // setting varrible to texted entered in textbox
            var textEnteredIntoField = $(this)[0].parentNode.children[1].children[0].children[0].value
            console.log(textEnteredIntoField);
            // setting varrible to html "save" attribute
            var elementBeingClickedOn = $(this).attr("data-time");
            console.log(elementBeingClickedOn);
            localStorage.setItem(elementBeingClickedOn, JSON.stringify(textEnteredIntoField));
           
            var retrieveText = localStorage.getItem(elementBeingClickedOn);
            var parse = JSON.parse(retrieveText)
            console.log(parse);

            var display 
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

       


//     //   key that represents every hour - key: value (getting saved to local storage)
//     // JSON PARSE?

//     // data name (property): 1
//     // need append - set value of object
//     // jasonToStoreLocallyForHours.one = textEnterIntoField -- after oject is declared

//     // var jsonToStoreLocallyForHours = {
//     //     one: "",
//     //     two: "",
//     //     three: "",
//     //     four: "",
//     //     five: "",
//     //     six: "",
//     //     seven: "",
//     //     eight: "",
//     //     nine: "",
//     //     ten: "",
//     //     eleven: "",
//     //     twelve: ""
//     // }


        


//     // // THEN the text for that event is saved in local storage
//     // THEN the saved events persist
//     // logic grab what user had entered, localstorage.get item

// });

// // raw HTML page
// // jQuery
// // Logic


// // THEN I am presented with timeblocks for standard business hours
//     // jQuery
// // WHEN I view the timeblocks for that day
// WHEN I click into a timeblock
    // Logic .onclick
// THEN I can enter an event
// WHEN I click the save button for that timeblock
    // logic .onclick and save/grab what user had entered
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
    // logic grab what user had entered, localstorage.get item
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// ```

// let root = document.documentElement;
