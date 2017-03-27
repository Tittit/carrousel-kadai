import $ from 'jquery';
import EventEmitter from 'events';

export default class Carousel extends EventEmitter {
  constructor(opts = {}) {
    super();
  }
}

const LeftBtn = $(".js-carousel-prev");
const RightBtn = $(".js-carousel-next");

const CarouselNum01 = $('#list__01 li').length;
const CarouselNum02 = $('#list__02 li').length;

const CarouselWIdth = $('#list__01 li').width();

console.log(CarouselNum01);
console.log(CarouselNum02);
console.log(CarouselWIdth);
