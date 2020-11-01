<template>
    <Layout>
        <div style="min-height: 600px" v-loading="loading">
            <el-card shadow="never" style="min-height: 400px" v-if="$page.blog.id">
                <div slot="header">
                    <span>{{$page.blog.title}}</span>
                </div>
                <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
                    发布 {{$page.blog.createTime}}
                    <br> 更新 {{$page.blog.updateTime}}
                </div>
                <div style="font-size: 1.1rem;line-height: 1.5;color: #303133;border-bottom: 1px solid #E4E7ED;padding: 5px 0px 5px 0px">
                    <pre style="font-family: '微软雅黑'">{{$page.blog.description}}</pre>
                </div>
                <div v-html="$page.blog.content" class="markdown-body" style="padding-top: 20px"></div>
            </el-card>
            <el-card shadow="never" style="margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center" v-if="!$page.blog.id">
                <font style="font-size: 30px;color:#dddddd ">
                    <b>没有更新 ╮(๑•́ ₃•̀๑)╭</b>
                </font>
            </el-card>
        </div>
    </Layout>
</template>

<page-query>
query {
  blog: blogUpdate(id: "1213213123132") {
    id,
    title,
    content,
    description,
    createTime,
    updateTime
  }
}
</page-query>

<script>
    export default {
        data() {
            return {
                query: {
                    page: 1,
                    pageSize: 1
                },
                loading: false,
                blog: {
                    
                }
            }
        },
    }
</script>