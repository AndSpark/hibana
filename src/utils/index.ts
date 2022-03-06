const localGet = (key:string) => {
	const value = window.localStorage.getItem(key)
  try {
    return JSON.parse(localStorage.getItem(key) as string)
  } catch (error) {
    return value
  } 
}

const localSet = (key: string, value: string) => {
  window.localStorage.setItem(key, JSON.stringify(value))
}

const localRemove = (key: string) => {
  window.localStorage.removeItem(key)
}


// 将扁平化数组转换为树状数组， array为原数组，parentKey为 父级对象属性，childKey为 子对象属性，两者关系为 父级对象属性的值为子对象属性的值， 父级子数组的属性名为childArrKey，判断为顶级是childKey === topKeyValue

const formatTree = (array: any[],parentKey: string,topKeyValue: any,childKey: string, childArrKey: string) => {
	const arr:any[] = JSON.parse(JSON.stringify(array))
	const top:any[] = []
	const rest = arr.filter((v) => {
		if (v[childKey] === topKeyValue) {
			top.push({
				...v,
				[childArrKey]:[]
			})
			return false
		}
		return true
	})

	format(rest,top,parentKey,childKey,childArrKey)

	top.forEach(v => {
		if (!v[childArrKey].length) {
			delete v[childArrKey]
		}
	})

	return top

	function format(rest: any[], parent: any[], parentKey: string, childKey: string, childArrKey: string) {
		
		let parent2:any[] = []
		rest = rest.filter((v) => {
			let remove = false
			parent.forEach(x => {
				if (x[parentKey] === v[childKey]) {
					remove = true
					if (!x[childArrKey]) {
						x[childArrKey] = []
						x[childArrKey].push(v)
					} else {
						x[childArrKey].push(v)
						parent2.push(v)
					}
				}

			})
			return !remove
		})
		if (rest.length) {

		format(rest,parent2,parentKey,childKey,childArrKey)
			
		}
		
	}
}

// 将对象及子数组扁平化
const formatFlat = (obj: any, childArrKey: string, isRemoveChildArrKey?: boolean) => {
	const obj2 = JSON.parse(JSON.stringify(obj))
	if (Array.isArray(obj2)) {
		return obj2.reduce((p,v) => {
			return p.concat(format(v,childArrKey,isRemoveChildArrKey))
		},[])
	} else {
		return format(obj,childArrKey,isRemoveChildArrKey)
	}

	function format(obj: any, childArrKey: string,isRemoveChildArrKey?:boolean) {
		const obj2 = JSON.parse(JSON.stringify(obj))
		if (obj2[childArrKey] && obj2[childArrKey].length) {
			const obj3 = JSON.parse(JSON.stringify(obj))
			if (isRemoveChildArrKey) {
				delete obj3[childArrKey]
			}
			return obj2[childArrKey].reduce((pre:any, cur:any) => {
				if (cur[childArrKey] && cur[childArrKey].length) {
					return pre.concat( formatFlat(cur,childArrKey,true) )
				} else {
					let cur2 = JSON.parse(JSON.stringify(cur))
					if (isRemoveChildArrKey) {
						delete cur2[childArrKey]
					}
					return pre.concat(cur2)
				}
			}, [obj3])
		}
	}

}

export {
	localGet,
	localSet,
	localRemove,
	formatTree,
	formatFlat
}