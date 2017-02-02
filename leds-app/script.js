$(() => {
    const $greenLed = $('#greenLed');
    const $redLed = $('#redLed');
    
    const interval$ = Rx.Observable.interval(300);

    interval$.subscribe(() => {
        $greenLed.toggleClass('on');
    });
    
    interval$.subscribe(() => {
        $redLed.toggleClass('on');
    });
    
})