$(document).ready(() => {
    $(".bars").click(() => {
        $(".bars,.links").toggleClass("active");
    });
    const typingText = new Typed("#text",{
        strings: [
            'Full Stack Developer',
            'Desinger',
            'YouTuber',
            'Business Man'
        ],
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        startDelay: 2000
    });
});