// import * as Phaser from 'phaser';
import Sizer from '../sizer/Sizer';
import OpenCloseTransition from '../../../plugins/behaviors/openclosetransition/OpenCloseTransition';

export default Folder;

declare namespace Folder {

    interface IConfig extends Sizer.IConfig {
        background?: Phaser.GameObjects.GameObject,

        title: Phaser.GameObjects.GameObject,
        toggleByClickingTitle?: boolean,

        child: Phaser.GameObjects.GameObject,
        customChildOrigin?: boolean,

        align?: {
            title?: Sizer.AlignTypes,
            child?: Sizer.AlignTypes,
        },

        expand?: {
            title?: boolean,
            child?: boolean,
        },

        transition?: {
            duration?: number,
            expandCallback?: OpenCloseTransition.TransitCallbackType,
            collapseCallback?: OpenCloseTransition.TransitCallbackType,
        },

        reLayoutTarget?: Phaser.GameObjects.GameObject,

        onExpandStart?: (folder: this) => void,
        onExpandComplete?: (folder: this) => void,
        onCollapseStart?: (folder: this) => void,
        onCollapseComplete?: (folder: this) => void,

        expanded?: boolean,
    }
}

declare class Folder extends Sizer {
    constructor(
        scene: Phaser.Scene,
        config?: Folder.IConfig
    );

    setTransitionDuration(duration?: number): this;
    setExpandCallback(callback?: OpenCloseTransition.TransitCallbackType): this;
    setCollapseCallback(callback?: OpenCloseTransition.TransitCallbackType): this;

    expand(duration?: number): this;
    collapse(duration?: number): this;
    toggle(duration?: number): this;

}