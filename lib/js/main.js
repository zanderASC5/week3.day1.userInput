// Setting up title input's "on change" event
const title_input = document.getElementById("title_input");
const title = document.getElementById("main_title");

title_input.addEventListener("keyup",function(event){
    title.innerText = title_input.value;
});

// Setting up button click
const button = document.getElementById("submit_button");
button.addEventListener("click",function(event){
    event.preventDefault();
    const title_input = document.getElementById("title_input");
    const noun_input = document.getElementById("noun");
    const verb_input = document.getElementById("verb");
    const adjective_input = document.getElementById("adjective");

    // true if all form inputs are filled in, false otherwise
    const verifyForm = title_input.value.length > 0 && 
        noun_input.value.length > 0 && 
        verb_input.value.length > 0 && 
        adjective_input.value.length > 0;
    
    if(verifyForm){
        const story = `Last night I ate a ${noun_input.value}, and today I just had to ${verb_input.value}. What a ${adjective_input.value} day!`

        // adding story to HTML
        const story_para = document.getElementById("story_result");
        story_para.innerText = story;

        // hiding form
        document.getElementsByClassName("form_container")[0].style.display = "none";
    }else{
        alert("Please fill in all fields");
    }
});