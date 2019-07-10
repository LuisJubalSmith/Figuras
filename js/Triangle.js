class Triangle extends Figura {
    constructor(pwidth, pheight, pcolor, pcontainer) {
        super(pwidth, pheight, pcolor, pcontainer);
        /*
		      width: 0;
      height: 0;
      border-left: 50px solid transparent;
      border-right: 50px solid transparent;
      border-bottom: 100px solid red;
    }
		*/
        this.div.style.width = '0px';
        this.div.style.height = '0px';
        this.div.style.borderLeft = this.height / 2 + 'px';
        this.div.style.borderLeftStyle = 'solid';
        this.div.style.borderLeftColor = 'transparent';

        this.div.style.borderRight = this.height / 2 + 'px';
        this.div.style.borderRightStyle = 'solid';
        this.div.style.borderRightColor = 'transparent';

        this.div.style.borderBottom = this.width + 'px';
        this.div.style.borderBottomStyle = 'solid';
        this.div.style.borderBottomColor = this.color;

        this.container.appendChild(this.div);
    }
}