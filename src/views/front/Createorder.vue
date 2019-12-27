<template>
  <div>
    <div class="container">
        <div class="row justify-content-center text-center mt-5 mb-3">
            <div class="col-sm-12 col-md-4">
                <h6 class="border-radius-5 border-2px py-2 px-3 bg-main text-white">
                    1.確認購物清單
                    <i class="far fa-circle"></i>
                    <!-- <i class="fas fa-check-circle"></i> -->
                </h6>
            </div>
            <div class="col-sm-12 col-md-4">
                <h6 class="border-radius-5 border-2px py-2 px-3 border-main">
                    2.填寫訂購資料
                    <i class="far fa-circle"></i>
                </h6>
            </div>
            <div class="col-sm-12 col-md-4">
                <h6 class="border-radius-5 border-2px py-2 px-3 border-main">
                    3.付款 & 完成
                    <i class="far fa-circle"></i>
                </h6>
            </div>
        </div>
        <!-- step 1 -->
                <div class="table-responsive" v-if="step === 1">
                    <table class="table mt-3 mb-4 table-td">
                <thead>
                    <tr>
                    <th scope="col" class="d-none d-md-table-cell text-center">縮圖</th>
                    <th scope="col">品名</th>
                    <th scope="col" class="d-none d-sm-table-cell">數量</th>
                    <th scope="col" class="text-center">價格</th>
                    <th scope="col" class="text-center">取消</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in cart.carts" :key="item.id">
                    <td class="d-none d-md-table-cell">
                        <div class="table-img bg-cover-c border-radius-10"
                            :style="{backgroundImage: `url(${item.product.imageUrl})`}">
                        </div>
                    </td>
                    <td><div>{{ item.product.title }}</div>
                        <div v-if="item.coupon"
                            class="text-success mt-2">已套用折價卷 - [carolshop95]
                        </div>
                    </td>
                    <td class="d-none d-sm-table-cell">{{ item.qty }} / {{ item.product.unit }}</td>
                    <td class="text-right">
                        <div>${{ item.total }}</div>
                        <!-- <del>$100</del>
                        <div class="text-success mt-2">$95</div> -->
                    </td>
                    <td class="text-center">
                        <a class="text-danger" @click.prevent="removeCartItem(item.id)" href="#">
                            <i class="fas fa-trash-alt"></i>
                        </a>
                    </td>
                    </tr>
                </tbody>
                <tfoot class="bg-light table-tfoot">
                    <tr>
                        <td class="d-none d-md-table-cell"></td>
                        <td class="d-none d-sm-table-cell"></td>
                        <td class="text-right" v-if="cart.carts"
                          >共 {{cart.carts.length}} 件</td>
                        <td class="text-right">總計</td>
                        <td class="text-right">${{ cart.total }}</td>
                    </tr>
                    <tr v-if="cart.final_total !== cart.total">
                        <td class="d-none d-md-table-cell"></td>
                        <td class="d-none d-sm-table-cell"></td>
                        <td class="text-right text-success" colspan="2">折扣後金額</td>
                        <td class="text-right text-success">$ {{ cart.final_total }}</td>
                    </tr>
                </tfoot>
                </table>
            <div class="input-group mb-4">
                <input type="text" class="form-control"
                        placeholder="請輸入折價卷代碼"
                        aria-label="請輸入折價卷代碼"
                        aria-describedby="button-addon2"
                        v-model="coupon_code">
                <div class="input-group-append">
                    <button class="btn btn-success"
                            type="button"
                            id="button-addon2"
                            @click="addCouponCode">套用折價卷
                    </button>
                </div>
            </div>
            <div class="d-flex justify-content-between mb-4">
                <router-link to="/products" class="btn btn-main">
                    <i class="fas fa-arrow-left"></i>
                    繼續購買
                </router-link>
                <a href="#" class="btn btn-danger" @click.prevent="step = 2">
                    填寫訂購資料
                    <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
