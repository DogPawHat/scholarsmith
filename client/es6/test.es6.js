import $ from 'jquery';

let answers: boolean[] = [];

function submitQuestion(event){
    let currentForm = $(event.target);
    let parent = currentForm.parent(".testquestion");

    let radio = currentForm.children('radio[name=radio]');
    let val = radio.val();
    let correct = currentForm.attr("data-correct");

    answers.push(val === correct);

    parent.removeClass("current");
    if(parent.next().hasClass("testquestion")){
        parent.next().addClass("current");
    }else{
        let result = answers.filter(
            (answer) => {
                return answer;
            }).length;
        $(".results, .talk_to_us").addClass("done");
        $(".results p").text(result);
    }

    return false;
}

export function attachSubmitHandlers(){
    let form = $(".tutorialtest > .testquestion > form");

    form.submit(submitQuestion);
}
