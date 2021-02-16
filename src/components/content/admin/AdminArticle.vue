<template>
	<div>
		<div>
			<el-dialog title="技术管理" :visible.sync="dialogFormVisible">
				<!-- 表单 -->
				<el-form :model="form" label-suffix=":" :rules="rules" ref="form">
					<el-form-item label="标题" prop="title" :label-width="formLabelWidth">
						<el-input v-model="form.title" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="描述" :label-width="formLabelWidth" prop="depict">
						<el-input v-model="form.depict" type="textarea"></el-input>
					</el-form-item>
					<el-form-item label="图片链接" prop="cover" :label-width="formLabelWidth">
						<el-input v-model="form.cover" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="超链接" prop="href" :label-width="formLabelWidth">
						<el-input v-model="form.href" autocomplete="off"></el-input>
					</el-form-item>

					<!-- 图片上传 -->
					<el-upload drag style="text-align: center;" class="upload-demo" :on-success="handleSuccess" action="http://www.kevinstudy.cn:8989/admin/covers"
					 :before-upload="beforeAvatarUpload" :limit="1" multiple>
						<i class="el-icon-upload"></i>
						<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
						<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，建议256 x 144像素</div>
					</el-upload>
					<el-form-item style="text-align: right;">
						<el-button @click="cancelForm('form')">取消</el-button>
						<el-button type="primary" @click="submitForm('form')">提交</el-button>
					</el-form-item>
				</el-form>
			</el-dialog>
		</div>
		
		<!-- 文章列表 -->
		<el-table :highlight-current-row="true" :stripe="true" :data="tableData.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
		 style="width: 100%">
			<el-table-column align="center" width="80" label="编号" prop="id"></el-table-column>
			<el-table-column align="center" width="80" label="分类编号" prop="category_id"></el-table-column>
			<el-table-column align="center" width="180" label="标题" prop="title"></el-table-column>
			<el-table-column align="center" width="190" show-overflow-tooltip label="描述" prop="depict"></el-table-column>
			<el-table-column align="center" width="200" show-overflow-tooltip label="图片链接" prop="cover"></el-table-column>
			<el-table-column align="center" width="220" show-overflow-tooltip label="超链接" prop="href"></el-table-column>
			<el-table-column align="right">
				<template slot="header" slot-scope="scope">
					<el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
				</template>
				<template slot-scope="scope">
					<el-button size="mini" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
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
	import {getAllArticle,updateArticle} from "@/network/admin.js"
	export default {
		name: 'AdminTechs',
		data() {
			return {
				tableData: [],
				search: '',
				dialogFormVisible: false,
				form: {
					title: '',
					cover: '',
					depict: '',
					href: ''
				},
				rules: {
					title: [{
						required: true,
						message: '请输入标题',
						trigger: 'blur'
					}],
					cover: [{
						required: true,
						message: '请输入图片链接',
						trigger: 'blur'
					}],
					depict:[{
						required: true,
						message: '简要描述',
						trigger: 'blur'
					}],
					href:[{
						required: true,
						message: '文章链接',
						trigger: 'blur'
					}]
				},
				formLabelWidth: '85px'
			}
		},
		methods: {
			handleEdit(index, row) {
				this.dialogFormVisible = true
				this.form = row
			},
			/* 删除技术 */
			handleDelete(id) {
				
			},
			/* 上传前的钩子 */
			beforeAvatarUpload(file) {
				const isLt = file.size / 1024 / 1024 < 0.1;
				if (!isLt) {
					this.$message.error('上传头像图片大小不能超过 100kb!');
				}
				return isLt;
			},
			/* 上传成功 */
			handleSuccess(response) {
				this.form.cover = response
				this.$emit('onUpload')
				this.$message.success('上传成功')
			},
			/* 提交表单 */
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						updateArticle(this.form).then(res => {
							if (res.status) {
								this.$message({
									message: res.msg,
									type: 'success'
								})
							} else {
								this.$message.error(res.msg);
							}
							this.dialogFormVisible = false
							this.getArticles()
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
			getArticles(){
				getAllArticle().then(res => {
					this.tableData = res
				})
			}
		},
		created() {
			this.getArticles();
		}
	}
</script>

