import $ from 'jquery';

class MobileMenuSub {
	constructor() {
		this.headerSub = $(".sub-header");
		this.menuIconSub = $(".sub-header__menu-icon");
		this.menuContentSub = $(".sub-header__menu-content");
		this.events();
	}

	events() {
		this.menuIconSub.click(this.toggleTheMenuSub.bind(this));
	}

	toggleTheMenuSub() {
		this.menuContentSub.toggleClass("sub-header__menu-content--is-visible");
		this.headerSub.toggleClass("sub-header--is-expanded");
		this.menuIconSub.toggleClass("sub-header__menu-icon--close-x");
	}
}

export default MobileMenuSub;