# Praktikum 5: JavaScript Dasar dan Manipulasi HTML - Lab5Web

Praktikum mata kuliah **Pemrograman Web** memahami dasar JavaScript, meliputi variabel, tipe data, operator, percabangan, perulangan, function, output (console, alert, prompt), manipulasi DOM, form, dan validasi input.

## Identitas Mahasiswa
### Nama : Varel Nico Ramadhan
### NIM : 312510156
### Kelas : I251B  
### Mata Kuliah : Pemrograman Web


## 1. Langkah-Langkah Praktikum & Implementasi

### Langkah 1: Menampilkan Output
Membuat `index.html` yang terhubung ke `script.js`, lalu mengubah isi elemen `#pesan` menjadi "Hello World" dengan `textContent` dan mencetaknya ke Console dengan `console.log()`.

<img width="1920" height="1080" alt="code1" src="https://github.com/user-attachments/assets/0cb28940-8c3a-4ada-8362-63f8febce211" />
<img width="1920" height="1080" alt="code1_2" src="https://github.com/user-attachments/assets/f892d763-40b1-439c-aa31-530d799d518e" />
<img width="1920" height="1080" alt="hasil1" src="https://github.com/user-attachments/assets/8fe3dcec-5277-431d-9380-2182a2b56664" />


### Langkah 2: Alert dan Prompt
Meminta nama lewat `prompt()`, lalu menampilkan sapaan dengan `alert()` dan mengubah teks halaman. Jika input kosong atau Cancel, program menampilkan "Nama belum diisi."

<img width="1920" height="1080" alt="code2" src="https://github.com/user-attachments/assets/b17c40c6-3b64-454e-a62a-8f9930912a0d" />
<img width="1920" height="1080" alt="hasil2" src="https://github.com/user-attachments/assets/8dd0163b-205d-4d25-80eb-e1c355f28e0a" />

### Langkah 3: Function dan Operasi Aritmetika
Membuat function `operasiDasar(a, b)` yang mencetak hasil penjumlahan, pengurangan, perkalian, pembagian, dan modulus ke Console.

<img width="1920" height="1080" alt="Screenshot (361)" src="https://github.com/user-attachments/assets/0ca9815a-da4f-4e30-b5b5-6643fe7e136e" />
<img width="1920" height="1080" alt="Screenshot (362)" src="https://github.com/user-attachments/assets/c1bb68a2-46cf-43d9-98c8-9af63a2d93df" />

### Langkah 4: Seleksi Kondisi if-else
Meminta nilai lewat `prompt()`, mengonversinya ke `Number`, lalu menentukan "Lulus" (nilai ≥ 60), "Belum lulus", atau "Input nilai tidak valid".

<img width="1920" height="1080" alt="code4" src="https://github.com/user-attachments/assets/db1249e8-5351-4a53-8910-66772b40ae63" />
<img width="1920" height="1080" alt="hasil4" src="https://github.com/user-attachments/assets/a566a3ca-9593-4cb0-b423-41333bd4eafb" />
<img width="1920" height="1080" alt="hasil4_2" src="https://github.com/user-attachments/assets/91a14560-4c0d-4826-820c-e8bc993cbaf6" />


### Langkah 5: Seleksi Kondisi switch
Meminta angka 1-5 lalu menampilkan nama bilangannya dengan `switch`. Nilai di luar 1-5 ditangani oleh `default`.

<img width="1920" height="1080" alt="code5" src="https://github.com/user-attachments/assets/40caf375-2d93-4722-8832-780b8a43c22d" />
<img width="1920" height="1080" alt="hasil5" src="https://github.com/user-attachments/assets/3d263acf-c1b8-46aa-aaa5-df3d70e08552" />
<img width="1920" height="1080" alt="hasil5_2" src="https://github.com/user-attachments/assets/09f20efc-3a30-47ad-b9c7-e6f2ffdaed4f" />


### Langkah 6: Form Bilangan Genap atau Ganjil
Menambahkan input angka dan tombol "Periksa". Function `cekBilangan()` membaca nilai input lalu menampilkan "Bilangan genap", "Bilangan ganjil", atau pesan error bila input tidak valid.

