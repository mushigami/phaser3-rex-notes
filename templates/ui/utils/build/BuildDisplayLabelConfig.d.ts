import Label from '../../label/Label';
import Sizer from '../../sizer/Sizer';
import CreateBackground from './CreateBackground';
import CreateBBCodeText from './CreateBBCodeText';

export default BuildDisplayLabelConfig;

declare namespace BuildDisplayLabelConfig {
    interface IConfig {
        x?: number,
        y?: number,
        width?: number,
        height?: number,
        orientation?: Sizer.OrientationTypes,
        rtl?: boolean,

        background?: CreateBackground.IConfig,

        iconMask?: boolean,
        squareFitIcon?: boolean,
        iconSize?: number, iconWidth?: number, iconHeight?: number,

        text?: CreateBBCodeText.IConfig,
        wrapText?: boolean | 0 | 1 | 2 | 'none' | 'word' | 'char' | 'character',
        expandTextWidth?: boolean,
        expandTextHeight?: boolean,

        squareFitAction?: boolean,
        actionMask?: boolean,
        actionSize?: number, actionWidth?: number, actionHeight?: number,

        space?: {
            left?: number, right?: number, top?: number, bottom?: number,

            icon?: number,
            text?: number,
        },

        align?: Label.AlignTypes,
    }

    type CreateGameObjectCallbackType = (
        scene: Phaser.Scene,
        config?: Object
    ) => Phaser.GameObjects.GameObject;

    interface ICreators {
        background?: CreateGameObjectCallbackType,
        text?: CreateGameObjectCallbackType,
        icon?: CreateGameObjectCallbackType,
        action?: CreateGameObjectCallbackType,
    }
}

declare function BuildDisplayLabelConfig(
    scene: Phaser.Scene,
    config?: BuildDisplayLabelConfig.IConfig,
    creators?: BuildDisplayLabelConfig.ICreators,
): Label.IConfig