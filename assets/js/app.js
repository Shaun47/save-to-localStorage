
(function(){
    document.getElementById('form').addEventListener('submit',function(){
        storeTweet();
        display();
    })
})();


//showing tweet list

window.addEventListener("load",function(){
    display();
});


//remove tweet
document.getElementById('tweet-list').addEventListener('click',function(e){
    e.preventDefault();
    e.target.parentElement.remove();
    remove(e.target.parentElement.textContent);
});



//necessary functions........................................................................


//get item
function getItem(){
    var tweet ;
    let tweet_str = localStorage.getItem('tweets');
    if(tweet_str === null){
        tweet = [];
    }  
    else{
        tweet = JSON.parse(tweet_str);
    }    
    return tweet;

}


//set tweets

function storeTweet(){
    var message = getItem();
    let tweet = document.getElementById('tweet').value;
    message.push(tweet);
    console.log(message);
    localStorage.setItem("tweets",JSON.stringify(message));
}


//remove item
function remove(tweet){
    let tweets = getItem();
    tweets.splice(tweet,1);
    localStorage.setItem("tweets",JSON.stringify(tweets));
    
}

//display function
function display(){
    let tweets = getItem();
    
    
    output = '<ul>';
    for(var i=0; i<tweets.length; i++){
        output += '<li>'+ tweets[i] +'<a href="#" class="remove-tweet">X</a></li>';
    }
    output += '</ul>';

    document.getElementById('tweet-list').innerHTML = output;

}

// <ul>
//                             <li>some text<a href="#" class="remove-tweet">X</a></li>
//                         </ul>