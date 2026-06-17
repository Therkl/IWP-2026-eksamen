/*
Exercise 1
*/

function delayedMessage(msg, delay)
{
    let promise = new Promise(
        function(resolve, reject)
        {
            setTimeout(() => resolve(msg), delay);
        }
    );
    return promise;
}

delayedMessage("Hello after 3 seconds", 3000)
    .then(message => console.log(message));

