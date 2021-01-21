//首页的请求
import {request} from "./request.js"

export function getJavaInfo(){
	return request({
		url: '/front/content/1'
	})
}

export function getTechsInfo(){
	return request({
		url: '/front/techs'
	})
}

export function getChapterById(id){
	return request({
		url: '/front/chapters/' + id
	})
}

export function getContentById(id){
	return request({
		url: '/front/content/' + id
	})
}


export function getContentsById(id){
	return request({
		url: '/front/contents/' + id
	})
}


