# Apa itu Router?
Router merupakan modul dalam react yang berfungsi untuk melakukan proses navigasi pada SPA (Single Page Application)
## Apa itu Multi Page Application?
Multi Page Application (MPA) juga disebut dengan tradisional web app adalah jenis aplikasi website dimana perlu memuat ulang seluruh halaman web setiap kali membuat permintaan baru
## Apa itu Single Page Application?
Single Page Application (SPA) adalah salah satu jenis apliaksi website dimana hanya ada 1 halaman yang menangani semua aktivitas yang terjadi dalam aplikasi tersebut

# React Router
## BrowserRouter
BrowserRouter digunakan sebagai router yang menggunakan API history dari HTML5, sehingga dapat menggunakan location untuk sinkronkan UI dengan url. Di dalam object location sendiri merepresentasikan dimana lokasi aplikasi sekarang
## Route
Route digunakan sebagai pengarah jalan nya lalu lintas suatu aplikasi web
## Attribute path
Attribute path merupakan url pada browser pada proses routing
## Attribute component
Attribute component merupakan suatu komponen yang akan ditampilkan kepada user saat mengakses path yang didefinisikan
## Switch
Switch digunakan untuk membungkus kumpulan beberapa component Route
## Exact
Exact bertugas untuk memastikan route hanya me-render component yang memiliki path yang cocok, jika tidak ada yang cocok, maka route yang akan di-render yaitu route terakhir dengan component Notfound
## Link
Link digunakan untuk berpindah antar halaman, property to tersebut merujuk pada path di route yang akan dituju

# Apa itu URL Parameter?
Parameter URL adalah suatu parameter yang nilainya ditetapkan secara dinamis di URL halaman

# Hook Routing React
## useHistory
useHistory memberi kita akses ke instance riwayat yang dapat anda gunakan untuk bernavigasi
## useParams
useParams mengembalikan objek pasangan kunci/nilai parameter URL. Gunakan untuk mengakses match.params dari <Route> saat ini
## useRouteMatch
useRouteMatch mencoba mencocokkan URL saat ini dengan cara yang sama seperti <Route>. Ini sebagian besar berguna untuk mendapatkan akses ke data kecocokan tanpa benar-benar merender <Route>

# React Router Version 6
## New Update
Terdapat beberapa fitur baru di React 6, berikut diantaranya :
- Penanganan routing berbasis hook
- Penanganan error lebih baik
- Pengelolaan routing yang lebih terpusat
- Perubahan pada konsep penggunaan URL
## Komponen Route secara Statis
kita menggunakan komponen Route hanya untuk mendefinisikan dua rute, yaitu '/home' dan '/about'. Ketika path sesuai dengan salah satu rute, komponen terkait(Home atau About) akan ditampilkan di dalam aplikasi
## Komponen Route secara Dinamis
kita menggunakan komponen Route hanya untuk mendefinisikan dua rute, yaitu '/home' dan '/about'. Ketika path sesuai dengan salah satu rute, komponen terkait(Home atau About) akan ditampilkan di dalam aplikasi
## Penggunaan Parameter dalam Route
Dengan menggunakan parameter, kita dapat membuat rute yang dapat menyesuaikan diri dengan nilai-nilai yang berbeda dan mengakses nilai-nilai tersebut di dalam komponen terkait
## Penggunaan Nestes Route
Dengan menggunakan nested route, kita dapat membuat tampilan yang terstruktur secara hierarkis dalam aplikasi React.
## Penggunaan Link
Dengan menggunakan Link kita dapat membuat pengguna melakukan navigasi ke halaman yang lain dengan melakukan click atau tap