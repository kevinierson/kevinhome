<template>
	<div>
		<div>
			<el-button style="font-size: 14px;margin-top: 1em;" @click="dialogFormVisible = true" icon="el-icon-circle-plus-outline"
			 size="small" type="success">添加篇章</el-button>
			<!-- 对话框-->
			<el-dialog title="篇章管理" :visible.sync="dialogFormVisible">
				<!-- 表单 -->
				<el-form :model="form" label-suffix=":" :rules="rules" ref="form">
					<el-form-item label="篇章标题" :label-width="formLabelWidth" prop="title">
						<el-input v-model="form.title" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="简短说明" :label-width="formLabelWidth" prop="codename">
						<el-input v-model="form.codename" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="发布日期" :label-width="formLabelWidth" prop="pubdate">
						<el-date-picker v-model="form.pubdate" type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
					</el-form-item>
					<el-form-item label="篇章描述" :label-width="formLabelWidth" prop="depict">
						<el-input v-model="form.depict" type="textarea"></el-input>
					</el-form-item>
					<el-form-item style="text-align: right;">
						<el-button @click="cancelForm('form')">取消</el-button>
						<el-button type="primary" @click="submitForm('form')">提交</el-button>
					</el-form-item>
				</el-form>
			</el-dialog>
		</div>

		<!-- 篇章列表 -->
		<el-table :highlight-current-row="true" :stripe="true" :data="tableData.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
		 style="width: 100%">
			<el-table-column align="center" width="110px" label="编号" prop="id"></el-table-column>
			<el-table-column align="center" width="110px" label="标题" prop="title"></el-table-column>
			<el-table-column align="center" width="150px" label="简短说明" prop="codename"></el-table-column>
			<el-table-column align="center" width="130px" label="发布日期" prop="pubdate"></el-table-column>
			<el-table-column align="center" width="420px" show-overflow-tooltip label="描述" prop="depict"></el-table-column>
			<el-table-column align="right">
				<template slot="header" slot-scope="scope">
					<el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
				</template>
				<template slot-scope="scope">
					<el-button size="mini" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button size="mini" icon="el-icon-edit-outline" @click="handleChildEidt(scope.$index, scope.row.id)">内容>></el-button>
					<el-popconfirm style="padding-left: 10px;" @confirm="handleDelete(scope.$index,scope.row.id)" confirm-button-text='删除'
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
		getChapterById,
		saveOrUpdateChapter,
		deleteChapter
	} from "@/network/admin.js"
	export default {
		name: 'AdminTech',
		data() {
			return {
				tableData: [],
				search: '',
				dialogFormVisible: false,
				rules: {
					title: [{
						required: true,
						message: '请输入标题',
						trigger: 'blur'
					}],
					pubdate: [{
						required: true,
						message: '请选择发布时间',
						trigger: 'blur'
					}],
					depict: [{
						required: true,
						message: '请填写相关描述',
						trigger: 'blur'
					}]
				},
				form: {
					te_id:this.$route.params.id,/* 技术id */
					title: '',
					codename:'',
					pubdate: '',
					depict: ''
				},
				formLabelWidth: '85px'
			}
		},
		methods: {
			/* 编辑篇章 */
			handleEdit(index, row) {
				this.dialogFormVisible = true
				this.form = row
			},
			/* 跳转到子模块 */
			handleChildEidt(index, id) {
				this.$router.push("/admin/content/" + id)
			},
			/* 删除篇章 */
			handleDelete(index, id) {
				deleteChapter(id).then(res => {
					if (res.status) {
						this.$message({
							message: res.msg,
							type: 'success'
						})
						this.getChapters()
					} else {
						this.$message.error(res.msg);
					}
				})
			},
			/* 提交表单 */
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						saveOrUpdateChapter(this.form).then(res => {
							if (res.status) {
								this.$message({
									message: res.msg,
									type: 'success'
								})
							} else {
								this.$message.error(res.msg);
							}
							this.form = []
							this.dialogFormVisible = false
							this.getChapters()
						})
					} else {
						this.$message.error('表单填写有误!!!')
						return false;
					}
				});
			},
			/* 取消 */
			cancelForm(formName) {
				this.dialogFormVisible = false
				this.form = []
			},
			getChapters() {
				getChapterById(this.$route.params.id).then(res => {
					this.tableData = res
				})
			}
		},
		created() {
			this.getChapters()
		}
	}
</script>

<style>
	.el-table {
		border-radius: 10px;
		box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, .1);
	}
</style>
