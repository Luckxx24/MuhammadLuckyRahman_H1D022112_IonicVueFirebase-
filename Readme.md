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
