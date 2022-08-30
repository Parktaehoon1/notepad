import {
	createStore
} from 'vuex';
// 데이터를 불러오는 내용
const storage = {
	getData() {
		const arr = [];
		const total = localStorage.length

		if (total > 0) {
			for (let i = 0; i < total; i++) {
				let obj = localStorage.getItem(localStorage.key(i));
				console.log("키값", obj)
				arr.push(JSON.parse(obj))
			}
			// 키값을 이용해서 정렬하기(오름차순)
			arr.sort((a, b) => {
				if (a.id > b.id) return 1;
				if (a.id === b.id) return 0;
				if (a.id < b.id) return -1;
			});
		}
		return arr;
	}
}

const timeUtil = {
	addZero(n){
		return n < 10 ? '0' + n : n;
	},
	getCurrentDate(){
		let date = new Date();
		return date.getFullYear().toString() + this.addZero(date.getMonth() + 1) + this.addZero(date.getDate()) +
			this.addZero(date.getHours()) + this.addZero(date.getMinutes()) + this.addZero(date.getSeconds());
	},
	getCurrentTime(){
		let date = new Date();
		return date.getFullYear().toString() + '/' + this.addZero(date.getMonth() + 1) + '/' + this.addZero(date.getDate());
	}
}

export default createStore({
	state: {
		headerText: 'My Note',
		memoItemArr: storage.getData(),
		iconArr: ['workout.png', 'study.png', 'stars.png']
	},
	actions: {},
	mutations: {
		// 아이템 추가 {item, index}
		ADD_MEMO(state, payload) {
			console.log(payload.item);
			console.log(payload.index);
			let memoTemp = {
				id: timeUtil.getCurrentDate(),
				complete: false,
				memotitle: payload.item,
				memodate: timeUtil.getCurrentTime(),
				memoicon: state.iconArr[payload.index]
			};
			localStorage.setItem(memoTemp.id, JSON.stringify(memoTemp));
			// 화면갱신을 위한 배열 요소 추가
			state.memoItemArr.push(memoTemp)
		},
		// 아이템 삭제
		DELETE_MEMO(state, payload) {
			localStorage.removeItem(payload.item);
			// 배열에서도 지운다.
			state.memoItemArr.splice(payload.index, 1);
			state.memoItemArr.sort((a, b) => {
				if (a.id > b.id) return 1;
				if (a.id === b.id) return 0;
				if (a.id < b.id) return -1;
			});
		},
		// 아이템 변경{item, index}
		UPDATE_MEMO(state, payload) {
			// 찾아서 지우고, 
			localStorage.removeItem(payload.item.id);
			// 변경한다.
			// item.complete = !item.complete;
			state.memoItemArr[payload.index].complete = !state.memoItemArr[payload.index].complete;
			// 다시 set 한다.
			localStorage.setItem(payload.item.id, JSON.stringify(payload.item));
			state.memoItemArr.sort((a, b) => {
				if (a.id > b.id) return 1;
				if (a.id === b.id) return 0;
				if (a.id < b.id) return -1;
			});

			
		},
		// 전체 아이템 삭제
		CLEAR_MEMO(state) {
			localStorage.clear();
			state.memoItemArr.splice(0);
		}
	},
	getters: {}
});