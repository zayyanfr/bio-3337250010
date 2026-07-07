<?php
// Array asosiatif: pasangan kunci (key) => nilai (value)
$mahasiswa = [
    "nama"  => "Budi Santoso",
    "nim"   => "3411221001",
    "prodi" => "Informatika",
    "ipk"   => 3.85,
    "skill" => ["HTML", "CSS", "JavaScript", "PHP"],
];

// Akses nilai dengan menggunakan key-nya
echo "<h3>Data Mahasiswa Tunggal:</h3>";
echo "Nama: " . $mahasiswa["nama"] . "<br>";   // Output: Budi Santoso
echo "IPK: " . $mahasiswa["ipk"] . "<br>";     // Output: 3.85
echo "<hr>";

// Array of arrays (Daftar multidimensi yang berisi banyak mahasiswa)
$daftar = [
    ["nama" => "Budi",  "ipk" => 3.85],
    ["nama" => "Ani",   "ipk" => 3.72],
    ["nama" => "Citra", "ipk" => 3.91],
];

echo "<h3>Daftar Banyak Mahasiswa:</h3>";
foreach ($daftar as $mhs) {
    // Menggunakan tanda petik tunggal untuk key di dalam string double-quote
    echo "{$mhs['nama']} — IPK: {$mhs['ipk']}<br>";
}
?>