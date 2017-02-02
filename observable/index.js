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

const intervalObservable = createObservable(function subscribe(obs) {
    let counts = 0;
    const intervalId = setInterval(() => {
        counts++;

        obs.next(counts);

        if (counts >= 5) {
            clearInterval(intervalId);
            obs.complete();
        }
    }, 300);
});

const arrayObservable = createObservable(function subscribe(obs) {
    [1, 5, 34, 6, 87].forEach(obs.next);
    obs.complete();
});

function mapFn(transformationFn) {
    const inputObservable = this;
    const outputObservable = createObservable((obs) => {
        inputObservable.subscribe({
            next: (x) => obs.next(transformationFn(x)),
            complete: () => obs.complete(),
            error: (err) => obs.error(err)
        })
    });

    return outputObservable;
}

function filterFn(conditionFn) {
    const inputObservable = this;
    const outputObservable = createObservable((obs) => {
        inputObservable.subscribe({
            next: (x) => conditionFn(x) && obs.next(x),
            complete: () => obs.complete(),
            error: (err) => obs.error(err)
        })
    });

    return outputObservable;
}

function createObservable(subscribeFn) {
    return {
        filter: filterFn,
        map: mapFn,
        subscribe: subscribeFn
    }
}


intervalObservable
    .filter(x => x % 2)    
    .map(x => x * 10) 
    .subscribe(observer);