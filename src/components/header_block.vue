<template>
    <header class="relative flex flex-wrap items-center justify-between w-full bg-red-800 group py-4 shrink-0" id="header">
      <div class="container relative flex flex-wrap items-center justify-between w-full group py-4 shrink-0">
        <div>
          <a href="https://www.itca.edu.sv">
            <img class="sm:h-6 md:h-6 lg:h-8 xl:h-8 object-cover" id="logo_header" src="https://www.itca.edu.sv/wp-content/uploads/2017/01/logo-new-white-1.png">
          </a>
        </div>
        <div class="items-center justify-between hidden gap-12 md:flex">
          <a class="md:text-base lg:text-lg xl:text-xl font-semibold text-white hover:text-yellow-400">
            <p id="texto_header">Asistente Virtual EduLA ITCA</p>
          </a>
        </div>
        <div class="items-center hidden gap-8 md:flex">
          <a href="#">
            <img class="min-w-0 md:h-4 lg:h-6 max-h-6"  id="logo_redes" src="img/Youtube_logo.png">
          </a>
          <a href="#">
            <img class="min-w-0 md:h-4 lg:h-6 max-h-6" id="logo_instagram" src="img/logo_instagram.png">
          </a>
          <a href="#">
            <img class="min-w-0 md:h-4 lg:h-6 max-h-6" id="logo_instagram" src="img/logo_facebook.png">
          </a>
          <a href="#">
            <img class="min-w-0 md:h-4 lg:h-6 max-h-6" id="logo_instagram" src="img/logo_x.png">
          </a>
          <button class="flex items-center px-4 py-2 text-sm font-bold rounded-xl bg-white text-red-800 hover:bg-yellow-400 hover:text-black transition duration-300">
            Iniciar sesión
          </button>
        </div>
        <a class="text-sm font-semibold md:hidden text-white hover:text-yellow-400">Asistente Virtual ITCA</a>
        <button onclick="(() => { this.closest('.group').classList.toggle('open')})()" class="flex md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 8H21C21.2652 8 21.5196 7.89464 21.7071 7.70711C21.8946 7.51957 22 7.26522 22 7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 2.73478 8 3 8ZM21 16H3C2.73478 16 2.48043 16.1054 2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H21C21.2652 18 21.5196 17.8946 21.7071 17.7071C21.8946 17.5196 22 17.2652 22 17C22 16.7348 21.8946 16.4804 21.7071 16.2929C21.5196 16.1054 21.2652 16 21 16ZM21 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11Z" fill="white"></path>
          </svg>
        </button>
        <div class="relative align-middle items-center flex md:hidden transition-all duration-300 ease-in-out flex-col shadow-main justify-center w-full gap-3 overflow-hidden bg-red-800 max-h-0 group-[.open]:py-4 px-4 squared-2xl group-[.open]:max-h-64 top-full">
          <div class="container relative flex flex-wrap items-center justify-between w-full group py-7 shrink-0">
            <a href="#">
              <img class="min-w-0 max-h-6"  id="logo_redes" src="img/Youtube_logo.png">
            </a>
            <a href="#">
              <img class="min-w-0 max-h-6" id="logo_instagram" src="img/logo_instagram.png">
            </a>
            <a href="#">
              <img class="min-w-0 max-h-6" id="logo_instagram" src="img/logo_facebook.png">
            </a>
            <a href="#">
              <img class="min-w-0 max-h-6" id="logo_instagram" src="img/logo_x.png">
            </a>             
          </div>
          <button class="flex items-center px-4 py-2 text-sm font-bold rounded-xl bg-white text-red-800 hover:bg-yellow-400 hover:text-black transition duration-300">
            Iniciar sesión
          </button>       
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header_Block',
    props: {
      msg: String
    }
  }
  </script>
  
  <style>
  
  </style>
  