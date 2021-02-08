//首页的请求
import {request} from "./request.js"

export function getJavaInfo(){
	return request({
		url: '/front/content/1',
		method:'get'
	})
}

export function getTechsInfo(){
	return request({
		url: '/front/techs',
		method:'get'
	})
}

export function getContentById(id){
	return request({
		url: '/front/content/' + id,
		method:'get'
	})
}

export function getArticleByCateId(cateId){
	return request({
		url: '/front/article/' + cateId,
		method: 'get'
	})
}

//获取内容详情
export function getDetailByCId(cid){
	return request({
		url: '/front/detail/' + cid,
		method: 'get'
	})
}