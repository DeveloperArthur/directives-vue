import Vue from 'vue'
import App from './App.vue'

Vue.directive('arthur', {
  bind(el, binding, vnode){
    //el.style.backgroundColor = 'green;
    //el.style.backgroundColor = binding.value;
    var delay = 0;
    if(binding.arg == 'background'){
      delay = 3000;
    }
    setTimeout(() => {
      if(binding.arg == 'background'){
        el.style.backgroundColor = binding.value;
      }else{
        el.style.color = binding.value; 
      }
    }, delay);
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
