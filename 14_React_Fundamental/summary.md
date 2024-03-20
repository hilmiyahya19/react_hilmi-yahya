# Materi – JSX
## Apa itu JSX ?
- Singkatan dari Javascript XML
- Ekstensi pada javascript
## Kenapa menggunakan JSX ?
- JSX dibuatkan berdasarkan fakta kalau logika rendering sangat terikat dengan logic UI
- Separation of Technology -> Separation of Concerns
## JSX vs React.createElement
- Kita tidak harus menggunakan JSX, tapi JSX memudahkan kita menulis aplikasi React
- Syntatic Sugar dari fungsi 
React.createElement(component, prop, ...children)
## Spesifikasi jenis Element React
- Kapitalisasi untuk komponen react
- huruf kecil (lowercase) untuk komponen bawaan
## Menaruh expression pada JSX
- Kita dapat menaruh ekspresi JS yang valid pada JSX dengan menggunakan kurung kurawal  
## JSX adalah expression
- Setelah dikompilasi, Ekspresi JSX akan menjadi panggilan fungsi JavaScript biasa dan menjadi objek JavaScript
## Menentukan atribut dengan JSX
- Tanda kutip untuk menentukan string literal
- Kurung kurawal untuk menyematkan ekspresi JavaScript
- React DOM menggunakan CamelCase sebagai konvensi penamaan
## Menspesifikasikan Elemen Anak dengan JSX
- Jika tag bersifat kosong (tidak memiliki elemen anak), kita bisa saja menutupnya secara langsung dengan />
- Tag JSX dimungkinkan untuk memiliki elemen anak

# Materi - React Components
## Apa itu component ?
Komponen React adalah bagian kode yang dapat digunakan kembali yang digunakan untuk menentukan tampilan, behavior, dan state sebagian UI

# Materi - Component Composite
## Apa itu props ?
- Singkatan dari properties, membuat kita dapat memberikan argumen / data pada component
- Props membantu untuk membuat komponen menjadi lebih dinamis
- Props dioper ke component sama seperti memberikan atribut pada tag HTML
- Props pada component adalah read-only dan tidak dapat diubah
## Komposisi komponen
- Kontainmen
- Spesialisasi

# Materi - React Lifecycle
## Lifecycle method yang umum
- render()
- componentDidMount()
- componentDidUpdate()
- componentWillUnmount()
## render()
- Fungsi yang paling sering dipakai
- Required pada class component
- Pure function. Tidak boleh ada setState()
## componentDidMount()
- Dipanggil ketika ccomponent sudah di render untuk pertama kali
- Temapt yang tepa untuk pemanggilan API
- Boleh ada setState()
## componentDidUpdate()
- Dipanggil ketika terjadi update (props atau state berubah)
## componentWillUnmount()
- Dipanggil ketika component akan dihancurkan 
- Cocok untuk clean up actions
## Lifecycle method yang lainnya
- shouldComponentUpdate()
- static getDrivedStateFromProps()
- getSnapshotBeforeUpdate()

# Materi - Condition and list
## Render Bersyarat
Pada React, kita dapat membuat komponen berbeda yang mencakup perilaku yang dibutuhkan. Lalu, kita dapat me-render hanya beberapa bagian saja, berdasarkan state dari aplikasi anda.
- Menggunakan if
- Inline if dengan operator &&
- Inline if-else dengan ternary conditional operator 
- Mencegah komponen untuk rendering
## Render List
Kita dapat membangun koleksi dari beberapa elemen dan menyertakannya dalam JSX menggunakan tanda kurung kurawal{}
## Key
Key membantu React  untuk mengidentifikasi item mana yang telah diubah, ditambahkan, atau dihilangkan

# Materi - Directory structure
## Struktur Direktori
React tidak memiliki pendapat (unopinionated) tentang bagaimana cara memasukkan file ke folder
- Pengelompokan berdasarkan fitur atau rute
- Pengelompokan berdasarkan jenis file
- Hindari terlalu banyak nesting
- Jangan terlalu memikirkannya

# Materi - Styling Inline
- Classes dan CSS
- Atribut style
- Modul CSS


