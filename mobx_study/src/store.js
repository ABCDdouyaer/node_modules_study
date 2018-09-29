import {observable, action, computed, autorun, extendObservable} from 'mobx'; 
class Store{
    @observable a = 0

    @observable b = {
        name :'ww'
    }

    @computed get total(){
        return this.a + 1;
    }

    @action change(){
        this.a++;
    }
    @action add(){
        this.b.age++
    }
}
let store = new Store();
extendObservable(store, {
    b: {
        age:1
    }
})
autorun(()=>{
    console.log(store.a);
})
export default store;