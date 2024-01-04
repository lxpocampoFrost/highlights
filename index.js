class Highlights {
    constructor(options) {
        this.higlightList = [];
        this.highlightContentLists = document.querySelectorAll('[highlight-attr-type="content-list"]');
        this.highlightContentLists.forEach((element) => { this.addHighlight(element) });
        this.currentHighlight = this.higlightList[0];
        this.options = options;
    }

    addHighlight(node) {
        let highlightObj = {
            content: node.querySelectorAll('[highlight-attr-type="content"]'),
            numberOfSlides: node.children.length,
            node: node,
            currentIndex: 0,
        }

        this.higlightList.push(highlightObj);
        this.createProgressBars(highlightObj);
        this.addControl(highlightObj);
    }                                         
    
    createProgressBars(highlightObj) {
        let barWrap = document.createElement('div');
        let barBlock = document.createElement('div');
        let progressBar = document.createElement('div');

        barWrap.classList.add('highlight-bar-wrap');
        barBlock.classList.add('highlight-bar');
        progressBar.classList.add('highlight-progress');

        barBlock.append(progressBar);

        highlightObj.content.forEach((item, index) => {
            let cloned = barBlock.cloneNode(true);

            if(index == 0) {
                cloned.querySelector('.highlight-progress').classList.add('active');
            }

            barWrap.append(cloned);
        });
        
        highlightObj.node.append(barWrap);
    }

    addControl(highlightObj) {
        let currentNode = this.higlightList.find((item) => item.node === highlightObj.node);

        if(currentNode) {
            currentNode.node.addEventListener('click', (event) => {
                let rect = event.target.getBoundingClientRect();
                let clickX = event.clientX - rect.left;
                let clickAreaAllocation = Math.ceil(0.50 * currentNode.node.getBoundingClientRect().width);
                let HiglightBarArr = [...currentNode.node.querySelectorAll('.highlight-progress')];
                let ContentArr = [...currentNode.content];

                if(clickX < clickAreaAllocation) {
                    //Previous
                    if(currentNode.currentIndex > 0 ) {
                        HiglightBarArr[currentNode.currentIndex].classList.remove('active');
                        ContentArr[currentNode.currentIndex].style.zIndex = 0;
                        currentNode.currentIndex = currentNode.currentIndex - 1;
                    }
                } else {
                    //Next 
                    if(currentNode.currentIndex != currentNode.numberOfSlides - 1 ) {
                        HiglightBarArr[currentNode.currentIndex + 1].classList.add('active');
                        ContentArr[currentNode.currentIndex + 1].style.zIndex = 3;
                        currentNode.currentIndex = currentNode.currentIndex + 1;
                    }
                }
            });
        }
    }   

    setCurrentHighlight(nodeObj) {
        this.currentHighlight = nodeObj; 
    }

    getCurrentHighlight() {
        return this.currentHighlight;
    }

    getHighlightList() {
        return this.higlightList;
    }
}

