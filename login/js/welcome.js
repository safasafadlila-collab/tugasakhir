document.addEventListener("DOMContentLoaded", function() {
    
    const username = localStorage.getItem("username");
    
    const userInfo = document.getElementById("userInfo");
    const loginBtn = document.querySelector("button[onclick='goLogin()']");
    
    if (username) {
        if (userInfo) {
            userInfo.innerText = "Halo, " + username;
        }
        
        
        if (loginBtn) {
            loginBtn.innerText = "logout";
            loginBtn.setAttribute("onclick", "goLogout()");
        }
    }
});

function goLogout() {
    localStorage.removeItem("username");
    location.reload();
}
