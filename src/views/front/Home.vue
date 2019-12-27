<template>
    <div>
        <header class="text-white pb-5 pt-5 header_bg_home bg-cover-c">
            <div class="container">
                <div class="text-center">
                    <h1 class="mb-5" style="margin-top: 165px;">INSTANT. ENJOY. YUMMY</h1>
                        <form class="mb-5">
                            <router-link to="/products" href="#"
                                         class="btn btn-danger">開始訂購
                            </router-link>
                        </form>
                    <a class="text-decoration-none text-white" href="#"
                       style="position: relative;"
                       @click.prevent="slide">
                        <span>服務介紹</span>
                        <div class="home_arrow_animation ">
                            <i class="fas fa-chevron-down"></i>
                        </div>
                    </a>
                </div>
            </div>
      </header>

<!-- 介紹區 -->

    <section class="bg-match text-white py-5 jq_section1">
        <div class="container">
            <div class="row">
                <div class="col-12 justify-content-center">
                    <div class="section1_img border-radius-10 p-5">
                        <h2 class="text-center mb-4 mb-md-5">您有以下的困擾嗎 ?</h2>
                        <div class="row mb-md-3 mb-4">
                            <div class="col-lg-6 col-md-9 col-12">
                                <div class="h5 text-lg-right">
                                     上班時段緊迫，無法購買早餐
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-end mb-md-3 mb-4">
                            <div class="col-lg-5 col-md-6 col-9">
                                <div class="h6 text-left">
                                    上班時段排隊結帳大排長龍
                                </div>
                            </div>
                        </div>
                        <div class="row mb-md-3 mb-4">
                            <div class="col-lg-5 col-md-7 col-12">
                                <div class="h6">
                                    想多睡一會，但還是得早起準備
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-end mb-md-3 mb-4">
                            <div class="col-lg-5 col-md-7 col-12 text-right">
                                <div class="h5">想喝香濃咖啡，但沒咖啡機</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-5 col-md-7 col-12 mb-md-3 mb-4">
                                <div class="h5 text-md-right">
                                    昨天太忙忘了先買好早餐
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-end">
                            <div class="col-lg-5 col-md-7 col-12">
                                <div class="h6 text-right text-md-left">
                                    咖啡機買了，但不會煮......等等
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

<!-- 解決區 -->

    <section class="py-5 mb-2 bg-light">
        <div class="container">
            <h3 class="text-center mb-5">以上困擾，讓我們為您解決</h3>
            <div class="row">
                <div class="col-12 col-md-6 pb-4 pb-md-0">
                    <div class="d-flex">
                        <div class="mr-3" style="font-size:70px;">
                            <i class="far fa-clock"></i>
                        </div>
                        <div>
                            <h4>增加空閒時間</h4>
                            <p>每日 100 元起，就能省下 30 ~ 60 分鐘的時間用來睡眠、吃早餐等。</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 mb-4 mb-md-0">
                    <div class="d-flex">
                        <div class="mr-3" style="font-size:70px;">
                            <i class="far fa-user-circle"></i>
                        </div>
                        <div>
                            <h4>專業配送</h4>
                            <p>只要一通電話，每日清晨 7:00 前將新鮮、營養、健康送到家，
                               口味和配送日期任您調整。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-md-5">
                <div class="col-12 col-md-6 mb-4 mb-md-0">
                    <div class="d-flex">
                        <div class="mr-3" style="font-size:70px;">
                            <i class="fas fa-check-circle"></i>
                        </div>
                    <div>
                        <h4>安心有保障</h4>
                        <p>採用原料都是通過以下認證，可安心食用。</p>
                        <ul>
                            <li>104 年 TQF 認證</li>
                            <li>HACCP 標章</li>
                            <li>鮮乳標章</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 mb-4 mb-md-0">
                    <div class="d-flex">
                        <div class="mr-3" style="font-size:70px;">
                            <i class="fas fa-utensils"></i>
                        </div>
                        <div>
                            <h4>新鮮不外露</h4>
                            <p>免費提供保溫盒，訂戶不用等候開門。</p>
                            <small class="text-danger">注意事項 :</small>
                            <small>
                                為保產品新鮮，開封後請盡速食用；若一時之間無法食用完畢，請放至冰箱冷藏；但冷藏兩小時內 (即早上九點前) 仍須食用完畢，以免產品變質。
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

