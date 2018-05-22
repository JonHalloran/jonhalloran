const submitForm = (e) => {
  e.preventDefault();
  $.ajax({
    url: 'https://formspree.io/halloran.jonathan@gmail.com',
    type: 'post',
    data: $('#formspree-form').serialize(),
    success: function () {
      alert("worked");
    }
  });
};

const form = document.getElementsByID("formspree-form");
form.addEventListener("submit", (e) => submitForm(e));