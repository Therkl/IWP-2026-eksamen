/*
Deep comparison exercise.
*/

function deepEqual(obj1, obj2)
{

    /*
    Check if the two objects are the same type
    Note: We need to distinguish between the case when both are 
    objects or both are something else (and still equal)
    */
    if(typeof obj1 == typeof obj2)
    {
        // Check if they are objects (Here, we need to do the recursive call)
        if(typeof obj1 == "object")
        {
            // Check if keys are equal
            let obj1keys = Object.keys(obj1);
            let obj2keys = Object.keys(obj2);

            let equalKeys = true; // Boolean indicator for keys being equal
            
            if(obj1keys.length == obj2keys.length)
            {
                for(let i = 0; i < obj1keys.length; i++)
                {
                    if(obj1keys[i] === obj2keys[i])
                    {
                        equalKeys = true;
                        return deepEqual(obj1[obj1keys[i]], obj2[obj2keys[i]]);
                    }
                    else
                    {
                        equalKeys = false;
                        return false;
                    }        
                }

            }

        }
        // Else, they are strings, numbers or something else
        // This is the base case of the recursive call
        else
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

obj1 = {here: {is: "an"}, object: 2};
obj2 = {here: {is: "an"}, object: 2};
let result = deepEqual(obj1, obj2);
console.log("1: " + result);
// → true

obj3 = "Hello";
obj4 = "Hello";
console.log("2: " + deepEqual(obj3, obj4));
// → true

obj5 = {object: 2, here: {is: "an"}};
console.log("3: " + deepEqual(obj1, obj5));
// → false

console.log("4: " + deepEqual(obj1, {here: {is: "an"}, object: 2}));
// → true

console.log("5: " + deepEqual(obj1, {here: 1, object: 2}));
// → false

str1 = "Hello";
str2 = "Hello";
str3 = "Hello2";

console.log("6: " + deepEqual(str1, str2));
// → true

console.log("7: " + deepEqual(str1, str3));
// → false