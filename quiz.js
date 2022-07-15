
var index = 0
var score = 0
var rep = ["zzz"]
var quizQuestions = [
    {
        question: "The Statue of Liberty was a gift to the United States from which European country?",
        a: "Belgium",
        b: "Germany",
        c: "Spain",
        d: "France",
        correct: "d",
    },
    {
        question: "Which of the following is a song by the German heavy metal band “Scorpions”?",
        a: "Stairway to Heaven",
        b: "Wind of Change",
        c: "Don’t Stop Me Now",
        d: "Hey Jude",
        correct: "b",
    },
    {
        question: "The phrase: ”I think, therefore I am” was coined by which philosopher?",
        a: "Socrates",
        b: "Plato",
        c: "Aristotle",
        d: "Descartes",
        correct: "d",
    },
    {
        question: "In the series “Game of Thrones”, Winterfell is the ancestral home of which family?",
        a: "The Lannisters",
        b: "The Starks",
        c: "The Tully’s",
        d: "The Targaryens",
        correct: "b",
    },


];

 function initButton()
  {

if(index === 0)
{
  document.getElementById("buttonss").innerHTML ='<h6 class="btn btn-primary d-flex align-items-center btn-danger"></h6>'+
                      '<button class="btn btn-primary border-success align-items-center btn-success" type="button" onclick="next()">Next<i class="fa fa-angle-right ml-2"></i></button>'
   
  }
  else if(index > 0 && index < quizQuestions.length)
  {
 document.getElementById("buttonss").innerHTML =
'<button class="btn btn-primary d-flex align-items-center btn-danger" type="button" onclick="prev()"><i class="fa fa-angle-left mt-1 mr-1"></i>&nbsp;Previous</button>'+
                      '<button class="btn btn-primary border-success align-items-center btn-secon" type="button" onclick="next()">Next<i class="fa fa-angle-right ml-2"></i></button>'
  }
  else if(index === quizQuestions.length)
  {
    document.getElementById("buttonss").innerHTML =

                      '<button class="btn btn-primary border-success align-items-center btn-success" type="button" onclick="finish()">Finish<i class="fa fa-angle-right ml-2"></i></button>'
  }

}

  function initQuiz()
  {
    
    score = 0
    index = 0
   initButton()

    document.getElementById("question").innerHTML = '<div class="d-flex flex-row align-items-center question-title">'+
                          
                             '<h3 class="text-danger">Q.</h3>'+
                            '<h5 class="mt-1 ml-2">'+quizQuestions[0]["question"]+'</h5>'+
                       '</div><div class="ans ml-2">'+
                      ' <input type="radio" id="child" name="rep" value="a">'+
'<label for="child">'+quizQuestions[0]["a"]+'</label><br>'+
'<input type="radio" id="adult" name="rep" value="b">'+
'<label for="adult">'+quizQuestions[0]["b"]+'</label><br>'+
'<input type="radio" id="senior" name="rep" value="c">'+
'<label for="senior">'+quizQuestions[0]["c"]+'</label><br>'+
'<input type="radio" id="senior" name="rep" value="d">'+
'<label for="senior">'+quizQuestions[0]["d"]+'</label><br>'+
'</div>'

  }

function getRep(j)

{
    var radios = document.getElementsByName('rep');

    for (var i = 0, length = radios.length; i < length; i++) {
     if (radios[i].checked) {
    // do whatever you want with the checked radio
       
       rep[j] = radios[i].value.toString()

    // only one radio can be logically checked, don't check the rest
    break;
 }
 }
}


  function next()
  {
    
    if(index === 0)
    {
     getRep(0)
     
     }
     
     index = index + 1 

    initButton()
     getRep(index)
     
    
    


    document.getElementById("question").innerHTML = '<div class="d-flex flex-row align-items-center question-title">'+
                          
                             '<h3 class="text-danger">Q.</h3>'+
                            '<h5 class="mt-1 ml-2">'+quizQuestions[index]["question"]+'</h5>'+
                       '</div><div class="ans ml-2">'+
                      ' <input type="radio" id="child" name="rep" value="a">'+
'<label for="child">'+quizQuestions[index]["a"]+'</label><br>'+
'<input type="radio" id="adult" name="rep" value="b">'+
'<label for="adult">'+quizQuestions[index]["b"]+'</label><br>'+
'<input type="radio" id="senior" name="rep" value="c">'+
'<label for="senior">'+quizQuestions[index]["c"]+'</label><br>'+
'<input type="radio" id="senior" name="rep" value="d">'+
'<label for="senior">'+quizQuestions[index]["d"]+'</label><br>'+
'</div>'
  }

  function prev()
  {

    index = index - 1 
    initButton()
    document.getElementById("question").innerHTML = '<div class="d-flex flex-row align-items-center question-title">'+
                          
                             '<h3 class="text-danger">Q.</h3>'+
                            '<h5 class="mt-1 ml-2">'+quizQuestions[index]["question"]+'</h5>'+
                       '</div><div class="ans ml-2">'+
                      ' <input type="radio" id="child" name="rep" value="a">'+
'<label for="child">'+quizQuestions[index]["a"]+'</label><br>'+
'<input type="radio" id="adult" name="rep" value="b">'+
'<label for="adult">'+quizQuestions[index]["b"]+'</label><br>'+
'<input type="radio" id="senior" name="rep" value="c">'+
'<label for="senior">'+quizQuestions[index]["c"]+'</label><br>'+
'<input type="radio" id="senior" name="rep" value="d">'+
'<label for="senior">'+quizQuestions[index]["d"]+'</label><br>'+
'</div>'
  }


function finish()
{

  for (var i = 0, length = quizQuestions.length; i < length; i++) {
  if (quizQuestions[i]["correct"] === rep[i+1]) {
  
    score = score + 1

  }
}
alert("Note : "+score+"/"+quizQuestions.length)
}