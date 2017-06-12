window.onload = function() {
    var script = document.createElement("script");
    script.src = "./node_modules/jquery/src/jquery.js";
    script.onload = script.onreadystatechange = function() {
      $(document).ready(function() {
        $("#lst-ib").val("Hello, MUDs");
      });
    };
    document.body.appendChild(script);
};
