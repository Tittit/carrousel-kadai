import $ from 'jquery';
import EventEmitter from 'events'; //EventEmitterにeventsをいれる？

export default function carousel(obj){
    let currentNum = 0;
    const itemWidth = obj.$item.width();
    const listNum = obj.$item.length;

    function movement() {
        obj.$list.stop().animate({
            left: -itemWidth * currentNum
        }, 1000);
    }

    function next() {
        currentNum++;
        if (currentNum > listNum - 1) {
            currentNum = 0;
        }
        movement();
    }

    function prev() {
        currentNum--;
        if (currentNum < 0) {
            currentNum = listNum - 1;
        }
        movement();
    }

    obj.$next.click(next);

    obj.$prev.click(prev);

    const fnc = {
        movement,
        next,
        prev
    };

    return fnc;
}
