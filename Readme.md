Cara Kerja Kode
1.Komponen Utama:

-IonItemSliding: Menyediakan mekanisme geser untuk melihat opsi.

-handleEdit(todo):

Menutup item sliding.
Mengatur editingId sesuai dengan ID item yang diedit.
Mengatur todo dengan data tugas yang dipilih.
Membuka modal input (InputModal).

2.Modal Input (InputModal):

Modal ini menerima properti isOpen, editingId, dan todo.
Ketika pengguna menekan tombol simpan, modal memanggil fungsi handleSubmit(todo).

3.handleSubmit:

Jika editingId ada, itu berarti pengguna sedang mengedit data tugas.
Fungsi ini memperbarui tugas di Firestore menggunakan firestoreService.updateTodo().

4.Firestore Service:

Komunikasi dengan Firestore dilakukan menggunakan fungsi di dalam firestoreService, seperti addTodo, updateTodo, dan deleteTodo.

UI Pembaruan:

Setelah data diperbarui di Firestore, fungsi loadTodos akan memuat ulang daftar tugas untuk memastikan UI sinkron dengan data terbaru.

hasil

![Screenshot (511)](https://github.com/user-attachments/assets/f94502af-24bf-420a-a511-9df067992e37)

![Screenshot (512)](https://github.com/user-attachments/assets/46491f34-e260-42ed-8484-6351cc4fe04b)

![Screenshot (513)](https://github.com/user-attachments/assets/f19cee98-d385-4507-aabf-2d85f19db92e)

![Screenshot (514)](https://github.com/user-attachments/assets/9064afa8-c3bf-43cf-b81b-ebbcb6131936)

