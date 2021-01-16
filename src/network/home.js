//首页的请求
import {request} from "./request.js"

export function getJdksinfo(){
	return request({
		url: '/front/jdks'
	})
}

export function getTechsinfo(){
	return request({
		url: '/front/jdks'
	})
}