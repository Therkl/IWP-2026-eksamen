/*
Deep comparison of objects.
*/

function deepEqual(obj1, obj2)
{
    // Check the types of the two arguments obj1 and obj2
    if(typeof obj1 == typeof obj2)
    {
        if(typeof obj1 == "object")
        {
            // Check if keys are equal
            let obj1keys = Object.keys(obj1);
            let obj2keys = Object.keys(obj2);

            let equalKeys = true; // Boolean indicator for keys being equal

            // Iterate over the keys
            if(obj1keys.length == obj2keys.length)
            {
                for(let i = 0; i < obj1keys.length; i++)
                {
                    if(obj1keys[i] === obj2keys[i])
                    {
                        equalKeys = true;
                        // Both keys are equal, so look at their values
                        return deepEqual(obj1[obj1keys[i]], obj2[obj2keys[i]]);
                    }
                    else // Two keys are different
                    {
                        equalKeys = false;
                        return false;
                    }
                }
            }
        }
        else // They are equal type, but not objects
        {
            if(obj1 === obj2)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

    }
    else
    {
        return false;
    }
}

// Test cases
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true

console.log(deepEqual(obj, {here: 1, object: 2}));
// → false

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

obj1 = "Hello";
obj2 = "hello";
console.log(deepEqual(obj1, obj2));