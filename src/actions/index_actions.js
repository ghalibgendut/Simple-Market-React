// Action Creator = Customer

// user = {id: 1, username : 'ghalib'} asumsi
export let onLoginUser = (user) => {
    
    return {
        type: 'LOGIN_SUCCESS',
        payload: {
            id: user.id,
            username: user.username
        }
    }
}