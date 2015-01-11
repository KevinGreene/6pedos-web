// Compiled by ClojureScript 0.0-2657 {}
if(!goog.isProvided_('domina.support')) {
goog.provide('domina.support');
}
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.dom');
var div_21614 = document.createElement("div");
var test_html_21615 = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
div_21614.innerHTML = test_html_21615;

domina.support.leading_whitespace_QMARK_ = cljs.core._EQ_.call(null,div_21614.firstChild.nodeType,(3));

domina.support.extraneous_tbody_QMARK_ = cljs.core._EQ_.call(null,div_21614.getElementsByTagName("tbody").length,(0));

domina.support.unscoped_html_elements_QMARK_ = cljs.core._EQ_.call(null,div_21614.getElementsByTagName("link").length,(0));
