export default {
  methods: {
    MouseIn: (e) => {
      e.target.classList.add('hovered')
      const items = document.getElementsByClassName('menu-item');
      for(const item of items) {
        if(!item.classList.contains('hovered')) {
          item.classList.add('hidden')
        }
      }
    },
    MouseOut: (e) => {
      e.target.classList.remove('hovered')
      const items = document.getElementsByClassName('menu-item');
      for(const item of items) {
        if(!item.classList.contains('hovered')) {
          item.classList.remove('hidden')
        }
      }
    }
  }
}