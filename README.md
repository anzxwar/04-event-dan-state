|  | Pemrograman Berbasis Framework 2024 |
|--|--|
| NIM |  2341728026|
| Nama |  Anwar Alif Katresna |
| Kelas | TI - 3A |


## Pratikum 1  

![Screenshot](assets/P_1.png)
![Screenshot](assets/P_12.png)

## Pratikum 2

![Screenshot](assets/P_2.png)

Tampilan berubah dan isi dari pesan alert berubah sesuai yang ditentukan di parameter.   

## Pratikum 3
Ketika Tombol-1 ditekan  sekali alert akan menampilkan pesan "Child Element : Tombol-1" dan pesan "Parent Element : Div".  
![Screenshot](assets/P_3.png)
![Screenshot](assets/P_3s.png)

Dan ketika di klik di Tombol-2 alert akan menampilkan pesan "Child Element : Tombol-2" dan pesan "Parent Element : Div".  
![Screenshot](assets/P_32.png)
![Screenshot](assets/P_3s.png)   

Dan ketika kita menambahkan event stop propagation, alert hanya akan menampilkan pesan child element/komponen.   

## Pratikum 4  

Ketika tombol "artikel selanjutnya" ditekan maka halaman page akan berubah ke artikel berikutnya sesuai dengan urutan index di articel.tsx.  

![Screenshot](assets/P_4.png)   
![Screenshot](assets/P_42.png)   

## Soal  
1. Jika kita menekan tombol "Artikel Selanjutnya" sebanyak 5x (atau melebihi halaman total artikel), apa yang akan terjadi?  
Jawab: Makan halaman page akan menampilkan error
![Screenshot](assets/S1.png)   
2. Modifikasilah gallery.tsx agar bisa meng-handle permasalahan tersebut.  
Jawab: Dengan menambahkan function totalPage dan statemen 'if' pada fuction handelClick dimana button hanya aktif jika index page kurang dari index -1 dari total index.  
![Screenshot](assets/S2.png)

3. Tambahkan tombol "Artikel Sebelumnya", untuk menampilkan artikel secara mundur.   
Jawab: 
![Screenshot](assets/S3.png)    


## Pratikum 5   

Ketika dijalankan pada browses muncul form seperti gambar berikut:  
![Screenshot](assets/P_5.png)  
Ketika Jawaban Salah:    
![Screenshot](assets/P_51.png)  
Ketika Jawaban Benar:   
![Screenshot](assets/P_52.png)  

>Langkah 2 ketika dijalankan:
![Screenshot](assets/P_53.png)  
## Soal  
1. Apa perbedaan dari fungsi Form_2 yang pertama dengan yang kedua?  
Jawab: Output yang dihasilkan sama, perbedaan terdapat pada statement dan variable yang ada. Pada Form_2 pertama menggunakan state fullName, sedangkan pada Form_2 kedua menggunakan Variable

2. Kenapa perlu menghapus state fullName? Apa keuntungannya?  
Jawab: Karena state fullName hanya merupakan gabungan string dari state firstName dan lastName. Hal ini membuat state redundan, dan bisa membuat kesalahan/bug pada aplikasi react/nextjs. Untuk itu, state fullName bisa dihapus dan digantikan variable biasa.

