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
    init: function(){
        this.elem = document.getElementById("app-modal");
        this.closeBtn = document.getElementById("close-btn");
        this.attachEvents();
    },
    attachEvents: function(){
        this.closeBtn.addEventListener("click", this.toggleModal.bind(this));
    },
    toggleModal: function(){
        this.elem.classList.toggle("show-modal");
    }
}