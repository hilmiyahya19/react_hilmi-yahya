document.getElementById("tabelBarang").style.display = "none";

        function tambahBarang() {
            let nama = document.getElementById("nama").value;
            let harga = document.getElementById("harga").value;

            if (nama === '' || harga === '') {
                alert("Harap isi semua kolom.");
                return;
            }

            // Validasi panjang nama barang
            if (nama.length < 6 || nama.length > 25) {
            alert("Nama barang harus terdiri dari 6 hingga 25 karakter.");
            return;
            }

            // Validasi harga barang harus angka
            if (isNaN(harga)) {
            alert("Harga barang harus berupa angka.");
            return;
            }

            let table = document.getElementById("tabelBarang");
            let row = table.insertRow(-1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);

            cell1.innerHTML = nama;
            cell2.innerHTML = harga;

            table.style.display = "table";

            document.getElementById("nama").value = "";
            document.getElementById("harga").value = "";

            // Menambahkan warna merah pada h2 Form Barang setelah barang ditambahkan
            document.querySelector('h2').style.color = "red";
        }
