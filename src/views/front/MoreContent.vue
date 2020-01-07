<template>
  <div>
    <div class="container mt-3">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb text-main bg-transparent
                    border-bottom border-main border-radius-0 p-0">
            <li class="breadcrumb-item">
                <router-link to="/" class="text-main">首頁</router-link>
                </li>
            <li class="breadcrumb-item">
                <router-link to="/product_list" class="text-main">菜單</router-link>
                </li>
            <li class="breadcrumb-item">
                <router-link :to="{path: '/product_list', query: {category: product.category}}"
                  class="text-main">{{product.category}}</router-link>
                </li>
            <li class="breadcrumb-item" aria-current="page">{{product.title}}</li>
          </ol>
        </nav>

        <div class="row my-3">
            <div class="col-md-4 mb-3 mb-md-0">
                <div class="sticky-top" style="top:20px;">
                    <h1 class="h2">{{product.title}}</h1>
                <div class="d-flex justify-content-end align-items-end mb-3">
                    <del class="text-muted">售價 ${{product.origin_price}}</del>
                    <div class="h3 ml-auto mb-0 text-danger">
                        <small>特價 $</small>
                        <strong>{{product.price}}</strong>
                    </div>
                </div>
                <div class="border-top pt-3 text-muted">
                        <p>{{product.title}} {{qty}} {{product.unit}}</p>
                        <p v-if="product.price >= 200">香脆薯條 {{qty}} {{product.unit}}</p>
                        <p v-if="product.price > 100">$100 飲品或紅茶拿鐵(預設) {{qty}} 杯</p>
                </div>
                <div class="input-group">
                    <select class="form-control mr-1" v-model="qty">
                        <option value="0" selected disabled>請選擇數量</option>
                        <option :value="num" v-for="num in 10" :key="num">
                            選購 {{num}} {{product.unit}}
                        </option>
                    </select>
                   <a href="#" class="btn btn-main"
                    @click.prevent="addtoCart(product.id, qty)">加入購物車</a>
                </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="bg-cover-c border-radius-5" style="height: 600px;"
                    :style="{backgroundImage: `url(${product.imageUrl})`}">
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
      productId: '',
      product: {},
      qty: 0,
    };
  },
  methods: {
    getProductMoreContent() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.ZACPATH}/product/${vm.productId}`;
      this.$http.get(api).then((response) => {
        vm.product = response.data.product;
      });
    },
    addtoCart(id, qty) {
      if (qty === 0) {
        this.$bus.$emit('message:push', '請選擇數量', 'danger');
        return;
      }
      const cart = {
        product_id: id,
        qty,
      };
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.ZACPATH}/cart`;
      this.$http.post(api, { data: cart }).then(() => {
        vm.$bus.$emit('getCart');
        vm.$bus.$emit('message:push', '已加入購物車', 'success');
      });
    },
  },
  created() {
    this.productId = this.$route.params.productId;
    this.getProductMoreContent();
  },
};
</script>
