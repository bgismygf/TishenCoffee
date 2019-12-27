<template>
  <div>
    <div class="mt-5">
    <form class="form-signin" @submit.prevent="signin">
  <h1 class="h3 mb-3 font-weight-normal text-center">後台登入</h1>
  <label for="inputEmail" class="sr-only">Email address</label>
  <input type="email" id="inputEmail" class="form-control"
          placeholder="Email address"
          required autofocus
          v-model="user.username">
  <label for="inputPassword" class="sr-only">Password</label>
  <input type="password" id="inputPassword" class="form-control" placeholder="Password" required
  v-model="user.password">
  <div class="checkbox mb-3">
  </div>
  <button  class="btn btn-lg btn-main btn-block" type="submit">Sign in</button>
  <p class="mt-2 mb-1 text-muted">&copy; 2019</p>
  <router-link class="text-main" to="/">
  <i class="fas fa-arrow-left"></i>
  回到首頁
  </router-link>
</form>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signin() {
      const vm = this;
      const api = `${process.env.APIPATH}/admin/signin`;
      this.$http.post(api, vm.user).then((response) => {
        if (response.data.success) {
          vm.$router.push('/dashboard/products_manage');
        }
      });
    },
  },
};
</script>
