// Action Creator = Customer

// user = {id: 1, username : 'ghalib'} asumsi
export let onLoginUser = (user) => {

    let{id, username} = user

    // Menyimpan data di local storage
    localStorage.setItem('userData', JSON.stringify({id, username}))
    
    // Mengirim data data ke redux, untuk disimpan di redux state
    return {
        type: 'LOGIN_SUCCESS',
        payload: {
            id: user.id,
            username: user.username
        }
    }
}

export let onLogoutUser = () => {


    // Menghapus data dari local storage
    localStorage.removeItem('userData')

    // Mengirim data ke redux, untuk menghapus data user yang login dari redux state
    return {
        type: 'LOGOUT_SUCCESS',
        // payload: {
        //     id: "",
        //     username: ""
        // }
    }
}

// export let keepLogin = (user) => {
//     return {
//         type: 'LOGIN_SUCCESS',
//         payload: {
//             id: user.id,
//             username: user.username
//         }
//     }
// }