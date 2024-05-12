// const { close } = require("fs");

function playvideo(videoFileName) {
    
    var videoUrl =  videoFileName;

    window.open(videoUrl, '_blank');
}

   // Get all the "Save" buttons
   const saveButtons = document.querySelectorAll('.save-button');

   // Add a click event listener to each "Save" button
   saveButtons.forEach(button => {
       button.addEventListener('click', function() {
        
           const movieurl=this.parentElement.querySelector('.ml');
   
           let myList = JSON.parse(localStorage.getItem('mylist')) || [];

           myList.push(movieurl.outerHTML);
           localStorage.setItem('mylist', JSON.stringify(myList));
       });
   });



function searchbar()
{
    const sb=document.getElementById("searchbar1");
    const bg=document.getElementById("ag");
    const bg2=document.getElementById("i");
    sb.style.display="block"
    bg.style.filter="blur(8px)"
    bg2.style.filter="blur(8px)"
}

function serachbar2()
{
    const sb=document.getElementById("searchbar1");
    const bg=document.getElementById("ag");
    const bg2=document.getElementById("i");
    sb.style.display="none"
    bg.style.filter="none"
    bg2.style.filter="none"

}


function unsave()
{
    if(localStorage.getItem("mylist"))
    {
        localStorage.removeItem("mylist");
        location.reload();
    }
}



  
  var pageIdentifier;

  var pat=window.location.pathname;
  var last=pat.lastIndexOf('/');
  var extractedPath = "/mainpage/" + pat.substring(last + 1);

if (extractedPath === '/mainpage/Age_of_ultron.html') {
  pageIdentifier = 'page1';
} 
else if (extractedPath === '/mainpage/ant_man.html') {
  pageIdentifier = 'page2';
}
else if (extractedPath === '/mainpage/aqua.html') {
  pageIdentifier = 'page3';
}
else if (extractedPath === '/mainpage/black_a.html') {
  pageIdentifier = 'page4';
}
else if (extractedPath === '/mainpage/Black_panther.html') {
  pageIdentifier = 'page5';
}
else if (extractedPath === '/mainpage/Black_widow.html') {
  pageIdentifier = 'page6';
}
else if (extractedPath === '/mainpage/captain_m.html') {
  pageIdentifier = 'page7';
}
else if (extractedPath === '/mainpage/End_game.html') {
  pageIdentifier = 'page8';
}
else if (extractedPath === '/mainpage/flash.html') {
  pageIdentifier = 'page9';
}
else if (extractedPath === '/mainpage/justice.html') {
  pageIdentifier = 'page10';
}
else if (extractedPath === '/mainpage/sazam.html') {
  pageIdentifier = 'page11';
}
else if (extractedPath === '/mainpage/suicide.html') {
  pageIdentifier = 'page12';
}
else if (extractedPath === '/mainpage/Thor.html') {
  pageIdentifier = 'page13';
}
else if (extractedPath === '/mainpage/wonder.html') {
  pageIdentifier = 'page14';
}
else if (extractedPath === '/mainpage/money.html') {
  pageIdentifier = 'page15';
}
else if (extractedPath === '/mainpage/peaky.html') {
  pageIdentifier = 'page16';
}
else if (extractedPath === '/mainpage/sabrina.html') {
  pageIdentifier = 'page17';
}
else if (extractedPath === '/mainpage/elite.html') {
  pageIdentifier = 'page18';
}
else if (extractedPath === '/mainpage/narcos.html') {
  pageIdentifier = 'page19';
}
else if (extractedPath === '/mainpage/breaking.html') {
  pageIdentifier = 'page20';
}
else if (extractedPath === '/mainpage/prison.html') {
  pageIdentifier = 'page21';
}




