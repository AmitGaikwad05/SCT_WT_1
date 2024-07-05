var sidebarState = true;
const sidebar = document.getElementById("sidebar");
const menukey = document.getElementById("navkey");

function toggleSidebar(){
    
    if(sidebarState){
        sidebar.style.display = "block";
        menukey.style.display = "none";
        sidebarState = false;
    }
    else{
        sidebar.style.display = "none";
        menukey.style.display = "block";
        sidebarState = true;
}
}
