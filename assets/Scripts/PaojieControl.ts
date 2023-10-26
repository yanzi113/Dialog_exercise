// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class PaojieControl extends cc.Component {




    start () {

    }

    update (dt) {}
    
    setImage(face: string,mouth: string){
        //加载素材
        cc.loader.loadRes(face,cc.SpriteFrame,(err,sp) =>{
            this.node.children[0].getComponent(cc.Sprite).spriteFrame = sp;
        })
        cc.loader.loadRes(mouth,cc.SpriteFrame,(err,sp) =>{
            this.node.children[1].getComponent(cc.Sprite).spriteFrame = sp;
        })
    }
}
