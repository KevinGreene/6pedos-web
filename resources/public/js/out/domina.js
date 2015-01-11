// Compiled by ClojureScript 0.0-2657 {}
if(!goog.isProvided_('domina')) {
goog.provide('domina');
}
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.style');
goog.require('clojure.string');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_21163 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_21164 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_21165 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_21165,opt_wrapper_21163,table_section_wrapper_21164,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_21163,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_21164,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_21164,cell_wrapper_21165,table_section_wrapper_21164,table_section_wrapper_21164]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__12814__auto__ = div.firstChild;
if(cljs.core.truth_(and__12814__auto__)){
return div.firstChild.childNodes;
} else {
return and__12814__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__21170 = cljs.core.seq.call(null,tbody);
var chunk__21171 = null;
var count__21172 = (0);
var i__21173 = (0);
while(true){
if((i__21173 < count__21172)){
var child = cljs.core._nth.call(null,chunk__21171,i__21173);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__21174 = seq__21170;
var G__21175 = chunk__21171;
var G__21176 = count__21172;
var G__21177 = (i__21173 + (1));
seq__21170 = G__21174;
chunk__21171 = G__21175;
count__21172 = G__21176;
i__21173 = G__21177;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__21170);
if(temp__4126__auto__){
var seq__21170__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21170__$1)){
var c__13613__auto__ = cljs.core.chunk_first.call(null,seq__21170__$1);
var G__21178 = cljs.core.chunk_rest.call(null,seq__21170__$1);
var G__21179 = c__13613__auto__;
var G__21180 = cljs.core.count.call(null,c__13613__auto__);
var G__21181 = (0);
seq__21170 = G__21178;
chunk__21171 = G__21179;
count__21172 = G__21180;
i__21173 = G__21181;
continue;
} else {
var child = cljs.core.first.call(null,seq__21170__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__21182 = cljs.core.next.call(null,seq__21170__$1);
var G__21183 = null;
var G__21184 = (0);
var G__21185 = (0);
seq__21170 = G__21182;
chunk__21171 = G__21183;
count__21172 = G__21184;
i__21173 = G__21185;
continue;
}
} else {
return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){
var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__21187 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__21187,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__21187,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__21187,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__21188 = wrapper.lastChild;
var G__21189 = (level - (1));
wrapper = G__21188;
level = G__21189;
continue;
} else {
return wrapper;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_)){
domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else {
}

if(cljs.core.truth_((function (){var and__12814__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__12814__auto__){
return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else {
return and__12814__auto__;
}
})())){
domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else {
}

return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s))){
return domina.html_to_dom.call(null,s);
} else {
return document.createTextNode(s);
}
});

domina.DomContent = (function (){var obj21191 = {};
return obj21191;
})();

domina.nodes = (function nodes(content){
if((function (){var and__12814__auto__ = content;
if(and__12814__auto__){
return content.domina$DomContent$nodes$arity$1;
} else {
return and__12814__auto__;
}
})()){
return content.domina$DomContent$nodes$arity$1(content);
} else {
var x__13470__auto__ = (((content == null))?null:content);
return (function (){var or__12826__auto__ = (domina.nodes[goog.typeOf(x__13470__auto__)]);
if(or__12826__auto__){
return or__12826__auto__;
} else {
var or__12826__auto____$1 = (domina.nodes["_"]);
if(or__12826__auto____$1){
return or__12826__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});

domina.single_node = (function single_node(nodeseq){
if((function (){var and__12814__auto__ = nodeseq;
if(and__12814__auto__){
return nodeseq.domina$DomContent$single_node$arity$1;
} else {
return and__12814__auto__;
}
})()){
return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else {
var x__13470__auto__ = (((nodeseq == null))?null:nodeseq);
return (function (){var or__12826__auto__ = (domina.single_node[goog.typeOf(x__13470__auto__)]);
if(or__12826__auto__){
return or__12826__auto__;
} else {
var or__12826__auto____$1 = (domina.single_node["_"]);
if(or__12826__auto____$1){
return or__12826__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});

domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){
if(cljs.core.truth_((function (){var and__12814__auto__ = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__12814__auto__)){
return !(cljs.core._EQ_.call(null,window.console,undefined));
} else {
return and__12814__auto__;
}
})())){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
};
var log_debug = function (var_args){
var mesg = null;
if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__21192){
var mesg = cljs.core.seq(arglist__21192);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
};
var log = function (var_args){
var mesg = null;
if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__21193){
var mesg = cljs.core.seq(arglist__21193);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;
if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__21194){
var contents = cljs.core.seq(arglist__21194);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){
return cljs.core.map.call(null,(function (p1__21195_SHARP_){
return p1__21195_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);

return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__21196_SHARP_,p2__21197_SHARP_){
return goog.dom.insertChildAt(p1__21196_SHARP_,p2__21197_SHARP_,idx);
}),parent_content,child_content);

return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,(0));

return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__21199_SHARP_,p2__21198_SHARP_){
return goog.dom.insertSiblingBefore(p2__21198_SHARP_,p1__21199_SHARP_);
}),content,new_content);

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__21201_SHARP_,p2__21200_SHARP_){
return goog.dom.insertSiblingAfter(p2__21200_SHARP_,p1__21201_SHARP_);
}),content,new_content);

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__21203_SHARP_,p2__21202_SHARP_){
return goog.dom.replaceNode(p2__21202_SHARP_,p1__21203_SHARP_);
}),old_content,new_content);

