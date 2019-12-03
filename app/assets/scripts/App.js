import MobileMenu from './modules/MobileMenu';
import MobileMenuSub from './modules/MobileMenuSub';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';

var mobileMenu = new MobileMenu();
var mobileMenuSub = new MobileMenuSub();
new RevealOnScroll($(".page-section"), "75%");
var stickyHeader = new StickyHeader();
