$(function () {
  $("form[name='registration']").validate({
    rules: {
      name: "required",
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 5,
      },
      comPassword: {
        required: true,
        minlength: 5,
        equalTo: "#password",
      },
    },
    messages: {
      name: "Please enter your name.",
      email: {
        required: "Please enter your email address",
        email: "Please provide a valid email",
      },
      password: {
        required: "Please provide a password",
        minlength: "Password must consist of at least 5 characters",
      },
      comPassword: {
        required: "Please re-enter the above password",
        minlength: "Password must consist of at least 5 characters",
        equalTo: "Please make sure this password matches the above password",
      },
    },
  });
});
