// Compiled by ClojureScript 0.0-2657 {}
if(!goog.isProvided_('app')) {
goog.provide('app');
}
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('domina.css');
goog.require('ajax.core');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('domina');
goog.require('goog.History');
goog.require('goog.events');
app.api_key = cljs.core.atom.call(null,(0));
app.api_key_chan = cljs.core.async.chan.call(null);
app.error_handler = (function error_handler(p__19238){
var map__19240 = p__19238;
var map__19240__$1 = ((cljs.core.seq_QMARK_.call(null,map__19240))?cljs.core.apply.call(null,cljs.core.hash_map,map__19240):map__19240);
var status_text = cljs.core.get.call(null,map__19240__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
var status = cljs.core.get.call(null,map__19240__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return console.log([cljs.core.str("something bad happend: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
app.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),false], null));
app.set_value_BANG_ = (function set_value_BANG_(id,value){
cljs.core.swap_BANG_.call(null,app.state,cljs.core.assoc,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),false);

return cljs.core.swap_BANG_.call(null,app.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"doc","doc",1913296891),id], null),value);
});
app.get_value = (function get_value(id){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,app.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"doc","doc",1913296891),id], null));
});
app.list_item = (function list_item(id,k,v,selections){
var handle_click_BANG_ = (function handle_click_BANG_(){
cljs.core.swap_BANG_.call(null,selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.not);

return app.set_value_BANG_.call(null,id,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.second,cljs.core.deref.call(null,selections))));
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),handle_click_BANG_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str((cljs.core.truth_(k.call(null,cljs.core.deref.call(null,selections)))?"fa fa-check":null))].join('')], null)], null),v], null)], null)], null);
});
app.selection_list = (function selection_list(id,label,items){
var selections = reagent.core.atom.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__19251){
var vec__19252 = p__19251;
var k = cljs.core.nth.call(null,vec__19252,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null);
}),items)));
return ((function (selections){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.container","div.row.container",-2055788712),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md5","div.col-md5",1639759017),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pure-table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"My Heroku Apps"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__13582__auto__ = ((function (selections){
return (function iter__19253(s__19254){
return (new cljs.core.LazySeq(null,((function (selections){
return (function (){
var s__19254__$1 = s__19254;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19254__$1);
if(temp__4126__auto__){
var s__19254__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19254__$2)){
var c__13580__auto__ = cljs.core.chunk_first.call(null,s__19254__$2);
var size__13581__auto__ = cljs.core.count.call(null,c__13580__auto__);
var b__19256 = cljs.core.chunk_buffer.call(null,size__13581__auto__);
if((function (){var i__19255 = (0);
while(true){
if((i__19255 < size__13581__auto__)){
var vec__19259 = cljs.core._nth.call(null,c__13580__auto__,i__19255);
var k = cljs.core.nth.call(null,vec__19259,(0),null);
var v = cljs.core.nth.call(null,vec__19259,(1),null);
cljs.core.chunk_append.call(null,b__19256,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.list_item,id,k,v,selections], null));

var G__19261 = (i__19255 + (1));
i__19255 = G__19261;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19256),iter__19253.call(null,cljs.core.chunk_rest.call(null,s__19254__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19256),null);
}
} else {
var vec__19260 = cljs.core.first.call(null,s__19254__$2);
var k = cljs.core.nth.call(null,vec__19260,(0),null);
var v = cljs.core.nth.call(null,vec__19260,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.list_item,id,k,v,selections], null),iter__19253.call(null,cljs.core.rest.call(null,s__19254__$2)));
}
} else {
return null;
}
break;
}
});})(selections))
,null,null));
});})(selections))
;
return iter__13582__auto__.call(null,items);
})()], null)], null)], null)], null)], null);
});
;})(selections))
});
app.home = (function home(heroku_apps){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.selection_list,new cljs.core.Keyword(null,"heroku-apps","heroku-apps",-906880979),"My Heroku Apps",heroku_apps], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"Submit",new cljs.core.Keyword(null,"class","class",-2030961996),"pure-button pure-button-primary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return console.log(cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,app.state)));
})], null),"Save"], null)], null);
});
app.render_app_name = (function render_app_name(heroku_app){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(heroku_app)], null)], null);
});
app.app_names = (function app_names(lst){
return cljs.core.map.call(null,(function (it){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,[cljs.core.str(":"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(it))].join('')),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(it))].join('')], null);
}),lst);
});
app.loading_message = (function loading_message(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Loading"], null)], null);
});
app.fetch_apps_handler = (function fetch_apps_handler(response){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.home,app.app_names.call(null,response)], null),document.getElementById("apps-list"));
});
app.save_api_key_BANG_ = (function save_api_key_BANG_(response){
var c__16483__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16483__auto__){
return (function (){
var f__16484__auto__ = (function (){var switch__16427__auto__ = ((function (c__16483__auto__){
return (function (state_19291){
var state_val_19292 = (state_19291[(1)]);
if((state_val_19292 === (2))){
var inst_19288 = (state_19291[(2)]);
var inst_19289 = cljs.core.async.close_BANG_.call(null,app.api_key_chan);
var state_19291__$1 = (function (){var statearr_19293 = state_19291;
(statearr_19293[(7)] = inst_19288);

return statearr_19293;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19291__$1,inst_19289);
} else {
if((state_val_19292 === (1))){
var inst_19282 = cljs.core.reset_BANG_.call(null,app.api_key,response);
var inst_19283 = cljs.core.deref.call(null,app.api_key);
var inst_19284 = cljs.core.clj__GT_js.call(null,inst_19283);
var inst_19285 = [cljs.core.str("api key "),cljs.core.str(inst_19284)].join('');
var inst_19286 = console.log(inst_19285);
var state_19291__$1 = (function (){var statearr_19294 = state_19291;
(statearr_19294[(8)] = inst_19282);

(statearr_19294[(9)] = inst_19286);

return statearr_19294;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19291__$1,(2),app.api_key_chan,response);
} else {
return null;
}
}
});})(c__16483__auto__))
;
return ((function (switch__16427__auto__,c__16483__auto__){
return (function() {
var state_machine__16428__auto__ = null;
var state_machine__16428__auto____0 = (function (){
var statearr_19298 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19298[(0)] = state_machine__16428__auto__);

(statearr_19298[(1)] = (1));

return statearr_19298;
});
var state_machine__16428__auto____1 = (function (state_19291){
while(true){
var ret_value__16429__auto__ = (function (){try{while(true){
var result__16430__auto__ = switch__16427__auto__.call(null,state_19291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16430__auto__;
}
break;
}
}catch (e19299){if((e19299 instanceof Object)){
var ex__16431__auto__ = e19299;
var statearr_19300_19302 = state_19291;
(statearr_19300_19302[(5)] = ex__16431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19303 = state_19291;
state_19291 = G__19303;
continue;
} else {
return ret_value__16429__auto__;
}
break;
}
});
state_machine__16428__auto__ = function(state_19291){
switch(arguments.length){
case 0:
return state_machine__16428__auto____0.call(this);
case 1:
return state_machine__16428__auto____1.call(this,state_19291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16428__auto____0;
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16428__auto____1;
return state_machine__16428__auto__;
})()
;})(switch__16427__auto__,c__16483__auto__))
})();
var state__16485__auto__ = (function (){var statearr_19301 = f__16484__auto__.call(null);
(statearr_19301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16483__auto__);

return statearr_19301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16485__auto__);
});})(c__16483__auto__))
);

return c__16483__auto__;
});
app.fetch_api_key = (function fetch_api_key(){
return ajax.core.GET.call(null,"/api/key",new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.edn_request_format.call(null),new cljs.core.Keyword(null,"handler","handler",-195596612),app.save_api_key_BANG_,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),app.error_handler);
});
app.fetch_apps = (function fetch_apps(api_key){
return ajax.core.GET.call(null,[cljs.core.str("/api/apps/"),cljs.core.str(api_key)].join(''),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.edn_request_format.call(null),new cljs.core.Keyword(null,"handler","handler",-195596612),app.fetch_apps_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),app.error_handler);
});
app.render_key = (function render_key(key){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),key], null);
});
app._render_key = (function _render_key(key){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.render_key,key.call(null)], null),document.getElementById("apps-list"));
});
app.fun_esa = (function fun_esa(){
return ajax.core.GET.call(null,"http://esa.local:9200",new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return console.log(response);
}));
});
app.start = (function start(){
var c__16483__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16483__auto__){
return (function (){
var f__16484__auto__ = (function (){var switch__16427__auto__ = ((function (c__16483__auto__){
return (function (state_19326){
var state_val_19327 = (state_19326[(1)]);
if((state_val_19327 === (2))){
var inst_19323 = (state_19326[(2)]);
var inst_19324 = app.fetch_apps.call(null,inst_19323);
var state_19326__$1 = state_19326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19326__$1,inst_19324);
} else {
if((state_val_19327 === (1))){
var inst_19320 = app.fun_esa.call(null);
var inst_19321 = app.fetch_api_key.call(null);
var state_19326__$1 = (function (){var statearr_19328 = state_19326;
(statearr_19328[(7)] = inst_19321);

(statearr_19328[(8)] = inst_19320);

return statearr_19328;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19326__$1,(2),app.api_key_chan);
} else {
return null;
}
}
});})(c__16483__auto__))
;
return ((function (switch__16427__auto__,c__16483__auto__){
return (function() {
var state_machine__16428__auto__ = null;
var state_machine__16428__auto____0 = (function (){
var statearr_19332 = [null,null,null,null,null,null,null,null,null];
(statearr_19332[(0)] = state_machine__16428__auto__);

(statearr_19332[(1)] = (1));

return statearr_19332;
});
var state_machine__16428__auto____1 = (function (state_19326){
while(true){
var ret_value__16429__auto__ = (function (){try{while(true){
var result__16430__auto__ = switch__16427__auto__.call(null,state_19326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16430__auto__;
}
break;
}
}catch (e19333){if((e19333 instanceof Object)){
var ex__16431__auto__ = e19333;
var statearr_19334_19336 = state_19326;
(statearr_19334_19336[(5)] = ex__16431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19337 = state_19326;
state_19326 = G__19337;
continue;
} else {
return ret_value__16429__auto__;
}
break;
}
});
state_machine__16428__auto__ = function(state_19326){
switch(arguments.length){
case 0:
return state_machine__16428__auto____0.call(this);
case 1:
return state_machine__16428__auto____1.call(this,state_19326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16428__auto____0;
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16428__auto____1;
return state_machine__16428__auto__;
})()
;})(switch__16427__auto__,c__16483__auto__))
})();
var state__16485__auto__ = (function (){var statearr_19335 = f__16484__auto__.call(null);
(statearr_19335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16483__auto__);

return statearr_19335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16485__auto__);
});})(c__16483__auto__))
);

return c__16483__auto__;
});
app.init = (function init(){
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.loading_message], null),document.getElementById("apps-list"));

return app.start.call(null);
});
goog.exportSymbol('app.init', app.init);
