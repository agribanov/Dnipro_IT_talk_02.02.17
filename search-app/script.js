$(() => {
    const $search = $('#search');
    const $list = $('#list');
      
    const searchChange$ =
        Rx.Observable.fromEvent($search, 'input');
    
    searchChange$.subscribe((data) => console.log(data));
})