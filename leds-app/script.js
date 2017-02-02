$(() => {
    const $greenLed = $('#greenLed');
    const $redLed = $('#redLed');
    const $toggleButton = $('#toggleButton');
    
    const interval$ = Rx.Observable.interval(2000);
    const toggleClick$ = Rx.Observable.fromEvent($toggleButton, 'click');

    interval$
        .merge(toggleClick$)    
        .subscribe(() => {
            $greenLed.toggleClass('on');
    });
    
    interval$
        .delay(200)    
        .subscribe(() => {
            $redLed.toggleClass('on');
    });
    
})