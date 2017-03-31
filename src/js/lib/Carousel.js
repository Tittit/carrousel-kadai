import $ from 'jquery';
import EventEmitter from 'events'; //EventEmitterにeventsをいれるss

export default class Carousel{

  //最初に実行される処理
  constructor(obj){
      this.currentNum = 0;

      this.$item = obj.$item;
      this.$next = obj.$next;
      this.$prev = obj.$prev;
      this.$list = obj.$list;

      this.itemWidth = this.$item.width();
      this.listNum = this.$item.length;
      this.$next.click(() => this.next());
      this.$prev.click(() => this.prev());
  }

  //固有で持たせることのできる処理
  movement() {
      this.$list.stop().animate({
          left: -this.itemWidth * this.currentNum
      }, 1000);
  }

  next() {
      this.currentNum++;
      if (this.currentNum > this.listNum - 1) {
          this.currentNum = 0;
      }
      this.movement();
  }

  prev() {
      this.currentNum--;
      if (this.currentNum < 0) {
          this.currentNum = this.listNum - 1;
      }
      this.movement();
  }
}
