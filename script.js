    function show_bar() {
        document.getElementById('sidebar').classList.remove('hidden');
    }

    function hide_bar() {
        document.getElementById('sidebar').classList.add('hidden');
    }

    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const slider = document.querySelector('.slider');
    const items = document.querySelectorAll('.item');
    let currentItemIndex = 0;

    function showNextSlide() {
        items[currentItemIndex].classList.remove('active');
        currentItemIndex = (currentItemIndex + 1) % items.length;
        items[currentItemIndex].classList.add('active');
    }

    function showPrevSlide() {
        items[currentItemIndex].classList.remove('active');
        currentItemIndex = (currentItemIndex - 1 + items.length) % items.length;
        items[currentItemIndex].classList.add('active');
    }

    nextButton.addEventListener('click', showNextSlide);
    prevButton.addEventListener('click', showPrevSlide);

    const hammer = new Hammer(slider);

    hammer.on('swipeleft', showNextSlide);
    hammer.on('swiperight', showPrevSlide);



    let slideIndex = 1;
    showSlides(slideIndex);

    function moveSlide(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        let slides = document.querySelectorAll('.slide');
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';  
        }
        slides[slideIndex - 1].style.display = 'block';  
    }




    let currentIndex2 = 0; 
    const slideElements2 = document.querySelectorAll('#second-slider img'); 
    
    function displayCurrentSlide2() { 
      slideElements2.forEach((slide, index) => {
        if (index === currentIndex2) {
          slide.style.display = 'block';
        } else {
          slide.style.display = 'none';
        }
      });
    }
    
    function goToNextSlide2() {
      currentIndex2 = (currentIndex2 + 1) % slideElements2.length;
      displayCurrentSlide2();
    }
    
    function goToPreviousSlide2() { 
      currentIndex2 = (currentIndex2 - 1 + slideElements2.length) % slideElements2.length;
      displayCurrentSlide2();
    }
    setInterval(goToNextSlide2, 3000);
    
    displayCurrentSlide2();
    
