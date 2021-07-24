<template>
  <v-app>
     
    
    <v-main>
      <MainLayout/>
    </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
import MainLayout from '@/layouts/mainLayout/MainLayout';

export default {
  name: 'App',

  components: {
    MainLayout,
  },

  data: () => ({
    //
  }),
};
</script>
