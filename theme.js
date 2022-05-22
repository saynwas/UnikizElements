setTimeout(function() {
      var check = document.getElementById("mycontent");
      var valid = window.getComputedStyle(check);
      var link = "https://themes.unikizelements.xyz/";
      var wa = "https://themes.unikizelements.xyz/";

      //Check and Redirect if tag is hidden
      if (valid.display === "none" || valid.visibility === "hidden" || valid.opacity === "0") {
        window.location.href = wa;
      }
      
     else if( check.href != link){
       window.location.href = wa;
}
}, 2000);
