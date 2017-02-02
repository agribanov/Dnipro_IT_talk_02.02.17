function nextCallback(data) {
    console.log(data);
}

function completeCallback() {
    console.log('Done');
}

function errorCallback(err) {
    console.log('Error: ', err);
}

function startReceivingData(next, error) {
    fetch('http://google.com').then(next, error);
}

startReceivingData(nextCallback, errorCallback, completeCallback);