return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));

return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){
var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s))){
return null;
} else {
return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){
var seq__21208_21212 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__21209_21213 = null;
var count__21210_21214 = (0);
var i__21211_21215 = (0);
while(true){
if((i__21211_21215 < count__21210_21214)){
var n_21216 = cljs.core._nth.call(null,chunk__21209_21213,i__21211_21215);
goog.style.setStyle(n_21216,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__21217 = seq__21208_21212;
var G__21218 = chunk__21209_21213;
var G__21219 = count__21210_21214;
var G__21220 = (i__21211_21215 + (1));
seq__21208_21212 = G__21217;
chunk__21209_21213 = G__21218;
count__21210_21214 = G__21219;
i__21211_21215 = G__21220;
continue;
} else {
var temp__4126__auto___21221 = cljs.core.seq.call(null,seq__21208_21212);
if(temp__4126__auto___21221){
var seq__21208_21222__$1 = temp__4126__auto___21221;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21208_21222__$1)){
var c__13613__auto___21223 = cljs.core.chunk_first.call(null,seq__21208_21222__$1);
var G__21224 = cljs.core.chunk_rest.call(null,seq__21208_21222__$1);
var G__21225 = c__13613__auto___21223;
var G__21226 = cljs.core.count.call(null,c__13613__auto___21223);
var G__21227 = (0);
seq__21208_21212 = G__21224;
chunk__21209_21213 = G__21225;
count__21210_21214 = G__21226;
i__21211_21215 = G__21227;
continue;
} else {
var n_21228 = cljs.core.first.call(null,seq__21208_21222__$1);
goog.style.setStyle(n_21228,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__21229 = cljs.core.next.call(null,seq__21208_21222__$1);
var G__21230 = null;
var G__21231 = (0);
var G__21232 = (0);
seq__21208_21212 = G__21229;
chunk__21209_21213 = G__21230;
count__21210_21214 = G__21231;
i__21211_21215 = G__21232;
continue;
}
} else {
}
}
break;
}

return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;
if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__21233){
var content = cljs.core.first(arglist__21233);
arglist__21233 = cljs.core.next(arglist__21233);
var name = cljs.core.first(arglist__21233);
var value = cljs.core.rest(arglist__21233);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){
var seq__21238_21242 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__21239_21243 = null;
var count__21240_21244 = (0);
var i__21241_21245 = (0);
while(true){
if((i__21241_21245 < count__21240_21244)){
var n_21246 = cljs.core._nth.call(null,chunk__21239_21243,i__21241_21245);
n_21246.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__21247 = seq__21238_21242;
var G__21248 = chunk__21239_21243;
var G__21249 = count__21240_21244;
var G__21250 = (i__21241_21245 + (1));
seq__21238_21242 = G__21247;
chunk__21239_21243 = G__21248;
count__21240_21244 = G__21249;
i__21241_21245 = G__21250;
continue;
} else {
var temp__4126__auto___21251 = cljs.core.seq.call(null,seq__21238_21242);
if(temp__4126__auto___21251){
var seq__21238_21252__$1 = temp__4126__auto___21251;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21238_21252__$1)){
var c__13613__auto___21253 = cljs.core.chunk_first.call(null,seq__21238_21252__$1);
var G__21254 = cljs.core.chunk_rest.call(null,seq__21238_21252__$1);
var G__21255 = c__13613__auto___21253;
var G__21256 = cljs.core.count.call(null,c__13613__auto___21253);
var G__21257 = (0);
seq__21238_21242 = G__21254;
chunk__21239_21243 = G__21255;
count__21240_21244 = G__21256;
i__21241_21245 = G__21257;
continue;
} else {
var n_21258 = cljs.core.first.call(null,seq__21238_21252__$1);
n_21258.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__21259 = cljs.core.next.call(null,seq__21238_21252__$1);
var G__21260 = null;
var G__21261 = (0);
var G__21262 = (0);
seq__21238_21242 = G__21259;
chunk__21239_21243 = G__21260;
count__21240_21244 = G__21261;
i__21241_21245 = G__21262;
continue;
}
} else {
}
}
break;
}

