# Basic Form 
## Penggunaan/Penerapan Form
Form merupakan salah satu hal krusial dalam pengembangan aplikasi website. Form dapat digunakan untuk menghandle inputan dari user.
Form banyak kita jumpai saat login, mendaftarkan sesuatu, memberikan feedback, mengisi data dan masih banyak lainnya.
Dalam react akan ada banyak hal yang kita pelajari dari Form. Seperti bagaimana menghandle inputan? Bagaimana memvalidasi inputan dsb. Untuk saat ini kita akan belajar Basic Form.
## Dalam konteks formulir (form) HTML, terdapat perbedaan antara elemen dan tipe (element and type).
### Elemen Formulir (Form Element):
   Elemen formulir adalah elemen HTML yang digunakan untuk membuat formulir interaktif di halaman web. Contoh elemen formulir termasuk `<form>`, `<input>`, `<textarea>`, `<select>`, dan `<button>`. Elemen formulir ini digunakan untuk mengumpulkan data dari pengguna atau mengizinkan pengguna untuk berinteraksi dengan halaman web melalui isian, pilihan, atau tindakan.
### Tipe (Type):
   Tipe (type) adalah atribut khusus yang diberikan kepada elemen formulir tertentu untuk menentukan jenis input atau perilaku yang diinginkan dari elemen tersebut. Contoh tipe termasuk `text`, `number`, `file`, `email`, `password`, `checkbox`, `radio`, `submit`, `button`, dan banyak lagi. Tipe ini memengaruhi cara elemen formulir berperilaku dan menentukan bagaimana data dikumpulkan atau diproses saat formulir diserahkan.

# Controlled Component
## Apa itu Controlled Component
Kita dapat menggabungkan cara menyimpan dan memperbarui state di HTML dan React dengan menggunakan state pada React.
Kemudian Komponen React yang me-render sebuah form juga mengontrol apa yang terjadi dalam form tersebut pada masukan pengguna selanjutnya.
Sebuah elemen masukan form yang nilainya dikontrol oleh React melalui cara seperti ini disebut sebagai "controlled component".
## Tag Textarea
### Textarea pada HTML
pada HTML, elemen `<textarea>` mendefinisikan teks di dalamnya sebagai elemen anaknya: 
Di React, `<textarea>` menggunakan atribut value. Dengan cara ini, sebuah form yang menggunakan `<textarea>` dapat ditulis dengan cara yang sangat mirip dengan sebuah form yang menggunakan input satu baris
## Tag Select
### Select pada HTML vs React
pada HTML, `<select>` membuat sebuah daftar drop-down.
Di React, alih-alih menggunakan atribut selected, kita menggunakan atribut value di tag select. Hal ini lebih mudah karena hanya perlu diubah di satu tempat saja 
## Handle Banyak Input
### Atribut name
Ketika kita membutuhkan penanganan banyak elemen pada controlled component, kita dapat menambahkan atribut name pada setiap elemen dan membiarkan fungsi handler memilih apa yang harus dilakukan berdasarkan nilai dari event.target.name

# Uncontrolled Component
## Apa itu Uncontrolled Component
Uncontrolled component adalah alternatif lain dari controlled component, dimana data form akan ditangani oleh DOM-nya sendiri. Untuk menulis uncontrolled component, alih-alih menulis event handler untuk setiap pembaruan state, kita bisa menggunakan ref untuk mendapatkan nilai form dari DOM.
Karena hal ini, terkadang lebih mudah untuk mengintegrasikan kode React dan non-React jika menggunakan uncontrolled component. Ini berarti lebih sedikit kode jika kita menginginkan solusi cepat walau tak rapi. Selain itu pada umumnya kita harus menggunakan controlled component.
## Nilai Default
### Atribut Default Value
pada lifecycle rendering React, atribut value pada elemen form akan menimpa nilai pada DOM. Dengan Uncontrolled component, sering kali kita ingin React dapat menentukan nilai awal tetapi pembaruan berikutnya dilakukan secara uncontrolled. Untuk menangani kasus ini, kita bisa menggunakan atribut defaultValue alih-alih menggunakan value.
## Tag File Input
pada HTML, sebuah `<input type="file"/>` memungkinkan pengguna untuk memilih satu atau beberapa file dari media penyimpanan mereka untuk diunggah ke server atau dimanipulasi dengan JavaScript lewat File API.
Dalam React, sebuah `<input type="file"/>` merupakan uncontrolled component karena nilainya hanya bisa disetel oleh pengguna, bukan oleh kode program.

# Uncontrolled vs Controlled Component

# Basic Validation
## Kenapa Perlu Validasi
### Pada dasarnya, ada 3 alasan mengapa validasi form diperlukan :
- Mencari input data yang benar dan sesuai format
- Melindungi akun pengguna
- Melindungi sistem/aplikasi
## Tipe Validasi Data Formulir
### Client-side validation
- Built-in form validation. Contoh : required, minlength, maxlength, min, max, type, dan pattern
- Menggunakan javascript. Contoh : onChange, onSubmit
### Server-side validation