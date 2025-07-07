
        function toggleMenu() {
        const dropdown = document.getElementById("userDropdown");
        dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
        }

        // Fechar o menu ao clicar fora
        document.addEventListener("click", function(event) {
        const menu = document.querySelector(".user-menu");
        const dropdown = document.getElementById("userDropdown");
        if (!menu.contains(event.target)) {
            dropdown.style.display = "none";
        }
        });


        const sidebar = document.getElementById("sidebarMenu");
        const overlay = document.getElementById("sidebarOverlay");
        const openBtn = document.getElementById("openSidebar"); // botão “Todos”
        const closeBtn = document.getElementById("closeSidebar");

        openBtn.addEventListener("click", (e) => {
            e.preventDefault();
            sidebar.classList.add("active");
            overlay.classList.add("active");
        });

        closeBtn.addEventListener("click", () => {
            sidebar.classList.remove("active");
            overlay.classList.remove("active");
        });

        overlay.addEventListener("click", () => {
            sidebar.classList.remove("active");
            overlay.classList.remove("active");
        });

        const toggleDropdown = document.querySelector('.dropdown-toggle');
        const dropdownContent = document.querySelector('.dropdown-content');

        toggleDropdown.addEventListener('click', () => {
            dropdownContent.classList.toggle('active');
        });
   
        // Atualiza o número de itens no ícone do carrinho
        function atualizarContadorCarrinho() {
            const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
            const contador = document.getElementById("cart-count");
            contador.textContent = carrinho.length;
        }

        // Adiciona um item ao carrinho
        function adicionarAoCarrinho(item) {
            let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
            carrinho.push(item); // item pode ser um objeto com id, nome, preço, etc.
            localStorage.setItem("carrinho", JSON.stringify(carrinho));
            atualizarContadorCarrinho();
        }

        // Remove um item do carrinho pelo índice
        function removerDoCarrinho(index) {
            let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
            carrinho.splice(index, 1);
            localStorage.setItem("carrinho", JSON.stringify(carrinho));
            atualizarContadorCarrinho();
        }

        // Atualiza o contador ao carregar a página
        document.addEventListener("DOMContentLoaded", atualizarContadorCarrinho);
    

        // Atualiza o número de itens nos favoritos
        function atualizarContadorFavoritos() {
            const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
            const contadorFav = document.getElementById("fav-count");
            contadorFav.textContent = favoritos.length;
        }

        // Adiciona um item aos favoritos
        function adicionarAosFavoritos(item) {
            let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
            
            // Verifica se o item já está nos favoritos
            const existe = favoritos.some(fav => fav.id === item.id);
            if (!existe) {
                favoritos.push(item);
                localStorage.setItem("favoritos", JSON.stringify(favoritos));
                atualizarContadorFavoritos();
            }
        }

        // Remove um item dos favoritos
        function removerDosFavoritos(id) {
            let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
            favoritos = favoritos.filter(fav => fav.id !== id);
            localStorage.setItem("favoritos", JSON.stringify(favoritos));
            atualizarContadorFavoritos();
        }

        // Atualiza o contador ao carregar a página
        document.addEventListener("DOMContentLoaded", () => {
            atualizarContadorCarrinho();   // Carrinho
            atualizarContadorFavoritos(); // Favoritos
        });
    


    
       
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
       