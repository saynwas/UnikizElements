setTimeout(function() {
      var check = document.getElementById("mycontent");
      var parents = document.getElementsByClassName("unikiz-footer");
      var unikiz = window.getComputedStyle(parents[0]);
      var valid = window.getComputedStyle(check);
      var link = "https://themes.unikizelements.com/";
      var wa = "https://themes.unikizelements.com/"; 

      //Check and Redirect if tag is hidden
      if (valid.display === "none" || valid.visibility === "hidden" || valid.opacity === "0") {
        window.location.href = wa;
      } 

      else if (unikiz.display === "none" || unikiz.visibility === "hidden" || unikiz.opacity === "0")
      {
        window.location.href = wa;
      } 

      else if (check.href != link) {
        window.location.href = wa;
      }
    }, 2000);
