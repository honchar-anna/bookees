const getS = selector => document.querySelector(selector);



// анімація навігаціїї початок

getS('.nav-2').addEventListener('mouseover', function(){
   let none = getS('.none');
   none.style.display='flex';
   
  
   getS('.none').addEventListener('mouseover',function(){
      let none = getS('.none');
      none.style.display='flex';
   })

   getS('.none').addEventListener('mouseout',function(){
      let none = getS('.none');
      none.style.display='none';
   })
   
})
getS('.nav-2').addEventListener('mouseout', function(){
   let none = getS('.none');
   none.style.display='none';
  
})

getS('.nav-3').addEventListener('mouseover', function(){
   let none = getS('.none-h');

  
   none.style.display='flex';
  
   getS('.none-h').addEventListener('mouseover',function(){
      none.style.display='flex';
    
   })
   getS('.none-h').addEventListener('mouseout',function(){
   let none = getS('.none-h');

      none.style.display='none';
    
   })
})
getS('.nav-3').addEventListener('mouseout', function(){
   let none = getS('.none-h');
   none.style.display='none';
  
})
// анімація навігаціїї кінець

// getS('.scrol-book').addEventListener('click',()=>{
     
//    window.scrollBy({
//       top:1000,
//       behavior:"smooth"
//    });
// })

var gideon = document.getElementById('gideon');
var gideonBtn = document.getElementById("gideonBtn");
var closeGideon = document.getElementById("close-gideon");

gideonBtn.onclick = function() {
   gideon.style.display = "block";
}

closeGideon.onclick = function() {
   gideon.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == gideon) {
      gideon.style.display = "none";
    }
}

var сyrus = document.getElementById('сyrus');
var сyrusBtn = document.getElementById("сyrusBtn");
var closeCyrus = document.getElementById("close-cyrus");

сyrusBtn.onclick = function() {
   сyrus.style.display = "block";
}

closeCyrus.onclick = function() {
   сyrus.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == сyrus) {
      сyrus.style.display = "none";
    }
}

var nab = document.getElementById('nab');
var nabBtn = document.getElementById("nabBtn");
var closeNab = document.getElementById("close-nab");

nabBtn.onclick = function() {
   nab.style.display = "block";
}

closeNab.onclick = function() {
   nab.style.display = "none";

}

window.onclick = function(event) {
    if (event.target == nab) {
      nab.style.display = "none";
    }
}

var pencroft = document.getElementById('pencroft');
var pencroftBtn = document.getElementById("pencroftBtn");
var closePencroft = document.getElementById("close-pencroft");

pencroftBtn.onclick = function() {
   pencroft.style.display = "block";
}

closePencroft.onclick = function() {
   pencroft.style.display = "none";

}

window.onclick = function(event) {
    if (event.target == pencroft) {
      pencroft.style.display = "none";
    }
}

var herbert = document.getElementById('herbert');
var herbertBtn = document.getElementById("herbertBtn");
var closeHerbert = document.getElementById("close-herbert");

herbertBtn.onclick = function() {
   herbert.style.display = "block";
}

closeHerbert.onclick = function() {
   herbert.style.display = "none";

}

window.onclick = function(event) {
    if (event.target == herbert) {
      herbert.style.display = "none";
    }
}

var topdog = document.getElementById('top');
var topBtn = document.getElementById("topBtn");
var closeTop = document.getElementById("close-top");

topBtn.onclick = function() {
   topdog.style.display = "block";
}

closeTop.onclick = function() {
   topdog.style.display = "none";

}

window.onclick = function(event) {
    if (event.target == topdog) {
      topdog.style.display = "none";
    }
}

var yup = document.getElementById('yup');
var yupBtn = document.getElementById("yupBtn");
var closeYup = document.getElementById("close-yup");

yupBtn.onclick = function() {
   yup.style.display = "block";
}

closeYup.onclick = function() {
   yup.style.display = "none";

}

window.onclick = function(event) {
    if (event.target == yup) {
      yup.style.display = "none";
    }
}


var ayrtron = document.getElementById('ayrtron');
var ayrtronBtn = document.getElementById("ayrtronBtn");
var closeAyrtron = document.getElementById("close-ayrtron");

ayrtronBtn.onclick = function() {
   ayrtron.style.display = "block";
}

closeAyrtron.onclick = function() {
   ayrtron.style.display = "none";

}

window.onclick = function(event) {
    if (event.target == ayrtron) {
      ayrtron.style.display = "none";
    }
}

var nemo = document.getElementById('nemo');
var nemoBtn = document.getElementById("nemoBtn");
var closeNemo = document.getElementById("close-nemo");

nemoBtn.onclick = function() {
   nemo.style.display = "block";
}

closeNemo.onclick = function() {
   nemo.style.display = "none";

}

window.onclick = function(event) {
    if (event.target == nemo) {
      nemo.style.display = "none";
    }
}