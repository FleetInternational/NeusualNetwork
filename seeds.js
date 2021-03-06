var mongoose = require("mongoose");
var Neusualnetwork = require("./homepage/models/neusualnetwork");
var Comment = require("./homepage/models/comment");

var data=[
    {
        name:"Desert Mata",
        image:"https://media-cdn.tripadvisor.com/media/photo-s/06/36/4f/82/the-osian-sand-dunes.jpg",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        author:{
            id : "588c2e092403d111454fff76",
            username: "Jack"
        }
    },
    {
        name:"Hill Neusualnetwork",
        image:"http://www.nationalparks.nsw.gov.au/~/media/DF58734103EF43669F1005AF8B668209.ashx",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        author:{
            id : "588c2e092403d111454fff76",
            username: "Jack"
        }
    },
    {
        name:"Neusualnetwork near river",
        image:"http://www.eaglemountainlake.org/wp-content/uploads/2013/12/Camping.jpg",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        author:{
            id : "588c2e092403d111454fff76",
            username: "Jack"
        }
    }
];

function seedDB(){
    Neusualnetwork.remove({},function(err){
        if(err){
            console.log(err);
        }else{
            console.log("removed from DB");
        }
        data.forEach(function(seed){
        Neusualnetwork.create(seed,function(err,neusualnetwork){
            if(err){
                console.log(err);
            }else{
                console.log("added a neusualnetworks");
                Comment.create(
                        {
                            text:"This place is great and there is no internet",
                            author:{
                                id: "588c2e092403d111454fff76",
                                username: "Jack"
                            }
                        },function(err,comment){
                            if(err){
                                console.log(err);
                            }else{
                                neusualnetwork.comments.push(comment);
                                neusualnetwork.save();
                                console.log("Created new comment");
                            }
                        });
            }
        });
        });
    });
    //add a vew neusualnetworks
    
};

module.exports = seedDB;