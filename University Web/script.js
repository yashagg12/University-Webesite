var hidden_text_1 = document.getElementById("hide_1");
var hidden_text_2 = document.getElementById("hide_2");
var hidden_text_3 = document.getElementById("hide_3");
var hidden_text_4 = document.getElementById("hide_4");
var hidden_text_5 = document.getElementById("hide_5");
let vvent_1=document.getElementById('event_1');
let vvent_2=document.getElementById('event_2');
let vvent_3=document.getElementById('event_3');
let vvent_4=document.getElementById('event_4');
let vvent_5=document.getElementById('event_5');
let lol_1=document.getElementById('cchange_1');
let lol_2=document.getElementById('cchange_2');
let lol_3=document.getElementById('cchange_3');
let lol_4=document.getElementById('cchange_4');
let lol_5=document.getElementById('cchange_5');
// faq function 1
function myfunction_1() {
  if (hidden_text_1.style.display == "none" || hidden_text_1.style.display == "" ) {
    hidden_text_1.style.display = "block";
    vvent_1.classList.remove('fa-square-plus');
    vvent_1.classList.add('fa-square-minus');
    vvent_1.style.color="black";
    lol_1.style.color="black";
      if(hidden_text_2.style.display = "block")
      {
        hidden_text_2.style.display = "none";
        vvent_2.classList.add('fa-square-plus');
        vvent_2.classList.remove('fa-square-minus');
        vvent_2.style.color="blue";
        lol_2.style.color="blue";
      }
      if(hidden_text_3.style.display = "block")
      {
        hidden_text_3.style.display = "none";
      vvent_3.classList.add('fa-square-plus');
      vvent_3.classList.remove('fa-square-minus');
      vvent_3.style.color="blue";
      lol_3.style.color="blue";
      }
      if(hidden_text_4.style.display = "block")
      {
        hidden_text_4.style.display = "none";
      vvent_4.classList.add('fa-square-plus');
      vvent_4.classList.remove('fa-square-minus');
      vvent_4.style.color="blue";
      lol_4.style.color="blue";
      }
      if(hidden_text_5.style.display = "block")
      {
        hidden_text_5.style.display = "none";
      vvent_5.classList.add('fa-square-plus');
      vvent_5.classList.remove('fa-square-minus');
      vvent_5.style.color="blue";
      lol_5.style.color="blue";
      }

  } else {
    hidden_text_1.style.display = "none";
    vvent_1.classList.add('fa-square-plus');
    vvent_1.classList.remove('fa-square-minus');
    vvent_1.style.color="blue"
    lol_1.style.color="blue"
  }
  
}
// faq function 2
function myfunction_2() {
   
    if (hidden_text_2.style.display == "none" || hidden_text_2.style.display == "" ) {
      hidden_text_2.style.display = "block";
      vvent_2.classList.remove('fa-square-plus');
      vvent_2.classList.add('fa-square-minus');
      vvent_2.style.color="black"
      lol_2.style.color="black"
      if(hidden_text_1.style.display = "block")
      {
        hidden_text_1.style.display = "none";
        vvent_1.classList.add('fa-square-plus');
        vvent_1.classList.remove('fa-square-minus');
        vvent_1.style.color="blue";
        lol_1.style.color="blue";
      }
      if(hidden_text_3.style.display = "block")
      {
        hidden_text_3.style.display = "none";
      vvent_3.classList.add('fa-square-plus');
      vvent_3.classList.remove('fa-square-minus');
      vvent_3.style.color="blue";
      lol_3.style.color="blue";
      }
      if(hidden_text_4.style.display = "block")
      {
        hidden_text_4.style.display = "none";
      vvent_4.classList.add('fa-square-plus');
      vvent_4.classList.remove('fa-square-minus');
      vvent_4.style.color="blue";
      lol_4.style.color="blue";
      }
      if(hidden_text_5.style.display = "block")
      {
        hidden_text_5.style.display = "none";
      vvent_5.classList.add('fa-square-plus');
      vvent_5.classList.remove('fa-square-minus');
      vvent_5.style.color="blue";
      lol_5.style.color="blue";
      }
    } else {
      hidden_text_2.style.display = "none";
      vvent_2.classList.add('fa-square-plus');
      vvent_2.classList.remove('fa-square-minus');
      vvent_2.style.color="blue"
      lol_2.style.color="blue"
    }
  }
//   faq function 3
function myfunction_3() {
    
    if (hidden_text_3.style.display == "none" || hidden_text_3.style.display == "" ) {
      hidden_text_3.style.display = "block";
      vvent_3.classList.remove('fa-square-plus');
      vvent_3.classList.add('fa-square-minus');
      vvent_3.style.color="black"
      lol_3.style.color="black"
      if(hidden_text_2.style.display = "block")
      {
        hidden_text_2.style.display = "none";
        vvent_2.classList.add('fa-square-plus');
        vvent_2.classList.remove('fa-square-minus');
        vvent_2.style.color="blue";
        lol_2.style.color="blue";
      }
      if(hidden_text_1.style.display = "block")
      {
        hidden_text_1.style.display = "none";
      vvent_1.classList.add('fa-square-plus');
      vvent_1.classList.remove('fa-square-minus');
      vvent_1.style.color="blue";
      lol_1.style.color="blue";
      }
      if(hidden_text_4.style.display = "block")
      {
        hidden_text_4.style.display = "none";
      vvent_4.classList.add('fa-square-plus');
      vvent_4.classList.remove('fa-square-minus');
      vvent_4.style.color="blue";
      lol_4.style.color="blue";
      }
      if(hidden_text_5.style.display = "block")
      {
        hidden_text_5.style.display = "none";
      vvent_5.classList.add('fa-square-plus');
      vvent_5.classList.remove('fa-square-minus');
      vvent_5.style.color="blue";
      lol_5.style.color="blue";
      }
    } else {
      hidden_text_3.style.display = "none";
      vvent_3.classList.add('fa-square-plus');
      vvent_3.classList.remove('fa-square-minus');
      vvent_3.style.color="blue"
      lol_3.style.color="blue"
    }
  }
  //   faq function 4
