class Parallelogram extends Figura {
    constructor(pwidth, pheight, pcolor, pcontainer, ptransform) {
        super(pwidth, pheight, pcolor, pcontainer, ptransform);
        this.div.style.width = this.width + 'px';
        this.div.style.height = this.height + 'px';
        this.div.style.transform = 'skew(20deg)';
        this.div.style.backgroundColor = this.color;
        this.container.appendChild(this.div);
    }
};