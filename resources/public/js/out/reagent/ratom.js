// Compiled by ClojureScript 0.0-2657 {}
if(!goog.isProvided_('reagent.ratom')) {
goog.provide('reagent.ratom');
}
goog.require('cljs.core');
goog.require('reagent.impl.util');
if(typeof reagent.ratom.debug !== 'undefined'){
} else {
reagent.ratom.debug = false;
}
if(typeof reagent.ratom._running !== 'undefined'){
} else {
reagent.ratom._running = cljs.core.atom.call(null,(0));
}
reagent.ratom.running = (function running(){
return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_19792 = reagent.ratom._STAR_ratom_context_STAR_;
try{reagent.ratom._STAR_ratom_context_STAR_ = obj;

return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_19792;
}});
reagent.ratom.captured = (function captured(obj){
var c = obj.cljsCaptured;
obj.cljsCaptured = null;

return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){
var obj = reagent.ratom._STAR_ratom_context_STAR_;
if((obj == null)){
return null;
} else {
var captured = obj.cljsCaptured;
return obj.cljsCaptured = cljs.core.conj.call(null,(((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){
f.call(null,key,this$__$1,oldval,newval);

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});

reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,"#<Atom: ");

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});

reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_(self__.validator.call(null,new_value))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null))))].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
}

return new_value;
});

reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

return self__.state;
});

reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RAtom.cljs$lang$type = true;

reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__13413__auto__,writer__13414__auto__,opt__13415__auto__){
return cljs.core._write.call(null,writer__13414__auto__,"reagent.ratom/RAtom");
});

reagent.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
reagent.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new reagent.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__19796__delegate = function (x,p__19793){
var map__19795 = p__19793;
var map__19795__$1 = ((cljs.core.seq_QMARK_.call(null,map__19795))?cljs.core.apply.call(null,cljs.core.hash_map,map__19795):map__19795);
var validator = cljs.core.get.call(null,map__19795__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var meta = cljs.core.get.call(null,map__19795__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__19796 = function (x,var_args){
var p__19793 = null;
if (arguments.length > 1) {
  p__19793 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__19796__delegate.call(this,x,p__19793);};
G__19796.cljs$lang$maxFixedArity = 1;
G__19796.cljs$lang$applyTo = (function (arglist__19797){
var x = cljs.core.first(arglist__19797);
var p__19793 = cljs.core.rest(arglist__19797);
return G__19796__delegate(x,p__19793);
});
G__19796.cljs$core$IFn$_invoke$arity$variadic = G__19796__delegate;
return G__19796;
})()
;
atom = function(x,var_args){
var p__19793 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;
reagent.ratom.peek_at = (function peek_at(a,path){
var _STAR_ratom_context_STAR_19799 = reagent.ratom._STAR_ratom_context_STAR_;
try{reagent.ratom._STAR_ratom_context_STAR_ = null;

return cljs.core.get_in.call(null,cljs.core.deref.call(null,a),path);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_19799;
}});

/**
* @constructor
*/
reagent.ratom.RCursor = (function (path,ratom,setf,reaction){
this.path = path;
this.ratom = ratom;
this.setf = setf;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path,self__.setf], null));
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core._notify_watches.call(null,self__.ratom,oldval,newval);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._add_watch.call(null,self__.ratom,key,f);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return cljs.core._remove_watch.call(null,self__.ratom,key);
});

reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,"#<Cursor: ");

cljs.core.pr_writer.call(null,self__.path,writer,opts);

cljs.core._write.call(null,writer," ");

cljs.core.pr_writer.call(null,self__.ratom,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,reagent.ratom.peek_at.call(null,self__.ratom,self__.path)));
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,reagent.ratom.peek_at.call(null,self__.ratom,self__.path),x));
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,reagent.ratom.peek_at.call(null,self__.ratom,self__.path),x,y));
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,reagent.ratom.peek_at.call(null,self__.ratom,self__.path),x,y,more));
});

reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.setf == null)){
return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.assoc_in,self__.path,new_value);
} else {
return self__.setf.call(null,new_value);
}
});

reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((reagent.ratom._STAR_ratom_context_STAR_ == null)){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
} else {
if((self__.reaction == null)){
self__.reaction = reagent.ratom.make_reaction.call(null,((function (this$__$1){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
});})(this$__$1))
);
} else {
}

return cljs.core.deref.call(null,self__.reaction);
}
});

reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return ((other instanceof reagent.ratom.RCursor)) && (cljs.core._EQ_.call(null,self__.path,other.path)) && (cljs.core._EQ_.call(null,self__.ratom,other.ratom)) && (cljs.core._EQ_.call(null,self__.setf,other.setf));
});

reagent.ratom.RCursor.cljs$lang$type = true;

reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";

reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__13413__auto__,writer__13414__auto__,opt__13415__auto__){
return cljs.core._write.call(null,writer__13414__auto__,"reagent.ratom/RCursor");
});

reagent.ratom.__GT_RCursor = (function __GT_RCursor(path,ratom,setf,reaction){
return (new reagent.ratom.RCursor(path,ratom,setf,reaction));
});

reagent.ratom.cursor = (function() {
var cursor = null;
var cursor__2 = (function (path,ra){
return (new reagent.ratom.RCursor(path,ra,null,null));
});
var cursor__4 = (function (path,ra,setf,args){
return (new reagent.ratom.RCursor(path,ra,(new reagent.impl.util.partial_ifn(setf,args,null)),null));
});
cursor = function(path,ra,setf,args){
switch(arguments.length){
case 2:
return cursor__2.call(this,path,ra);
case 4:
return cursor__4.call(this,path,ra,setf,args);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cursor.cljs$core$IFn$_invoke$arity$2 = cursor__2;
cursor.cljs$core$IFn$_invoke$arity$4 = cursor__4;
return cursor;
})()
;

reagent.ratom.IDisposable = (function (){var obj19801 = {};
return obj19801;
})();

reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){
if((function (){var and__12814__auto__ = this$;
if(and__12814__auto__){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else {
return and__12814__auto__;
}
})()){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__13470__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12826__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__13470__auto__)]);
if(or__12826__auto__){
return or__12826__auto__;
} else {
var or__12826__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(or__12826__auto____$1){
return or__12826__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IRunnable = (function (){var obj19803 = {};
return obj19803;
})();

reagent.ratom.run = (function run(this$){
if((function (){var and__12814__auto__ = this$;
if(and__12814__auto__){
return this$.reagent$ratom$IRunnable$run$arity$1;
} else {
return and__12814__auto__;
}
})()){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__13470__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12826__auto__ = (reagent.ratom.run[goog.typeOf(x__13470__auto__)]);
if(or__12826__auto__){
return or__12826__auto__;
} else {
var or__12826__auto____$1 = (reagent.ratom.run["_"]);
if(or__12826__auto____$1){
return or__12826__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IComputedImpl = (function (){var obj19805 = {};
return obj19805;
})();

reagent.ratom._update_watching = (function _update_watching(this$,derefed){
if((function (){var and__12814__auto__ = this$;
if(and__12814__auto__){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else {
return and__12814__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else {
var x__13470__auto__ = (((this$ == null))?null:this$);
return (function (){var or__12826__auto__ = (reagent.ratom._update_watching[goog.typeOf(x__13470__auto__)]);
if(or__12826__auto__){
return or__12826__auto__;
} else {
var or__12826__auto____$1 = (reagent.ratom._update_watching["_"]);
if(or__12826__auto____$1){
return or__12826__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});

reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){
if((function (){var and__12814__auto__ = k;
if(and__12814__auto__){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else {
return and__12814__auto__;
}
})()){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else {
var x__13470__auto__ = (((k == null))?null:k);
return (function (){var or__12826__auto__ = (reagent.ratom._handle_change[goog.typeOf(x__13470__auto__)]);
if(or__12826__auto__){
return or__12826__auto__;
} else {
var or__12826__auto____$1 = (reagent.ratom._handle_change["_"]);
if(or__12826__auto____$1){
return or__12826__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});

reagent.ratom.call_watches = (function call_watches(obs,watches,oldval,newval){
return cljs.core.reduce_kv.call(null,(function (_,key,f){
f.call(null,key,obs,oldval,newval);

return null;
}),null,watches);
});

/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__12814__auto__ = self__.active_QMARK_;
if(cljs.core.truth_(and__12814__auto__)){
return (cljs.core.not.call(null,self__.dirty_QMARK_)) && (!((oldval === newval)));
} else {
return and__12814__auto__;
}
})())){
self__.dirty_QMARK_ = true;

return (function (){var or__12826__auto__ = self__.auto_run;
if(cljs.core.truth_(or__12826__auto__)){
return or__12826__auto__;
} else {
return reagent.ratom.run;
}
})().call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){
var self__ = this;
var this$__$1 = this;
var seq__19806_19818 = cljs.core.seq.call(null,derefed);
var chunk__19807_19819 = null;
var count__19808_19820 = (0);
var i__19809_19821 = (0);
while(true){
if((i__19809_19821 < count__19808_19820)){
var w_19822 = cljs.core._nth.call(null,chunk__19807_19819,i__19809_19821);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_19822)){
} else {
cljs.core.add_watch.call(null,w_19822,this$__$1,reagent.ratom._handle_change);
}

var G__19823 = seq__19806_19818;
var G__19824 = chunk__19807_19819;
var G__19825 = count__19808_19820;
var G__19826 = (i__19809_19821 + (1));
seq__19806_19818 = G__19823;
chunk__19807_19819 = G__19824;
count__19808_19820 = G__19825;
i__19809_19821 = G__19826;
continue;
} else {
var temp__4126__auto___19827 = cljs.core.seq.call(null,seq__19806_19818);
if(temp__4126__auto___19827){
var seq__19806_19828__$1 = temp__4126__auto___19827;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19806_19828__$1)){
var c__13613__auto___19829 = cljs.core.chunk_first.call(null,seq__19806_19828__$1);
var G__19830 = cljs.core.chunk_rest.call(null,seq__19806_19828__$1);
var G__19831 = c__13613__auto___19829;
var G__19832 = cljs.core.count.call(null,c__13613__auto___19829);
var G__19833 = (0);
seq__19806_19818 = G__19830;
chunk__19807_19819 = G__19831;
count__19808_19820 = G__19832;
i__19809_19821 = G__19833;
continue;
} else {
var w_19834 = cljs.core.first.call(null,seq__19806_19828__$1);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_19834)){
} else {
cljs.core.add_watch.call(null,w_19834,this$__$1,reagent.ratom._handle_change);
}

var G__19835 = cljs.core.next.call(null,seq__19806_19828__$1);
var G__19836 = null;
var G__19837 = (0);
var G__19838 = (0);
seq__19806_19818 = G__19835;
chunk__19807_19819 = G__19836;
count__19808_19820 = G__19837;
i__19809_19821 = G__19838;
continue;
}
} else {
}
}
break;
}

var seq__19810_19839 = cljs.core.seq.call(null,self__.watching);
var chunk__19811_19840 = null;
var count__19812_19841 = (0);
var i__19813_19842 = (0);
while(true){
if((i__19813_19842 < count__19812_19841)){
var w_19843 = cljs.core._nth.call(null,chunk__19811_19840,i__19813_19842);
if(cljs.core.contains_QMARK_.call(null,derefed,w_19843)){
} else {
cljs.core.remove_watch.call(null,w_19843,this$__$1);
}

var G__19844 = seq__19810_19839;
var G__19845 = chunk__19811_19840;
var G__19846 = count__19812_19841;
var G__19847 = (i__19813_19842 + (1));
seq__19810_19839 = G__19844;
chunk__19811_19840 = G__19845;
count__19812_19841 = G__19846;
i__19813_19842 = G__19847;
continue;
} else {
var temp__4126__auto___19848 = cljs.core.seq.call(null,seq__19810_19839);
if(temp__4126__auto___19848){
var seq__19810_19849__$1 = temp__4126__auto___19848;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19810_19849__$1)){
var c__13613__auto___19850 = cljs.core.chunk_first.call(null,seq__19810_19849__$1);
var G__19851 = cljs.core.chunk_rest.call(null,seq__19810_19849__$1);
var G__19852 = c__13613__auto___19850;
var G__19853 = cljs.core.count.call(null,c__13613__auto___19850);
var G__19854 = (0);
seq__19810_19839 = G__19851;
chunk__19811_19840 = G__19852;
count__19812_19841 = G__19853;
i__19813_19842 = G__19854;
continue;
} else {
var w_19855 = cljs.core.first.call(null,seq__19810_19849__$1);
if(cljs.core.contains_QMARK_.call(null,derefed,w_19855)){
} else {
cljs.core.remove_watch.call(null,w_19855,this$__$1);
}

var G__19856 = cljs.core.next.call(null,seq__19810_19849__$1);
var G__19857 = null;
var G__19858 = (0);
var G__19859 = (0);
seq__19810_19839 = G__19856;
chunk__19811_19840 = G__19857;
count__19812_19841 = G__19858;
i__19813_19842 = G__19859;
continue;
}
} else {
}
}
break;
}

return self__.watching = derefed;
});

reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write.call(null,writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash.call(null,this$__$1)),cljs.core.str(": ")].join(''));

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__19814_19860 = cljs.core.seq.call(null,self__.watching);
var chunk__19815_19861 = null;
var count__19816_19862 = (0);
var i__19817_19863 = (0);
while(true){
if((i__19817_19863 < count__19816_19862)){
var w_19864 = cljs.core._nth.call(null,chunk__19815_19861,i__19817_19863);
cljs.core.remove_watch.call(null,w_19864,this$__$1);

var G__19865 = seq__19814_19860;
var G__19866 = chunk__19815_19861;
var G__19867 = count__19816_19862;
var G__19868 = (i__19817_19863 + (1));
seq__19814_19860 = G__19865;
chunk__19815_19861 = G__19866;
count__19816_19862 = G__19867;
i__19817_19863 = G__19868;
continue;
} else {
var temp__4126__auto___19869 = cljs.core.seq.call(null,seq__19814_19860);
if(temp__4126__auto___19869){
var seq__19814_19870__$1 = temp__4126__auto___19869;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19814_19870__$1)){
var c__13613__auto___19871 = cljs.core.chunk_first.call(null,seq__19814_19870__$1);
var G__19872 = cljs.core.chunk_rest.call(null,seq__19814_19870__$1);
var G__19873 = c__13613__auto___19871;
var G__19874 = cljs.core.count.call(null,c__13613__auto___19871);
var G__19875 = (0);
seq__19814_19860 = G__19872;
chunk__19815_19861 = G__19873;
count__19816_19862 = G__19874;
i__19817_19863 = G__19875;
continue;
} else {
var w_19876 = cljs.core.first.call(null,seq__19814_19870__$1);
cljs.core.remove_watch.call(null,w_19876,this$__$1);

var G__19877 = cljs.core.next.call(null,seq__19814_19870__$1);
var G__19878 = null;
var G__19879 = (0);
var G__19880 = (0);
seq__19814_19860 = G__19877;
chunk__19815_19861 = G__19878;
count__19816_19862 = G__19879;
i__19817_19863 = G__19880;
continue;
}
} else {
}
}
break;
}

self__.watching = cljs.core.PersistentHashSet.EMPTY;

self__.state = null;

self__.dirty_QMARK_ = true;

if(cljs.core.truth_(self__.active_QMARK_)){
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
} else {
}

self__.active_QMARK_ = false;
} else {
}

if(cljs.core.truth_(self__.on_dispose)){
return self__.on_dispose.call(null);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
var old_value = self__.state;
self__.state = new_value;

cljs.core._notify_watches.call(null,a__$1,old_value,new_value);

return new_value;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x,y));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,self__.state,x,y,more));
});

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var res = reagent.ratom.capture_derefed.call(null,self__.f,this$__$1);
var derefed = reagent.ratom.captured.call(null,this$__$1);
if(cljs.core.not_EQ_.call(null,derefed,self__.watching)){
reagent.ratom._update_watching.call(null,this$__$1,derefed);
} else {
}

