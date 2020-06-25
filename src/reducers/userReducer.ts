export default function reducer(state = {
    user: {
        id: null,
        name: null,
        age: null,
    },
    fetching: false,
    fetched: false,
    error: null,
}, action: any) {
    if (action.type != null){
        return {...state}
    }
}