<img width="1920" height="1080" alt="code6" src="https://github.com/user-attachments/assets/aa4ff03e-85d3-4768-8dcb-ded200f3f789" />
<img width="1920" height="1080" alt="code6_2" src="https://github.com/user-attachments/assets/b2312cad-6407-4043-aaab-127a79bd79ed" />
<img width="1920" height="1080" alt="hasil6" src="https://github.com/user-attachments/assets/132c2fc4-2893-4fc1-afef-954b8ee33935" />


### Langkah 7: Mengubah Warna Halaman
Membuat tiga tombol (hijau, putih, kuning) yang memanggil satu function `ubahWarnaLatar(warna)` untuk mengubah `backgroundColor` pada `body`.

<img width="1920" height="1080" alt="code7" src="https://github.com/user-attachments/assets/d47e9cc0-b431-4a1f-8322-3d4e33b608bd" />
<img width="1920" height="1080" alt="code7_2" src="https://github.com/user-attachments/assets/526bb938-dd34-4a01-941c-6c9d2a848c8b" />
<img width="1920" height="1080" alt="hasil7_2" src="https://github.com/user-attachments/assets/1885ece1-efb6-43b6-b98c-f8967f74a749" />
<img width="1920" height="1080" alt="hasil7" src="https://github.com/user-attachments/assets/cd3095da-794d-43e8-805f-0580524b5ce1" />
<img width="1920" height="1080" alt="hasil7_3" src="https://github.com/user-attachments/assets/efefbb44-44ba-4897-9df3-3c9471c8e1ce" />


### Langkah 8: DOM dan Checkbox Menu Makanan
Membuat daftar menu dengan checkbox. Event listener `change` memanggil `hitungTotal()` sehingga total harga berubah otomatis saat pilihan dicentang atau dilepas.

<img width="1920" height="1080" alt="code8" src="https://github.com/user-attachments/assets/0480faf0-f83e-4111-ba07-46cd7ad9d4bf" />
<img width="1920" height="1080" alt="code8_2" src="https://github.com/user-attachments/assets/18bba6b9-67b8-4ac5-9ec1-390d7280095d" />
<img width="1920" height="1080" alt="hasil8" src="https://github.com/user-attachments/assets/54d68bc5-9089-4307-a17e-7ecf00417020" />


## 2. Mini Project: Kalkulator Nilai Mahasiswa

Membuat form input Nilai Tugas, UTS, dan UAS. Nilai akhir dihitung dengan bobot **30% tugas + 30% UTS + 40% UAS**, lalu predikat (A-E) dan status kelulusan (Lulus jika ≥ 60) ditentukan. Perhitungan dipisahkan dalam function `hitungNilaiAkhir()` dan `tentukanPredikat()`, sedangkan `hitungNilai()` mengurus validasi dan tampilan.

<img width="1920" height="1080" alt="code9_2" src="https://github.com/user-attachments/assets/7b215c22-ebb3-4e53-ae26-7b58f91b1523" />
<img width="1920" height="1080" alt="code9" src="https://github.com/user-attachments/assets/bee5c986-8c5c-4dd3-aa9b-9ebbf917fd3c" />
<img width="1920" height="1080" alt="code9_3" src="https://github.com/user-attachments/assets/2fcc3013-457c-4cf2-8b43-6354245f8761" />
<img width="1920" height="1080" alt="hasil9" src="https://github.com/user-attachments/assets/bad0f0ec-25e7-4c68-8861-8b2b59592cd7" />

## 4. Pertanyaan dan Tugas

1. **Jelaskan perbedaan `console.log()`, `alert()`, `prompt()`, dan `textContent`/`innerHTML`.**
   * *Jawaban:*
     * `console.log()` mencetak pesan ke Console browser. Biasanya dipakai untuk debugging dan tidak terlihat oleh pengguna biasa.
     * `alert()` menampilkan kotak dialog berisi pesan dan menghentikan eksekusi sampai tombol OK ditekan.
     * `prompt()` menampilkan kotak dialog dengan kolom input. Hasilnya berupa string, atau `null` jika Cancel ditekan.
     * `textContent` mengubah isi elemen sebagai teks biasa, sedangkan `innerHTML` mengubah isi elemen dan menafsirkan teks yang berisi tag HTML sebagai elemen.

