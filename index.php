<?php
$url = 'https://www.coinimp.com/api/v2/hashes';
$api_id = '7e26bb94aa2ce44e6e16aca6ae6d28c7f0157b5ccd7a82f86bbbe8d835effd71';
$api_key = '5112486af64b2f97bd3742c4153cee32452549491480cfd164b336720b82a84d';

$headers = [
    "X-API-ID: $api_id",
    "X-API-KEY: $api_key"
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);

$data = json_decode($response, true);

if ($data && isset($data['success']) && $data['success']) {
    $hashes = $data['hashes']; // Ini adalah data jumlah hashes yang dapat Anda gunakan
} else {
    $error_message = isset($data['message']) ? $data['message'] : 'Gagal mengambil data dari API.';
    // Lakukan sesuatu dengan pesan kesalahan
}
?>