if(cljs.core.truth_(self__.active_QMARK_)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

self__.active_QMARK_ = true;
}

self__.dirty_QMARK_ = false;

self__.state = res;

reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldstate,self__.state);

return res;
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.on_set)){
self__.on_set.call(null,oldval,newval);
} else {
}

return reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldval,newval);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,k,wf);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
self__.watches = cljs.core.dissoc.call(null,self__.watches,k);

if(cljs.core.empty_QMARK_.call(null,self__.watches)){
return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not.call(null,(function (){var or__12826__auto__ = self__.auto_run;
if(cljs.core.truth_(or__12826__auto__)){
return or__12826__auto__;
} else {
return reagent.ratom._STAR_ratom_context_STAR_;
}
})())){
var x__15405__auto___19881 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,reagent.ratom._STAR_ratom_context_STAR_], null);
if(typeof console !== 'undefined'){
console.log([cljs.core.str([cljs.core.str("dbg "),cljs.core.str("reagent.ratom"),cljs.core.str(":"),cljs.core.str(249),cljs.core.str(": "),cljs.core.str("[auto-run *ratom-context*]"),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.call(null,x__15405__auto___19881))].join(''))].join(''));
} else {
}

} else {
}

if(cljs.core.truth_((function (){var or__12826__auto__ = self__.auto_run;
if(cljs.core.truth_(or__12826__auto__)){
return or__12826__auto__;
} else {
return reagent.ratom._STAR_ratom_context_STAR_;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Reaction derefed outside auto-running context"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.Symbol(null,"*ratom-context*","*ratom-context*",-1557728360,null))))].join('')));
}

reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

if(cljs.core.truth_(self__.dirty_QMARK_)){
return reagent.ratom.run.call(null,this$__$1);
} else {
return self__.state;
}
});

reagent.ratom.Reaction.cljs$lang$type = true;

reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__13413__auto__,writer__13414__auto__,opt__13415__auto__){
return cljs.core._write.call(null,writer__13414__auto__,"reagent.ratom/Reaction");
});

reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});

/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__19882){
var map__19884 = p__19882;
var map__19884__$1 = ((cljs.core.seq_QMARK_.call(null,map__19884))?cljs.core.apply.call(null,cljs.core.hash_map,map__19884):map__19884);
var derefed = cljs.core.get.call(null,map__19884__$1,new cljs.core.Keyword(null,"derefed","derefed",590684583));
var on_dispose = cljs.core.get.call(null,map__19884__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var on_set = cljs.core.get.call(null,map__19884__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var auto_run = cljs.core.get.call(null,map__19884__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var runner = ((cljs.core._EQ_.call(null,auto_run,true))?reagent.ratom.run:auto_run);
var active = !((derefed == null));
var dirty = !(active);
var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,cljs.core.PersistentArrayMap.EMPTY,runner,on_set,on_dispose));
if((derefed == null)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

reagent.ratom._update_watching.call(null,reaction,derefed);
}

return reaction;
};
var make_reaction = function (f,var_args){
var p__19882 = null;
if (arguments.length > 1) {
  p__19882 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return make_reaction__delegate.call(this,f,p__19882);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__19885){
var f = cljs.core.first(arglist__19885);
var p__19882 = cljs.core.rest(arglist__19885);
return make_reaction__delegate(f,p__19882);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;
