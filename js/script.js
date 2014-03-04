window.addEventListener('load', function () {
    console.log(' ++ extra skenky');
    var count = 0,
        results = {},
        timeout = window.setInterval(function () {
            var id = Math.floor(Math.random() * 37),
                cell_id = '#postcode-' + id,
                cell = document.querySelector(cell_id),
                opacity = results[cell_id] ? (results[cell_id] * 0.8) : 0.8;

            if (count > 100) {
                window.clearInterval(timeout);
            }

            cell.style.backgroundColor = 'rgba(0,102,0,' + opacity + ')';
            results[cell_id] = opacity;

            count++;
        }, 1000);
}, false);
