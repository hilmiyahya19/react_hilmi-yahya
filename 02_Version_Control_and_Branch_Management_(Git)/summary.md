# Apa itu Versioning
mengatur versi dari source code program

# git
salah satu version control system populer yang digunakan para developer untuk mengembangkan software secara bersama-sama

# note 

mengetahui ada branch apa aja & mengetahui posisi branch saat ini : 
```bash
git branch --list
```

membuat branch baru : 
```bash
git branch nama_branch
```

push branch baru ke github : 
```bash
git push -u origin nama_branch
```

pindah branch : 
```bash
git checkout nama_branch
```

merge branch :

_misal kita mau merge branch dev ke branch main, 
kita harus berada di posisi branch main dulu_
```bash
git merge dev
```
_sync changes_

menghapus branch : 
```bash
git branch -d nama_branch
```

list remote branch : 
```bash
git branch -a
```
