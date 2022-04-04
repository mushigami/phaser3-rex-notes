import AddImage from '../../blitterbase/utils/AddImage.js';

class Pen {
    constructor(blitter, frame) {
        this.blitter = blitter;
        this.frame = frame;

        this.bobs = {};
        this._x = 0;
        this._y = 0;

        this.addImage('main', 0);
    }

    destroy() {
        this.frame = undefined;

        var bobs = this.bobs;
        for (var key in bobs) {
            bobs[key].destroy();
            delete bobs[key];
        }

        return this;
    }

    setFrame(frame) {
        this.frame = frame;

        var bobs = this.bobs;
        for (var key in bobs) {
            bobs[key].setFrame(frame);
        }

        return this;
    }

    addImage(key, depth) {
        var bob = AddImage(this.blitter, this.frame);
        bob.setPosition(this.x, this.y).setDepth(depth);
        this.bobs[key] = bob;

        return this;
    }

    get x() {
        return this._x;
    }

    set x(value) {
        var dx = value - this._x;
        this._x = value;

        var bobs = this.bobs;
        for (var key in bobs) {
            bobs[key].x += dx;
        }
    }

    get y() {
        return this._y;
    }

    set y(value) {
        var dy = value - this._y;
        this._y = value;

        var bobs = this.bobs;
        for (var key in bobs) {
            bobs[key].y += dy;
        }
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }

    setShadow(x, y, color, alpha) {
        this.shadowX = x;
        this.shadowY = y;
        this.shadowColor = color;
        this.shadowAlpha = alpha;

        if (!this.bobs.shadow) {
            this.addImage('shadow', -1);
        }

        var bob = this.bobs.shadow;
        if (x === undefined) {
            bob.setActive(false);
        } else {
            bob
                .setActive(true)
                .setPosition(this.x + this.shadowX, this.y + this.shadowY)
                .setAlpha(alpha)
                .setColor(color)
                .setTintEffect(2)
        }

        return this;
    }
}

export default Pen;