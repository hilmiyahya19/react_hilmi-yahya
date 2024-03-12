// Variabel global untuk menyimpan status konfirmasi
let isConfirmed = false;

document.addEventListener('DOMContentLoaded', function () {
    let form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Mencegah form untuk melakukan submit secara otomatis

        const inputs = form.querySelectorAll('input, textarea, select');

        let isValid = true;

        // Tugas Javascript Refreshment
        const productNameInput = document.getElementById('productName');
        const productName = productNameInput.value;

        const productPriceInput = document.getElementById('productPrice');
        const productPrice = productPriceInput.value;

        if (productName.length === 0) {
            isValid = false;
            document.getElementById('errorAlertProductName0').style.display = 'block';
            setTimeout(function () {
                document.getElementById('errorAlertProductName0').style.display = 'none';
            }, 1000); // Menunda penutupan alert selama 1 detik
        } else if (productName.length > 25) {
            isValid = false;
            document.getElementById('errorAlertProductName25').style.display = 'block';
            setTimeout(function () {
                document.getElementById('errorAlertProductName25').style.display = 'none';
            }, 1000); // Menunda penutupan alert selama 1 detik
        } else {
            document.getElementById('errorAlertProductName0').style.display = 'none';
            document.getElementById('errorAlertProductName25').style.display = 'none';
        }
        
        if (productPrice.length === 0) {
            isValid = false;
            document.getElementById('errorAlertProductPrice0').style.display = 'block';
            setTimeout(function () {
                document.getElementById('errorAlertProductPrice0').style.display = 'none';
            }, 1000); // Menunda penutupan alert selama 1 detik
        } else {
            document.getElementById('errorAlertProductPrice0').style.display = 'none';
        }
        
        inputs.forEach(function (input) {
            if (input.hasAttribute('required') && !input.value && input.type !== 'file') {
                isValid = false;
            }
            if (input.type === 'file' && !input.files.length) {
                isValid = false;
            }
            if (input.tagName.toLowerCase() === 'textarea' && !input.value.trim()) {
                isValid = false;
            }
        });

        if (!isValid) {
            document.getElementById('errorAlert').style.display = 'block';
            document.getElementById('successAlert').style.display = 'none';

            setTimeout(function () {
                document.getElementById('errorAlert').style.display = 'none';
            }, 1000);
        } else {
            document.getElementById('errorAlert').style.display = 'none';
            document.getElementById('successAlert').style.display = 'block';

            setTimeout(function () {
                document.getElementById('successAlert').style.display = 'none';
                setTimeout(function () {
                    window.location.reload();
                }, 500);
            }, 500);
        }
    });

    // Tambahkan event listener pada tombol "Ya, Submit"
    document.getElementById('submitModal').addEventListener('click', function () {
        isConfirmed = true; // Set status konfirmasi menjadi true

        // Panggil submit form hanya jika sudah dikonfirmasi
        if (isConfirmed) {
            form.submit(); // Kirim formulir setelah konfirmasi
        }
    });
});