document.addEventListener("DOMContentLoaded", function () {
  // Script para copiar al portapapeles
  function copyToClipboard(email) {
    const el = document.createElement("textarea");
    el.value = email;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);

    // Mostrar mensaje de copiado
    const copiedMessage = document.querySelector(".copied-message");
    copiedMessage.style.display = "inline";
    setTimeout(() => {
      copiedMessage.style.display = "none";
    }, 2000);
  }

  // Función para desplazarse suavemente hasta la sección de contacto y alternar la visibilidad
  function scrollToContact() {
    const contactSection = document.getElementById("contact");

    // Alternar la visibilidad de la sección de contacto
    if (contactSection.style.display === "block") {
      contactSection.style.display = "none"; // Ocultar la sección de contacto
    } else {
      contactSection.style.display = "block"; // Mostrar la sección de contacto
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  // Asignar la función al evento click de los botones
  document
    .getElementById("btnContacto")
    .addEventListener("click", scrollToContact);
  document
    .getElementById("btnContactoFooter")
    .addEventListener("click", scrollToContact);

  const userEmail = "propuestas.matiasdutra23";
  const emailDomain = "hotmail.com";

  const emailElement = document.getElementById("hotmailEmail");
  emailElement.textContent = `${userEmail}@${emailDomain}`;
  emailElement.onclick = function () {
    copyToClipboard(`${userEmail}@${emailDomain}`);
    showCopiedMessage();
  };
});

function showCopiedMessage() {
  const copiedMessage = document.querySelector(".copied-message");
  copiedMessage.style.display = "inline-block";

  // Ocultar el mensaje después de unos segundos (por ejemplo, 3 segundos)
  setTimeout(function () {
    copiedMessage.style.display = "none";
  }, 3000);
}
