# Basic Testing
## Apa itu Testing
Testing adalah proses memverifikasi bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi. 
Test assertion ini adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode kita.
## Manfaat Testing
Walaupun menambahkan waktu dan code dalam membuat testing, testing memiliki manfaat sebagai berikut :
- Ketika aplikasi kita mempunyai coverage yang baik (mayoritas codebase tercover oleh test), kita akan merasa percaya diri jika harus mengubah suatu bagian pada aplikasi kita. Saat kita mengubah bagian tersebut, dan ada bagian yang lain menjadi broken, kita akan segara mengetahuinya.
- Mengurangi bug pada aplikasi. Walaupun testing tidak menjamin aplikasi kita bebas bug, tetapi kita bisa mencegah beberapa hal yang berpotensi berpotensi menjadi bug.
## Kategori Testing
Secara Umum, cara mengetes di React terbagi menjadi dua kategori :
1. Rendering component trees di dalam environment tes yang sudah disederhanakan dan ditegaskan pada keluarannya.
2. Menjalankan aplikasi lengkap di dalam environment peramban (browser) asli. Ini dikenal sebagai tes "end-to-end".
## Pertimbangan Memilih Perkakas
### Kecepatan iterasi vs environment yang realistis
Beberapa kakas menawarkan feedback loop yang sangat cepat antara membuat sebuah perubahan dan melihat hasilnya, tetapi tidak memodelkan sifat dari peramban dengan tepat. Tools lain mungkin menggunakan environment peramban yang asli, tetapi mengurangi kecepatan iterasi dan lebih flakier pada server integrasi berkelanjutan.
### Seberapa Banyak Mock
Dengan komponen, perbedaan antara tes "unit" dan tes "integrasi" bisa tidak sesuai. Jika kita mengetes sebuah form, haruskah tes yang dilakukan juga menguji tombol yang ada di dalamnya? Atau haruskah komponen memiliki rangkaian tes sendiri? Haruskah refactoring pada tombol merusak tes pada form?
Pertimbangan pemilihan perkakas untuk testing tentu saja dikembalikan kepada kebutuhan masing-masing.
## Rekomendasi Tools
### Jest
Test runner pada JavaScript yang memungkinkan Anda mengakses DOM melalui jsdom. Sementara jsdom hanyalah perkiraan cara kerja browser, seringkali cukup baik mengetes komponen pada React. Jest memberikan kecepatan iterasi yang bagus dikombinasikan dengan fitur-fitur yang powerful seperti mocking modules dan timers sehingga Anda dapat memiliki kontrol lebih pada kode yang dijalankan.
### React Testing Library
Merupakan seperangkat helpers yang memungkinkan kita mengetes komponen pada React tanpa bergantung pada detail implementasinya. Pendekatan ini membuat refactoring menjadi mudah dan juga mendorong kita untuk menerapkan best practices untuk aksesibilitas. Mungkin tidak memberikan cara untuk me-render secara “dangkal” pada sebuah komponen tanpa anak, test runner seperti Jest yang memungkinkan kita melakukan mocking.
## Install
Jika kita menginstall React menggunakan create-react-app, Jest (dan React Testing Library) akan secara default sudah terinstall. Tetapi jika kita, menggunakan custom React setup, kita perlu menginstall dan men set up Jest (dan React Testing Library).

# Create Basic Testing with RTL
## Rendering Komponen
### Render dan Debug
Fungsi render RTL akan merender file JSX apa pun yang dibutuhkan. Setelah itu, kita baru bisa memiliki akses ke komponen React yang akan kita test. Untuk meyakinkan bahwa file JSX sudah terender, kita bisa menggunakan fungsi debug RTL. Selalu gunakan fungsi debug RTL apabila kita tidak yakin seperti apa hasil dari fungsi render RTL. 
React Testing Library digunakan untuk berinteraksi dengan komponen kita seperti manusia. Itulah alasan kenapa kita melihat struktur HTML sebagai output dari fungsi render.
## Memilih Elemen
React Testing Library menawarkan berbagai fungsi untuk mendapatkan elemen. Element selanjutnya digunakan untuk assertions atau untuk interaksi pengguna. Kita dapat memilih elemen dengan fungsi object screen RTL. 
Salah satu contohnya ialah getByText untuk memilih teks dari elemen yang sudah dipilih.
## Kategori Testing
Contoh lain yang bisa digunakan.
- LabelText : getByLabelText : `<label for="search"/>`
- PlaceholderText : getByPlaceholderText : `<input placeholder="Search"/>`
- AltText : getByAltText : `<img alt="profile"/>`
- DisplayValue : getByDisplayValue : `<input value="JavaScript"/>`
## Handle Event
## Handle Asynchronous
### Untuk Kasus Apa ?
Ini digunakan ketika hendak mengetes fetch sebuah API. Pada kasus ini kita perlu membuat mock untuk axios (atau yang lain). Selanjutnya kita perlu membuat mock promise hasilnya ketika resolve atau reject. Ini dikembalikan lagi kepada skenario kita.

# Testing Custom Hook
## Library yang digunakan
Untuk mengetes custom hook, kita menggunakan React Hooks Testing Library. Dia akan memberikan kita alat alat untuk mengetes hooks tanpa merender satu komponen. 
```bash
npm install -D @testing-library/react-hooks
```
Dokumentasi React Hooks Testing Library
https://react-hooks-testing-library.com/
## Implementasi
- Custom Hook
- Testing Value
- Testing Callback
- Testing Re-render