
// Reducer / Divisi


// state = data dari brangkas
// action = data dari form user

// action merupakan sebuah object
let init = {
    id: "",
    username: ""
}

// let action = {
//     type: 'LOGIN_SUCCESS',
//     payload: {
//         id: "1",
//         username: 'ghalib'
//     }
// }



// dapat ditulis dengan cara seperti ini 

//  let AuthReducer = (state = init, action) => {
//     switch (action.type) {
//         case 'LOGIN_SUCCESS':
//            return {...state, id: action.payload.id, username: action.payload.username}
            
//             break;
    
//         default:
//             return state;
//             break;
//     }
// }

// export default AuthReducer


// atau dipersingkat dengan cara
export default (state = init, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {...state, id: action.payload.id, username: action.payload.username}
            
            break;
        case 'LOGOUT_SUCCESS':
            return {...state, id: "", username: ""}
            break;
    
        default:
            return state;
            break;
    }
}





















