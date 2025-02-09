document.addEventListener("DOMContentLoaded", () => {
    const pages = [
        document.getElementById("about-cnt"),
        document.getElementById("img"),
        document.getElementById("about-info"), 
        document.getElementById("image-box-1"),
        document.getElementById("image-box-2"),
        document.getElementById("image-box-3"),
        document.getElementById("image-box-4"),
        document.getElementById("image-box-5"),
        document.getElementById("image-box-6"),
        document.getElementById("news-top"),
        document.getElementById("news-bottom"),
        document.getElementById("quiz"),
        document.getElementById("circle"),
        document.getElementById("consult-about"),
        document.getElementById("con-1"),
        document.getElementById("con-2"),
        document.getElementById("con-3")

    ]

    

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }else{
                    entry.target.classList.remove('active')
                }
            });
        },
        { threshold: 0.2 }
    );

    pages.forEach(page => {
        observer.observe(page);
    });

    const counters = document.querySelectorAll(".counter");

    counters.forEach((counter) => {
        const target = +counter.getAttribute("data-target"); // Get target number
        let count = 0;
        const increment = target / 100; // Speed control (smaller value = slower)

        const updateCounter = () => {
        if (count < target) {
            count += increment;
            counter.innerText = Math.floor(count);
            requestAnimationFrame(updateCounter); // Smooth animation
        } else {
            counter.innerText = target; // Ensure the final value is accurate
        }
        };

        updateCounter();
    });
});


var map = L.map('map').setView([1.2921, 36.8219], 12); // Centered in Nairobi

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker in Nairobi, Kenya
L.marker([1.2921, 36.8219]).addTo(map)
    .bindPopup('Nairobi, Kenya')
    .openPopup();

    // var map = L.map('map').setView([1.2921, 36.8219], 12);

    // L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=YOUR_MAPBOX_ACCESS_TOKEN', {
    //     attribution: '&copy; <a href="https://www.mapbox.com/">Mapbox</a> contributors',
    //     tileSize: 512,
    //     zoomOffset: -1
    // }).addTo(map);

    
    // L.marker([1.2921, 36.8219]).addTo(map)
    //     .bindPopup('Nairobi, Kenya')
    //     .openPopup();


