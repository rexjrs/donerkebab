import { observable } from 'mobx';

class MainStore {
    // Auth
    @observable authPass = false;
    @observable needLogin = false;
    @observable userData = {};
    // Navigators
    @observable previousTrackingTab = 'Calories';
    @observable trackingTab = 'Calories';
}

export var mainStore = new MainStore;