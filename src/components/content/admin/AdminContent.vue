<template>
	<div>
		<div>
			<el-button style="font-size: 14px;margin-top: 1em;" @click="dialogFormVisible = true" icon="el-icon-circle-plus-outline"
			 size="small" type="success">添加内容</el-button>
			<!-- 对话框 -->
			<el-dialog title="内容管理" :visible.sync="dialogFormVisible">
				<!-- 表单 -->
				<el-form :model="form" label-suffix=":" :rules="rules" ref="form">
					<el-form-item label="内容标题" :label-width="formLabelWidth" prop="name">
						<el-input v-model="form.name" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="简要描述" :label-width="formLabelWidth" prop="c_depict">
						<el-input v-model="form.c_depict" type="textarea"></el-input>
					</el-form-item>
					<el-form-item label="图片链接" :label-width="formLabelWidth" prop="img_url" >
						<el-input v-model="form.img_url" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item style="text-align: right;">
						<el-button @click="cancelForm('form')">取消</el-button>
						<el-button type="primary" @click="submitForm('form')">提交</el-button>
					</el-form-item>
				</el-form>
			</el-dialog>
		</div>
		<el-table :highlight-current-row="true" :stripe="true" :data="tableData.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
		 style="width: 100%">c
			<el-table-column align="center" width="110px" label="编号" prop="cid"></el-table-column>
			<el-table-column align="center" width="110px" label="标题" prop="name"></el-table-column>
			<el-table-column align="center" width="380px" show-overflow-tooltip label="描述" prop="c_depict"></el-table-column>
			<el-table-column align="center" width="250px" label="图片链接" prop="img_url">
				<template slot-scope="scope">
				        <el-popover trigger="hover" placement="top">
				          <p>{{ scope.row.img_url }}</p>
				          <div slot="reference" class="name-wrapper">
				            <el-tag size="medium">{{ scope.row.img_url }}</el-tag>
				          </div>
				        </el-popover>
				      </template>
			</el-table-column>
			<el-table-column align="right">
				<template slot="header" slot-scope="scope">
					<el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
				</template>
				<template slot-scope="scope">
					<el-button size="mini" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button size="mini" icon="el-icon-edit-outline" @click="toChildModel (scope.$index, scope.row.cid)">详情>></el-button>
					<el-popconfirm style="padding-left: 10px;" @confirm="handleDelete(scope.$index,scope.row.cid)" confirm-button-text='删除'
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
		getContentsById,
		saveOrUpdateContent,
		deleteContent
	} from "@/network/admin.js"
	export default {
		name: 'AdminContent',
		data() {
			return {
				tableData: [],
				search: '',
				dialogFormVisible: false,
				rules:{
					name: [{
						required: true,
						message: '请输入标题',
						trigger: 'blur'
					}],
					img_url: [{
						required: true,
						message: '请输入图片链接',
						trigger: 'blur'
					}],
					c_depict: [{
						required: true,
						message: '请输入相关描述',
						trigger: 'blur'
					}]
				},
				form: {
					ch_id: this.$route.params.id,
					name: '',
					c_depict: '',
					img_url: ''
				},
				formLabelWidth: '85px'
			}
		},
		methods: {
			toChildModel(index, id){
				this.$router.push("/admin/detail/" + id);
			},
			handleEdit(index, row) {
				this.dialogFormVisible = true
				this.form = row
			},
			/* 删除内容 */
			handleDelete(index, cid) {
				deleteContent(cid).then(res => {
					if(res.status){
						this.$message({
							message: res.msg,
							type: 'success'
						})
						this.getContents()
					}else{
						this.$message.error(res.msg);
					}
				})
			},
			/* 提交内容 */
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						saveOrUpdateContent(this.form).then(res => {
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
							this.getContents()
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
			getContents() {
				getContentsById(this.$route.params.id).then(res => {
					this.tableData = res
				})
			}
		},
		created() {
			this.getContents()
		}
	}
</script>

<style>
	.el-table {
		border-radius: 10px;
		box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, .1);
	}
</style>
