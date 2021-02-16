<template>
	<div>
		<!-- 文章列表 -->
		<el-table height="650" :highlight-current-row="true" :stripe="true" :data="tableData.filter(data => !search || data.url.toLowerCase().includes(search.toLowerCase()))"
		 style="width: 100%">
			<el-table-column align="center" width="80" label="编号" prop="id"></el-table-column>
			<el-table-column align="center" width="250" label="图片">
				<template slot-scope="scope">
					<img :src="'http://www.kevinstudy.cn:8989/admin/file/' + scope.row.url" style="height: 50px" />
				</template>
			</el-table-column>
			<el-table-column align="center" width="400" label="图片链接" prop="url">
				<template slot-scope="scope">
					<p>{{'http://www.kevinstudy.cn:8989/admin/file/' + scope.row.url}}</p>
				</template>
			</el-table-column>
			<el-table-column align="right">
				<template slot="header" slot-scope="scope">
					<el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
				</template>
				<template slot-scope="scope">
					<el-popconfirm style=" margin-right: 2em;" @confirm="handleDelete(scope.row.url)" confirm-button-text='删除'
					 cancel-button-text='点错了' icon="el-icon-info" icon-color="red" title="真的要删除吗？">
						<el-button size="mini" slot="reference" icon="el-icon-delete" type="danger">删除</el-button>
					</el-popconfirm>
				</template>
			</el-table-column>
		</el-table>

	</div>
</template>

<script>
	import {
		getCovers,
		delCover
	} from "@/network/admin.js"
	export default {
		name: 'AdminTechs',
		data() {
			return {
				tableData: [],
				search: ''
			}
		},
		methods: {
			/* 删除图片 */
			handleDelete(imgName) {
				console.log(imgName)
				delCover(imgName).then( res => {
					if(res.status){
						this.$message({
							type: 'success',
							message: res.msg
						})
						this.getCover()
					}else{
						this.$message({
						  type: 'error',
						  message: res.msg
						})
					}
				})
			},
			getCover() {
				getCovers().then(res => {
					this.tableData = res
				})
			}
		},
		created() {
			this.getCover()
		}
	}
</script>
