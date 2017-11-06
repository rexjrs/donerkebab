import { observable } from 'mobx';

class MainStore {
    @observable authPass = false;
    @observable previousTrackingTab = 'Calories';
    @observable trackingTab = 'Calories';
}

export var mainStore = new MainStore;