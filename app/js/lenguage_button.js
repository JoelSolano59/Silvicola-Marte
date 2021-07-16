
function openLenguage() {
    Swal.fire({
        title: 'Lenguaje: Español',
        showDenyButton: true,
        
        confirmButtonText: `Change to: English`,
        denyButtonText: `Cancelar`,
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Changing to: English', 'Wait a second...', 'success')
        }
    })
}