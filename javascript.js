document.addEventListener("DOMContentLoaded", function() {
  var submitBtn = document.querySelector(".submit");
  submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    
    var genderSelect = document.getElementById("gender-select");
    var nationalitySelect = document.getElementById("nationality-select");
    var ageInput = document.getElementById("age-input");
    var estratoInput = document.getElementById("estrato");
    
    var selectedGender = genderSelect.value;
    var selectedNationality = nationalitySelect.value;
    var age = parseInt(ageInput.value);
    var estrato = parseInt(estratoInput.value);
    
    var message = "";
    var caneca = "";
    var zona = "";
    
    if (selectedGender === "hombre" && selectedNationality === "Colombia" && age > 20 && estrato < 3) {
      message = "¡Felicidades! Has sido aceptado en la empresa.";
      
      if (age >= 20 && age <= 30) {
        caneca = "Negra";
        zona = "Kennedy";
      } else if (age > 30 && age <= 35) {
        caneca = "Gris";
        zona = "Puente de Aranda";
      } else if (age > 35 && age <= 56) {
        caneca = "Verde";
        zona = "Chapinero";
      }
    } else if (selectedGender === "mujer" && selectedNationality === "Colombia" && age > 18) {
      message = "¡Felicidades! Has sido aceptada en la empresa.";
      
      if (age >= 20 && age <= 30) {
        caneca = "Negra";
        zona = "Kennedy";
      } else if (age > 30 && age <= 35) {
        caneca = "Gris";
        zona = "Puente de Aranda";
      } else if (age > 35 && age <= 56) {
        caneca = "Verde";
        zona = "Chapinero";
      }
    } else if (selectedGender !== "" && age > 0 && estrato > 0 && selectedNationality !== "") {
      message = "Se requiere un certificado de empleo para continuar con el proceso.";
    } else {
      message = "Por favor, completa todos los campos requeridos.";
    }
    
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    
    var messageElement = document.createElement("p");
    messageElement.textContent = message;
    resultDiv.appendChild(messageElement);
    
    if (caneca !== "" && zona !== "") {
      var detailsElement = document.createElement("p");
      detailsElement.textContent = "Se te ha asignado las Canecas: " + caneca + ", Zona: " + zona;
      resultDiv.appendChild(detailsElement);
    }
  });
});
