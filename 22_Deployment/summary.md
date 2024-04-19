# Build React App
## Kenapa Perlu Build? 
Secara default, React mengandung banyak pesan peringatan. Peringatan-peringatan ini sangat berguna dalam pengembangan aplikasi. Namun, pesan-pesan ini membuat React menjadi lebih besar dan lambat. Oleh karenanya kita harus menggunakan versi produksi ketika men-deploy aplikasi. 
Tujuan melakukan build agar aplikasi kita menjadi versi production, sehingga performanya lebih ringan cepat.
## Build React App
Karena proyek kita dibangun menggunakan Create React App,
```bash
npm run build
```
Ini akan membuat versi produksi untuk aplikasi kita di dalam folder build/. Ini hanya diperlukan sebelum men-deploy ke produksi. Untuk pengembangan normal, gunakan npm start.
## Run Optimized App
Untuk menjalankan aplikasi yang optimal di lokal komputer kita,
kita bisa menggunakan serve
### install serve
```bash
npm install -g serve
```
### jalankan serve di lokal 
```bash
serve -s build
```
## Untuk lebih lengkapnya
Kunjungi https://cra.link/deployment

# Deployment
Deploy with vercel (beginner)
## Introduction to vercel
### Get Started with Vercel 
Vercel is an end-to-end platform for developers, that allows you to create and deploy your web application.
- Deployment
- CI/CD
- Monitoring your project
- Custom domains
### Sign up
https://vercel.com/signup
### Teams and Accounts
Vercel is an end-to-end platform for developers, that allows you to create and deploy your web application.
- Personal Accounts
- Team Account
## Deploy to Vercel