<!-- step 2 -->
<div class="row justify-content-center mb-4" v-if="step === 2">
    <div class="col-md-10">
       <div class="accordion" id="accordionExample">
          <div class="text-center justify-content-center d-flex" id="headingOne">
              <a href="#" class="text-main d-flex flex-column w-25"
              @click.prevent="listSwitchValue = !listSwitchValue">
                <template v-if="listSwitchValue === false">
                    <span>顯示購物清單</span>
                    <span>
                    <i class="fas fa-caret-down"></i>
                    </span>
                </template>

                <template v-if="listSwitchValue === true">
                        <span>關閉購物清單</span>
                        <span>
                    <i class="fas fa-caret-up"></i>
                    </span>
                    </template>
              </a>
          </div>
          <div class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample"
          :class="{'show' : listSwitchValue === true }">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">品名</th>
                      <th scope="col" width="25%">數量</th>
                      <th scope="col" width="15%">價格</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>招牌漢堡餐</td>
                      <td>1 份</td>
                      <td class="text-right">$95</td>
                    </tr>
                    <tr>
                      <td>泰式雞肉堡</td>
                      <td>1 份</td>
                      <td class="text-right">$95</td>
                    </tr>
                  </tbody>
                  <tfoot>
                      <td></td>
                      <td>總計</td>
                      <td class="text-right">$190</td>
                  </tfoot>
                </table>
            </div>
      </div>

        <form @submit.prevent="createOrder">
          <h5 class="text-center text-white mb-3 bg-main py-2 border-radius-5">訂購資料</h5>
          <div class="form-row">
            <div class="form-group col-12">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" name="email"
                placeholder="請輸入 Email"
                v-model="form.user.email"
                v-validate="'required|email'">
              <span class="text-danger" v-if="errors.has('email')">
              {{errors.first('email')}}
              </span>
            </div>
          </div>
          <div class="form-group">
            <label for="name">姓名</label>
            <input type="text" class="form-control" id="name" name="name" placeholder="請輸入訂購人姓名"
            v-model="form.user.name" v-validate="'required'">
            <span class="text-danger" v-if="errors.has('name')">
              請輸入您的姓名
            </span>
          </div>
          <div class="form-group">
            <label for="tel">電話</label>
            <input type="text" class="form-control" id="tel" name="tel" placeholder="請輸入訂購人電話"
            v-model="form.user.tel" v-validate="'required'">
            <span class="text-danger" v-if="errors.has('tel')">
              請輸入您的電話
            </span>
          </div>
          <div class="form-group">
            <label for="address">地址</label>
            <input type="text" class="form-control" id="address" name="address"
              placeholder="請輸入訂購人地址"
              v-model="form.user.address"
              v-validate="'required'">
            <span class="text-danger" v-if="errors.has('address')">
              請輸入您的地址
            </span>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">留言</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"
            v-model="form.message"></textarea>
          </div>
          <div class="d-flex justify-content-between">
            <a href="#" class="btn btn-main" @click.prevent="step = 1">
              <i class="fas fa-arrow-left"></i>
              回上一步
              </a>
            <a href="#" class="btn btn-danger" @click.prevent="createOrder">
              確認訂購
              <i class="fas fa-arrow-right"></i>
              </a>
          </div>
        </form>
    </div>
  </div>
    <!-- step 3 -->
    <div v-if="step === 3">
        <table class="table mb-3">
                    <tr>
                      <th width="150">訂購人 Email</th>
                      <td v-if="orderData.user">{{orderData.user.email}}</td>
                    </tr>
                    <tr>
                      <th width="150">訂購人姓名</th>
                      <td v-if="orderData.user">{{orderData.user.name}}</td>
                    </tr>
                    <tr>
                      <th width="150">訂購人電話</th>
                      <td v-if="orderData.user">{{orderData.user.tel}}</td>
                    </tr>
                    <tr>
                      <th width="150">留言</th>
                      <td v-if="orderData.user">{{orderData.user.address}}</td>
                    </tr>
                    <tr>
                      <th width="150">付款狀態</th>
                      <td v-if="!orderData.is_paid">尚未付款</td>
                      <td v-else class="text-success">付款成功，感謝您的訂購，我們將盡快與您聯絡</td>
                    </tr>
            </table>
            <div class="mb-5">
              <div v-if="!orderData.is_paid" class="text-right">
                <a href="#" class="btn btn-danger" @click.prevent="payOrder()">確認付款</a>
              </div>
              <div v-if="orderData.is_paid" class="text-right">
                <router-link to="/products" class="btn btn-main">
                繼續逛逛
                <i class="fas fa-arrow-right"></i>
                </router-link>
              </div>
          </div>
    </div>
</div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      cart: {},
      form: {
        user: {
          email: '',
          name: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      orderData: {},
      orderId: '',
      step: 1,
      coupon_code: '',
      listSwitchValue: false,
    };
  },
  methods: {
    listSwitch() {
      if (this.listSwitchValue) {
        $('.collapse').collapse('show');
      } else {
        $('.collapse').collapse('hide');
      }
    },
    getCart() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.ZACPATH}/cart`;
      this.$http.get(api).then((response) => {
        vm.cart = response.data.data;
      });
    },
    removeCartItem(id) {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.ZACPATH}/cart/${id}`;
      this.$http.delete(api).then(() => {
        vm.getCart();
        vm.$bus.$emit('getCart');
      });
    },
    addCouponCode() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.ZACPATH}/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      this.$http.post(api, { data: coupon }).then(() => {
        vm.coupon_code = '';
        vm.getCart();
      });
    },
    createOrder() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.ZACPATH}/order`;
      const order = vm.form;
      this.$validator.validate().then((valid) => {
        if (valid) {
          vm.$http.post(api, { data: order }).then((response) => {
            vm.step = 3;
            console.log(response.data.orderId);
            vm.orderId = response.data.orderId;
            vm.getOrder(vm.orderId);
          });
        } else {
          console.log('no');
        }
      });
    },
    getOrder(id) {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.ZACPATH}/order/${id}`;
      this.$http.get(api).then((response) => {
        vm.orderData = response.data.order;
        console.log('order', response);
      });
    },
    payOrder() {
      const vm = this;
      const id = vm.orderId;
      const api = `${process.env.APIPATH}/api/${process.env.ZACPATH}/pay/${id}`;
      this.$http.post(api).then((response) => {
        console.log('payOrder', response);
        vm.getOrder(id);
        vm.$bus.$emit('getCart');
      });
    },
  },
  created() {
    this.getCart();
  },
};
</script>
