// promises
const promise=require("promise");
const Mongoclient=require("mongodb").Mongoclient;
const url="mongodb://localhost/TestDB";
Mongoclient.connect(url)
.then(function(err,db)
{
    db.collection("test").updateOne(
        {
            "Name":"JOE"
        },
        {
            $set: {
                "Name":"Beck"
            }
        });
    })
.catch(error=>alert(error.message))
