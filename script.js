document.getElementById('fetchData').addEventListener('click', () => {
    const headers = {
        'X-API-ID': '8b265e3072b16343d7e4923041f940a32cd28868dbc8b475f45b7984c1765c7d',
        'X-API-KEY': '7a8530f4f1266e0889c7ccb1c49f81e8cd45026162e25fd864d904c62084945c',
    };

    fetch('https://www.coinimp.com/api/v2/hashes', { headers })
        .then(response => response.json())
        .then(data => {
            document.getElementById('output').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('output').textContent = `Error: ${error.message}`;
        });
});