<!-- 討論區 -->

    <section class="bg-match text-white py-5">
        <div class="container">
            <h3 class="text-center mb-5">來看看大家怎麼說 !</h3>
                <div id="carouselExampleControls" class="carousel slide carousel-fade"
                     data-ride="carousel" data-interval="2000">
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="row justify-content-center">
                        <div class="col-10 col-md-6 col-lg-4">
                            <div class="media">
                                <img src="https://randomuser.me/api/portraits/men/3.jpg" class="mr-3 section3_comment_dialog" alt="...">
                                <div class="media-body">
                                    <div class="alert alert-secondary section3_comment_alert-radius"
                                        role="alert">
                                        <h5 class="mt-0">Tony Ooki</h5>
                                        <p class="section3_comment_text_overflow">
                                            我家離超商好遠 QQ，有訂有輕鬆到 !
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4 d-none d-md-block">
                            <div class="media">
                                <img src="https://randomuser.me/api/portraits/men/6.jpg" class="mr-3 section3_comment_dialog" alt="...">
                                <div class="media-body">
                                    <div class="alert alert-secondary section3_comment_alert-radius"
                                        role="alert">
                                        <h5 class="mt-0">Masayu Kato</h5>
                                        <p class="section3_comment_text_overflow">
                                            下雨天不用出門真方便 !
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 d-none d-lg-block">
                            <div class="media">
                                <img src="https://randomuser.me/api/portraits/women/4.jpg" class="mr-3 section3_comment_dialog" alt="...">
                                <div class="media-body">
                                    <div class="alert alert-secondary section3_comment_alert-radius"
                                        role="alert">
                                        <h5 class="mt-0">Sakura Mana</h5>
                                        <p class="section3_comment_text_overflow">
                                            咖啡品質不錯 !
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row justify-content-center">
                        <div class="col-10 col-md-6 col-lg-4">
                            <div class="media">
                                <img src="https://randomuser.me/api/portraits/women/82.jpg" class="mr-3 section3_comment_dialog" alt="...">
                                <div class="media-body">
                                    <div class="alert alert-secondary section3_comment_alert-radius"
                                        role="alert">
                                        <h5 class="mt-0">Otsuki Hibiki</h5>
                                        <p class="section3_comment_text_overflow">
                                            對忙碌的我來說真是幫我省下時間 ! 推~
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4 d-none d-md-block">
                            <div class="media">
                                <img src="https://randomuser.me/api/portraits/men/9.jpg" class="mr-3 section3_comment_dialog" alt="...">
                                <div class="media-body">
                                    <div class="alert alert-secondary section3_comment_alert-radius"
                                        role="alert">
                                        <h5 class="mt-0">Yua Mikami</h5>
                                        <p class="section3_comment_text_overflow">
                                            買早餐的時間算進去，直接省 2 小時 !
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 d-none d-lg-block">
                            <div class="media">
                                <img src="https://randomuser.me/api/portraits/women/80.jpg" class="mr-3 section3_comment_dialog" alt="...">
                                <div class="media-body">
                                    <div class="alert alert-secondary section3_comment_alert-radius"
                                        role="alert">
                                        <h5 class="mt-0">Kaori Maeda</h5>
                                        <p class="section3_comment_text_overflow">
                                            期待新菜單^Q^
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row justify-content-center">
                        <div class="col-10 col-md-6 col-lg-4">
                            <div class="media">
                                <img src="https://randomuser.me/api/portraits/women/70.jpg" class="mr-3 section3_comment_dialog" alt="...">
                                <div class="media-body">
                                    <div class="alert alert-secondary section3_comment_alert-radius"
                                        role="alert">
                                        <h5 class="mt-0">Hatano Yui</h5>
                                        <p class="section3_comment_text_overflow">
                                            才付 120 元就能一早就有咖啡喝，又能省了我 1 小時多的時間，不用人擠人，不用急著出門，CP 值真是好 !
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4 d-none d-md-block">
                            <div class="media">
                                <img src="https://randomuser.me/api/portraits/women/10.jpg" class="mr-3 section3_comment_dialog" alt="...">
                                <div class="media-body">
                                    <div class="alert alert-secondary section3_comment_alert-radius"
                                        role="alert">
                                        <h5 class="mt-0">Yua Mikami</h5>
                                        <p class="section3_comment_text_overflow">
                                            對於忙到半夜 2 點的我，累到早上不想買早餐，但又怕餓，訂下去後一試成主顧 !
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 d-none d-lg-block">
                            <div class="media">
                                <img src="https://randomuser.me/api/portraits/women/33.jpg" class="mr-3 section3_comment_dialog" alt="...">
                                <div class="media-body">
                                    <div class="alert alert-secondary section3_comment_alert-radius"
                                        role="alert">
                                        <h5 class="mt-0">Aoi Sora</h5>
                                        <p class="section3_comment_text_overflow">
                                            推拿鐵，好喝!!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls"
                    role="button" data-slide="prev">
                    <!-- <span class="carousel-control-prev-icon" aria-hidden="true"></span> -->
                    <!-- <span class="sr-only">Previous</span> -->
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls"
                    role="button" data-slide="next">
                    <!-- <span class="carousel-control-next-icon" aria-hidden="true"></span> -->
                    <!-- <span class="sr-only">Next</span> -->
                    </a>
                </div>
        <!-- 訂閱 -->
    <h3 class="text-center mb-4 border-top border-white pt-3 mt-3">即將出新菜單，趕快來訂閱吧 !</h3>
    <form>
            <div class="form-row align-items-center justify-content-center">
                <div class="col-12 col-md-8 mr-md-1 mb-4 mb-md-0">
                    <label class="sr-only" for="inlineFormInputGroup">Email</label>
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text bg-white px-4">Email</div>
                        </div>
                        <input type="email" class="form-control py-2" id="inlineFormInputGroup"
                            placeholder="輸入 Email ，按下訂閱獲取新菜單">
                        <div class="input-group-append">
                            <button class="btn btn-danger"
                                    type="button"
                                    id="button-addon2">
                                    訂閱
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-auto">
                    <router-link to="/products" href="#" class="btn btn-danger btn-block mb-2 px-4">
                        前往菜單
                        <i class="fas fa-arrow-right"></i>
                    </router-link>
                </div>
            </div>
    </form>
    </div>
    </section>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  methods: {
    slide() {
      const target = $('.jq_section1').offset().top;
      $('html,body').animate({ scrollTop: target }, 1000);
    },
  },
};
</script>
