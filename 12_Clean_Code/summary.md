# Apa itu "Clean Code" ?
Clean Code adalah istilah untuk kode yang mudah dibaca, difahami, dan diubah oleh programmer.

# Kenapa "Clean Code" ?
- Work Collaboration
- Feature Development
- Faster Development

# Karakteristik "Clean Code"
- Mudah difahami
- Mudah dieja dan dicari
- Singkat namun mendeskripsikan konteks
- Konsisten
- Hindari penambahan konteks yang tidak perlu 
- Komentar
- Good Function 
- Gunakan konvensi
- Formatting

# "Clean Code" Principle 
## KISS (Keep It So Simple)
Hindari membuat fungsi yang dibuat untuk melakukan A, sekaligus memodifikasi B, mengecek fungsi C, dst.
## DRY (Don't Repeat Yourself)
Duplikasi code terjadi karena sering copy paste. Untuk menghindari duplikasi code buatlah fungsi yang dapat digunakan secara berulang-ulang.

# Refactoring
Refactoring adalah proses restrukturisasi kode yang dibuat, dengan cara mengubah struktur internal tanpa mengubah perilaku eksternal. Prinsip KISS dan DRY bisa dicapai dengan cara refactor.
## Teknik Refactoring
- Membuat sebuah abstraksi
- Memecah kode dengan fungsi/class
- Perbaiki penamaan dan lokasi kode
- Deteksi kode yang memiliki duplikasi