2. **Apa perbedaan `let` dan `const`? Berikan contoh.**
   * *Jawaban:* `let` untuk variabel yang nilainya boleh diubah, sedangkan `const` untuk variabel yang tidak boleh ditetapkan ulang setelah diberi nilai.
     ```js
     let umur = 20;
     umur = 21;            // boleh

     const nama = "Rani";
     nama = "Dina";        // error: Assignment to constant variable
     ```

3. **Apa perbedaan operator `==` dan `===`?**
   * *Jawaban:* `==` membandingkan nilai dengan konversi tipe otomatis, sedangkan `===` membandingkan nilai **dan** tipe data tanpa konversi. Karena itu `===` lebih aman dan lebih direkomendasikan.
     ```js
     console.log(5 == "5");   // true  (string dikonversi ke number)
     console.log(5 === "5");  // false (tipe berbeda)
     ```

4. **Jelaskan fungsi `if-else` dan `switch`. Kapan masing-masing dapat digunakan?**
   * *Jawaban:* Keduanya adalah percabangan untuk memilih blok kode yang dijalankan berdasarkan kondisi.
     * `if-else` menguji kondisi logis, termasuk rentang nilai dan kondisi gabungan (`&&`, `||`). Cocok untuk contoh seperti `nilai >= 60`.
     * `switch` membandingkan satu nilai dengan beberapa kemungkinan nilai tetap lewat `case`. Cocok untuk pilihan diskret seperti menu angka 1-5. `break` mencegah eksekusi berlanjut ke case berikutnya.

5. **Apa fungsi parameter dan `return` dalam function?**
   * *Jawaban:* Parameter menerima data masukan ke dalam function agar function bisa dipakai dengan nilai berbeda. `return` mengembalikan hasil proses ke pemanggilnya dan mengakhiri eksekusi function.
     ```js
     function hitungLuas(panjang, lebar) {   // panjang & lebar = parameter
       return panjang * lebar;               // mengembalikan hasil
     }
     console.log(hitungLuas(8, 4));          // 32
     ```

6. **Bagaimana JavaScript memilih elemen HTML menggunakan `document.getElementById()`?**
   * *Jawaban:* Method ini mencari elemen di dokumen yang atribut `id`-nya sama dengan string yang diberikan, lalu mengembalikan elemen tersebut (atau `null` jika tidak ada). Karena `id` bersifat unik, hanya satu elemen yang dikembalikan, dan elemen itu bisa diubah kontennya, nilainya, atau gayanya.
     ```js
     const elemen = document.getElementById("pesan");
     elemen.textContent = "Halo, JavaScript!";
     ```

7. **Buat script untuk memvalidasi form agar nama tidak kosong dan nilai berada pada rentang 0-100.**
   * *Jawaban:* Dibuat pada file `tugas7.html`. Function `validasiForm()` memeriksa nama kosong (`trim()`), nilai kosong atau bukan angka, dan nilai di luar 0-100, lalu hasilnya ditampilkan pada halaman.  

    <img src="screenshot/kode18.png">   
    <img src="screenshot/kode18lanjutan.png">   
    <img src="screenshot/hasil18.png">   
    <img src="screenshot/hasil18lanjutan.png">   
    <img src="screenshot/hasil18lanjutan1.png">      
    <img src="screenshot/hasil18lanjutan2.png">      
    <img src="screenshot/hasil18lanjutan3.png">      
    <img src="screenshot/hasil18lanjutan4.png">      
    <img src="screenshot/hasil18lanjutan5.png">      
    <img src="screenshot/hasil18lanjutan6.png">      
    <img src="screenshot/hasil18lanjutan7.png">      
    <img src="screenshot/hasil18lanjutan8.png">      
    
    
