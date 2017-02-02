$(() => {
    const $search = $('#search');
    const $list = $('#list');
      
    const searchChange$ =
        Rx.Observable.fromEvent($search, 'input');
    
    searchChange$
        .map(e => e.target.value)    
        .subscribe((data) => console.log(data));
})