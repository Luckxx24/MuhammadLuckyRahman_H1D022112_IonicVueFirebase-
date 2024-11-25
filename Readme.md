Cara Kerja Kode

1.Komponen Utama:

-IonItemSliding: Menyediakan mekanisme geser untuk melihat opsi.

-handleEdit(todo):
Menutup item sliding.
Mengatur editingId sesuai dengan ID item yang diedit.
Mengatur todo dengan data tugas yang dipilih.
Membuka modal input (InputModal).

2.Modal Input (InputModal):

-Modal ini menerima properti isOpen, editingId, dan todo.
-Ketika pengguna menekan tombol simpan, modal memanggil fungsi handleSubmit(todo).

3.handleSubmit:

-Jika editingId ada, itu berarti pengguna sedang mengedit data tugas.
-Fungsi ini memperbarui tugas di Firestore menggunakan firestoreService.updateTodo().

4.Firestore Service:

-Komunikasi dengan Firestore dilakukan menggunakan fungsi di dalam firestoreService, seperti addTodo, updateTodo, dan deleteTodo.

5.UI Pembaruan:

-Setelah data diperbarui di Firestore, fungsi loadTodos akan memuat ulang daftar tugas untuk memastikan UI sinkron dengan data terbaru.

hasil:

tampilan utama

![Screenshot (537)](https://github.com/user-attachments/assets/9d439cc1-0e88-4104-b25a-36386a4d448b)

menambahkan data

![Screenshot (538)](https://github.com/user-attachments/assets/3243153a-b05e-4cc9-b053-fbeac9b1a0d4)

mengedit data/mengchecklist data

![Screenshot (539)](https://github.com/user-attachments/assets/27915eaf-c7d0-4ded-8d09-6843c53308ef)

![Screenshot (540)](https://github.com/user-attachments/assets/bf3bc312-5636-4a63-9293-8027935f9d8a)

tampilan checklist

![Screenshot (541)](https://github.com/user-attachments/assets/a773e30b-1eee-40cd-9dab-09939b9c3d55)


