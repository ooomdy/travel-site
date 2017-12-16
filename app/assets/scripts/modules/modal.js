import $ from 'jquery';

class Modal {

	constructor() {
		this.openModalButton = $(".open-modal");
		this.modal = $(".modal");
		this.closeModalButton = $(".modal__close");
		this.events();s
	}

	events(){
		// clicking the open buton
		this.openModalButton.click(this.openModal.bind(this));
		// clicking the x button
		this.closeModalButton.click(this.closeModal.bind(this));
		// pressing any key
		$(document).keydown(this.keyPressHandler.bind(this));
	}
	
	keyPressHandler(e) {
		if(e.keyCode == 27){
			this.closeModal()
		}
	}

	openModal() {
		this.modal.addClass("modal--is-visible");
		return false;
	}

	closeModal() {
		this.modal.removeClass("modal--is-visible");
	}

}

export default Modal;