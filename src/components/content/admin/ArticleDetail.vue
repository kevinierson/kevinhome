<template>
  <div>
    <el-row style="margin: 18px 0px 0px 18px ">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/admin/dashboard'}">管理中心</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/admin/content/book'}">内容管理</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/admin/content/article'}">文章管理</el-breadcrumb-item>
        <el-breadcrumb-item>编辑器</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <el-row>
      <el-input
        v-model="article.title"
        style="margin: 10px 0px;font-size: 18px;"
        placeholder="请输入标题"></el-input>
    </el-row>
    <el-row style="height: calc(100vh - 140px);">
      <mavon-editor
        v-model="article.detail_content_md"
				:ishljs = "true"
        style="height: 100%;"
        ref=md
        @save="saveArticles"
        fontSize="16px">
      </mavon-editor>
    </el-row>
  </div>
</template>

<script>
	import {saveOrUpdateDetail, getDetailIdByCId} from "@/network/admin.js"
  export default {
    name: 'Editor',
    data () {
      return {
        article: {
					id: '',
					content_id: '',
					title: '',
					detail_content_md: ''
				}
      }
    },
    methods: {
      saveArticles (value, render) {
        // value 是 md，render 是 html
        this.$confirm('是否保存并发布文章?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
					saveOrUpdateDetail(value, render, this.article).then( res => {
						if(res.status){
							this.$message({
								type: 'success',
								message: res.msg
							})
						}
					})
				 }
        ).catch(() => {
          this.$message({
            type: 'error',
            message: '发布失败!'
          })
        })
      },
			getDetailId(){
				getDetailIdByCId(this.$route.params.id).then( res => {
					console.log(res)
					if(res.data != null){
						this.article = res.data
					}else{
						this.article = []
						this.article.id = -1;
						this.article.content_id = this.$route.params.id;
					}
				})
			}
    },
		created() {
			this.getDetailId()
		}
  }
</script>
