<template>
    <div>
        <Navbar></Navbar>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
homenavbg {
  background: rgba(13, 15, 19, 0.719);
  position: absolute;
}
</style>
