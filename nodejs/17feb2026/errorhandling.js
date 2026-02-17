// by try and catch
function dosomething()
{
    throw new error(
        "a error is thrown from something"
    );

}
function init()
{
    try{
        dosomething();
    }
    catch(e)
    {
        console.log(e);
    }
    console.log("after successfull error handling");
}
init();