function myfunction_4() {
    
    if (hidden_text_4.style.display == "none" || hidden_text_4.style.display == "" ) {
      hidden_text_4.style.display = "block";
      vvent_4.classList.remove('fa-square-plus');
      vvent_4.classList.add('fa-square-minus');
      vvent_4.style.color="black";
      lol_4.style.color="black";
      if(hidden_text_2.style.display = "block")
      {
        hidden_text_2.style.display = "none";
        vvent_2.classList.add('fa-square-plus');
        vvent_2.classList.remove('fa-square-minus');
        vvent_2.style.color="blue";
        lol_2.style.color="blue";
      }
      if(hidden_text_3.style.display = "block")
      {
        hidden_text_3.style.display = "none";
      vvent_3.classList.add('fa-square-plus');
      vvent_3.classList.remove('fa-square-minus');
      vvent_3.style.color="blue";
      lol_3.style.color="blue";
      }
      if(hidden_text_1.style.display = "block")
      {
        hidden_text_1.style.display = "none";
      vvent_1.classList.add('fa-square-plus');
      vvent_1.classList.remove('fa-square-minus');
      vvent_1.style.color="blue";
      lol_1.style.color="blue";
      }
      if(hidden_text_5.style.display = "block")
      {
        hidden_text_5.style.display = "none";
      vvent_5.classList.add('fa-square-plus');
      vvent_5.classList.remove('fa-square-minus');
      vvent_5.style.color="blue";
      lol_5.style.color="blue";
      }
    } else {
      hidden_text_4.style.display = "none";
      vvent_4.classList.add('fa-square-plus');
      vvent_4.classList.remove('fa-square-minus');
      vvent_4.style.color="blue";
      lol_4.style.color="blue";
    }
  }
   //   faq function 5
function myfunction_5() {
    if (hidden_text_5.style.display == "none" || hidden_text_5.style.display == "" ) {
      hidden_text_5.style.display = "block";
      vvent_5.classList.remove('fa-square-plus');
      vvent_5.classList.add('fa-square-minus');
      vvent_5.style.color="black";
      lol_5.style.color="black";
      if(hidden_text_2.style.display = "block")
      {
        hidden_text_2.style.display = "none";
        vvent_2.classList.add('fa-square-plus');
        vvent_2.classList.remove('fa-square-minus');
        vvent_2.style.color="blue";
        lol_2.style.color="blue";
      }
      if(hidden_text_3.style.display = "block")
      {
        hidden_text_3.style.display = "none";
      vvent_3.classList.add('fa-square-plus');
      vvent_3.classList.remove('fa-square-minus');
      vvent_3.style.color="blue";
      lol_3.style.color="blue";
      }
      if(hidden_text_4.style.display = "block")
      {
        hidden_text_4.style.display = "none";
        vvent_4.classList.add('fa-square-plus');
        vvent_4.classList.remove('fa-square-minus');
        vvent_4.style.color="blue";
        lol_4.style.color="blue";
      }
      if(hidden_text_1.style.display = "block")
      {
        hidden_text_1.style.display = "none";
      vvent_1.classList.add('fa-square-plus');
      vvent_1.classList.remove('fa-square-minus');
      vvent_1.style.color="blue";
      lol_1.style.color="blue";
      }
    } else {
      hidden_text_5.style.display = "none";
      vvent_5.classList.add('fa-square-plus');
      vvent_5.classList.remove('fa-square-minus');
      vvent_5.style.color="blue";
      lol_5.style.color="blue";
    }
  }


  let slide_1=document.getElementById("slide_1");
  let slide_2=document.getElementById("slide_2");
  let slide_3=document.getElementById("slide_3");
  let sbarr=document.getElementById('sbarr');
  let sbarl=document.getElementById('sbarl');
  
function rightfunc(){
if(slide_1.style.display=="block" || slide_1.style.display=="")
{
  slide_2.style.display="block";
  slide_1.style.display="none";
  
}
else if(slide_2.style.display=="block" || slide_2.style.display=="")
{
  slide_3.style.display="block";
  slide_2.style.display="none";
  
}
else if (slide_3.style.display=="block" || slide_3.style.display==""){
  slide_4.style.display="block";
  slide_3.style.display="none";
}
else if(slide_4.style.display=="block" || slide_4.style.display=="")
{
  slide_5.style.display="block";
  slide_4.style.display="none";
}
else 
{
  slide_1.style.display="block";
  slide_5.style.display="none";
}
}
function leftfunc(){
if(slide_1.style.display=="block" || slide_1.style.display=="")
{
  slide_5.style.display="block";
  slide_1.style.display="none";
}
else if(slide_2.style.display=="block" || slide_2.style.display=="")
{
  slide_1.style.display="block";
  slide_2.style.display="none";
}
else if(slide_3.style.display=="block" || slide_3.style.display=="")
{
  slide_2.style.display="block";
  slide_3.style.display="none";
}
else if(slide_4.style.display=="block" || slide_4.style.display=="")
{
  slide_3.style.display="block";
  slide_4.style.display="none";
}
else
{
  slide_4.style.display="block";
  slide_5.style.display="none";
}
}