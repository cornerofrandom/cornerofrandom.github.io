/*document.getElementById("in").addEventListener("input", function() {
    getText();
}, false);*/
document.getElementById("in").addEventListener("input", function() {
    getText();
}, false);


function newQuestion(){

    const names = [
        "401 relevance",
        "403 more prejudicial than probative",
        "404 character evidence",
        "404a(1) character of the accused",
        "404a(2) character of the alleged victim",
        "404a(3) character of witness",
        "404b other crimes, wrongs, or acts",
        "405 methods of proving character",
        "406 habit, routine practice",
        "407 subsequent remedial measures",
        //"501 admissibility of communication",
        "602 lack of personal knowledge",
        "608(a) opinion and reputation of witness character",
        "another rule lmao"
        //"611(a) badgering the witness/compound question"
    ];
    let len = names.length;
    index = Math.floor(Math.random() * len);
    document.getElementById("rule").innerHTML=names[index];
    document.getElementById("index").innerHTML=index;
}
function getText(){
    const taglines = [
        "relevant evidence is any evidence that makes a fact in today's case more or less likely",
        "evidence is inadmissible if its prejudicial effect substantially outweighs its probative value",
        "the character trait of a person cannot be used to prove action in conformity therewith on a specific occasion",
        "evidence of pertinent traits of the accused may be offered by the accused or the prosecution to rebut the same",
        "evidence of pertinent traits of the alleged victim may be offered by the accused or the prosecution to rebut the same",
        "evidence of a witness's character traits may be admissible to show credibility/truthfulness",
        "the previous actions or characteristics of a person cannot be used to prove action in conformity therewith; however, they may be used for another purpose such as proof of motive, opportunity, intent, preparation, plan, knowledge, identity or absense of mistake or accident",
        "whenever evidence of a person's character or character trait is admissible, it may be proved by testimony about the person's reputation or by testimony in the form of an opinion",
        "evidence of the habit of a person or the routine practice of an organization is relevant to prove the conduct of the person or organization on a specific occasion",
        "measures taken after an event occurs that may have made the event less likely are not admissible to prove negligence",
        "a witness may only testify to their rationally based perceptions",
        "evidence of truthful character is admissible only after the witness's character for truthfulness has been attacked",
        "idk lmao"
    ];
    index = document.getElementById("index").innerHTML;

    inputDiv = document.getElementById("in");
    input = inputDiv.innerHTML;

    editDiv = document.getElementById("userSaid");
    editDiv.innerHTML=input;

    inputDiv.innerHTML='';
    resultDiv = document.getElementById("feedback");

    answer = taglines[index];
    document.getElementById("correctAnswer").innerHTML=answer;

    if (input.toLowerCase() == answer){
        resultDiv.innerHTML="nice work!";
        document.getElementById("correction").style.display='none';
    } else{
        resultDiv.innerHTML="not quite... you'll get it next time!";
        document.getElementById("correction").style.display='block';
    }
    newQuestion()
}
