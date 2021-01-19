<template>
	<div>
		<div>
			<el-button style="font-size: 14px;" @click="dialogFormVisible = true" icon="el-icon-circle-plus-outline" size="small"
			 type="success">添加技术</el-button>
			<!-- Form -->
			<el-dialog title="添加技术" :visible.sync="dialogFormVisible">
				<el-form :model="form">
					<el-form-item label="填写名称" :label-width="formLabelWidth">
						<el-input v-model="form.techname" autocomplete="off"></el-input>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="dialogFormVisible = false">取 消</el-button>
					<el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
				</div>
			</el-dialog>
		</div>
		<el-table  :highlight-current-row="true" :stripe="true" :data="tableData.filter(data => !search || data.techname.toLowerCase().includes(search.toLowerCase()))"
		 style="width: 100%">
			<el-table-column align="center" width="100px" label="编号" prop="id"></el-table-column>
			<el-table-column align="center" width="100px" label="标题" prop="title"></el-table-column>
			<el-table-column align="center" width="120px" label="发布日期" prop="pubdate"></el-table-column>
			<el-table-column align="center" width="140px" label="代号" prop="codename"></el-table-column>
			<el-table-column align="center" width="400px" show-overflow-tooltip  label="描述" prop="depict"></el-table-column>
			<el-table-column align="right">
				<template slot="header" slot-scope="scope">
					<el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
				</template>
				<template slot-scope="scope">
					<el-button size="mini" icon="el-icon-edit">编辑</el-button>
					<el-button size="mini" icon="el-icon-edit-outline" @click="handleEdit(scope.$index, scope.row.id)">编辑篇章</el-button>
					<el-button size="mini" icon="el-icon-delete" type="danger" @click="handleDelete(scope.$index, scope.row.id)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	import {
		getInfoById
	} from "@/network/home.js"
	export default {
		name: 'AdminTech',
		data() {
			return {
				tableData: [],
				search: '',
				dialogFormVisible: false,
				form: {
					name: '',
				},
				formLabelWidth: '70px'
			}
		},
		methods: {
			handleEdit(index, id) {
				console.log(index, row);
			},
			handleDelete(index, row) {
				console.log(index, row);
			}
		},
		created() {
			getInfoById(this.$route.params.id).then(res => {
				this.tableData = res
			})
		}
	}
</script>

<style>
	.el-table {
		border-radius: 10px;
		box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, .1);
	}
</style>
