const Rx = require('rxjs/Rx');

const observer = {
    next: function nextCallback(data) {
        console.log(data);
    },

    complete: function completeCallback() {
        console.log('Done');
    },

    error: function errorCallback(err) {
        console.log('Error: ', err);
    }
}

Rx.Observable.interval(300)
    .take(5)
    .filter(x => x % 2)
    .map(x => x * 10)
    .subscribe(observer);