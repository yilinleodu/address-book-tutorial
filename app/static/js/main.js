/**
 * Created by phrayezzen on 10/7/14.
 */

var addContact = function() {
  var name = $("#first").val() + " " + $("#last").val();
  var phone = $("#phone").val();
  var address = $("#address").val();
  var city = $("#city").val();
  var state = $("#state").val();
  var zip = $("#zip").val();
  $("tbody").append("<tr>" +
    "<td>" + name + "</td>" +
    "<td>" + phone + "</td>" +
    "<td>" + address + "</td>" +
    "<td>" + city + "</td>" +
    "<td>" + state + "</td>" +
    "<td>" + zip + "</td>" +
    "<td><a href='#'>Delete</a></td>" +
    "</tr>");
};

$(document).ready(function() {
  $("tbody").on("click", "a", function() {
    $(this).closest("tr").remove();
  });

  $("#add").on("click", function() {
    addContact();
  });
});