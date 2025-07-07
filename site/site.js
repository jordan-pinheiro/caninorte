let loginForm = document.querySelector('.header .login-form');
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}


        window.onscroll = function() {myFuction()};
        var header = document.getElementById('myHeader')
        var sticky = header.offsetTop;

        function myFuction(){
            if(window.pageYOffset > sticky){
                header.classList.add('sticky');
            }
            else{ 
                header.classList.remove('sticky');
            }
        }
    
      
      
         searchIcon = document.getElementById('search-icon');
        const searchForm = document.getElementById('search-form');

         searchIcon.addEventListener('click', function() {
        // Alterna entre mostrar e esconder o formulário
        if (searchForm.style.display === "none") {
            searchForm.style.display = "flex";
        } else {
            searchForm.style.display = "none";
        }
         });
         