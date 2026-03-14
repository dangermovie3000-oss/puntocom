document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // A simple client-side validation example
            const nombre = document.getElementById('nombre').value.trim();
            const correo = document.getElementById('correo').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();

            if (!nombre || !correo || !mensaje) {
                alert('Por favor, completa todos los campos.');
                return;
            }

            // Using mailto: which depends on the user's email client.
            // This is simple but not very reliable.
            // For a production site, consider a server-side endpoint or a service like Formspree.
            const subject = "Contacto desde Mi Sitio.Com";
            const body = `Nombre: ${nombre}\nCorreo: ${correo}\nMensaje: ${mensaje}`;
            
            window.location.href = `mailto:zamso3000@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            console.log("Intento de envío de formulario a través de cliente de correo.");
        });
    }
});