document.addEventListener("DOMContentLoaded", function () {
  const aboutImages = document.querySelector(".about-images");

  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  aboutImages.classList.add("active"); // Add active class when in view
              } else {
                  aboutImages.classList.remove("active"); // Remove class when out of view
              }
          });
      },
      { threshold: 0.6 } // Trigger animation when 60% of the images are visible
  );

  observer.observe(aboutImages);
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
