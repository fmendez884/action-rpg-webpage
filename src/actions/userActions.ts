export function fetchUser(){
    return {
        type: "FETCH_USER_FULFILLED",
        payload: {
            name: "name",
            age: 35,
        }
    }
}

export function setUserName(name: string) {
    return {
        type: 'SET_USER_NAME',
        payload: name,
    }
}

export function setUserAge(age: number) {
    return {
        type: 'SET_USER_AGE',
        payload: age,
    }
}