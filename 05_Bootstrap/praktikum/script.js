document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');

  form.addEventListener('submit', function (event) {
    var inputs = form.querySelectorAll('input, textarea, select');

    var isValid = true;

    inputs.forEach(function (input) {
      if (input.hasAttribute('required') && !input.value && input.type !== 'file') { // Periksa apakah input kosong, kecuali untuk input file
        isValid = false;
      }
      if (input.type === 'file' && !input.files.length) { // Periksa apakah file sudah dipilih
        isValid = false;
      }
      if (input.tagName.toLowerCase() === 'textarea' && !input.value.trim()) { // Periksa apakah textarea kosong
        isValid = false;
      }
    });

    if (!isValid) {
      event.preventDefault(); // Mencegah form untuk melakukan submit jika tidak valid
      document.getElementById('errorAlert').style.display = 'block'; // Menampilkan alert error
      document.getElementById('successAlert').style.display = 'none'; // Menyembunyikan alert sukses

      // Menghilangkan alert error setelah 1 detik
      setTimeout(function () {
        document.getElementById('errorAlert').style.display = 'none';
      }, 1000);
    } else {
      event.preventDefault(); 
      document.getElementById('errorAlert').style.display = 'none'; // Menyembunyikan alert error
      document.getElementById('successAlert').style.display = 'block'; // Menampilkan alert sukses
      
       // Menghilangkan alert sukses setelah 0,5 detik
       setTimeout(function(){ 
        document.getElementById('successAlert').style.display = 'none';
        // Menunda reload halaman selama 0,5 detik
        setTimeout(function(){
          window.location.reload(); // Mereload halaman
        }, 500);
      }, 500);
    }
  });
});

