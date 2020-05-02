(function () {
  "use strict";

    var divBotOpen = true;

  // The Office initialize function must be run each time a new page is loaded.
  Office.initialize = function (reason) {
    $(document).ready(function () {

        //divBot = document.querySelector('#divBottom');

        var btn1 = document.querySelector('#btn1');
        btn1.addEventListener("click", btn1Click);
        btn1.textContent = "Ready to ";

        
  
    });
  };


    function btn1Click() {

        if (divBotOpen)
            $('#divBottom').hide("slow");
        else
            $('#divBottom').show("slow");

        divBotOpen = !divBotOpen;
    }

 
})();