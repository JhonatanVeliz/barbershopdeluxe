document.querySelector("#submit").addEventListener('click',function(){

    let cliente = document.querySelector('#cliente').value;
    let numero = document.querySelector('#numero').value;
    let cita = document.querySelector('#cita').value;

    let url = "https://api.whatsapp.com/send?phone=58545287{telefono}&text=*_Barber Shop Deluxe_*Reserva*%0A%0A*Cual es tu nombre*%0A" + cliente + "%0A*Indica su numero de celular*" + numero + "%0A*DESEA REALIZAR SU RESERVACION EN ESTA FECHA%0A" + cita;
    window.open(url);

});