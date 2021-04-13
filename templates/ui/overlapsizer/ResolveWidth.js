import ResolveWidthBase from '../basesizer/ResolveWidth.js';

var ResolveWidth = function (parent, width) {
    var width = ResolveWidthBase.call(this, parent, width);

    if (!parent) {
        // Resolve width of sizer children
        this.resolveChildrenWidth(width);
        // Run width wrap
        this.runWidthWrap(width);
    }

    return width;
}

export default ResolveWidth;