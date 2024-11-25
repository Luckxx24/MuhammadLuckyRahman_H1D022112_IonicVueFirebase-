Alur Kerja Autentikasi Login

1.Konfigurasi Firebase (File src/utils/firebase.ts)

-Anda menginisialisasi Firebase menggunakan konfigurasi yang diberikan (firebaseConfig) dan mendapatkan instance autentikasi (auth) serta penyedia autentikasi Google (googleProvider).
-Konfigurasi ini diperlukan untuk menghubungkan aplikasi dengan layanan Firebase, termasuk autentikasi.

2.Store Pinia untuk Autentikasi (File src/stores/auth.ts)

-Variabel user: Variabel reaktif untuk menyimpan informasi pengguna saat login.
-Computed isAuth: Mengecek apakah pengguna sudah login (true) atau belum (false).

-Fungsi loginWithGoogle:

Menginisialisasi Google Auth menggunakan plugin @codetrix-studio/capacitor-google-auth untuk login via Google.
Mengambil idToken dari akun Google pengguna setelah login berhasil.
Membuat kredensial Google menggunakan GoogleAuthProvider.credential(idToken).
Melakukan login ke Firebase menggunakan signInWithCredential.
Setelah login sukses, data pengguna disimpan dalam variabel user dan diarahkan ke halaman /home.
Jika terjadi error, aplikasi menampilkan pesan kesalahan melalui dialog alertController.

-Fungsi logout:

Logout dari Firebase dan Google Auth, lalu menghapus data pengguna dari variabel user dan diarahkan ke halaman /login.
onAuthStateChanged: Fungsi bawaan Firebase yang memonitor status login pengguna (logged in/logged out).

3.Komponen UI (File Vue Template)

<ion-button>: Tombol login dengan label "Sign In with Google" yang memanggil fungsi `loginWithGoogle

hasil

![Screenshot (511)](https://github.com/user-attachments/assets/f94502af-24bf-420a-a511-9df067992e37)

![Screenshot (512)](https://github.com/user-attachments/assets/46491f34-e260-42ed-8484-6351cc4fe04b)

![Screenshot (513)](https://github.com/user-attachments/assets/f19cee98-d385-4507-aabf-2d85f19db92e)

![Screenshot (514)](https://github.com/user-attachments/assets/9064afa8-c3bf-43cf-b81b-ebbcb6131936)

