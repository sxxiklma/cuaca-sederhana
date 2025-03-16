const btn = document.getElementById('btn');
btn.addEventListener('click', function() {
const city = document.getElementById('city').value;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=171e009cae7e126fcbcec49c3a5cee6a`;
fetch(url)
    .then(response => response.json())
    .then(data => {
        displayWeather(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
function displayWeather(data) {
    const result = document.getElementById('result');
    if (data.cod === '404') {
        result.innerHTML = 'Kotamu tidak ditemukan';
    } else {
        result.innerHTML = `
            <h2 style="font-family: 'Alkatra', serif;">Cuaca di ${data.name}</h2>
            <h4>Suhu: ${Math.round(data.main.temp -273.15)}\u00B0 C</h4>
            <h4>Cuaca seperti: ${Math.round(data.main.feels_like -273.15)}\u00B0 C</h4>
            <h4>Kelembapan: ${data.main.humidity} %</h4>
            <h4>Tekanan: ${data.main.pressure} hPa</h4>
            <h4>Kecepatan Angin: ${data.wind.speed} m/s</h4>
            <h4>Arah Angin: ${data.wind.deg} degrees</h4>`;
    }
}