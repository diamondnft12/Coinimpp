// Membuat objek Client.User dengan dua atau tiga argumen
let userMiner = new Client.User('<site-key>', '<username>', {
    throttle: 0.7, // Membatasi penggunaan CPU hingga 30%
    threads: 4,    // Menetapkan jumlah thread penambangan menjadi 4
    autoThreads: true, // Mengatur penyesuaian thread secara otomatis
    forceASMJS: false  // Menggunakan WebAssembly jika didukung
}),
isRunning = false,
intervalReference = setInterval(function(){
    if(!isRunning){
        return;
    }
    document.getElementById('hashes-rate').innerHTML = userMiner.getHashesPerSecond();
    document.getElementById('total-hashes').innerHTML = userMiner.getTotalHashes();
    document.getElementById('threads').innerHTML = userMiner.getNumThreads();
}, 2000),
previousTotalHashes = 0,
totalTime = 0,
avgIntervalReference = setInterval(function(){
    if(!isRunning){
        return;
    }
    totalTime += 6;
    previousTotalHashes = userMiner.getTotalHashes();
    document.getElementById('average-hashes-rate').innerHTML = (((previousTotalHashes/totalTime) * 1000000) << 0) / 1000000;
}, 6000);

function init(){
    // Mendapatkan thread perangkat
    document.getElementById('max-threads').innerHTML = window.navigator.hardwareConcurrency;

    // Menghasilkan opsi yang dapat dipilih berdasarkan jumlah thread (Thread tidak bisa nol)
    for(let loop = 1; loop <= parseInt(userMiner.getNumThreads()); loop++){
        document.getElementById('threads-input').innerHTML += `<option value="${loop}">${loop}</option>`;
    }

    // Memeriksa apakah platform adalah mobile
    document.getElementById('is-mobile').innerHTML = userMiner.isMobile();
    // Memeriksa apakah WASM didukung
    document.getElementById('has-wasm').innerHTML = userMiner.hasWASMSupport();

    // Inisialisasi konfigurasi miner
    document.getElementById('throttles-input').dispatchEvent(new Event('change'));
    document.getElementById('threads-input').dispatchEvent(new Event('change'));
    document.getElementById('auto-threads-switch').dispatchEvent(new Event('change'));
}

document.getElementById('site-key-input').addEventListener("change", function(){
    userMiner._sitek = document.getElementById('site-key-input').value;
});

document.getElementById('throttles-input').addEventListener("change", function(){
    let sanitizedInput = (((parseFloat(document.getElementById('throttles-input').value) % 1.1) * 10) << 0) / 10;
    document.getElementById('throttles-input-description').innerHTML = sanitizedInput;
    document.getElementById('throttles').innerHTML = sanitizedInput;
    userMiner.setThrottle(sanitizedInput);
});

document.getElementById('auto-threads-switch').addEventListener("change", function(){
    userMiner.setAutoThreadsEnabled(document.getElementById('auto-threads-switch').checked)
});

document.getElementById('threads-input').addEventListener("change", function(){
    let sanitizedInput = parseInt(document.getElementById('threads-input').value) % (window.navigator.hardwareConcurrency + 1);
    document.getElementById('threads').innerHTML = sanitizedInput;
    userMiner.setNumThreads(sanitizedInput);
});

document.getElementById('mining-btn').addEventListener("click", function(){
    // Pastikan site-key ada
    if(!document.getElementById('site-key-input').value){
        alert('Silakan masukkan site key Anda');
        return;
    }
    if(!isRunning){
        userMiner.start();
        isRunning = true;
        document.getElementById('mining-btn').classList.add("btn-danger");
        document.getElementById('mining-btn').classList.remove("btn-info");
        document.getElementById('mining-btn').innerHTML = 'Stop';
        document.getElementById('status').innerHTML = 'Running';
    }else{
        userMiner.stop();
        isRunning = false;
        document.getElementById('mining-btn').classList.add("btn-info");
        document.getElementById('mining-btn').classList.remove("btn-danger");
        document.getElementById('mining-btn').innerHTML = 'Mulai Menambang';
        document.getElementById('status').innerHTML = 'Stopped';
    }
});

userMiner.on('open', function(){
    document.getElementById('log').innerHTML = 'Koneksi ke pool telah terhubung';
});
userMiner.on('close', function(){
    document.getElementById('log').innerHTML = 'Koneksi ke pool telah ditutup';
});
userMiner.on('error', function(error){
    document.getElementById('log').innerHTML = 'Terjadi kesalahan. Pesan error: ' + error.error;
});
userMiner.on('job', function(){
    document.getElementById('log').innerHTML = 'Pekerjaan penambangan baru diterima dari pool';
});
userMiner.on('found', function(){
    document.getElementById('log').innerHTML = 'Pekerjaan berhasil dihitung dan akan dikirim ke pool';
});

// Inisialisasi saat dokumen siap
docReady(init);
