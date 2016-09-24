  $(document).ready(function() {
  console.log("testing my rights")
  //Class 2 Nth-Child Pseudo-Selector
  $(".nth-child-table").on("click", "input[type='button']", function() {
    var parent     = $(this).parents(".nth-child-table"),
        new_value  = parent.find("input[type='text']").val(),
        rows       = parent.find("tbody tr:nth-child(" + new_value + ")");

    parent.find("tbody tr").css("background-color", "");
    rows.css("background-color", "red");
  });

  ///Class 2 changing border radius
  $(".border-radius").on("change", "input", function() {
    var parent     = $(this).parents(".border-radius"),
        example    = parent.find(".example"),
        inputs     = parent.find("input"),
        index      = inputs.index($(this)),
        new_value  = $(this).val(),
        setting    = "";

    parent.find("pre .border-radius-value").children().eq(index).text(new_value);
    parent.find("p .border-radius-value").eq(index).text(new_value);

    inputs.each(function() {
      setting += $(this).val() + "px ";
    });

    example.css("border-radius", setting);
  });

  $(".transition-duration").on("change", "input", function() {
    var parent     = $(this).parents(".transition-duration"),
        new_value  = $(this).val();

    parent.find(".number").text(new_value);
    parent.find("p .value").text(new_value);
    parent.find(".example").css("transition-duration", new_value + "s");
  });



  $(".box-shadow .example1").on("change", "input", function() {
    var parent    = $(this).closest("section"),
        inputs    = parent.find("input"),
        index     = inputs.index($(this)),
        new_value = $(this).val()
        setting   = "";

    parent.find("pre .number").eq(index).text(new_value);

    inputs.each(function() {
      setting += $(this).val() + "px ";
    });
    setting += " red";

    parent.find("div").css("box-shadow", setting);
  });

  $(".box-shadow .example2").on("change", "input", function() {
    var parent    = $(this).closest("section"),
        inputs    = parent.find("input[type='range']"),
        index     = inputs.index($(this)),
        new_value = $(this).val(),
        setting   = "";

    if(parent.find("input[type='checkbox']:checked").length) {
      setting += "inset ";

      if(!parent.find("pre span.value span.temp").length) {
        parent.find("pre span.value").prepend("<span class='temp'> inset</span>");
      }
    }
    else {
      parent.find("pre span.value span.temp").remove();
    }

    setting += "0 0 ";

    inputs.each(function(index) {
      var value = $(this).val();
      setting += value + "px ";
      parent.find("pre .number").eq(index + 2).text(value);
    });
    setting += " red";
    console.log(setting);

    parent.find("div").css("box-shadow", setting);
  });
});
