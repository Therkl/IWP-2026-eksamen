let startTime = Date.now(); // Gets current time

let duration = 5000; // 5000 ms = 5 seconds

function startClock()
{
    let intervalId = setInterval( () => {
        let now = new Date();
        console.log(now.toLocaleTimeString());

        if( now - startTime >= duration )
        {
            clearInterval(intervalId);
        }

    }, 1000);
}

console.log("Clock started");

startClock();

console.log("Main thread still running");