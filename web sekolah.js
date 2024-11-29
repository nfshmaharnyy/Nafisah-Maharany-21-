// Fungsi scroll ke section tertentu
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Mengambil elemen form dan feedback
const contactForm = document.getElementById('contactForm');
const feedback = document.getElementById('feedback');

// Menangani event submit form
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah reload halaman

    // Mengambil nilai dari form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Tampilkan pesan feedback
    feedback.textContent = Terima kasih, ${name}! Pesan Anda telah diterima.;
    feedback.style.color = "green";

    // Reset form setelah submit
    contactForm.reset();
});