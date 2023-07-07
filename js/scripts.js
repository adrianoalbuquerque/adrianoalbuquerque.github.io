document.getElementById("submitButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevenir o envio do formulário

    // Obter valores dos campos do formulário
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    // Enviar o email usando o FormSubmit
    var formSubmitUrl = "https://formsubmit.co/ajax/adrianot.albuquerque@gmail.com";
    fetch(formSubmitUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        message: message
      })
    })
      .then(function(response) {
        if (response.ok) {
          // Limpar o formulário
          document.getElementById("contactForm").reset();

          // Mostrar mensagem de sucesso
          document.getElementById("submitSuccessMessage").classList.remove("d-none");
        } else {
          throw new Error("Erro ao enviar o formulário");
        }
      })
      .catch(function(error) {
        // Mostrar mensagem de erro
        document.getElementById("submitErrorMessage").classList.remove("d-none");
        console.error(error);
      });
});