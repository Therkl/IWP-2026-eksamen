/*
Exercise 2
*/

function alwaysRejects(msg, delay)
{
    let promise = new Promise(
        function(resolve, reject)
        {
            setTimeout(msg => reject(new Error("Failed")));
        }
    );
    return promise;
}

alwaysRejects("Just some text", 1000)
    .catch(error => console.log(error.message));