window.onload = function () {

    console.log(`${window.location.pathname}`)
  if (pageIdentifier === 'page1') {
    

    var buttoncolor1= localStorage.getItem('change1');
    if (buttoncolor1 === "true") {
      var button = document.getElementById("s1");
      document.getElementById("myButton").disabled=true;
      button.style.display = "block";
      
    }

  } 
  else if (pageIdentifier === 'page2') {

    var buttoncolor2= localStorage.getItem('change2');
    if (buttoncolor2 === "true") {
      var button2 = document.getElementById("s2");
      document.getElementById("myButton").disabled=true;

      button2.style.display = "block";
    }


  } 
  else if (pageIdentifier === 'page3') {
    var buttoncolor3= localStorage.getItem('change3');
    if (buttoncolor3 === "true") {
    var button = document.getElementById("s3");
    document.getElementById("myButton").disabled=true;

    button.style.display = "block";
  }
  } 
  else if (pageIdentifier === 'page4') {
    var buttoncolor4= localStorage.getItem('change4');
    if (buttoncolor4 === "true") {
      var button = document.getElementById("s4");
      document.getElementById("myButton").disabled=true;

      button.style.display = "block";
    }

  }
   else if (pageIdentifier === 'page5') {
    var buttoncolor5= localStorage.getItem('change5');
    if (buttoncolor5 === "true") {
      var button = document.getElementById("s5");
      document.getElementById("myButton").disabled=true;

      button.style.display = "block";
    }

  }
  else if (pageIdentifier === 'page6') {
    var buttoncolor6= localStorage.getItem('change6');
    if (buttoncolor6 === "true") {
      var button = document.getElementById("s6");
      document.getElementById("myButton").disabled=true;

      button.style.display = "block";
    }
  }
  else if (pageIdentifier === 'page7') {
    var buttoncolor7= localStorage.getItem('change7');
    if (buttoncolor7 === "true") {
      var button = document.getElementById("s7");
      document.getElementById("myButton").disabled=true;

      button.style.display = "block";
    }
  }
  else if (pageIdentifier === 'page8') {
    var buttoncolor8= localStorage.getItem('change8');
    if (buttoncolor8 === "true") {
      var button = document.getElementById("s8");
      document.getElementById("myButton").disabled=true;

      button.style.display = "block";
    }
  }
  else if (pageIdentifier === 'page9') {
    var buttoncolor9= localStorage.getItem('change9');
    if (buttoncolor9 === "true") {
      var button = document.getElementById("s9");
      document.getElementById("myButton").disabled=true;

      button.style.display = "block";
    }
  }
  else if (pageIdentifier === 'page10') {
    var buttoncolor10= localStorage.getItem('change10');
    if (buttoncolor10 === "true") {
      var button = document.getElementById("s10");
      document.getElementById("myButton").disabled=true;

      button.style.display = "block";
    }
  }
  else if (pageIdentifier === 'page11') {
    var buttoncolor11= localStorage.getItem('change11');
    if (buttoncolor11 === "true") {
      var button = document.getElementById("s11");
      document.getElementById("myButton").disabled=true;

      button.style.display = "block";
    }
  }
  else if (pageIdentifier === 'page12') {
    var buttoncolor12= localStorage.getItem('change12');
    if (buttoncolor12 === "true") {
      var button = document.getElementById("s12");
      document.getElementById("myButton").disabled=true;

      button.style.display = "block";
    }
  }
  else if (pageIdentifier === 'page13') {
    
    var buttoncolor13= localStorage.getItem('change13');
    if (buttoncolor13 === "true") {
      var button = document.getElementById("s13");
      document.getElementById("myButton").disabled=true;

      button.style.display = "block";
    }
  }
  else if (pageIdentifier === 'page14') {
    var buttoncolor14= localStorage.getItem('change14');
    if (buttoncolor14 === "true") {
      var button = document.getElementById("s14");
      document.getElementById("myButton").disabled=true;

      button.style.display = "block";
    }
  }
  else if (pageIdentifier === 'page15') {
    var buttoncolor15= localStorage.getItem('change15');
    if (buttoncolor15 === "true") {
      var button = document.getElementById("s15");
      document.getElementById("myButton").disabled=true;

      button.style.display = "block";
    }
  }
  else if (pageIdentifier === 'page16') {
    var buttoncolor15= localStorage.getItem('change16');
    if (buttoncolor15 === "true") {
      var button = document.getElementById("s16");
      document.getElementById("myButton").disabled=true;

      button.style.display = "block";
    }
  }
  else if (pageIdentifier === 'page17') {
    var buttoncolor17= localStorage.getItem('change17');
    if (buttoncolor17 === "true") {
      var button = document.getElementById("s17");
      document.getElementById("myButton").disabled=true;

      button.style.display = "block";
    }
  }
  else if (pageIdentifier === 'page18') {
    var buttoncolor18= localStorage.getItem('change18');
    if (buttoncolor18 === "true") {
      var button = document.getElementById("s18");
      document.getElementById("myButton").disabled=true;

      button.style.display = "block";
    }
  }
  else if (pageIdentifier === 'page19') {
    var buttoncolor19= localStorage.getItem('change19');
    if (buttoncolor19 === "true") {
      var button = document.getElementById("s19");
      document.getElementById("myButton").disabled=true;

      button.style.display = "block";
    }
  }
  else if (pageIdentifier === 'page20') {
    var buttoncolor20= localStorage.getItem('change20');
    if (buttoncolor20 === "true") {
      var button = document.getElementById("s20");
      document.getElementById("myButton").disabled=true;

      button.style.display = "block";
    }
  }
  else if (pageIdentifier === 'page21') {
    var buttoncolor21= localStorage.getItem('change21');
    if (buttoncolor21 === "true") {
      var button = document.getElementById("s21");
      document.getElementById("myButton").disabled=true;

      button.style.display = "block";
    }
  }
  
}
  
 




        

        function a() 
        {
          location.reload();
            const a1=document.getElementById("s1")
            a1.style.display="block";
            const localStorageKey = "change1";
            localStorage.setItem(localStorageKey, "true");
            
            
        }

        function b() 
        {
          location.reload();
            const a2=document.getElementById("s2")
            a2.style.display="block";
            const localStorageKey = "change2";
            localStorage.setItem(localStorageKey, "true");
        }

        function c() 
        {
          location.reload();
            const a1=document.getElementById("s3")
            a1.style.display="block";
            const localStorageKey = "change3";
            localStorage.setItem(localStorageKey, "true");
        }

        function d() 
        {
          location.reload(); 
            const a1=document.getElementById("s4")
            a1.style.display="block";
            const localStorageKey = "change4";
            localStorage.setItem(localStorageKey, "true");
        }

        function e() 
        {
          location.reload();
            const a1=document.getElementById("s5")
            a1.style.display="block";
            const localStorageKey = "change5";
            localStorage.setItem(localStorageKey, "true");
        }

        function f() 
        {
          location.reload();
            const a1=document.getElementById("s6")
            a1.style.display="block";
            const localStorageKey = "change6";
            localStorage.setItem(localStorageKey, "true");
        }

        function g() 
        {
          location.reload();
            const a1=document.getElementById("s7")
            a1.style.display="block";
            const localStorageKey = "change7";
            localStorage.setItem(localStorageKey, "true");
        }

        function h() 
        {
          location.reload();
            const a2=document.getElementById("s8")
            a2.style.display="block";
            const localStorageKey = "change8";
            localStorage.setItem(localStorageKey, "true");
        }

        function i() 
        {
          location.reload();
            const a1=document.getElementById("s9")
            a1.style.display="block";
            const localStorageKey = "change9";
            localStorage.setItem(localStorageKey, "true");
        }

        function j() 
        {
          location.reload();
            const a1=document.getElementById("s10")
            a1.style.display="block";
            const localStorageKey = "change10";
            localStorage.setItem(localStorageKey, "true");
        }

        function k() 
        {
          location.reload();
            const a1=document.getElementById("s11")
            a1.style.display="block";
            const localStorageKey = "change11";
            localStorage.setItem(localStorageKey, "true");
        }

        function l() 
        {
          location.reload();
            const a1=document.getElementById("s12")
            a1.style.display="block";
            const localStorageKey = "change12";
            localStorage.setItem(localStorageKey, "true");
        }

        function m() 
        {
          location.reload();
            const a1=document.getElementById("s13")
            a1.style.display="block";
            const localStorageKey = "change13";
            localStorage.setItem(localStorageKey, "true");
        }

        function n() 
        {
          location.reload();
            const a1=document.getElementById("s14")
            a1.style.display="block";
            const localStorageKey = "change14";
            localStorage.setItem(localStorageKey, "true");
        }

        function o() 
        {
          location.reload();
            const a1=document.getElementById("s15")
            a1.style.display="block";
            const localStorageKey = "change15";
            localStorage.setItem(localStorageKey, "true");
        }
        function p() 
        {
          location.reload();
            const a1=document.getElementById("s16")
            a1.style.display="block";
            const localStorageKey = "change16";
            localStorage.setItem(localStorageKey, "true");
        }
        function q() 
        {
          location.reload();
            const a1=document.getElementById("s17")
            a1.style.display="block";
            const localStorageKey = "change17";
            localStorage.setItem(localStorageKey, "true");
        }
        function r() 
        {
          location.reload();
            const a1=document.getElementById("s18")
            a1.style.display="block";
            const localStorageKey = "change18";
            localStorage.setItem(localStorageKey, "true");
        }
        function s() 
        {
          location.reload();
            const a1=document.getElementById("s19")
            a1.style.display="block";
            const localStorageKey = "change19";
            localStorage.setItem(localStorageKey, "true");
        }
        function t() 
        {
          location.reload();
            const a1=document.getElementById("s20")
            a1.style.display="block";
            const localStorageKey = "change20";
            localStorage.setItem(localStorageKey, "true");
        }
        function u() 
        {
          location.reload();
            const a1=document.getElementById("s21")
            a1.style.display="block";
            const localStorageKey = "change21";
            localStorage.setItem(localStorageKey, "true");
        }






