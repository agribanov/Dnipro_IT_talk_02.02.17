$(() => {
    const $search = $('#search');
    const $list = $('#list');
      
    function getUsers(text) {
        const request =
            fetch('https://api.github.com/search/users?q=' + text)
                .then(resp => resp.json());

    return Rx.Observable.fromPromise(request);
}

    const searchChange$ =
        Rx.Observable.fromEvent($search, 'input');
    
    searchChange$
        .map(e => e.target.value)
        .filter(text => text.length > 2)
        .debounceTime(300)
        .switchMap(getUsers)
        .pluck('items')
        .subscribe((data) => console.log(data));
})