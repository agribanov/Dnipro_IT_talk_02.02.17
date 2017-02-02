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

function startReceivingData(obs) {
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

startReceivingData(observer);