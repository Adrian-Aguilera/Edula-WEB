<template>
  <aside :class="{'translate-x-0': isSidebarOpen, 'translate-x-full': !isSidebarOpen}" class="fixed inset-y-0 right-0 w-64 h-screen bg-gray-800 text-white transform transition-transform duration-300 ease-in-out z-40">
    <div class="flex items-center justify-between h-20 border-b border-gray-700 px-4">
      <h1 class="text-2xl font-bold">Mi Sitio</h1>
      <button @click="closeSidebar" class="p-2 bg-gray-700 rounded-full">
        <!-- Icono de Cerrar -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <nav class="flex-grow px-4 py-6">
      <ul>
        <li class="mb-4">
          <a href="#" class="flex items-center p-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">
            <span>Inicio</span>
          </a>
        </li>
        <li class="mb-4">
          <a href="#" class="flex items-center p-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">
            <span>Sobre Nosotros</span>
          </a>
        </li>
        <li class="mb-4">
          <a href="#" class="flex items-center p-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">
            <span>Servicios</span>
          </a>
        </li>
        <li class="mb-4 md:hidden">
          <router-link to="/">  
            <a href="#" class="flex items-center p-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">
              <span>Cerrar Sesión</span>
            </a>
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar_block',
  props: {
    isSidebarOpen: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closeSidebar() {
      this.$emit('toggle-sidebar');
    }
  }
};
</script>

<style>
/* Puedes agregar estilos adicionales aquí si es necesario */
</style>