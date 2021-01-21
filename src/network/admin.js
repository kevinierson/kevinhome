import {request} from "./request.js"

/* 获取技术列表 */
export function getTechsInfo(){
	return request({
		url: '/front/techs',
		method: 'get'
	})
}

//添加技术
export function saveTech(formData){//表单数据
	return request({
		url: '/admin/saveTech',
		method: 'post',
		data:{
			id: formData.id,
			techname: formData.techname,
			techimg_url: formData.techimg_url
		}
	})
}

export function deleteTech(id){
	return request({
		url: '/admin/deleteTech/' + id,
		method: 'post',
		data: {
			id: id
		}
	})
}