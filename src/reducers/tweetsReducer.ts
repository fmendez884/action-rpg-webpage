export default function reducer(state={
    tweets: [],
    fetching: false,
    fetched: false,
    error: null
}, action: any) {
    if (action.type != null) {
        return {...state}
    }
}