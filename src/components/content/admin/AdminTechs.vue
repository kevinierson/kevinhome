<template>
	<div>
		<div>
			<el-button style="font-size: 14px;margin-top: 1em;" @click="dialogFormVisible = true" icon="el-icon-circle-plus-outline"
			 size="small" type="success">添加技术</el-button>
			<el-dialog title="技术管理" :visible.sync="dialogFormVisible">
				<!-- 表单 -->
				<el-form :model="form" label-suffix=":" :rules="rules" ref="form">
					<el-form-item label="技术名称" prop="techname" :label-width="formLabelWidth">
						<el-input v-model="form.techname" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="图片链接" prop="techimg_url" :label-width="formLabelWidth">
						<el-input v-model="form.techimg_url" autocomplete="off"></el-input>
					</el-form-item>

					<!-- 图片上传 -->
					<el-upload drag style="text-align: center;" class="upload-demo" :on-success="handleSuccess" action="http://localhost:8081/admin/covers"
					 :before-upload="beforeAvatarUpload" :limit="1" multiple>
						<i class="el-icon-upload"></i>
						<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
						<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，建议48 x 48像素</div>
					</el-upload>
					<el-form-item style="text-align: right;">
						<el-button @click="cancelForm('form')">取消</el-button>
						<el-button type="primary" @click="submitForm('form')">提交</el-button>
					</el-form-item>
				</el-form>
			</el-dialog>
		</div>
		
		<!-- 技术列表 -->
		<el-table :highlight-current-row="true" :stripe="true" :data="tableData.filter(data => !search || data.techname.toLowerCase().includes(search.toLowerCase()))"
		 style="width: 100%">
			<el-table-column width="110" label="编号" prop="id"></el-table-column>
			<el-table-column width="110" label="名称" prop="techname"></el-table-column>
			<el-table-column width="180" label="日期" prop="createtime"></el-table-column>
			<el-table-column label="图片链接" prop="techimg_url"></el-table-column>
			<el-table-column align="right">
				<template slot="header" slot-scope="scope">
					<el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
				</template>
				<template slot-scope="scope">
					<el-button size="mini" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button size="mini" icon="el-icon-edit-outline" @click="toChildModel(scope.$index, scope.row.id)">篇章>></el-button>
					<el-popconfirm style="padding-left: 10px;" @confirm="handleDelete(scope.row.id)" confirm-button-text='删除'
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
		getTechsInfo,
		saveOrUpdateTech,
		deleteTech
	} from "@/network/admin.js"
	export default {
		name: 'AdminTechs',
		data() {
			return {
				tableData: [],
				search: '',
				dialogFormVisible: false,
				form: {
					techname: '',
					techimg_url: ''
				},
				rules: {
					techname: [{
						required: true,
						message: '请输入技术名称',
						trigger: 'blur'
					}],
					techimg_url: [{
						required: true,
						message: '请输入图片链接',
						trigger: 'blur'
					}]
				},
				formLabelWidth: '85px'
			}
		},
		methods: {
			handleEdit(index, row) {
				console.log(row);
				this.dialogFormVisible = true
				this.form = row
			},
			/* 编辑子模块 */
			toChildModel(index, id) {
				this.$router.push("/admin/chapter/" + id)
			},
			/* 删除技术 */
			handleDelete(id) {
				deleteTech(id).then(res => {
					if (res.status) {
						this.$message({
							message: res.msg,
							type: 'success'
						})
						this.getTech()
					} else {
						this.$message.error(res.msg);
					}
				})
			},
			/* 上传前的钩子 */
			beforeAvatarUpload(file) {
				const isLt = file.size / 1024 / 1024 < 0.01;
				if (!isLt) {
					this.$message.error('上传头像图片大小不能超过 10kb!');
				}
				return isLt;
			},
			/* 上传成功 */
			handleSuccess(response) {
				this.form.techimg_url = response
				this.$emit('onUpload')
				this.$message.success('上传成功')
			},
			/* 提交表单 */
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						saveOrUpdateTech(this.form).then(res => {
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
							this.getTech()
							
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
			getTech(){
				getTechsInfo().then(res => {
					this.tableData = res
				})
			}
		},
		created() {
			this.getTech();
		}
	}
</script>

<style>
	.el-table {
		border-radius: 10px;
		box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, .1);
	}
</style>
