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
    document.addEventListener('click', next);
}

startReceivingData(nextCallback, errorCallback, completeCallback);