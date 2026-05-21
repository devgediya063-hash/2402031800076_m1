
function Hello1(){
    const isLoggedIn = false;

    if(isLoggedIn){
        return <h1>Welcome User</h1>
    }else{
        return <h2>Please Login</h2>
    }
}

export default Hello1