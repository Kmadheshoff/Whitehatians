 VANTA.GLOBE({
    el: "#vanta-globe",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x6f6f6f,
    backgroundColor: 0x0d0813
  });



  function showSection(id) {
    // Hide all sections
    const allSections = document.querySelectorAll('.section-content');
    allSections.forEach(section => section.classList.add('hidden'));

    // Show selected section
    const selected = document.getElementById(id);
    if (selected) {
      selected.classList.remove('hidden');
      selected.scrollIntoView({ behavior: 'smooth' });
    }

    // Close mobile menu if open
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
    }
  }

  // Toggle mobile menu
  document.getElementById('menu-toggle').addEventListener('click', () => {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
  });
window.addEventListener('DOMContentLoaded', () => {
  showSection('home');
});


function openFullscreen(src) {
  document.getElementById("fullscreenImg").src = src;
  document.getElementById("fullscreenViewer").classList.remove("hidden");
}

function closeFullscreen() {
  document.getElementById("fullscreenViewer").classList.add("hidden");
}


const sheetURL = "https://script.google.com/macros/s/AKfycbx9r-iXnucyg_BxviimE7Qvkm_02NKBU-sGQUNmf42TF3A4pg3n_aJksv69GL-Av24_/exec";

fetch(sheetURL)
  .then(res => res.json())
  .then(data => {
    const upcoming = document.getElementById("upcoming-events");
    const upcomingHome = document.getElementById("upcoming-events-home");
    const completed = document.getElementById("completed-events");

    data.forEach(event => {
      const status = (event.Status || "").toLowerCase();
      const registerBtn = event["Register URL"]
        ? `<a href="${event["Register URL"]}" target="_blank" class="mt-3 inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-full transition">Register Now</a>`
        : "";

      const html = `
  <div class="group relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-300 w-full sm:w-[350px] md:w-[400px] bg-white/5 border border-white/20">
    <div class="aspect-w-16 aspect-h-9">
      <img src="${event['Image URL']}" alt="${event.Title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    </div>
    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div class="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white">
      <h3 class="text-3xl font-bold mb-2">${event.Title}</h3>
      <p class="text-base text-gray-200"><i class="fas fa-clock mr-2"></i>${event.Date}</p>
      <p class="text-base text-gray-200"><i class="fas fa-clock mr-2"></i>${event.Time}</p>
      <p class="text-base text-gray-200"><i class="fas fa-map-marker-alt mr-2"></i>${event.Venue}</p>
      <p class="text-sm text-gray-300 mt-3">${event.Description}</p>

      <div class="mt-4 flex justify-between items-center">
        <span class="inline-block text-sm px-4 py-1 rounded-full bg-gradient-to-r from-pink-500 to-red-500 shadow-md">${event.Date}</span>
        ${event['Register URL'] ? `
        <a href="${event['Register URL']}" target="_blank" class="text-sm font-semibold px-4 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white transition">
          Register Now
        </a>` : ''}
      </div>
    </div>
  </div>
`;


      if (status === "upcoming") {
        upcoming.innerHTML += html;
        upcomingHome.innerHTML += html;
      } else if (status === "completed") {
        completed.innerHTML += html;
      }
    });
  })
  .catch(err => {
    console.error("Error loading events:", err);
  });



const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 3000, // Time in ms between slides (3 sec)
      disableOnInteraction: false, // Keeps autoplay after user interacts
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

   document.getElementById("year").textContent = new Date().getFullYear();
   