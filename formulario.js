document.getElementById('clienteForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad').value;
    const cedula = document.getElementById('cedula').value;
    const email = document.getElementById('email').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;

    if (!/^[a-zA-Z\s]+$/.test(nombre)) {
        alert('Nombre inválido. Solo se permiten letras y espacios.');
        return;
    }

    if (!/^[a-zA-Z\s]+$/.test(apellido)) {
        alert('Apellido inválido. Solo se permiten letras y espacios.');
        return;
    }

    if (!/^\d{1,3}$/.test(edad) || edad < 1 || edad > 100) {
        alert('Edad inválida. Debe ser un número entre 1 y 100.');
        return;
    }

    if (!/^\d{10}$/.test(cedula)) {
        alert('Cédula inválida. Debe tener 10 dígitos.');
        return;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        alert('Correo electrónico inválido.');
        return;
    }

    if (direccion.trim() === '') {
        alert('La dirección no puede estar vacía.');
        return;
    }

    if (!/^\d{10}$/.test(telefono)) {
        alert('Teléfono inválido. Debe tener 10 dígitos.');
        return;
    }

    const cliente = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        cedula: cedula,
        email: email,
        direccion: direccion,
        telefono: telefono
    };

    // Guardar datos en localStorage
    localStorage.setItem('cliente', JSON.stringify(cliente));

    console.log('Datos del cliente guardados en localStorage:');
    console.log(cliente);

    document.getElementById('clienteForm').reset();
});

window.onload = function() {
    const clienteGuardado = JSON.parse(localStorage.getItem('cliente'));

    if (clienteGuardado) {
        document.getElementById('nombre').value = clienteGuardado.nombre;
        document.getElementById('apellido').value = clienteGuardado.apellido;
        document.getElementById('edad').value = clienteGuardado.edad;
        document.getElementById('cedula').value = clienteGuardado.cedula;
        document.getElementById('email').value = clienteGuardado.email;
        document.getElementById('direccion').value = clienteGuardado.direccion;
        document.getElementById('telefono').value = clienteGuardado.telefono;
    }
};
