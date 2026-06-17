try
{
    hello;
    console.log("We are in try block.");
}
catch (error)
{
    console.log(error.name);
    console.log(error.message);
    console.log("We are in catch block.");
}