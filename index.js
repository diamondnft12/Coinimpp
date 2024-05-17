

```javascript
// Konfigurasi Mining Anonim
const anonymousMiner = new Client.Anonymous('<site-key>', {
    throttle: 0.7, // Membatasi penggunaan CPU hingga 30%
    threads: navigator.hardwareConcurrency, // Menggunakan jumlah utas yang sama dengan jumlah inti prosesor logis
    autoThreads: false, // Menonaktifkan penyesuaian otomatis jumlah utas
    forceASMJS: false // Menggunakan WebAssembly jika didukung
});

// Memulai mining dengan mode Client.IF_EXCLUSIVE_TAB
anonymousMiner.start(Client.IF_EXCLUSIVE_TAB);

// Mengecek apakah miner sedang berjalan
const isRunning = anonymousMiner.isRunning();
console.log('Miner berjalan:', isRunning);

// Mengecek apakah perangkat yang digunakan adalah perangkat mobile
const onMobile = anonymousMiner.isMobile();
console.log('Pada perangkat mobile:', onMobile);

// Mengecek apakah WebAssembly didukung
const wasmEnabled = anonymousMiner.hasWASMSupport();
console.log('WebAssembly didukung:', wasmEnabled);

// Mengaktifkan atau menonaktifkan autoThreads
anonymousMiner.setAutoThreadsEnabled(true);

// Mendapatkan jumlah hash per detik
const hashesPerSecond = anonymousMiner.getHashesPerSecond();
console.log('Hash per detik:', hashesPerSecond);

// Mendapatkan jumlah utas yang digunakan
const numThreads = anonymousMiner.getNumThreads();
console.log('Jumlah utas:', numThreads);

// Mengatur jumlah utas yang digunakan untuk mining
anonymousMiner.setNumThreads(4);

// Mendapatkan nilai throttle saat ini
const throttle = anonymousMiner.getThrottle();
console.log('Throttle saat ini:', throttle);

// Mengatur batas CPU dengan nilai throttle baru
anonymousMiner.setThrottle(0.5);

// Mendapatkan total hash yang dihitung sejak miner dibuat
const totalHashes = anonymousMiner.getTotalHashes(true);
console.log('Total hash:', totalHashes);

// Menghentikan mining
anonymousMiner.stop();

// Menambahkan callback untuk event 'open'
anonymousMiner.on('open', function() {
    console.log('Koneksi ke pool berhasil.');
});

// Konfigurasi Mining dengan User
const userMiner = new Client.User('<site-key>', '<username>', {
    throttle: 0.7, // Membatasi penggunaan CPU hingga 30%
    threads: navigator.hardwareConcurrency, // Menggunakan jumlah utas yang sama dengan jumlah inti prosesor logis
    autoThreads: false, // Menonaktifkan penyesuaian otomatis jumlah utas
    forceASMJS: false // Menggunakan WebAssembly jika didukung
});

// Memulai mining dengan mode Client.FORCE_EXCLUSIVE_TAB
userMiner.start(Client.FORCE_EXCLUSIVE_TAB);

// Mengecek apakah miner sedang berjalan
const isUserRunning = userMiner.isRunning();
console.log('Miner user berjalan:', isUserRunning);

// Mengecek apakah perangkat yang digunakan adalah perangkat mobile
const onUserMobile = userMiner.isMobile();
console.log('Pada perangkat mobile:', onUserMobile);

// Mengecek apakah WebAssembly didukung
const userWasmEnabled = userMiner.hasWASMSupport();
console.log('WebAssembly didukung:', userWasmEnabled);

// Mengaktifkan atau menonaktifkan autoThreads
userMiner.setAutoThreadsEnabled(true);

// Mendapatkan jumlah hash per detik
const userHashesPerSecond = userMiner.getHashesPerSecond();
console.log('Hash per detik user:', userHashesPerSecond);

// Mendapatkan jumlah utas yang digunakan
const userNumThreads = userMiner.getNumThreads();
console.log('Jumlah utas user:', userNumThreads);

// Mengatur jumlah utas yang digunakan untuk mining
userMiner.setNumThreads(4);

// Mendapatkan nilai throttle saat ini
const userThrottle = userMiner.getThrottle();
console.log('Throttle saat ini user:', userThrottle);

// Mengatur batas CPU dengan nilai throttle baru
userMiner.setThrottle(0.5);

// Mendapatkan total hash yang dihitung sejak miner dibuat
const userTotalHashes = userMiner.getTotalHashes(true);
console.log('Total hash user:', userTotalHashes);

// Menghentikan mining
userMiner.stop();

// Menambahkan callback untuk event 'open'
userMiner.on('open', function() {
    console.log('Koneksi ke pool user berhasil.');
});
```

Pada skrip di atas, Anda perlu mengganti `<site-key>` dengan kunci situs yang sesuai dan `<username>` dengan nama pengguna yang valid. Skrip ini mencakup konfigurasi untuk mining anonim dan mining dengan pengguna tertentu, serta berbagai operasi seperti memulai, menghentikan, dan memeriksa status miner.
