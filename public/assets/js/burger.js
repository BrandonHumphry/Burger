$(function () {
 // javascript to add a new burger to the list
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        // create a variable holding the burger name from form field
        const newBurger = {
            burger_name: $("#burger-input").val().trim()
        }
        // jquery ajax call for posting new burger data
        $.ajax("api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("new burger added")
            // reload page after ajax post is complete
            location.reload();
        });
    });
  $(".eatburger").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");
    var devouredState = {
      devoured: 1
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
  }).then(function() {
      // reload page after ajax post is complete
      location.reload();
  });
  });

//   delete the burger
  // $(".deleteburger").on("click", function (event) {
  //   event.preventDefault();

  //   var id = $(this).data("id");
    
  //   $ajax({
  //     type: "DELETE",
  //     url: "/api/burgers/" + id
  //   }).then(location.reload());
  // });

});
