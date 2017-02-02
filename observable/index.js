function nextCallback(data) {
    console.log(data);
}

function completeCallback() {
    console.log('Done');
}

function errorCallback(err) {
    console.log('Error: ', err);
}

startReceivingData(nextCallback, errorCallback, completeCallback);