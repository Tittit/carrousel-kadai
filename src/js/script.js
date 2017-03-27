import $ from 'jquery';
import Carousel from './lib/Carousel';

const $carousel = $(".js-carousel");

$carousel.each((i, elm) => {
    const $root = $(elm);
    const carousel = new Carousel({
        $item: $root.find(".js-carousel-item"),
        $prev: $root.find(".js-carousel-prev"),
        $next: $root.find(".js-carousel-next"),
    });
    carousel.on('last', () => {
        console.log('last!!');
    });
});
