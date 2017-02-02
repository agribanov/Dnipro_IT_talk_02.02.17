function nextCallback(data) {
    console.log(data);
}

function completeCallback() {
    console.log('Done');
}

function errorCallback(err) {
    console.log('Error: ', err);
}

function startReceivingData(next) {
    [1, 2, 3, 4, 5].forEach(next);
}

startReceivingData(nextCallback, errorCallback, completeCallback);