<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard Sederhana</title>
    <style>
        /* Reset dasar */
        body {
            margin: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f4f7f6;
            display: flex;
            height: 100vh;
        }

        /* --- Pengaturan Sidebar --- */
        .sidebar {
            width: 250px;
            background-color: #2c3e50;
            color: white;
            padding: 20px;
        }

        .sidebar p {
            padding: 12px;
            margin-bottom: 10px;
            background-color: #34495e;
            border-radius: 5px;
            cursor: pointer;
            transition: background 0.3s;
        }

        .sidebar p:hover {
            background-color: #1abc9c;
        }

        /* --- Pengaturan Konten Utama --- */
        .main-content {
            flex: 1; /* Mengisi sisa ruang di sebelah sidebar */
            display: flex;
            flex-direction: column;
        }

        /* Header / Bagian Atas */
        .header {
            background-color: #ffffff;
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }

        .header p {
            margin: 0;
            font-size: 24px;
            font-weight: bold;
            color: #333;
        }

        /* Area Kartu (Widgets) */
        .cards-container {
            display: flex;
            padding: 20px;
            gap: 20px; /* Jarak antar kartu */
        }

        /* Desain Kartu Individu */
        .card {
            background-color: white;
            flex: 1;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            text-align: center;
        }

        .card p.title {
            margin: 0 0 10px 0;
            color: #7f8c8d;
            font-size: 16px;
        }

        .card p.value {
            margin: 0;
            font-size: 32px;
            font-weight: bold;
            color: #2980b9;
        }
    </style>
</head>
<body>

    <div class="sidebar">
        <p>📊 Beranda</p>
        <p>📁 Laporan</p>
        <p>⚙️ Pengaturan</p>
        <p>🚪 Keluar</p>
    </div>

    <div class="main-content">
        
        <div class="header">
            <p>Ringkasan Dashboard</p>
        </div>

        <div class="cards-container">
            
            <div class="card">
                <p class="title">Total Pengguna</p>
                <p class="value">1.024</p>
            </div>
            
            <div class="card">
                <p class="title">Pendapatan Bulan Ini</p>
                <p class="value">Rp 15.400.000</p>
            </div>
            
            <div class="card">
                <p class="title">Kunjungan Aktif</p>
                <p class="value">342</p>
            </div>

        </div>
    </div>

</body>
</html>