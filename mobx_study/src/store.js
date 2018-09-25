import {observable, action, computed, autorun} from 'mobx'; 
class Store{
    @observable list = []

    @computed get total(){
        return this.list.length;
    }

    @action change(){
        this.list.push(this.list.length);
    }
}

export default store = new Store();