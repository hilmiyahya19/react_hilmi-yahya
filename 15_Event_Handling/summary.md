# Apa itu Handling Event ?

## Handling Event adalah suatu metode untuk menangani sebuah event/aksi yang diberikan pengguna kepada suatu komponen
## Event adalah suatu peristiwa yang dipicu oleh pengguna pada suatu komponen, misalnya tombol ditekan

## Beberapa Contoh list Event
- Clipboard Events (Promise terpenuhi)
- Form Events (onChange, onSubmit)
- Mouse Events (onClick, onDoubleClick, onMouseOver)
- Generic Events (onError, onLoad)

# Stateful & Stateless Components

## Apa itu Stateful component?
Stateful component adalah memiliki state. Component ini dibuat dengan class. Kelebihan dari class component adalah memiliki lifecycle
## Apa itu Stateless Component?
Stateless component adalah tidak memiliki state hanya prop. Umumnya component ini dibuat dengan function karena codenya lebih ringkas

## Komponen stateful dan stateless memiliki banyak nama berbeda
Mereka juga dikenal sebagai :
- Smart component & Dump component
- Container component & Presentational component

## Perbedaan dari komponen stateful dan komponen stateless
### Stateless Component
- tidak tahu tentang aplikasi
- tidak melakukan data fetching (pengambilan data)
- tujuan utamanya adalah visualisasi
- dapat digunakan kembali
- hanya berkomunikasi dengan induk langsungnya
### Stateful Component
- mengerti tentang aplikasi
- melakukan data fetching (pengambilan data)
- berinteraksi dengan aplikasi
- tidak dapat digunakan kembali
- meneruskan status dan data ke anak-anaknya