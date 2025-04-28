document.getElementById("RegistroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    //Obtenemos los valores de los campos
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const carrera = document.getElementById("carrera").value;
    const conferencias = Array.from(document.querySelectorAll("input[name='conferencias']:checked")).map(cb => cb.value);

    //Validaciones de campos
    if (!nombre){
        alert("El campo 'Nombre completo' es obligatorio.");
        return;
    }

    if (!correo || !/^[a-zA-Z0-9._%+-]+@uamv\.edu\.ni$/.test(correo)) {
        alert("El campo 'Correo electrónico' es obligatorio y debe ser un correo institucional.");
        return;
    }

    if (!carrera){
        alert("Por favor, selecciona al menos una carrera.");
        return;
    }

    if (conferencias.length === 0) {
        alert("Por favor, selecciona al menos una conferencia");
        return;
    }


    //Confirmación de envío
    alert(`¡Registro exitoso!\nNombre: ${nombre}\nCorreo: ${correo}\nCarrera: ${carrera}\nConferencias: ${conferencias.join(", ")}`);
    this.reset(); // Reinicia el formulario
});