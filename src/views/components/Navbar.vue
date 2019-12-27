<template>
<div class="bg-main">
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-dark font-w-500 px-0">
        <router-link class="navbar-brand pt-0 mr-lg-4" href="#" to="/">
          <img src="@/assets/img/logo.svg" title="Tíshén coffee" width="165" height="21" alt="">
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto text-center text-lg-left">
      <li class="nav-item mr-lg-3">
        <router-link class="nav-link nav_item_style my-1 my-lg-0" to="/"
        :class="{ 'active' : $route.name === 'Home' }">首頁</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link nav_item_style my-1 my-lg-0" to="/products"
          :class="{ 'active' : $route.name === 'Products' }">菜單</router-link>
      </li>
    </ul>
    <ul class="navbar-nav text-center text-lg-left">
      <li class="nav-item mr-lg-3">
        <a href="#" @click.prevent="signinJudge" class="nav-link nav_item_style my-1 my-lg-0">
          <i v-if="!this.signinStatus" class="fas fa-user-alt-slash fa-lg"></i>
          <i v-else class="fas fa-user-alt fa-lg"></i>
        </a>
        </li>
      <li class="nav-item mr-lg-4">
            <div class="dropdown">
              <a class="nav-link nav_item_style my-1 my-lg-0" id="dropdownMenu2"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div class="nav_badge_block">
                  <i class="fas fa-heart fa-lg"></i>
                  <span class="badge badge-pill badge-danger nav_badge">2</span>
                </div>
              </a>
              <div class="dropdown-menu dropdown-menu-right nav_favorite_block_xs-md"
              aria-labelledby="dropdownMenu2" style="min-width:290px;">
                <div class="px-3 py-2">
                  <h5 class="text-center">我的最愛</h5>
                  <table class="table">
                  <tr>
                    <td class="text-center">
                      <a class="text-danger" href="#">
                            <i class="fas fa-times"></i>
                      </a>
                    </td>
                    <td>招牌漢堡餐</td>
                  </tr>
                  <tr>
                    <td class="text-center">
                      <a class="text-danger" href="#">
                            <i class="fas fa-times"></i>
                      </a>
                    </td>
                    <td>泰式雞肉堡</td>
                  </tr>
              </table>
                    <a href="#" class="btn btn-danger btn-block">
                    全部刪除
                  </a>
                </div>
            </div>
          </div>
        </li>
      <li class="nav-item">
        <div class="dropdown">
          <a class="nav-link nav_item_style my-1 my-lg-0" id="dropdownMenu2"
          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
          :class="{ 'active' : $route.name === 'Createorder' }"
          >
            <div class="nav_badge_block">
              <i class="fas fa-shopping-cart fa-lg"></i>
            <span class="badge badge-pill badge-danger nav_badge"
              v-if="cart.carts">{{ cart.carts.length }}</span>
            </div>
          </a>
          <div class="dropdown-menu dropdown-menu-right"
            aria-labelledby="dropdownMenu2" style="min-width:400px;">
            <div class="px-3 py-2">
              <h5 class="text-center">購物車清單</h5>
              <table class="table">
                  <tr v-for="item in cart.carts" :key="item.id">
                    <td>
                      <a class="text-danger" href="#"
                        @click.prevent="removeCartItem(item.id)">
                            <i class="fas fa-trash-alt"></i>
                      </a>
                    </td>
                    <td>{{ item.product.title }}</td>
                    <td>{{ item.qty }} {{ item.product.unit }}</td>
                    <td>${{ item.total }}</td>
                  </tr>
              </table>
                <router-link
                  to="/create_order" class="btn btn-danger btn-block">
                結帳去
              </router-link>
            </div>
        </div>
      </div>
      </li>
    </ul>
  </div>
  </nav>
 </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      signinStatus: false,
      cart: {},
    };
  },
  methods: {
    signinIcon() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/user/check`;
      this.$http.post(api).then((response) => {
        if (response.data.success) {
          vm.signinStatus = true;
        } else {
          vm.signinStatus = false;
        }
      });
    },
    signinJudge() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/user/check`;
      this.$http.post(api).then((response) => {
        if (response.data.success) {
          vm.$router.push('/dashboard/products_manage');
        } else {
          vm.$router.push('/signin');
        }
      });
    },
    getCart() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.ZACPATH}/cart`;
      this.$http.get(api).then((response) => {
        vm.cart = response.data.data;
        console.log(response);
      });
    },
    removeCartItem(id) {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.ZACPATH}/cart/${id}`;
      this.$http.delete(api).then(() => {
        vm.getCart();
      });
    },
  },
  created() {
    const vm = this;
    this.signinIcon();
    this.getCart();
    this.$bus.$on('getCart', vm.getCart);
  },
};
</script>
