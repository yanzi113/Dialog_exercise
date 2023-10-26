

import MsgControl from './MsgControl';
import PaojieControl from './PaojieControl';

const {ccclass, property} = cc._decorator;

class Message {
    name: string;
    content: string;
    face: string;
    mouth: string;

    constructor(name: string,content :string,face :string,mouth :string){
        this.name = name;
        this.content = content;
        this.face = face;
        this.mouth = mouth;
    }
}



@ccclass
export default class BgControl extends cc.Component {

    @property(PaojieControl)
    paojieControl: PaojieControl = null;

    @property(MsgControl)
    msgControl: MsgControl = null;
    //消息数组
    msgs: Message[] =null;
    //当前是第几条消息
    index: number = 0;


    start () {
        this.msgs = [
            new Message("御坂美琴","今天天气不错","paojieface_02","paojiemouth_01"),
            new Message("御坂美琴","你好","paojieface_01","paojiemouth_02"),
            new Message("御坂美琴","要喝杯饮料吗","paojieface_02","paojiemouth_02"),

        ];
        //鼠标点击对话
        this.node.on(cc.Node.EventType.MOUSE_DOWN,(event) =>{
            if(this.index < this.msgs.length){
                //如果对话框没显示，显示
                if(this.msgControl.node.active == false){
                    this.msgControl.node.active = true;
                }
                // 读消息
                let message = this.msgs[this.index++]
                // 显示消息
                this.paojieControl.setImage(message.face,message.mouth)
                this.msgControl.setMessage(message.name,message.content)
            }
        })
    }

    // update (dt) {}
}
