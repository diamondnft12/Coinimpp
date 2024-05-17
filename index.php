<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CoinIMP API Example</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        pre {
            background: #333;
            color: #fff;
            padding: 10px;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Data dari CoinIMP API</h1>
        <?php
        // API ID dan API Key Anda
        $apiId = '4b9e7987927c0dce804f752369986a3e717bee98b6f744c4872f3fe51b1b866b';
        $apiKey = 'f80963484461c55e259b73431c094cadb14accc3e7269f24ff2619e87624305c';
        $url = 'https://www.coinimp.com/api/v2/hashes';

        // Inisialisasi CURL
        $ch = curl_init($url);

        // Atur header permintaan
        $headers = [
            'Content-Type: application/json',
            'X-API-ID: ' . $apiId,
            'X-API-KEY: ' . $apiKey,
        ];

        // Atur CURL options
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

        // Eksekusi CURL dan dapatkan respon
        $response = curl_exec($ch);

        // Tangani error jika ada
        if (curl_errno($ch)) {
            echo 'Error:' . curl_error($ch);
        } else {
            // Decode respon JSON
            $data = json_decode($response, true);
            // Tampilkan data (atau proses sesuai kebutuhan)
            echo '<pre>';
            print_r($data);
            echo '</pre>';
        }

        // Tutup CURL
        curl_close($ch);
        ?>
    </div>
</body>
</html>
