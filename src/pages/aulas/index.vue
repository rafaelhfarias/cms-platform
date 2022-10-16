<template>
    <div class="w-full overflow-auto mt-10 flex justify-center gap-6 flex-wrap">
        <NuxtLink v-for="modulo in modulos" :to="`/aulas/modulo-${modulo.id}`">       
             <CardModule :name="`Módulo ${modulo.id}`" />
        </NuxtLink>
        
    </div>


</template>


<script setup>

     const modulos = [
          {
               id: "1",
          },
          {
               id: "2",
          },
          {
               id: "3",
          },

     ]

</script>