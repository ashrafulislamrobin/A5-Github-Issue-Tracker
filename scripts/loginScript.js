const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');


const loginSuccess = () =>{
    const username = usernameInput.value;
    const password = passwordInput.value;
    
    if (username === "admin" && password === "admin123"){
        alert("login Success")
        window.location.assign('./home.html')

    } else{
        alert(false)
    }
    
}