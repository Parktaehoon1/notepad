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
				arr.push(JSON.parse(obj));
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
	// 외부데이터 연동
	actions: {
        fetchAddMemo(context, obj) {  // 이름은 통상적으로 앞에 fetch 붙이기
            context.commit('ADD_MEMO', obj);// ADD_MEMO 로 commit 날리라 
        },
        fetchDeleteMemo({commit},obj) {
            commit('DELETE_MEMO', obj);
        },
        fetchUpdateMemo({commit},obj) {
           commit('UPDATE_MEMO', obj);
        },
        fetchClearMemo({commit}) {
           commit('CLEAR_MEMO');
        },
	},
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
	// state 의 값을 호출
	// computed 에서 감시
	getters: {
		getMemoArr(state){
			console.log("무슨스테이트",state); // 실시간 감시 이루어짐
			return state.memoItemArr;
		}
	}
});