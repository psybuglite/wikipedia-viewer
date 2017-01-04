$(document).ready(function() {

  $("#clear").hide();

  $("#search").click(function() {
    //get search input
    var searchInput = $("#searchInput").val();
    //API with searchterm
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchInput+"&format=json&callback=?";
    //ajax call
    $.ajax({
      type:"GET",
      url:url,
      async:false,
      dataType: "json",
      success: function(data) {
        //console.log(data[1][0]);
        //console.log(data[2][0]);
        //console.log(data[3][0]);
        $("input").css("margin-top", "50px")
        $("#output").html("");
        for(i=0;i<data[1].length;i++) {
          $("#output").append("<li><a href="+data[3][i]+">"+data[1][i]+"<br><span>"+data[3][i]+"</span><br>"+data[2][i]+"</a></li><br><br>");
        }
      },
      error: function(errorMessage) {
        alert("Error!");
      }
    });

    $("#clear").show();

    $("#clear").click(function() {
      $("#output").html("");
      $("input").css("margin-top", "200px")
      $("#clear").hide();

    });

  });

  $("#searchInput").keypress(function(e) {
    if (e.which == 13) {
      $("#search").click();
      $("input").css("margin-top", "50px")
    }
  });


});
