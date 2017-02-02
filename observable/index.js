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

const intervalObservable = {
    subscribe: function subscribe(obs) {
        let counts = 0;
        const intervalId = setInterval(() => {
            counts++;

            obs.next(counts);

            if (counts >= 5) {
                clearInterval(intervalId);
                obs.complete();
            }
        }, 300);
    }

}

const arrayObservable = {
    subscribe: function subscribe(obs) {
        [1, 5, 34, 6, 87].forEach(obs.next);
        obs.complete();
    }

}

arrayObservable.subscribe(observer);