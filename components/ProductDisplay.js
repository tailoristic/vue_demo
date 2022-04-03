app.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template:
    /*html*/
    `
      <div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <img :src="image" alt="Socks Image" />
          </div>

          <div class="product-info">
            <h1>{{ title }}</h1>
            <br /><br />
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <br />
            <p> Shipping: {{shipping}}</p>
            <br/>
            <!-- <p v-if="inventory > 10">In Stock</p>
                    <p v-else-if="inventory <= 10 && inventory >0">Almost out of Stock!</p>
                    <p v-else>Out of Stock</p> -->
            <ul>
              <li v-for="detail in details">{{detail}}</li>
            </ul>
            <br />
            <div
              v-for="variant, index in variants"
              :key="variant.id"
              @mouseover="updateVariant(index)"
              class="color-circle"
              :style="{backgroundColor: variant.color}"
            ></div>
            <button
              class="button"
              :class="{ disabledButton: !inStock }"
              :disabled="!inStock"
              @click="addToCart"
            >
              Add to Cart
            </button>
          </div>
        </div>`,
  data() {
    return {
      product: "Socks",
      brand: "Socks Brand",
      selectedVariant: 0,
      details: ["50% cotton", "30% wool", "20% Polyester"],
      variants: [
        {
          id: 101,
          color: "green",
          image: "assets/images/socks_green.jpg",
          quantity: 50,
        },
        {
          id: 102,
          color: "blue",
          image: "assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
    };
  },
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
    },
    updateImage(image) {
      this.image = image;
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    shipping() {
      if (this.premium) {
        return "free";
      } else {
        return 2.99;
      }
    },
  },
});
