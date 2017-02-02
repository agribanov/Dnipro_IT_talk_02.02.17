$(() => {
    const $search = $('#search');
    const $list = $('#list');
      
    const searchChange$ =
        Rx.Observable.fromEvent($search, 'input');
    
    searchChange$
        .map(e => e.target.value)
        .filter(text => text.length > 2)
        .subscribe((data) => console.log(data));
})