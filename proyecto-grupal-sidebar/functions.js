var dropdown = document.getElementsByClassName("dropdown-btn");
var i

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
    var dropdownContent = this.nextElementSibling;
    dropdownContent.classList.toggle('display-none');
    });
}

function openMenu(menu){
    var toggleSidebar = document.getElementById(menu)
    toggleSidebar.classList.toggle('display-none')
}
function openSubmenu(aea, menu, submenu){
    var openMenu = document.getElementById(menu)
    openMenu.classList.remove('display-none')
    var openSubmenu = document.getElementById(submenu)
}



// function open(button, menu)
// var toggleSidebar = document.getElementById('hamburger')
// toggleSidebar.addEventListener("click", function(){
//     var sidebar = document.getElementById('sidebar')
//     sidebar.classList.toggle('display-none')
// })
// var firstItem = document.getElementById('first-item')
// firstItem.addEventListener("click", function(){
//     var firstSubmenu = document.getElementById('first-submenu')
//     firstSubmenu.classList.toggle('display-none')
// })

// var toggleSubMenu = document.getElementById('submenu')
// toggleSubMenu.classList.toggle('display-none')

    