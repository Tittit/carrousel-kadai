import $ from 'jquery';
import EventEmitter from 'events';

export default class Carousel extends EventEmitter {
  constructor(opts = {}) {
    super();
  }
}


(function(){
  const PrevBtn = $("#list__01 .js-carousel-prev");
  const NextBtn = $("#list__01 .js-carousel-next");
  const ListWrap = $("#list__01 .carousel__list")
  const List = $("#list__01 .carousel__list .carousel__item");
  const CarouselNum = List.length; //7
  const CarouselWidth = List.width(); //500
  const ListWidth = CarouselNum * CarouselWidth;　//3500

  let SlideCurrent = 0; //スライドに現在値

  ListWrap.css("width",ListWidth+"px");　//carousel__item横並びしたときのwidth

  //戻るボタン押したら
  const SlidePrev = function(){
    if( SlideCurrent < 0 ){　//0より小さくなったら」
      SlideCurrent = CarouselNum - 1;　//6番目に移動
    }
    ListWrap.stop().animate({
      left:CarouselWidth * -SlideCurrent
    },500);
  }

  PrevBtn.click(function(){
    SlideCurrent--;
    SlidePrev();
    console.log(SlideCurrent);
  });

  //次ボタン押したら
  const SlideNext = function(){
    if( SlideCurrent > CarouselNum - 1){　//6番目より大きくなったら
      SlideCurrent = 0;　//0番目に移動
    }
    ListWrap.stop().animate({
      left:CarouselWidth * -SlideCurrent
    },500);
  }

  NextBtn.click(function(){
    SlideCurrent++;
    SlideNext();
    console.log(SlideCurrent);
  });
})();

//下のカーネル
(function(){
  const PrevBtn = $("#list__02 .js-carousel-prev");
  const NextBtn = $("#list__02 .js-carousel-next");
  const ListWrap = $("#list__02 .carousel__list")
  const List = $("#list__02 .carousel__list .carousel__item");
  const CarouselNum = List.length; //4
  const CarouselWidth = List.width(); //500
  const ListWidth = CarouselNum * CarouselWidth;　//2000

  let SlideCurrent = 0; //スライドに現在値

  ListWrap.css("width",ListWidth+"px");　//carousel__item横並びしたときのwidth

  //戻るボタン押したら
  const SlidePrev = function(){
    if( SlideCurrent < 0 ){　//0より小さくなったら」
      SlideCurrent = CarouselNum - 1;　//3番目に移動
    }
    ListWrap.stop().animate({
      left:CarouselWidth * -SlideCurrent
    },500);
  }

  PrevBtn.click(function(){
    SlideCurrent--;
    SlidePrev();
    console.log(SlideCurrent);
  });

  //次ボタン押したら
  const SlideNext = function(){
    if( SlideCurrent > CarouselNum - 1){　//3番目より大きくなったら
      SlideCurrent = 0;　//0番目に移動
    }
    ListWrap.stop().animate({
      left:CarouselWidth * -SlideCurrent
    },500);
  }

  NextBtn.click(function(){
    SlideCurrent++;
    SlideNext();
    console.log(SlideCurrent);
  });
})();
