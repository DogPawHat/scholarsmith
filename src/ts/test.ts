import $ from 'jquery';

let answers: boolean[] = [];

function submitQuestion(event: JQueryEventObject){
    let currentForm = $(event.target);
    let parent = currentForm.parent(".testquestion");

    let radio = currentForm.children('radio[name=radio]');
    let val = radio.val();
    let correct = currentForm.attr("data-correct");

    answers.push(val === correct);

    parent.removeClass(".current");
    if(parent.next("testquestion")){
        parent.next("testquestion").addClass("current");
    }else{
        let result = answers.filter(
            (answer) => {
                return answer;
            }).length;
        $(".results, .talk_to_us").addClass("done");
        $(".results p").text(result);
    }
}

export function attachSubmitHandlers(){
    let form = $(".tutorialtest > .testquestion > form");

    form.submit(submitQuestion);

    $(".tutorialtest .testquestion:first").addClass(".current");
}
