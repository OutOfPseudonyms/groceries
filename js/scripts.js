$(document).ready(function () {
  $("#groceries").submit(function (event) {
    const inputFields = ["item1", "item2", "item3", "item4", "item5"];
    let groceries = [];

    //const userInput = $("input#item1").val().toUpperCase();
    //const userInput2 = $("input#item2").val().toUpperCase();
    //const userInput3 = $("input#item3").val().toUpperCase();
    //const userInput4 = $("input#item4").val().toUpperCase();
    //const userInput5 = $("input#item5").val().toUpperCase();

    inputFields.forEach(function (inputFieldId) {
      const userInput = $(`input#${inputFieldId}`).val().toUpperCase();
      groceries.push(userInput);
    });
    groceries.sort();

    groceries.forEach(function (groceryItem) {
      $("#list").append(`<li>${groceryItem}</li>`);
    });

    $("#list").show();
    
    event.preventDefault();
  })
})