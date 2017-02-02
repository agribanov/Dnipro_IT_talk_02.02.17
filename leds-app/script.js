$(() => {
    const $greenLed = $('#greenLed');
    const $redLed = $('#redLed');
    const $toggleButton = $('#toggleButton');
    const $startButton = $('#startButton');
    const $stopButton = $('#stopButton');
    
    const interval$ = Rx.Observable.interval(200);
    const toggleClick$ = Rx.Observable.fromEvent($toggleButton, 'click');
    const startClick$ = Rx.Observable.fromEvent($startButton, 'click');
    const stopClick$ = Rx.Observable.fromEvent($stopButton, 'click');

    const ticks$ = interval$.takeUntil(stopClick$);

    ticks$
        .merge(toggleClick$)    
        .subscribe(() => {
            $greenLed.toggleClass('on');
    });
    
    ticks$
        .delay(200)    
        .subscribe(() => {
            $redLed.toggleClass('on');
    });
    
})