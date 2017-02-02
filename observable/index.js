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

function createObservable(subscribeFn) {
    return {
        subscribe: subscribeFn
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

arrayObservable.subscribe(observer);