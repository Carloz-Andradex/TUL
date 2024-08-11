window.onload = function() {
    const canvas = document.getElementById('tulipCanvas');
    const ctx = canvas.getContext('2d');

    // Función para dibujar un tulipán
    function drawTulip(x, y) {
        ctx.fillStyle = 'green';
        ctx.fillRect(x, y, 5, 50); // Tallo

        ctx.beginPath();
        ctx.moveTo(x + 2.5, y);
        ctx.lineTo(x - 10, y - 20);
        ctx.lineTo(x + 15, y - 20);
        ctx.closePath();
        ctx.fillStyle = 'red';
        ctx.fill(); // Pétalos
    }

    // Dibujar un ramo de tulipanes
    for (let i = 0; i < 5; i++) {
        drawTulip(100 + i * 50, 300);
    }

    // Mostrar mensaje personalizado
    const mensaje = prompt("Escribe tu mensaje:");
    document.getElementById('mensaje').innerText = mensaje;

    // Redirigir después de 10 segundos
    setTimeout(function() {
        alert("Serás redirigido a una nueva página.");
        window.location.href = "https://www.tu-enlace.com";
    }, 10000);
};