return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;
if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__21263){
var content = cljs.core.first(arglist__21263);
arglist__21263 = cljs.core.next(arglist__21263);
var name = cljs.core.first(arglist__21263);
var value = cljs.core.rest(arglist__21263);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){
var seq__21268_21272 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__21269_21273 = null;
var count__21270_21274 = (0);
var i__21271_21275 = (0);
while(true){
if((i__21271_21275 < count__21270_21274)){
var n_21276 = cljs.core._nth.call(null,chunk__21269_21273,i__21271_21275);
n_21276.removeAttribute(cljs.core.name.call(null,name));

var G__21277 = seq__21268_21272;
var G__21278 = chunk__21269_21273;
var G__21279 = count__21270_21274;
var G__21280 = (i__21271_21275 + (1));
seq__21268_21272 = G__21277;
chunk__21269_21273 = G__21278;
count__21270_21274 = G__21279;
i__21271_21275 = G__21280;
continue;
} else {
var temp__4126__auto___21281 = cljs.core.seq.call(null,seq__21268_21272);
if(temp__4126__auto___21281){
var seq__21268_21282__$1 = temp__4126__auto___21281;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21268_21282__$1)){
var c__13613__auto___21283 = cljs.core.chunk_first.call(null,seq__21268_21282__$1);
var G__21284 = cljs.core.chunk_rest.call(null,seq__21268_21282__$1);
var G__21285 = c__13613__auto___21283;
var G__21286 = cljs.core.count.call(null,c__13613__auto___21283);
var G__21287 = (0);
seq__21268_21272 = G__21284;
chunk__21269_21273 = G__21285;
count__21270_21274 = G__21286;
i__21271_21275 = G__21287;
continue;
} else {
var n_21288 = cljs.core.first.call(null,seq__21268_21282__$1);
n_21288.removeAttribute(cljs.core.name.call(null,name));

var G__21289 = cljs.core.next.call(null,seq__21268_21282__$1);
var G__21290 = null;
var G__21291 = (0);
var G__21292 = (0);
seq__21268_21272 = G__21289;
chunk__21269_21273 = G__21290;
count__21270_21274 = G__21291;
i__21271_21275 = G__21292;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__21294 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__21294,(0),null);
var v = cljs.core.nth.call(null,vec__21294,(1),null);
if(cljs.core.truth_((function (){var and__12814__auto__ = k;
if(cljs.core.truth_(and__12814__auto__)){
return v;
} else {
return and__12814__auto__;
}
})())){
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style = domina.attr.call(null,content,"style");
if(typeof style === 'string'){
return domina.parse_style_attributes.call(null,style);
} else {
if((style == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(style.cssText)){
return domina.parse_style_attributes.call(null,style.cssText);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node = domina.single_node.call(null,content);
var attrs__$1 = node.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__21295_SHARP_){
var attr = attrs__$1.item(p1__21295_SHARP_);
var value = attr.nodeValue;
if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value))){
return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else {
return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var seq__21302_21308 = cljs.core.seq.call(null,styles);
var chunk__21303_21309 = null;
var count__21304_21310 = (0);
var i__21305_21311 = (0);
while(true){
if((i__21305_21311 < count__21304_21310)){
var vec__21306_21312 = cljs.core._nth.call(null,chunk__21303_21309,i__21305_21311);
var name_21313 = cljs.core.nth.call(null,vec__21306_21312,(0),null);
var value_21314 = cljs.core.nth.call(null,vec__21306_21312,(1),null);
domina.set_style_BANG_.call(null,content,name_21313,value_21314);

var G__21315 = seq__21302_21308;
var G__21316 = chunk__21303_21309;
var G__21317 = count__21304_21310;
var G__21318 = (i__21305_21311 + (1));
seq__21302_21308 = G__21315;
chunk__21303_21309 = G__21316;
count__21304_21310 = G__21317;
i__21305_21311 = G__21318;
continue;
} else {
var temp__4126__auto___21319 = cljs.core.seq.call(null,seq__21302_21308);
if(temp__4126__auto___21319){
var seq__21302_21320__$1 = temp__4126__auto___21319;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21302_21320__$1)){
var c__13613__auto___21321 = cljs.core.chunk_first.call(null,seq__21302_21320__$1);
var G__21322 = cljs.core.chunk_rest.call(null,seq__21302_21320__$1);
var G__21323 = c__13613__auto___21321;
var G__21324 = cljs.core.count.call(null,c__13613__auto___21321);
var G__21325 = (0);
seq__21302_21308 = G__21322;
chunk__21303_21309 = G__21323;
count__21304_21310 = G__21324;
i__21305_21311 = G__21325;
continue;
} else {
var vec__21307_21326 = cljs.core.first.call(null,seq__21302_21320__$1);
var name_21327 = cljs.core.nth.call(null,vec__21307_21326,(0),null);
var value_21328 = cljs.core.nth.call(null,vec__21307_21326,(1),null);
domina.set_style_BANG_.call(null,content,name_21327,value_21328);

var G__21329 = cljs.core.next.call(null,seq__21302_21320__$1);
var G__21330 = null;
var G__21331 = (0);
var G__21332 = (0);
seq__21302_21308 = G__21329;
chunk__21303_21309 = G__21330;
count__21304_21310 = G__21331;
i__21305_21311 = G__21332;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){
var seq__21339_21345 = cljs.core.seq.call(null,attrs);
var chunk__21340_21346 = null;
var count__21341_21347 = (0);
var i__21342_21348 = (0);
while(true){
if((i__21342_21348 < count__21341_21347)){
var vec__21343_21349 = cljs.core._nth.call(null,chunk__21340_21346,i__21342_21348);
var name_21350 = cljs.core.nth.call(null,vec__21343_21349,(0),null);
var value_21351 = cljs.core.nth.call(null,vec__21343_21349,(1),null);
domina.set_attr_BANG_.call(null,content,name_21350,value_21351);

var G__21352 = seq__21339_21345;
var G__21353 = chunk__21340_21346;
var G__21354 = count__21341_21347;
var G__21355 = (i__21342_21348 + (1));
seq__21339_21345 = G__21352;
chunk__21340_21346 = G__21353;
count__21341_21347 = G__21354;
i__21342_21348 = G__21355;
continue;
} else {
var temp__4126__auto___21356 = cljs.core.seq.call(null,seq__21339_21345);
if(temp__4126__auto___21356){
var seq__21339_21357__$1 = temp__4126__auto___21356;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21339_21357__$1)){
var c__13613__auto___21358 = cljs.core.chunk_first.call(null,seq__21339_21357__$1);
var G__21359 = cljs.core.chunk_rest.call(null,seq__21339_21357__$1);
var G__21360 = c__13613__auto___21358;
var G__21361 = cljs.core.count.call(null,c__13613__auto___21358);
var G__21362 = (0);
seq__21339_21345 = G__21359;
chunk__21340_21346 = G__21360;
count__21341_21347 = G__21361;
i__21342_21348 = G__21362;
continue;
} else {
var vec__21344_21363 = cljs.core.first.call(null,seq__21339_21357__$1);
var name_21364 = cljs.core.nth.call(null,vec__21344_21363,(0),null);
var value_21365 = cljs.core.nth.call(null,vec__21344_21363,(1),null);
domina.set_attr_BANG_.call(null,content,name_21364,value_21365);

var G__21366 = cljs.core.next.call(null,seq__21339_21357__$1);
var G__21367 = null;
var G__21368 = (0);
var G__21369 = (0);
seq__21339_21345 = G__21366;
chunk__21340_21346 = G__21367;
count__21341_21347 = G__21368;
i__21342_21348 = G__21369;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){
var seq__21374_21378 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__21375_21379 = null;
var count__21376_21380 = (0);
var i__21377_21381 = (0);
while(true){
if((i__21377_21381 < count__21376_21380)){
var node_21382 = cljs.core._nth.call(null,chunk__21375_21379,i__21377_21381);
goog.dom.classes.add(node_21382,class$);

var G__21383 = seq__21374_21378;
var G__21384 = chunk__21375_21379;
var G__21385 = count__21376_21380;
var G__21386 = (i__21377_21381 + (1));
seq__21374_21378 = G__21383;
chunk__21375_21379 = G__21384;
count__21376_21380 = G__21385;
i__21377_21381 = G__21386;
continue;
} else {
var temp__4126__auto___21387 = cljs.core.seq.call(null,seq__21374_21378);
if(temp__4126__auto___21387){
var seq__21374_21388__$1 = temp__4126__auto___21387;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21374_21388__$1)){
var c__13613__auto___21389 = cljs.core.chunk_first.call(null,seq__21374_21388__$1);
var G__21390 = cljs.core.chunk_rest.call(null,seq__21374_21388__$1);
var G__21391 = c__13613__auto___21389;
var G__21392 = cljs.core.count.call(null,c__13613__auto___21389);
var G__21393 = (0);
seq__21374_21378 = G__21390;
chunk__21375_21379 = G__21391;
count__21376_21380 = G__21392;
i__21377_21381 = G__21393;
continue;
} else {
var node_21394 = cljs.core.first.call(null,seq__21374_21388__$1);
goog.dom.classes.add(node_21394,class$);

var G__21395 = cljs.core.next.call(null,seq__21374_21388__$1);
var G__21396 = null;
var G__21397 = (0);
var G__21398 = (0);
seq__21374_21378 = G__21395;
chunk__21375_21379 = G__21396;
count__21376_21380 = G__21397;
i__21377_21381 = G__21398;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){
var seq__21403_21407 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__21404_21408 = null;
var count__21405_21409 = (0);
var i__21406_21410 = (0);
while(true){
if((i__21406_21410 < count__21405_21409)){
var node_21411 = cljs.core._nth.call(null,chunk__21404_21408,i__21406_21410);
goog.dom.classes.remove(node_21411,class$);

var G__21412 = seq__21403_21407;
var G__21413 = chunk__21404_21408;
var G__21414 = count__21405_21409;
var G__21415 = (i__21406_21410 + (1));
seq__21403_21407 = G__21412;
chunk__21404_21408 = G__21413;
count__21405_21409 = G__21414;
i__21406_21410 = G__21415;
continue;
} else {
var temp__4126__auto___21416 = cljs.core.seq.call(null,seq__21403_21407);
if(temp__4126__auto___21416){
var seq__21403_21417__$1 = temp__4126__auto___21416;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21403_21417__$1)){
var c__13613__auto___21418 = cljs.core.chunk_first.call(null,seq__21403_21417__$1);
var G__21419 = cljs.core.chunk_rest.call(null,seq__21403_21417__$1);
var G__21420 = c__13613__auto___21418;
var G__21421 = cljs.core.count.call(null,c__13613__auto___21418);
var G__21422 = (0);
seq__21403_21407 = G__21419;
chunk__21404_21408 = G__21420;
count__21405_21409 = G__21421;
i__21406_21410 = G__21422;
continue;
} else {
var node_21423 = cljs.core.first.call(null,seq__21403_21417__$1);
goog.dom.classes.remove(node_21423,class$);

var G__21424 = cljs.core.next.call(null,seq__21403_21417__$1);
var G__21425 = null;
var G__21426 = (0);
var G__21427 = (0);
seq__21403_21407 = G__21424;
chunk__21404_21408 = G__21425;
count__21405_21409 = G__21426;
i__21406_21410 = G__21427;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){
var seq__21432_21436 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__21433_21437 = null;
var count__21434_21438 = (0);
var i__21435_21439 = (0);
while(true){
if((i__21435_21439 < count__21434_21438)){
var node_21440 = cljs.core._nth.call(null,chunk__21433_21437,i__21435_21439);
goog.dom.classes.toggle(node_21440,class$);

var G__21441 = seq__21432_21436;
var G__21442 = chunk__21433_21437;
var G__21443 = count__21434_21438;
var G__21444 = (i__21435_21439 + (1));
seq__21432_21436 = G__21441;
chunk__21433_21437 = G__21442;
count__21434_21438 = G__21443;
i__21435_21439 = G__21444;
continue;
} else {
var temp__4126__auto___21445 = cljs.core.seq.call(null,seq__21432_21436);
if(temp__4126__auto___21445){
var seq__21432_21446__$1 = temp__4126__auto___21445;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21432_21446__$1)){
var c__13613__auto___21447 = cljs.core.chunk_first.call(null,seq__21432_21446__$1);
var G__21448 = cljs.core.chunk_rest.call(null,seq__21432_21446__$1);
var G__21449 = c__13613__auto___21447;
var G__21450 = cljs.core.count.call(null,c__13613__auto___21447);
var G__21451 = (0);
seq__21432_21436 = G__21448;
chunk__21433_21437 = G__21449;
count__21434_21438 = G__21450;
i__21435_21439 = G__21451;
continue;
} else {
var node_21452 = cljs.core.first.call(null,seq__21432_21446__$1);
goog.dom.classes.toggle(node_21452,class$);

var G__21453 = cljs.core.next.call(null,seq__21432_21446__$1);
var G__21454 = null;
var G__21455 = (0);
var G__21456 = (0);
seq__21432_21436 = G__21453;
chunk__21433_21437 = G__21454;
count__21434_21438 = G__21455;
i__21435_21439 = G__21456;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){
var classes_21465__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__21461_21466 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__21462_21467 = null;
var count__21463_21468 = (0);
var i__21464_21469 = (0);
while(true){
if((i__21464_21469 < count__21463_21468)){
var node_21470 = cljs.core._nth.call(null,chunk__21462_21467,i__21464_21469);
goog.dom.classes.set(node_21470,classes_21465__$1);

var G__21471 = seq__21461_21466;
var G__21472 = chunk__21462_21467;
var G__21473 = count__21463_21468;
var G__21474 = (i__21464_21469 + (1));
seq__21461_21466 = G__21471;
chunk__21462_21467 = G__21472;
count__21463_21468 = G__21473;
i__21464_21469 = G__21474;
continue;
} else {
var temp__4126__auto___21475 = cljs.core.seq.call(null,seq__21461_21466);
if(temp__4126__auto___21475){
var seq__21461_21476__$1 = temp__4126__auto___21475;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21461_21476__$1)){
var c__13613__auto___21477 = cljs.core.chunk_first.call(null,seq__21461_21476__$1);
var G__21478 = cljs.core.chunk_rest.call(null,seq__21461_21476__$1);
var G__21479 = c__13613__auto___21477;
var G__21480 = cljs.core.count.call(null,c__13613__auto___21477);
var G__21481 = (0);
seq__21461_21466 = G__21478;
chunk__21462_21467 = G__21479;
count__21463_21468 = G__21480;
i__21464_21469 = G__21481;
continue;
} else {
var node_21482 = cljs.core.first.call(null,seq__21461_21476__$1);
goog.dom.classes.set(node_21482,classes_21465__$1);

var G__21483 = cljs.core.next.call(null,seq__21461_21476__$1);
var G__21484 = null;
var G__21485 = (0);
var G__21486 = (0);
seq__21461_21466 = G__21483;
chunk__21462_21467 = G__21484;
count__21463_21468 = G__21485;
i__21464_21469 = G__21486;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){
var seq__21491_21495 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__21492_21496 = null;
var count__21493_21497 = (0);
var i__21494_21498 = (0);
while(true){
if((i__21494_21498 < count__21493_21497)){
var node_21499 = cljs.core._nth.call(null,chunk__21492_21496,i__21494_21498);
goog.dom.setTextContent(node_21499,value);

var G__21500 = seq__21491_21495;
var G__21501 = chunk__21492_21496;
var G__21502 = count__21493_21497;
var G__21503 = (i__21494_21498 + (1));
seq__21491_21495 = G__21500;
chunk__21492_21496 = G__21501;
count__21493_21497 = G__21502;
i__21494_21498 = G__21503;
continue;
} else {
var temp__4126__auto___21504 = cljs.core.seq.call(null,seq__21491_21495);
if(temp__4126__auto___21504){
var seq__21491_21505__$1 = temp__4126__auto___21504;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21491_21505__$1)){
var c__13613__auto___21506 = cljs.core.chunk_first.call(null,seq__21491_21505__$1);
var G__21507 = cljs.core.chunk_rest.call(null,seq__21491_21505__$1);
var G__21508 = c__13613__auto___21506;
var G__21509 = cljs.core.count.call(null,c__13613__auto___21506);
var G__21510 = (0);
seq__21491_21495 = G__21507;
chunk__21492_21496 = G__21508;
count__21493_21497 = G__21509;
i__21494_21498 = G__21510;
continue;
} else {
var node_21511 = cljs.core.first.call(null,seq__21491_21505__$1);
goog.dom.setTextContent(node_21511,value);

var G__21512 = cljs.core.next.call(null,seq__21491_21505__$1);
var G__21513 = null;
var G__21514 = (0);
var G__21515 = (0);
seq__21491_21495 = G__21512;
chunk__21492_21496 = G__21513;
count__21493_21497 = G__21514;
i__21494_21498 = G__21515;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){
return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){
var seq__21520_21524 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__21521_21525 = null;
var count__21522_21526 = (0);
var i__21523_21527 = (0);
while(true){
if((i__21523_21527 < count__21522_21526)){
var node_21528 = cljs.core._nth.call(null,chunk__21521_21525,i__21523_21527);
goog.dom.forms.setValue(node_21528,value);

var G__21529 = seq__21520_21524;
var G__21530 = chunk__21521_21525;
var G__21531 = count__21522_21526;
var G__21532 = (i__21523_21527 + (1));
seq__21520_21524 = G__21529;
chunk__21521_21525 = G__21530;
count__21522_21526 = G__21531;
i__21523_21527 = G__21532;
continue;
} else {
var temp__4126__auto___21533 = cljs.core.seq.call(null,seq__21520_21524);
if(temp__4126__auto___21533){
var seq__21520_21534__$1 = temp__4126__auto___21533;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21520_21534__$1)){
var c__13613__auto___21535 = cljs.core.chunk_first.call(null,seq__21520_21534__$1);
var G__21536 = cljs.core.chunk_rest.call(null,seq__21520_21534__$1);
var G__21537 = c__13613__auto___21535;
var G__21538 = cljs.core.count.call(null,c__13613__auto___21535);
var G__21539 = (0);
seq__21520_21524 = G__21536;
chunk__21521_21525 = G__21537;
count__21522_21526 = G__21538;
i__21523_21527 = G__21539;
continue;
} else {
var node_21540 = cljs.core.first.call(null,seq__21520_21534__$1);
goog.dom.forms.setValue(node_21540,value);

var G__21541 = cljs.core.next.call(null,seq__21520_21534__$1);
var G__21542 = null;
var G__21543 = (0);
var G__21544 = (0);
seq__21520_21524 = G__21541;
chunk__21521_21525 = G__21542;
count__21522_21526 = G__21543;
i__21523_21527 = G__21544;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){
return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);
if(cljs.core.truth_((function (){var and__12814__auto__ = allows_inner_html_QMARK_;
if(and__12814__auto__){
var and__12814__auto____$1 = (function (){var or__12826__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__12826__auto__)){
return or__12826__auto__;
} else {
return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();
if(cljs.core.truth_(and__12814__auto____$1)){
return !(special_tag_QMARK_);
} else {
return and__12814__auto____$1;
}
} else {
return and__12814__auto__;
}
})())){
var value_21555 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__21551_21556 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__21552_21557 = null;
var count__21553_21558 = (0);
var i__21554_21559 = (0);
while(true){
if((i__21554_21559 < count__21553_21558)){
var node_21560 = cljs.core._nth.call(null,chunk__21552_21557,i__21554_21559);
node_21560.innerHTML = value_21555;

var G__21561 = seq__21551_21556;
var G__21562 = chunk__21552_21557;
var G__21563 = count__21553_21558;
var G__21564 = (i__21554_21559 + (1));
seq__21551_21556 = G__21561;
chunk__21552_21557 = G__21562;
count__21553_21558 = G__21563;
i__21554_21559 = G__21564;
continue;
} else {
var temp__4126__auto___21565 = cljs.core.seq.call(null,seq__21551_21556);
if(temp__4126__auto___21565){
var seq__21551_21566__$1 = temp__4126__auto___21565;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21551_21566__$1)){
var c__13613__auto___21567 = cljs.core.chunk_first.call(null,seq__21551_21566__$1);
var G__21568 = cljs.core.chunk_rest.call(null,seq__21551_21566__$1);
var G__21569 = c__13613__auto___21567;
var G__21570 = cljs.core.count.call(null,c__13613__auto___21567);
var G__21571 = (0);
seq__21551_21556 = G__21568;
chunk__21552_21557 = G__21569;
count__21553_21558 = G__21570;
i__21554_21559 = G__21571;
continue;
} else {
var node_21572 = cljs.core.first.call(null,seq__21551_21566__$1);
node_21572.innerHTML = value_21555;

var G__21573 = cljs.core.next.call(null,seq__21551_21566__$1);
var G__21574 = null;
var G__21575 = (0);
var G__21576 = (0);
seq__21551_21556 = G__21573;
chunk__21552_21557 = G__21574;
count__21553_21558 = G__21575;
i__21554_21559 = G__21576;
continue;
}
} else {
}
}
break;
}
}catch (e21550){if((e21550 instanceof Error)){
var e_21577 = e21550;
domina.replace_children_BANG_.call(null,content,value_21555);
} else {
throw e21550;

}
}} else {
domina.replace_children_BANG_.call(null,content,html_string);
}

return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){
if(typeof inner_content === 'string'){
return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else {
return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){
return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){
var m = domina.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__12814__auto__ = bubble;
if(cljs.core.truth_(and__12814__auto__)){
return (value == null);
} else {
return and__12814__auto__;
}
})())){
var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__4126__auto__)){
var parent = temp__4126__auto__;
return get_data.call(null,parent,key,true);
} else {
return null;
}
} else {
return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){
var m = (function (){var or__12826__auto__ = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__12826__auto__)){
return or__12826__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents = domina.nodes.call(null,parent_content);
var children = domina.nodes.call(null,child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__21584_21588 = cljs.core.seq.call(null,children);
var chunk__21585_21589 = null;
var count__21586_21590 = (0);
var i__21587_21591 = (0);
while(true){
if((i__21587_21591 < count__21586_21590)){
var child_21592 = cljs.core._nth.call(null,chunk__21585_21589,i__21587_21591);
frag.appendChild(child_21592);

var G__21593 = seq__21584_21588;
var G__21594 = chunk__21585_21589;
var G__21595 = count__21586_21590;
var G__21596 = (i__21587_21591 + (1));
seq__21584_21588 = G__21593;
chunk__21585_21589 = G__21594;
count__21586_21590 = G__21595;
i__21587_21591 = G__21596;
continue;
} else {
var temp__4126__auto___21597 = cljs.core.seq.call(null,seq__21584_21588);
if(temp__4126__auto___21597){
var seq__21584_21598__$1 = temp__4126__auto___21597;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21584_21598__$1)){
var c__13613__auto___21599 = cljs.core.chunk_first.call(null,seq__21584_21598__$1);
var G__21600 = cljs.core.chunk_rest.call(null,seq__21584_21598__$1);
var G__21601 = c__13613__auto___21599;
var G__21602 = cljs.core.count.call(null,c__13613__auto___21599);
var G__21603 = (0);
seq__21584_21588 = G__21600;
chunk__21585_21589 = G__21601;
count__21586_21590 = G__21602;
i__21587_21591 = G__21603;
continue;
} else {
var child_21604 = cljs.core.first.call(null,seq__21584_21598__$1);
frag.appendChild(child_21604);

var G__21605 = cljs.core.next.call(null,seq__21584_21598__$1);
var G__21606 = null;
var G__21607 = (0);
var G__21608 = (0);
seq__21584_21588 = G__21605;
chunk__21585_21589 = G__21606;
count__21586_21590 = G__21607;
i__21587_21591 = G__21608;
continue;
}
} else {
}
}
break;
}

return frag;
})();
var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){
return first_child.cloneNode(true);
});})(parents,children,first_child))
));
if(cljs.core.seq.call(null,parents)){
f.call(null,cljs.core.first.call(null,parents),first_child);

return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__21578_SHARP_,p2__21579_SHARP_){
return f.call(null,p1__21578_SHARP_,p2__21579_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){
return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){
if(cljs.core.truth_(nl.item)){
return domina.lazy_nl_via_item.call(null,nl);
} else {
return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){
var and__12814__auto__ = obj;
if(cljs.core.truth_(and__12814__auto__)){
var and__12814__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__12814__auto____$1){
return obj.length;
} else {
return and__12814__auto____$1;
}
} else {
return and__12814__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){
if((list_thing == null)){
return cljs.core.List.EMPTY;
} else {
if((function (){var G__21610 = list_thing;
if(G__21610){
var bit__13507__auto__ = (G__21610.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__13507__auto__) || (G__21610.cljs$core$ISeqable$)){
return true;
} else {
if((!G__21610.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21610);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21610);
}
})()){
return cljs.core.seq.call(null,list_thing);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing))){
return domina.lazy_nodelist.call(null,list_thing);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);

(domina.nodes["_"] = (function (content){
if((content == null)){
return cljs.core.List.EMPTY;
} else {
if((function (){var G__21611 = content;
if(G__21611){
var bit__13507__auto__ = (G__21611.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__13507__auto__) || (G__21611.cljs$core$ISeqable$)){
return true;
} else {
if((!G__21611.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21611);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21611);
}
})()){
return cljs.core.seq.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return domina.lazy_nodelist.call(null,content);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));

(domina.single_node["_"] = (function (content){
if((content == null)){
return null;
} else {
if((function (){var G__21612 = content;
if(G__21612){
var bit__13507__auto__ = (G__21612.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__13507__auto__) || (G__21612.cljs$core$ISeqable$)){
return true;
} else {
if((!G__21612.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21612);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21612);
}
})()){
return cljs.core.first.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return content.item((0));
} else {
return content;

}
}
}
}));

(domina.DomContent["string"] = true);

(domina.nodes["string"] = (function (s){
return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));

(domina.single_node["string"] = (function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined'))){
NodeList.prototype.cljs$core$ISeqable$ = true;

NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});

NodeList.prototype.cljs$core$IIndexed$ = true;

NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

NodeList.prototype.cljs$core$ICounted$ = true;

NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});
} else {
}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined'))){
StaticNodeList.prototype.cljs$core$ISeqable$ = true;

StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});

StaticNodeList.prototype.cljs$core$IIndexed$ = true;

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

StaticNodeList.prototype.cljs$core$ICounted$ = true;

StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});
} else {
}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined'))){
HTMLCollection.prototype.cljs$core$ISeqable$ = true;

HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var coll__$1 = this;
return domina.lazy_nodelist.call(null,coll__$1);
});

HTMLCollection.prototype.cljs$core$IIndexed$ = true;

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var coll__$1 = this;
return coll__$1.item(n);
});

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var coll__$1 = this;
if((coll__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,coll__$1,n);
}
});

HTMLCollection.prototype.cljs$core$ICounted$ = true;

HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var coll__$1 = this;
return coll__$1.length;
});
} else {
}
