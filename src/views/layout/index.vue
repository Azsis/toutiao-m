<template>
  <div class="layout-container">
    <router-view />
    <van-tabbar route>
        <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item to="/qa" icon="search">问答</van-tabbar-item>
        <van-tabbar-item to="/video" icon="friends-o">视频</van-tabbar-item>
        <van-tabbar-item to="/my" icon="setting-o">{{ $store.state.user ? '我的' : '未登录' }}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
    name: 'LayoutIndex',
}
</script>

<style>

</style>