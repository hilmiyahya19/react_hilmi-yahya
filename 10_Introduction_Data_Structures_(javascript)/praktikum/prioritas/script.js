// Variabel global untuk menyimpan status konfirmasi
let isConfirmed = false;

document.addEventListener('DOMContentLoaded', function () {
    let form = document.querySelector('form');
    let isValid = false; // Tambahkan variabel isValid

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const inputs = form.querySelectorAll('input, textarea, select');

        let isValid = true;

        // Product Name
        const productNameInput = document.getElementById('productName');
        const productName = productNameInput.value;

        const regex = /[!@#$%^&*(),.?":{}|<>]/; // Ekspresi reguler untuk mencocokkan karakter khusus

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
        } else if (regex.test(productName)) { // Menguji apakah productName mengandung karakter khusus
            isValid = false;
            document.getElementById('errorAlertProductNameRegex').style.display = 'block';
            setTimeout(function () {
                document.getElementById('errorAlertProductNameRegex').style.display = 'none';
            }, 1000); // Menunda penutupan alert selama 1 detik
        } else {
            document.getElementById('errorAlertProductName0').style.display = 'none';
            document.getElementById('errorAlertProductName25').style.display = 'none';
        }

        //Product Price
        const productPriceInput = document.getElementById('productPrice');
        const productPrice = productPriceInput.value;

        if (productPrice.length === 0) {
            isValid = false;
            document.getElementById('errorAlertProductPrice0').style.display = 'block';
            setTimeout(function () {
                document.getElementById('errorAlertProductPrice0').style.display = 'none';
            }, 1000); // Menunda penutupan alert selama 1 detik
        } else {
            document.getElementById('errorAlertProductPrice0').style.display = 'none';
        }

        // Product Image
        const productImageInput = document.getElementById('productImage');
        const productImage = productImageInput.files[0]; 
      
        if (!productImage) {
            isValid = false;
            document.getElementById('errorAlertProductImage0').style.display = 'block';
            setTimeout(function () {
                document.getElementById('errorAlertProductImage0').style.display = 'none';
            }, 1000); // Menunda penutupan alert selama 1 detik
        } else {
            document.getElementById('errorAlertProductImage0').style.display = 'none';
        }

        // Additional Description
        const additionalDescriptionInput = document.getElementById('additionalDescription');
        const additionalDescription = additionalDescriptionInput.value;

        if (additionalDescription.length === 0) {
            isValid = false;
            document.getElementById('errorAlertAdditionalDescription0').style.display = 'block';
            setTimeout(function () {
                document.getElementById('errorAlertAdditionalDescription0').style.display = 'none';
            }, 1000); // Menunda penutupan alert selama 1 detik
        } else {
            document.getElementById('errorAlertAdditionalDescription0').style.display = 'none';
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
            console.log(isValid);
            setTimeout(function () {
                document.getElementById('errorAlert').style.display = 'none';
            }, 1000);
        } else {
            document.getElementById('errorAlert').style.display = 'none';
            document.getElementById('successAlert').style.display = 'block';
            console.log(isValid);
            setTimeout(function () {
                document.getElementById('successAlert').style.display = 'none';
                setTimeout(function () {
                    // window.location.reload();
                }, 500);
            }, 500);
        }
    });

    // Tambahkan event listener pada tombol "Ya, Submit"
    document.getElementById('submitModal').addEventListener('click', function () {
        isConfirmed = true; // Set status konfirmasi menjadi true

        // Panggil submit form hanya jika sudah dikonfirmasi dan isValid adalah true
        if (isConfirmed && isValid) {
            form.submit(); // Kirim formulir setelah konfirmasi
        }
    });
});

document.getElementById("tabelProduct").style.display = "";
        let currentNo = 1;

        function tambahProduct() {
            let productName = document.getElementById("productName").value;
            let productCategory = document.getElementById("productCategory").value;
            let productImage = document.getElementById("productImage").value;
            let productFreshness = document.getElementById("productFreshness").value;
            let additionalDescription = document.getElementById("additionalDescription").value;
            let productPrice = document.getElementById("productPrice").value;

            let table = document.getElementById("tabelProduct");
            let row = table.insertRow(-1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);
            let cell5 = row.insertCell(4);
            let cell6 = row.insertCell(5);
            let cell7 = row.insertCell(6);

            cell1.innerHTML = currentNo++;
            cell2.innerHTML = productName;
            cell3.innerHTML = productCategory;
            cell4.innerHTML = productImage;
            cell5.innerHTML = productFreshness;
            cell6.innerHTML = additionalDescription;
            cell7.innerHTML = productPrice;

            table.style.display = "table";

            document.getElementById("productName").value = "";
            document.getElementById("productCategory").value = "";
            document.getElementById("productImage").value = "";
            document.getElementById("productFreshness").value = "";
            document.getElementById("additionalDescription").value = "";
            document.getElementById("productPrice").value = "";
        }

let productCategory = ''; // Variabel untuk menyimpan kategori produk
let productFreshness = ''; // Variabel untuk menyimpan kesegaran produk

// Fungsi untuk memilih kategori produk
function selectCategory(category) {
    document.getElementById('dropdownMenuButton').innerText = category;
    productCategory = category; // Simpan nilai kategori yang dipilih
}

// Fungsi untuk memilih kesegaran produk
function selectFreshness(freshness) {
    productFreshness = freshness; // Simpan nilai kesegaran yang dipilih
}
