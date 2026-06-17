function startClock()
{
    setInterval( () => {
        let now = new Date();
        let currentTime = now.toLocaleTimeString();
        console.log(currentTime);
    } , 1000);
}

console.log("Clock started");

startClock();

console.log("Main thread still running.");