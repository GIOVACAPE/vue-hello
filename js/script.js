const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Juan!' , 
        img: 'img/foto.jpg'
    
      }
    }
  }).mount('#app')