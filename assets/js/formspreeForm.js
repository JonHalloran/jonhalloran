const submitForm = (e) => {
  e.preventDefault();
  $.ajax({
    url: 'https://formspree.io/halloran.jonathan@gmail.com',
    type: 'post',
    data: $('#formspree-form').serialize(),
    success: function () {
      alert("Thank you for your message. I'll get back to you ASAP");
    }
  });
};

const form = document.getElementById("formspree-form");
form.addEventListener("submit", (e) => submitForm(e));