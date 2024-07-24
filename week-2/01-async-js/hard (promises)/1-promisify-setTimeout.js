/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function(resolve){
        setTimeout(resolve, n * 1000);
    })
}

wait(3).then(() => console.log('I waited 3 seconds'));
wait(5).then(() => console.log('I waited 5 seconds'));

module.exports = wait;
