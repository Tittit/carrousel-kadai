import $ from 'jquery';
import carousel from './lib/Carousel'; //carouselにCarousel.jsをいれる

const $carousel = $(".js-carousel");

$carousel.each((i, elm) => {
    const $root = $(elm);

    const obj = {
        $item: $root.find(".js-carousel-item"),
        $prev: $root.find(".js-carousel-prev"),
        $next: $root.find(".js-carousel-next"),
				$list: $root.find(".carousel__list"),
    };

    const carouselmove = new carousel(obj);

});
