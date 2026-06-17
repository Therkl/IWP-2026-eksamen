/*
Live coding of exercise 4 from lecture 3.
*/

function loop(initialValue, testFunction, updateFunction, action)
{

    for(let i = initialValue; ; )
    {
        action(i);

        i = updateFunction(i);

        if( !testFunction(i) )
        {
            break;
        }
    }

}

loop(3, n => n > 0, n => n - 1, console.log);