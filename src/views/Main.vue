<template>
  <div class="main">
    <div class="main-nav">
      <main-nav :data="main_nav"></main-nav>
    </div>
    <div class="content">
      <router-view />
    </div>
    <div class="main-bottom"></div>
  </div>
</template>

<script>
// 主界面导航
import MainNav from '@/components/MainNav';

export default {
  components: {
    MainNav
  },
  data() {
    return {
      main_nav: [
        {
          title: '我的',
          name: 'My'
        },
        {
          title: '发现',
          name: 'Find'
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.main {
  width: 100vw;
  height: 100%;
  .main-nav {
    width: 100%;
    height: 49px;
    box-shadow: 0 0 5px 1px #eee;
  }
  .content {
    width: 100%;
    height: calc(100% - 49px - 49px);
  }
  .main-bottom {
    width: 100%;
    height: 49px;
    box-shadow: 0 0 5px 1px #eee;
  }
}
</style>