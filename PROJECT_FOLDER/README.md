# Express Sequelize PostgreSQL (Backend Test)

Repository ini berisi implementasi backend menggunakan **Express**, **Sequelize**, dan **PostgreSQL**, lengkap dengan **unit tests** menggunakan **Jest** dan setup **Docker**.

---

## 🎯 Fitur Utama

- CRUD API dengan Express + Sequelize
- Testing unit di `tests/controllers/` menggunakan Jest
- Database migrations & seeding via Sequelize CLI
- Docker 🐳 & docker-compose untuk database dan aplikasi

---

## ⚙️ Prasyarat

Pastikan kamu sudah menginstall:
- Node.js v20+ (atau sesuai `engines` di `package.json`)
- Docker & docker-compose (opsional, untuk menjalankan secara kontainer)
- PostgreSQL (jika tidak menggunakan Docker)

---

## 🚀 Instalasi Lokal

1. Clone repo:
   ```bash
   git clone https://github.com/ufaiz50/expres-sequelize-postgree.git
   cd expres-sequelize-postgree
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Buat file `.env` berdasarkan `.sequelizerc` / environment variabel DB:
   ```bash
   DB_HOST=postgres
   DB_PORT=5432
   DB_NAME=your_db
   DB_USER=your_user
   DB_PASS=your_pass
   ```

4. Jalankan migration & seeding (kamu bisa tambahkan di `scripts`):
   ```bash
   npm run migrate
   npm run seede
   ```

---

## 🐳 Menjalankan dengan Docker

Jalankan database dan aplikasi bersamaan:
```bash
docker-compose up -d
```
Setelah itu, akses API di `http://localhost:3000`.

---

## 🔧 Menjalankan Aplikasi

- Mode development:
  ```bash
  npm run dev
  ```
- Mode production:
  ```bash
  npm start
  ```

---

## 🧪 Testing

Unit tests menggunakan Jest & file konfigurasi `jest.config.ts`. Jalankan dengan:
```bash
npm test
```
Untuk melihat coverage:
```bash
npm run test:coverage
```

---

## 🛠️ Struktur Direktori

```
├── src/                   # Kode aplikasi utama
│   ├── controllers/       # Logic request handling
│   ├── models/            # Definisi model Sequelize
│   ├── routes/            # Route definitions
│   └── index.ts           # Entry point
├── tests/controllers/     # Unit tests untuk controllers
├── Dockerfile
├── docker-compose.yml
├── jest.config.ts
└── tsconfig.json
```

---

## 📈 Endpoint API (Contoh)

| Method | Endpoint         | Deskripsi                     |
|--------|------------------|-------------------------------|
| GET    | `/employees`                   | Ambil semua data              |
| GET    | `/employees/:id`               | Ambil data per ID             |
| POST   | `/employees`                   | Tambah data baru              |
| PUT    | `/employees/:id`               | Update data sesuai ID         |
| DELETE | `/employees/:id`               | Hapus data sesuai ID          |
| GET    | `/employee-profiles`           | Ambil semua data              |
| GET    | `/employee-profiles/:id`       | Ambil data per ID             |
| POST   | `/employee-profiles`           | Tambah data baru              |
| PUT    | `/employee-profiles/:id`       | Update data sesuai ID         |
| DELETE | `/employee-profiles/:id`       | Hapus data sesuai ID          |
| GET    | `/employee-families`           | Ambil semua data              |
| GET    | `/employee-families/:id`       | Ambil data per ID             |
| POST   | `/employee-families`           | Tambah data baru              |
| PUT    | `/employee-families/:id`       | Update data sesuai ID         |
| DELETE | `/employee-families/:id`       | Hapus data sesuai ID          |
| GET    | `/educations`                  | Ambil semua data              |
| GET    | `/educations/:id`              | Ambil data per ID             |
| POST   | `/educations`                  | Tambah data baru              |
| PUT    | `/educations/:id`              | Update data sesuai ID         |
| DELETE | `/educations/:id`              | Hapus data sesuai ID          |
 
---

## 📦 Deployment

Untuk produksi, pastikan:
- Semua migration & seeding sudah dijalankan
- File `.env` disediakan di environmen server
- Gunakan `npm start` atau proses manager (pm2, supervior, dsb.)

---

## 📋 License & Lainnya

Ini adalah proyek testing backend. Silakan gunakan untuk referensi teknis atau assessment.

---

## 🧾 Contributors

- **Ufaiz** – _Initial work_ – [ufaiz50](https://github.com/ufaiz50)

---
