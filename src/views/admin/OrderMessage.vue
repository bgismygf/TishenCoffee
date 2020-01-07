<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <table class="table mt-5">
            <thead>
                <tr>
                    <th>購買時間</th>
                    <th class="text-left">訂購人資料</th>
                    <th>購買款項</th>
                    <th class="text-center">應付金額</th>
                    <th class="text-center">是否付款</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in orders" :key="item.id" v-if="index > 0">
                    <td>{{ item.create_at | date }}</td>
                    <td>
                        <ul class="list-unstyled">
                            <li v-if="item.user">
                                姓名: {{ item.user.name }}
                            </li>
                            <li v-if="item.user">
                                電話: {{ item.user.tel }}
                            </li>
                            <li v-if="item.user">
                                Email: {{ item.user.email }}
                            </li>
                            <li v-if="item.user">
                                地址: {{ item.user.address }}
                            </li>
                        </ul>
                    </td>
                    <td>
                        <ul class="list-unstyled">
                            <li v-for="(product, id) in item.products" :key="id">
                                {{product.product.title}}: {{product.qty}}
                                {{product.product.unit}}
                            </li>
                        </ul>
                    </td>
                    <td class="text-right">{{ item.total | currency }}</td>
                    <td class="text-center">
                        <span class="text-success" v-if="item.is_paid">已付款</span>
                        <span class="text-danger" v-else>未付款</span>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- 分頁扭 -->
        <Pagination :pages="pagination" @emitPages="getOrder"></Pagination>
    </div>
</template>

<script>
import Pagination from '../components/Pagination';

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      orders: {
        user: {},
      },
      pagination: {},
      isLoading: false,
    };
  },
  methods: {
    getOrder(page = 1) {
      const vm = this;
      let dataOrder = {};
      const api = `${process.env.APIPATH}/api/${process.env.ZACPATH}/admin/orders?page=${page}`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        vm.isLoading = false;
        dataOrder = response.data.orders;
        vm.pagination = response.data.pagination;
        vm.orders = JSON.parse(JSON.stringify(dataOrder));
      });
    },
  },
  created() {
    this.getOrder();
  },
};
</script>
