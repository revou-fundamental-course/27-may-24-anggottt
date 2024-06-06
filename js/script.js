g// Function untuk relace nama
function replaceName(){
    let name = prompt("Siapakah nama anda?","");
    document.getElementById("name").innerHTML=name
    }
    
    replaceName();
    
    document.getElementById('formulir').addEventListener('submit', function(event) {
        event.preventDefault();  // Mencegah pengiriman formulir default
    
        //Membuat tanggal sekarang
        const now = new Date();
        const dateTimeString = now.toLocaleString();
    
        // Ambil nilai dari formulir
        const nama = document.getElementById('nama').value;
        const tglLahir = document.getElementById('tgl-lahir').value;
        const jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;
        const pesan = document.getElementById('pesan').value;
    
        // Buat teks hasil inputan
        const resultText = `Date/time: ${dateTimeString}\n \nNama: ${nama}\nTanggal Lahir: ${tglLahir}\nJenis Kelamin: ${jenisKelamin}\nPesan:\n${pesan}`;
    
        // Tampilkan hasil inputan di text area
        document.getElementById('result').value = resultText;
    
        // Tampilkan pesan alert
        alert('Pesan telah tersubmit');
        document.getElementById('nama').value ="";
        document.getElementById('tgl_lahir').value ="";
        document.getElementById('pesan').value ="";
        
    });
    
    // Function untuk slider
    let currentSlide = 0;
    let autoSlideInterval;
    
    function moveSlide(direction) {
        const slides = document.querySelector('.slides');
        const totalSlides = document.querySelectorAll('.slide').length;
    
        if (!slides) {
            console.error('Slides container not found');
            return;
        }
    
        currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
        const offset = -currentSlide * 100;
        console.log(`Moving to slide ${currentSlide} with offset ${offset}%`);
        slides.style.transform = `translateX(${offset}%)`;
    }

    // Timer slider banner
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            moveSlide(1);
        }, 3000);  
    }
    
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }
    
    document.addEventListener("DOMContentLoaded", function() {
        console.log("Document is ready");
        const prevButton = document.getElementById('prevButton');
        const nextButton = document.getElementById('nextButton');
    
        if (prevButton && nextButton) {
            console.log("Buttons found");
            prevButton.addEventListener('click', function() {
                console.log("Prev button clicked");
                moveSlide(-1);
                resetAutoSlide();
            });
    
            nextButton.addEventListener('click', function() {
                console.log("Next button clicked");
                moveSlide(1);
                resetAutoSlide();
            });
        } else {
            console.error('Buttons not found');
        }
    
        startAutoSlide();
    });
    
    // Function untuk Toggler Navbar
    function toggleNavbar() {
        var nav = document.getElementById("navbar-nav");
        nav.classList.toggle("active");
    }