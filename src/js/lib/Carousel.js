import $ from 'jquery';
import EventEmitter from 'events';

(function() {
    "use strict"

    function carousel($next, $prev, $list, $item) {
        let currentNum = 0;
        const itemWidth = $item.width(); //liのwidth
        const listNum = $item.length; //liの数
        const listWidth = itemWidth * listNum;　//ulのwidth

        $list.css("width", listWidth);//liの要素量分のwidth

        function movementNext() {
            $list.stop().animate({
                left: -itemWidth * currentNum
            }, 1000);
        }

        function movementPrev() {
            $list.stop().animate({
                left: -itemWidth * currentNum
            }, 1000);
        }

        function next() {
            currentNum++;
            if (currentNum > listNum - 1) {
                currentNum = 0;
            }
            movementNext();
        }

        function prev() {
            currentNum--;
            if (currentNum < 0) {
                currentNum = listNum - 1;
            }
            movementPrev();
        }

        $next.click(e => {　//nextbtn押したらfun next発動
            next();
        });

        $prev.click(e => { //nextprev押したらfun prev発動
            prev();
        });

        const fnc = {
            movementNext,
            movementPrev,
            next,
            prev
        };

        return fnc;
    }
    var carousel1 = carousel($(".js-carousel-next").eq(0), $(".js-carousel-prev").eq(0), $(".carousel__list").eq(0), $(".carousel__list").eq(0).children("li"));
    var carousel2 = carousel($(".js-carousel-next").eq(1), $(".js-carousel-prev").eq(1), $(".carousel__list").eq(1), $(".carousel__list").eq(1).children("li"));
})();




export default class Carousel extends EventEmitter {
  constructor(opts = {}) {
    super();
  }
}

/*
export default function Carousel (id){
  const PrevBtn = $("#"+id+" .js-carousel-prev");
  const NextBtn = $("#"+id+" .js-carousel-next");
  const ListWrap = $("#"+id+" .carousel__list")
  const List = $("#"+id+" .carousel__list .carousel__item");
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
}

var carousel01 = Carousel("list__01");
var carousel02 = Carousel("list__02");


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
*/
