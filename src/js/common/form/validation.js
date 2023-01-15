function validateForms(form) {
  $(form).validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      email: {
        required: true,
        email: true,
      },
      checkbox: {
        required: true,
      },
    },
    errorPlacement: $.noop,
  });
}

validateForms("#contacts form");

$("form").submit(function (e) {
  e.preventDefault();

  if (!$(this).valid()) {
    $("input")
      .change(function () {
        $(this).css("border", "1px solid red");
      })
      .trigger("change");
    $(".contacts__policy")
      .change(function () {
        $(this).css("border", "1px solid red");
      })
      .trigger("change");
    return;
  }

  // if Form valid reset to default styles

  $("input")
    .change(function () {
      $(this).css("border", "1px solid black");
    })
    .trigger("change");
  $(".contacts__policy")
    .change(function () {
      $(this).css("border", "none");
    })
    .trigger("change");

  $.ajax({
    type: "POST",
    url: "mailer/smart.php",
    data: $(this).serialize(),
  }).done(function () {
    $(this).find("input").val("");
    $(".modal__submit").addClass(active);

    $("form").trigger("reset");
  });

  return false;
});
