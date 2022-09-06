import {Base} from "./base.js";

export class Picture extends Base {
    constructor(icon) {
        super();
        this.component = 'Picture'
        this.label = '图片'
        this.icon = icon
        this.propValue = {
            flip: {
                horizontal: false,
                vertical: false,
            },
        }
        this.style = {
            width: 300,
            height: 200,
            borderRadius: '',
        }
    }

    getIcon() {

    }
}
