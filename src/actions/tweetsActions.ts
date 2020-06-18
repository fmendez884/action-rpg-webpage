export {}

    function fetchTweets(){
        return function(dispatch: any) {
            fetch("http://rest.learncode.academy/api/test123/tweets")
                .then((response) => {
                    dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.body})
                })
        }
    }
