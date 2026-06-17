/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

// Iterative version
let hashtagString = "";

console.log("Using iteration:")

for(let n = 0; n <= 7; n++)
{
    hashtagString = hashtagString + "#";
    console.log(hashtagString);
}

// Recursive version
const hashtag = function(length)
{
    // If length is 1, then return one hashtag sign
    if (length == 1)
    {
        return "#";
    }
    else
    {
        return "#" + hashtag(length-1);
    }
    
}

console.log("Using recursion:")

for(let n = 1; n <= 8; n++)
{
    console.log(hashtag(n))
}