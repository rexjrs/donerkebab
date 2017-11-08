export class FakeImage {
    static ensureImageExists() {
        if (!global.Image) {
            global.Image = FakeImage;
        }
    }

    _isLoaded = false;
    _callbacks = [];

    set src(url) {
        this._isLoaded = false;
        this.load(url);
    }

    load = async (url) => {
        await fetch(url);
        this._callbacks.forEach(x => x());
        this._isLoaded = true;
    };

    onload(callback) {
        if (this._isLoaded) { callback(); }
        this._callbacks.push(callback);
    }
}