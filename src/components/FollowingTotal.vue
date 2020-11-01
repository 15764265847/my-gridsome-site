<template>
  <el-tab-pane :label="'关注 '+followingTotal" name="following" style="padding: 5px">
    <div v-loading="following.loading">
        <div v-if="following.list.length">
            <el-row style="min-height: 200px; ">
                <el-col :span="8" v-for="(item,index) in following.list" :key="'following'+index" style="padding: 10px">
                    <el-card shadow="hover" style="font-size: 13px;color: #606266;line-height: 20px">
                        <i class="el-icon-star-off"></i>&emsp;
                        <a @click="$router.push(`/user/social/details/${item.name}`)" style=" text-decoration:none;cursor:pointer">{{item.name}}</a>
                        <br>
                        <i class="el-icon-message"></i>&emsp;
                        <a :href="item.htmlUrl" target="_blank" style=" text-decoration:none;cursor:pointer">TA的主页</a>
                        <br>
                        <img :src="item.avatarUrl" style="width: 100%;border-radius:5px;margin-top: 5px">
                    </el-card>
                </el-col>
            </el-row>
            <div style="text-align: center;margin-top: 10px">
                <el-pagination @current-change="onSelect" background layout="prev, pager, next" :current-page.sync="following.query.page"
                    :page-size="following.query.pageSize" :total="following.query.pageNumber*following.query.pageSize">
                </el-pagination>
            </div>
        </div>
        <div style="min-height: 300px;margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center" v-else>
            <font style="font-size: 30px;color:#dddddd ">
                <b>(￢_￢) 还没有关注一个人</b>
            </font>
        </div>
    </div>
</el-tab-pane>
</template>

<script>
export default {

}
</script>

<style>

</style>