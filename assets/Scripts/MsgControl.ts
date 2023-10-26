// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class MsgControl extends cc.Component {


    start () {

    }

    update (dt) {}

    setMessage(name: string,content :string){
        this.node.children[0].getComponent(cc.Label).string = name;
        this.node.children[1].getComponent(cc.Label).string = content;
    }
}
