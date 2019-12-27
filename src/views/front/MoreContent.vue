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
                <router-link to="/products" class="text-main">菜單</router-link>
                </li>
            <li class="breadcrumb-item">
                <router-link to="/products" class="text-main">輕食餐點</router-link>
                </li>
            <li class="breadcrumb-item" aria-current="page">招牌漢堡餐</li>
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
                    <p></p>
                </div>
                <div class="input-group">
                    <select class="form-control mr-1">
                        <option selected disabled>請選擇數量</option>
                        <option value="num" v-for="num in 10" :key="num">
                            {{num}} {{product.unit}}
                        </option>
                    </select>
                   <a href="#" class="btn btn-main">加入購物車</a>
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
    };
  },
  methods: {
    getProductMoreContent() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.ZACPATH}/product/${vm.productId}`;
      this.$http.get(api).then((response) => {
        vm.product = response.data.product;
        console.log('po', response);
      });
    },
  },
  created() {
    this.productId = this.$route.params.productId;
    console.log(this.productId);
    this.getProductMoreContent();
  },
};
</script>
