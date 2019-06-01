$(document).ready(function() {
  let UserCategory;
  function UpFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
  var randomNumber = Math.floor(Math.random() * Math.floor(1000000));
  console.log(randomNumber);
  $(".activityClass").on("click", function(e) {
    e.preventDefault();
    let UserCategory = $(this).val()
    document.getElementById("category").value = UserCategory
  });

  $("#add-btn").on("click", function(event) {
    event.preventDefault();
    let location = $("#location").val()
    let Location = location.split(",")
    let long = Location[0];
    let lat = Location[1];
console.log(long, lat)
    // var radioValue = $("input[name='1']:checked").val();
    // console.log(radioValue);
    var newBooking = {
      activity: $("#activity")
        .val()
        .trim(),
      long: long,
      lat: lat,
      location: $("#location").val(),
      date: $("#date").val(),
      startTime: $("#startTime").val(),
      endTime: $("#endTime").val(),
      comments: $("#comments").val(),
      searchTerm: randomNumber,
      category: $("#category").val().trim()
      // if (!(example.text && example.description)) {
      //   alert("You must enter an example text and description!");
      //   return;
      // .then(comments.substring(0, 150))
    };
    newBooking.activity = UpFirst(newBooking.activity);
    newBooking.activity = newBooking.activity.replace(/\s+/g, " ").trim();

    // newBooking.location = newBooking.location.replace(/\s+/g, " ").trim();
    // newBooking.comments = newBooking.comments.substring(0, 150);
    newBooking.comments = newBooking.comments.replace(/\s+/g, " ").trim();

    // send an AJAX POST-request with jQuery
    $.post("/api/bookings/", newBooking).then(function() {
      // tell the user we're adding a character with an alert window
      console.log(newBooking);
      alert("Added activity! Go check the map on first page");
    });

    // empty each input box by replacing the value with an empty string
    $("#activity").val("");
    $("#location").val("");
    $("#date").val("");
    $("#comment").val("");
    $("#startTime").val("");
    $("#endTime").val("");
  });
});
