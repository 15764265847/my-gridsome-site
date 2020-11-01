<template>
<Layout>
    <div>
        <el-card shadow="never" style="min-height: 400px;margin-bottom: 20px;padding: 0px 0px 20px 0px">
            <el-tabs v-model="activeTab" type="card">
                <el-tab-pane :label="'粉丝 '+$page.followers.pageInfo.totalItems" name="followers" style="padding: 5px">
                    <div>
                        <div v-if="$page.followers.edges.length">
                            <el-row style="min-height: 200px; ">
                                <el-col :span="8" v-for="(item,index) in $page.followers.edges" :key="'followers'+index" style="padding: 10px">
                                    <el-card shadow="hover" style="font-size: 13px;color: #606266;line-height: 20px">
                                        <i class="el-icon-star-off"></i>&emsp;
                                        <a @click="$router.push(`/user/social/details/${item.node.name}`)" style=" text-decoration:none;cursor:pointer">{{item.node.name}}</a>
                                        <br>
                                        <i class="el-icon-message"></i>&emsp;
                                        <a :href="item.node.htmlUrl" target="_blank" style=" text-decoration:none;cursor:pointer">TA的主页</a>
                                        <br>
                                        <img :src="item.node.avatarUrl" style="width: 100%;border-radius:5px;margin-top: 5px">
                                    </el-card>
                                </el-col>
                            </el-row>
                            <Pager
                                class="pager"
                                :info="$page.followers.pageInfo"
                                nav-class="navigation"
                                link-class="page-link page-item"
                                activeLink-class="active"
                            />
                        </div>
                        <div style="min-height: 300px;margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center" v-else>
                            <font style="font-size: 30px;color:#dddddd ">
                                <b>(￢_￢) 没有一个粉丝</b>
                            </font>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane :label="'关注 '+$page.following.pageInfo.totalItems" name="following" style="padding: 5px">
                    <div>
                        <div v-if="$page.following.edges.length">
                            <el-row style="min-height: 200px; ">
                                <el-col :span="8" v-for="(item,index) in $page.following.edges" :key="'following'+index" style="padding: 10px">
                                    <el-card shadow="hover" style="font-size: 13px;color: #606266;line-height: 20px">
                                        <i class="el-icon-star-off"></i>&emsp;
                                        <a @click="$router.push(`/user/social/details/${item.node.name}`)" style=" text-decoration:none;cursor:pointer">{{item.node.name}}</a>
                                        <br>
                                        <i class="el-icon-message"></i>&emsp;
                                        <a :href="item.node.htmlUrl" target="_blank" style=" text-decoration:none;cursor:pointer">TA的主页</a>
                                        <br>
                                        <img :src="item.node.avatarUrl" style="width: 100%;border-radius:5px;margin-top: 5px">
                                    </el-card>
                                </el-col>
                            </el-row>
                            <Pager
                                class="pager"
                                :info="$page.following.pageInfo"
                                nav-class="navigation"
                                link-class="page-link page-item"
                                activeLink-class="active"
                            />
                        </div>
                        <div style="min-height: 300px;margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center" v-else>
                            <font style="font-size: 30px;color:#dddddd ">
                                <b>(￢_￢) 还没有关注一个人</b>
                            </font>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</Layout>
</template>

<page-query>
query ($page: Int) {
  followers: allFollowers (perPage: 5, page: $page) @paginate {
    pageInfo {
      totalItems
      totalPages
      currentPage
    }
    edges {
      node {
        name
        htmlUrl
        avatarUrl
      }
    }
  }
  following: allFollowing (perPage: 5, page: $page) @paginate {
    pageInfo {
      totalItems
      totalPages
      currentPage
    }
    edges {
      node {
        name
        htmlUrl
        avatarUrl
      }
    }
  }
}
</page-query>

<script>
    // import { mapGetters } from 'vuex'
    // import UserApi from '@/api/user'
    import { Pager } from 'gridsome'
    export default {
        components: {
            Pager
        },
        data() {
            return {
                activeTab: "followers",
                followers: {
                    query: {
                        page: 1,
                        pageSize: 9,
                        pageNumber: 1
                    },
                    loading: false,
                    list: []
                },
                following: {
                    query: {
                        page: 1,
                        pageSize: 9,
                        pageNumber: 1
                    },
                    loading: false,
                    list: []
                }
            }
        },
        methods: {
            
        }
    }
</script>
<style scoped>
.pager .active {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.pager .page-link {
  display: inline;
}
</style>