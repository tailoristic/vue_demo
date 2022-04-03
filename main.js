const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
  },
  computed: {},
});

// NOTES:
// 'background-color' in quotes if using as v-bind
