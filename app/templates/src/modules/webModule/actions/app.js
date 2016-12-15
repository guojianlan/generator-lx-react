import { CHANGELOADING } from '../common/actionType.js'

export function changeLoading(flag){
	return {
		type:CHANGELOADING,
		loading:flag
	}
}