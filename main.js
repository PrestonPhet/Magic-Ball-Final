// image_array = [
//     'Magic1.gif',
//     'Magic2.gif',
//     'Magic3.gif',
//     'Magic4.gif',
//     'Magic5.gif',
//     'Magic6.gif',
//     'Magic7.gif',
//     'Magic8.gif',
// ]

// function get_random_image() {
//     random_index = Math.floor(Math.random() * image_array.length)

//     select_image = image_array[random_index]

//     document.getElementById('gifs').src = `./image/${selected_image}`
// }



const answer = [
    "yes",
    "no",
    "maybe",
    "most likely",
    "never ever",
    "you should consult a therapist",
    "dont know",
    "ask again",
    "never in a million years",
    "you should see a doctor",
    "somday",
    "never ask that again",
];
document.getElementById("response").innerHTML = answer;  

function myFunction() {
    answer.sort(function(a, b){return 0.5 - Math.random()});
  document.getElementById("response").innerHTML = answer[0];
  document.getElementById("response").style.fontSize="18px";
  setTimeout(timeup, 5000);

function timeup(){
    document.getElementById("response").innerHTML="Question?";
    document.getElementById("response").style.fontSize="20px";
    document.getElementById("clear").value="";

}
}