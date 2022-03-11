<template>
  <div class="footer-guide">
      <span class="guide-item " :class="{on: $route.path==='/msite'}" @click="goto('/msite')">
          <span><i class="iconfont icon-Uzhan"></i></span>
          <span>首页</span>
      </span>
       <span class="guide-item" :class="{on: $route.path==='/search'}" @click="goto('/search')">
          <span><i class="iconfont icon-search on" ></i></span>
          <span>搜索</span>
      </span>
       <span class="guide-item" :class="{on: $route.path==='/order'}" @click="goto('/order')">
          <span><i class="iconfont icon-xiugaidingdan" ></i></span>
          <span>订单</span>
      </span>
       <span class="guide-item" :class="{on: $route.path==='/profile'}" @click="goto('/profile')">
          <span><i class="iconfont icon-gerentouxiang" ></i></span>
          <span>我的</span>
      </span>
  </div>
</template>

<script>
export default {
    methods:{
        goto(path){
            this.$router.replace(path)
        }
    }
}
</script>

<style lang="stylus">
    @import '../../common/stylus/mixins.styl'
    .footer-guide
        top-border-1px(#ccc)
        position fixed
        bottom 0
        left 0
        height 50px
        width 100%
        display flex
        flex-direction row
        .guide-item
            display flex
            flex-direction column
            width  25%
            justify-content center
            align-items center
            &.on
                color $green
            span
                font-size 12px
                i
                    font-size 22px
</style>