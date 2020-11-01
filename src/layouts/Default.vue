<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>
    <section class="main-content">
        <el-row>
            <el-col :span="6" style="padding-right:10px">
                <el-card shadow="never">
                  <el-menu :default-active="active" @select="onSelect">
                      <g-link v-for="item in constantRouterMap" :key="item.path" :to="item.path">{{ item.meta.title }}<br /></g-link>
                      <!-- <el-menu-item v-for="item in constantRouterMap"
                           :index="item.path">
                          <i :class="item.meta.icon"></i>
                          <span slot="title">{{item.meta.title}}</span>
                      </el-menu-item> -->
                  </el-menu>
              </el-card>
            </el-col>
            <el-col :span="18" style="padding-left:10px">
                <!-- <app-main></app-main> -->
                <slot/>
            </el-col>
        </el-row>
    </section>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import AppMain from '@/components/AppMain.vue';

export default {
  components: {
    AppMain
  },
  data() {
    return {
      constantRouterMap: [
        {
            path: '/new',
            meta: {
                type: "user",
                icon: 'el-icon-star-off',
                title: '最新动态'
            }
        },
        {
            path: '/social',
            meta: {
                type: "user",
                icon: 'el-icon-mobile-phone',
                title: '社交圈'
            },
        },
        {
            path: '/blog',
            meta: {
                type: "user",
                icon: 'el-icon-edit-outline',
                title: '博客列表'
            }
        },
        {
            path: '/project',
            meta: {
                type: "user",
                icon: 'el-icon-service',
                title: '开源项目'
            },
        },
      ],
      active: "",
      parentUrl: "",
      menuList: []
    }
  },
  mounted() {
    let arr = this.$route.path.split("/")
    this.active = "/" + arr[1] + "/" + arr[2]
  },
  methods: {
      onSelect(index) {
          this.$router.push(index)
      }
  }
}
</script>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
