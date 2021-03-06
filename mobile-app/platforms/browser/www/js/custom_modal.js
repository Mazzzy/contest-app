/**
 * Modal related - Behavioral layer
 * features - 
 * show/hide
 * Set Contents
 * Swipe events
 */
var appModal = {
    elem: null,
    closeBtn: null,
    info: {},
    init: function(){
        this.elem = document.getElementById("app-modal");
        this.closeBtn = document.getElementById("close-btn");
        this.attachEvents();
    },
    attachEvents: function(){
        this.closeBtn.addEventListener("click", this.toggleModal.bind(this));
        this.applyHammer();
    },
    applyHammer: function(){
        var self = this;
        var modalInfo = document.querySelector(".modal-info");

        var mc = new Hammer(modalInfo);

        // listen to events...
        mc.on("panleft panright tap press", function(ev) {
            var pChild = modalInfo.lastElementChild;
            pChild.textContent = ev.type +" gesture detected.";
            // emit vote
            socketFlow.emitVote(self.info);
        });
    },
    setModalContent: function(contents){
        var modalIMg = document.getElementById("modal-img");
        var infoDetails = document.getElementById("modal-details");

        modalIMg.src = contents["img"];
        infoDetails.innerText = contents["title"];
        // hold the contents in obj to send during vote
        this.info = contents;
    },
    toggleModal: function(){
        this.elem.classList.toggle("show-modal");
    }
}