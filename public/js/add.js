// var tags = ["music", "art", "sports", "lesiure", "party"];;
// function createBtn() {
//   $("#buttons").empty();
//   for (i = 0; i < tags.length; i++) {
//     var tagBtn = $("<button>");
//     tagBtn.addClass("tag");
//     tagBtn.attr("data-tag", tags[i]);
//     tagBtn.text(players[i]);
//     $("#buttons").append(tagBtn);
//   }
// }
// createBtn();

function UpFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

$("#add-btn").on("click", function(event) {
  event.preventDefault();
  // make a newCharacter obj
  var newBooking = {
    activity: $("#activity")
      .val()
      .trim(),
    location: $("#location")
      .val()
      .trim(),
    startTime: $("#startTime")
      .val()
      .trim(),
    endTime: $("#endTime")
      .val()
      .trim(),
    people: $("#people")
      .val()
      .trim(),
    comments: $("#comments").val()
    // .then(comments.substring(0, 150))
  };
  console.log(newBooking.activity);
  UpFirst(newBooking.activity);
  // UpFirst(newBooking.location);
  // send an AJAX POST-request with jQuery
  $.post("/api/bookings/", newBooking)
    // on success, run this callback
    .then(function() {
      // tell the user we're adding a character with an alert window
      alert("Added activity! Go check the map on first page");
    });

  // empty each input box by replacing the value with an empty string
  $("#activity").val("");
  $("#location").val("");
  $("#startTime").val("");
  $("#endTime").val("");
  $("#people").val("");
});
