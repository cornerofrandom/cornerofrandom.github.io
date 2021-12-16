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
        "701 opinion testimony of lay witness",
        "702 testimony by experts",
        "703 bases of opinion testimony by experts",
        "704 opinion on ultimate issue",
        "705 disclosure of facts of data underlying expert opinion",
        "801 hearsay",
        "801d(1) prior statements by witness",
        "801d(2) admission by party opponent",
        "803(1) present sense impression",
        "803(2) excited utterance",
        "803(3) then existing mental, emotional, or physical conditions",
        "805 hearsay within hearsay"
        //"611(a) badgering the witness/compound question"
    ];
    index= document.getElementById("index").innerHTML;
    let len = names.length;
    index=index+1;
    if (index>len){index=0};
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
        "a witness may give opinions or inferences based on their rationally based perceptions",
        "an expert witness must demonstrate skill, knowledge, education, experience, or training in order to testify in the form of an opinion or otherwise if the testimony is based upon sufficient facts or data, the testimony is the product of reliable principles and methods, and the witness has applied the principles and methods reliably to the facts of the case",
        "the facts or data upon which an expert bases an inference need not be admitted",
        "an opinion is not objectionable just because it embraces an ultimate issue unless an expert is testifying to the mental state or condition of a defendant in a criminal case",
        "an expert witness may testify to a matter without necessarily saying the specific basis of their conclusion",
        "an out of court statement brought in court to prove the truth of the matter asserted is inadmissible",
        "the prior statements made by a witness are not hearsay if they are 1) inconsistent with declarant's testimony 2) identifies a person as someone the declarant perceived earlier",
        "statements made by the defendant (party opponent) or representative are not hearsay",
        "statements made while perceiving an event or immediately thereafter are not considered hearsay",
        "statements relating to the event made while the declarant was under the stress or excitement caused by the event are not hearsay",
        "a statement of the declarant's then-existing state of mind, emotion, sensation, or physical condition, but not including a statement of memory or belief to prove the fact remembered or believed is admissible",
        "one out of court statement may not be offered to prove the truth of the matter asserted within another"
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
        resultDiv.innerHTML="<span style='color:orange;'>not quite... </span>";
        document.getElementById("correction").style.display='block';
    }
    newQuestion()
}
