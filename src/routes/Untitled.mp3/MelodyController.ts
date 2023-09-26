class MelodyController {
 
    order = '0203112032';
    currentNote = 0;

    isComplete = false;

    click(index: number): boolean {
        if(this.isComplete)
            return true;

        console.log(index)
        this.playSound();

        if(index.toString() != this.order[this.currentNote]){
            this.currentNote = 0;
            return false;
        }
            
        this.currentNote++;
        this.isComplete = this.currentNote >= this.order.length;

        return this.isComplete;
    }

    playSound() {
        var _ = document.createElement('audio');
        _.src = "pan.wav";
        document.body.appendChild(_);
        _.play();
    }
}

export default MelodyController;