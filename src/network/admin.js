import {request} from "./request.js"

/* 获取技术列表 */
export function getTechsInfo(){
	return request({
		url: '/front/techs',
		method: 'get'
	})
}

//添加或更新技术
export function saveOrUpdateTech(formData){//表单数据
	return request({
		url: '/admin/saveOrUpdateTech',
		method: 'post',
		data:{
			id: formData.id,
			techname: formData.techname,
			techimg_url: formData.techimg_url
		}
	})
}

//删除技术
export function deleteTech(id){
	return request({
		url: '/admin/deleteTech/' + id,
		method: 'post',
		data: {
			id: id
		}
	})
}

//获取篇章
export function getChapterById(id){
	return request({
		url: '/front/chapters/' + id
	})
}

//添加或更新篇章
export function saveOrUpdateChapter(formData){
	return request({
		url: '/admin/saveOrUpdateChapter',
		method: 'post',
		data:{
			id: formData.id,
			te_id: formData.te_id,
			codename: formData.codename,
			title: formData.title,
			pubdate: formData.pubdate,
			depict: formData.depict
		}
	})
}

//获取内容
export function getContentsById(id){
	return request({
		url: '/front/contents/' + id,
		method:'get'
	})
}

//删除篇章
export function deleteChapter(id){
	return request({
		url: '/admin/deleteChapter/' + id,
		method: 'post',
		data: {
			id: id
		}
	})
}

//添加或更新内容
export function saveOrUpdateContent(formData){
	return request({
		url: '/admin/saveOrUpdateContent',
		method: 'post',
		data:{
			cid: formData.cid,
			ch_id: formData.ch_id,
			name: formData.name,
			c_depict: formData.c_depict,
			img_url: formData.img_url
		}
	})
}

//删除内容
export function deleteContent(cid){
	return request({
		url: '/admin/deleteContent/' + cid,
		method: 'post'
	})
}