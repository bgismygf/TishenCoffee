<template>
  <div>
      <div class="container mt-3">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb text-main bg-transparent
                     border-bottom border-main border-radius-0 p-0">
            <li class="breadcrumb-item"><router-link to="/" class="text-main">首頁</router-link></li>
            <li class="breadcrumb-item" aria-current="page">菜單</li>
            <li class="breadcrumb-item" aria-current="page">{{ select }}</li>
          </ol>
        </nav>

        <div class="row my-3">
        <div class="col-12 col-lg-2">
          <div class="sticky-top" style="top:20px;">
              <div class="d-flex flex-column" v-for="(item, index) in categories" :key="index">
                <a href="#" class="btn btn-main mb-2" :class="{'active': select == item.title}"
                @click.prevent="getItem(item.title)">{{ item.title }}</a>
              </div>
          </div>
        </div>
        <div class="col-12 col-lg-10">
          <div class="row">
            <div class="col-12 col-md-6 col-lg-4 mb-4"
                 v-for="item in filteredData" :key="item.id">
                <div class="bg-cover-c products-img-h border-radius-5"
                     :style="{backgroundImage: `url(${item.imageUrl})`}">
                </div>
                  <div class="products-favorite">
                    <a href="#" class="text-danger">
                      <i class="far fa-heart fa-lg"></i>
                    </a>
                  </div>
                  <div class="text-white bg-main border-radius-5 p-3 mt-2">
                    <h5 class="border-bottom border-white pb-1 text-center text-md-left">
                      {{ item.title }}
                    </h5>
                      <div class="d-flex justify-content-end align-items-end pb-1">
                        <del>${{ item.origin_price }}</del>
                        <h5 class="ml-auto mb-0 text-danger">特價 ${{ item.price }}</h5>
                      </div>
                        <a href="#"
                          class="btn btn-main border-white btn-sm btn-block"
                          @click.prevent="moreContent(item.id)">
                          查看更多
                        </a>
                        <a href="#" class="btn btn-danger btn-sm btn-block"
                         @click.prevent="addtoCart(item.id)">加入購物車</a>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      select: '全部菜單',
      products: [],
      pagination: {},
      cart: {},
      categories: [
        { title: '全部菜單' },
        { title: '熱食餐點' },
        { title: '輕食甜點' },
        { title: '咖啡飲品' },
        { title: '其他飲品' },
      ],
    };
  },
  methods: {
    getItem(title) {
      this.select = title;
    },
    getProducts() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.ZACPATH}/products/all`;
      // vm.isLoading = true;
      this.$http.get(api).then((response) => {
        // vm.isLoading = false;
        vm.products = response.data.products;
        vm.pagination = response.data.pagination;
      });
    },
    addtoCart(id, qty = 1) {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.ZACPATH}/cart`;
      const cart = {
        product_id: id,
        qty,
      };
      this.$http.post(api, { data: cart }).then(() => {
        vm.$bus.$emit('getCart');
      });
    },
    getCart() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.ZACPATH}/cart`;
      this.$http.get(api).then((response) => {
        vm.cart = response.data.data;
      });
    },
    moreContent(productId) {
      this.$router.push(`/more_content/${productId}`);
    },
  },
  computed: {
    filteredData() {
      const vm = this;
      if (this.select === '全部菜單') {
        return this.products;
      }
      return this.products.filter(item => item.category === vm.select);
    },
  },
  created() {
    this.getProducts();
    this.getCart();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
