<template>
	<el-upload 
	 class="img-upload" 
	 ref="upload" 
	 action="http://localhost:8081/admin/covers" 
   :on-preview="handlePreview"
	 :on-remove="handleRemove" 
	 :before-upload="beforeAvatarUpload" 
	 :before-remove="beforeRemove" 
	 :on-success="handleSuccess"
	  multiple 
	 :limit="1" 
	 :on-exceed="handleExceed" 
	 :file-list="fileList">
		<el-button size="small" type="primary">点击上传</el-button>
		<div slot="tip" class="el-upload__tip">只能上传jpg文件，建议256 x 144像素</div>
	</el-upload>
</template>

<script>
	export default {
		name: 'ImgUpload',
		data() {
			return {
				fileList: [],
				url: ''
			}
		},
		methods: {
			handleRemove(file, fileList) {},
			handlePreview(file) {},
			handleExceed(files, fileList) {
				this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isLt = file.size / 1024 / 1024 < 0.256;

				if (!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if (!isLt) {
					this.$message.error('上传头像图片大小不能超过 256kb!');
				}
				return isJPG && isLt;
			},
			beforeRemove(file, fileList) {
				return this.$confirm(`确定移除 ${file.name}？`)
			},
			handleSuccess(response) {
				this.url = response
				this.$emit('onUpload')
				this.$message.warning('上传成功')
			},
			clear() {
				this.$refs.upload.clearFiles()
			}
		}
	}
</script>
