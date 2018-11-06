import React, { Component } from 'react';

class Drag{
    constructor(id){
        this.oDiv = document.querySelector(id);
        this.oParent = this.oDiv.parentNode;

        // console.log(this.oParent,this.oParent.offsetLeft);
        this.minX = 248;
        this.maxX = 948;
        this.minY = 144;
        this.maxY = 444;
        // console.log(this.minX,this.minY,this.maxX,this.maxY);

        this.oDiv.style.left = this.minX + 'px';
        this.oDiv.style.top = this.minY + 'px';

        this.disX = 0;
        this.disY = 0;
        this.init();
    }
    init(){
        this.oDiv.onmousedown = function(ev){
            this.disX = ev.clientX - this.oDiv.offsetLeft;
            this.disY = ev.clientY - this.oDiv.offsetTop;
            document.onmousemove = this.fnMove.bind(this);
            document.onmouseup = this.fnUp.bind(this);

            return false;
        }.bind(this);
    }
    fnMove(ev){
        this.oDiv.style.left = ev.clientX - this.disX + 'px';
        this.oDiv.style.top = ev.clientY - this.disX + 'px';
    }
    fnUp(){
        document.onmousemove = null;
        document.onmouseup = null;
    }
}

// //子类限制范围拖拽
class LimitDrag extends Drag{
    fnMove(ev){
        super.fnMove(ev);

        console.log();
        if(this.oDiv.offsetLeft <= this.minX){
            this.oDiv.style.left = `${this.minX}px`;
        }
        if(this.oDiv.offsetTop <= this.minY){
            this.oDiv.style.top = `${this.minY}px`;
        }
        if(this.oDiv.offsetLeft >= this.maxX){
            this.oDiv.style.left = `${this.maxX}px`;
        }
        if(this.oDiv.offsetTop >= this.maxY){
            this.oDiv.style.top = `${this.maxY}px`;
        }
    }
}

class ClickReact extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount(){
        new LimitDrag('#div1');
        new LimitDrag('#div2');
    }
    render() {
        return (
            <div>
                <h3>Hello,ClickReact!</h3>
                <div id='a' style={{border:'1px solid #333',width:'800px',height:'400px'}}>
                    <div id="div1" className="cr_box cr_left">DIV1</div>
	                <div id="div2" className="cr_box cr_right">DIV2</div>
                </div>
            </div>
        );
    }
}

export default ClickReact;