# Global State Introduction
## Redux
Kapan saat yang tepat untuk menggunakan Redux :
- Banyak state yang perlu ditaruh di banyak tempat
- State pada app sering berubah
- Logic untuk mengubah state kompleks
- Ukuran codebase yang sedang-besar, dan dikerjakan oleh banyak orang
- Perlu untuk mengetahui bagaimana state diupdate seiring dengan waktu
## Redux Libraries dan Tools
- React-Redux
- Redux Toolkit
- Redux DevTools Extension
## Komponen Penting di Redux
- Actions 
- Reducer
- Store
### Action
Digunakan untuk memberikan informasi dari aplikasi ke store
### Reducer
Pure JavaScript functions yang mengambil state aplikasi saat ini dan object action lalu mengembalikan state aplikasi terbaru
### Store
Objek sentral yang menyimpan state pada aplikasi
## Memakai dan mengubah state 
- Hooks
- Connect
## Rangkuman 
- Redux adalah library untuk manajemen state global 
- Redux menggunakan struktur "one-way data flow"
- Redux menggunakan beberapa tipe code

# Redux Thunk
## Apa itu thunk?
Thunk Middleware untuk redux yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action
## Kenapa perlu Redux Thunk
- Untuk menghandle side effect logic yang kompleks
- Untuk logic async seperti request data

# Persisted State
Menyimpan state ke storage