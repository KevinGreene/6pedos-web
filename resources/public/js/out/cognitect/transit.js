// Compiled by ClojureScript 0.0-2657 {}
if(!goog.isProvided_('cognitect.transit')) {
goog.provide('cognitect.transit');
}
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
cognitect.transit.opts_merge = (function opts_merge(a,b){
var seq__19575_19579 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__19576_19580 = null;
var count__19577_19581 = (0);
var i__19578_19582 = (0);
while(true){
if((i__19578_19582 < count__19577_19581)){
var k_19583 = cljs.core._nth.call(null,chunk__19576_19580,i__19578_19582);
var v_19584 = (b[k_19583]);
(a[k_19583] = v_19584);

var G__19585 = seq__19575_19579;
var G__19586 = chunk__19576_19580;
var G__19587 = count__19577_19581;
var G__19588 = (i__19578_19582 + (1));
seq__19575_19579 = G__19585;
chunk__19576_19580 = G__19586;
count__19577_19581 = G__19587;
i__19578_19582 = G__19588;
continue;
} else {
var temp__4126__auto___19589 = cljs.core.seq.call(null,seq__19575_19579);
if(temp__4126__auto___19589){
var seq__19575_19590__$1 = temp__4126__auto___19589;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19575_19590__$1)){
var c__13613__auto___19591 = cljs.core.chunk_first.call(null,seq__19575_19590__$1);
var G__19592 = cljs.core.chunk_rest.call(null,seq__19575_19590__$1);
var G__19593 = c__13613__auto___19591;
var G__19594 = cljs.core.count.call(null,c__13613__auto___19591);
var G__19595 = (0);
seq__19575_19579 = G__19592;
chunk__19576_19580 = G__19593;
count__19577_19581 = G__19594;
i__19578_19582 = G__19595;
continue;
} else {
var k_19596 = cljs.core.first.call(null,seq__19575_19590__$1);
var v_19597 = (b[k_19596]);
(a[k_19596] = v_19597);

var G__19598 = cljs.core.next.call(null,seq__19575_19590__$1);
var G__19599 = null;
var G__19600 = (0);
var G__19601 = (0);
seq__19575_19579 = G__19598;
chunk__19576_19580 = G__19599;
count__19577_19581 = G__19600;
i__19578_19582 = G__19601;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__13413__auto__,writer__13414__auto__,opt__13415__auto__){
return cljs.core._write.call(null,writer__13414__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__13413__auto__,writer__13414__auto__,opt__13415__auto__){
return cljs.core._write.call(null,writer__13414__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){
return reader.call(null,type,null);
});
var reader__2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__19602 = (i + (2));
var G__19603 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__19602;
ret = G__19603;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)))},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__13413__auto__,writer__13414__auto__,opt__13415__auto__){
return cljs.core._write.call(null,writer__13414__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__13413__auto__,writer__13414__auto__,opt__13415__auto__){
return cljs.core._write.call(null,writer__13414__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__19604_19608 = cljs.core.seq.call(null,v);
var chunk__19605_19609 = null;
var count__19606_19610 = (0);
var i__19607_19611 = (0);
while(true){
if((i__19607_19611 < count__19606_19610)){
var x_19612 = cljs.core._nth.call(null,chunk__19605_19609,i__19607_19611);
ret.push(x_19612);

var G__19613 = seq__19604_19608;
var G__19614 = chunk__19605_19609;
var G__19615 = count__19606_19610;
var G__19616 = (i__19607_19611 + (1));
seq__19604_19608 = G__19613;
chunk__19605_19609 = G__19614;
count__19606_19610 = G__19615;
i__19607_19611 = G__19616;
continue;
} else {
var temp__4126__auto___19617 = cljs.core.seq.call(null,seq__19604_19608);
if(temp__4126__auto___19617){
var seq__19604_19618__$1 = temp__4126__auto___19617;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19604_19618__$1)){
var c__13613__auto___19619 = cljs.core.chunk_first.call(null,seq__19604_19618__$1);
var G__19620 = cljs.core.chunk_rest.call(null,seq__19604_19618__$1);
var G__19621 = c__13613__auto___19619;
var G__19622 = cljs.core.count.call(null,c__13613__auto___19619);
var G__19623 = (0);
seq__19604_19608 = G__19620;
chunk__19605_19609 = G__19621;
count__19606_19610 = G__19622;
i__19607_19611 = G__19623;
continue;
} else {
var x_19624 = cljs.core.first.call(null,seq__19604_19618__$1);
ret.push(x_19624);

var G__19625 = cljs.core.next.call(null,seq__19604_19618__$1);
var G__19626 = null;
var G__19627 = (0);
var G__19628 = (0);
seq__19604_19608 = G__19625;
chunk__19605_19609 = G__19626;
count__19606_19610 = G__19627;
i__19607_19611 = G__19628;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__13413__auto__,writer__13414__auto__,opt__13415__auto__){
return cljs.core._write.call(null,writer__13414__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__13413__auto__,writer__13414__auto__,opt__13415__auto__){
return cljs.core._write.call(null,writer__13414__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__19629_19633 = cljs.core.seq.call(null,v);
var chunk__19630_19634 = null;
var count__19631_19635 = (0);
var i__19632_19636 = (0);
while(true){
if((i__19632_19636 < count__19631_19635)){
var x_19637 = cljs.core._nth.call(null,chunk__19630_19634,i__19632_19636);
ret.push(x_19637);

var G__19638 = seq__19629_19633;
var G__19639 = chunk__19630_19634;
var G__19640 = count__19631_19635;
var G__19641 = (i__19632_19636 + (1));
seq__19629_19633 = G__19638;
chunk__19630_19634 = G__19639;
count__19631_19635 = G__19640;
i__19632_19636 = G__19641;
continue;
} else {
var temp__4126__auto___19642 = cljs.core.seq.call(null,seq__19629_19633);
if(temp__4126__auto___19642){
var seq__19629_19643__$1 = temp__4126__auto___19642;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19629_19643__$1)){
var c__13613__auto___19644 = cljs.core.chunk_first.call(null,seq__19629_19643__$1);
var G__19645 = cljs.core.chunk_rest.call(null,seq__19629_19643__$1);
var G__19646 = c__13613__auto___19644;
var G__19647 = cljs.core.count.call(null,c__13613__auto___19644);
var G__19648 = (0);
seq__19629_19633 = G__19645;
chunk__19630_19634 = G__19646;
count__19631_19635 = G__19647;
i__19632_19636 = G__19648;
continue;
} else {
var x_19649 = cljs.core.first.call(null,seq__19629_19643__$1);
ret.push(x_19649);

var G__19650 = cljs.core.next.call(null,seq__19629_19643__$1);
var G__19651 = null;
var G__19652 = (0);
var G__19653 = (0);
seq__19629_19633 = G__19650;
chunk__19630_19634 = G__19651;
count__19631_19635 = G__19652;
i__19632_19636 = G__19653;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__13413__auto__,writer__13414__auto__,opt__13415__auto__){
return cljs.core._write.call(null,writer__13414__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__19654_19658 = cljs.core.seq.call(null,v);
var chunk__19655_19659 = null;
var count__19656_19660 = (0);
var i__19657_19661 = (0);
while(true){
if((i__19657_19661 < count__19656_19660)){
var x_19662 = cljs.core._nth.call(null,chunk__19655_19659,i__19657_19661);
ret.push(x_19662);

var G__19663 = seq__19654_19658;
var G__19664 = chunk__19655_19659;
var G__19665 = count__19656_19660;
var G__19666 = (i__19657_19661 + (1));
seq__19654_19658 = G__19663;
chunk__19655_19659 = G__19664;
count__19656_19660 = G__19665;
i__19657_19661 = G__19666;
continue;
} else {
var temp__4126__auto___19667 = cljs.core.seq.call(null,seq__19654_19658);
if(temp__4126__auto___19667){
var seq__19654_19668__$1 = temp__4126__auto___19667;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19654_19668__$1)){
var c__13613__auto___19669 = cljs.core.chunk_first.call(null,seq__19654_19668__$1);
var G__19670 = cljs.core.chunk_rest.call(null,seq__19654_19668__$1);
var G__19671 = c__13613__auto___19669;
var G__19672 = cljs.core.count.call(null,c__13613__auto___19669);
var G__19673 = (0);
seq__19654_19658 = G__19670;
chunk__19655_19659 = G__19671;
count__19656_19660 = G__19672;
i__19657_19661 = G__19673;
continue;
} else {
var x_19674 = cljs.core.first.call(null,seq__19654_19668__$1);
ret.push(x_19674);

var G__19675 = cljs.core.next.call(null,seq__19654_19668__$1);
var G__19676 = null;
var G__19677 = (0);
var G__19678 = (0);
seq__19654_19658 = G__19675;
chunk__19655_19659 = G__19676;
count__19656_19660 = G__19677;
i__19657_19661 = G__19678;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__13413__auto__,writer__13414__auto__,opt__13415__auto__){
return cljs.core._write.call(null,writer__13414__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__13413__auto__,writer__13414__auto__,opt__13415__auto__){
return cljs.core._write.call(null,writer__13414__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function __GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a map of
* type constructors to handler instances.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){
return writer.call(null,type,null);
});
var writer__2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x19688 = cljs.core.clone.call(null,handlers);
x19688.forEach = ((function (x19688,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__19689 = cljs.core.seq.call(null,coll);
var chunk__19690 = null;
var count__19691 = (0);
var i__19692 = (0);
while(true){
if((i__19692 < count__19691)){
var vec__19693 = cljs.core._nth.call(null,chunk__19690,i__19692);
var k = cljs.core.nth.call(null,vec__19693,(0),null);
var v = cljs.core.nth.call(null,vec__19693,(1),null);
f.call(null,v,k);

var G__19695 = seq__19689;
var G__19696 = chunk__19690;
var G__19697 = count__19691;
var G__19698 = (i__19692 + (1));
seq__19689 = G__19695;
chunk__19690 = G__19696;
count__19691 = G__19697;
i__19692 = G__19698;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__19689);
if(temp__4126__auto__){
var seq__19689__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19689__$1)){
var c__13613__auto__ = cljs.core.chunk_first.call(null,seq__19689__$1);
var G__19699 = cljs.core.chunk_rest.call(null,seq__19689__$1);
var G__19700 = c__13613__auto__;
var G__19701 = cljs.core.count.call(null,c__13613__auto__);
var G__19702 = (0);
seq__19689 = G__19699;
chunk__19690 = G__19700;
count__19691 = G__19701;
i__19692 = G__19702;
continue;
} else {
var vec__19694 = cljs.core.first.call(null,seq__19689__$1);
var k = cljs.core.nth.call(null,vec__19694,(0),null);
var v = cljs.core.nth.call(null,vec__19694,(1),null);
f.call(null,v,k);

var G__19703 = cljs.core.next.call(null,seq__19689__$1);
var G__19704 = null;
var G__19705 = (0);
var G__19706 = (0);
seq__19689 = G__19703;
chunk__19690 = G__19704;
count__19691 = G__19705;
i__19692 = G__19706;
continue;
}
} else {
return null;
}
}
break;
}
});})(x19688,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x19688;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__19687 = obj;
G__19687.push(kfn.call(null,k),vfn.call(null,v));

return G__19687;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){
return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){
return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){
return write_handler.call(null,tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){
return write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t19710 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t19710 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta19711){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta19711 = meta19711;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t19710.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t19710.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t19710.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t19710.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t19710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19712){
var self__ = this;
var _19712__$1 = this;
return self__.meta19711;
});

cognitect.transit.t19710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19712,meta19711__$1){
var self__ = this;
var _19712__$1 = this;
return (new cognitect.transit.t19710(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta19711__$1));
});

cognitect.transit.t19710.cljs$lang$type = true;

cognitect.transit.t19710.cljs$lang$ctorStr = "cognitect.transit/t19710";

cognitect.transit.t19710.cljs$lang$ctorPrWriter = (function (this__13413__auto__,writer__13414__auto__,opt__13415__auto__){
return cljs.core._write.call(null,writer__13414__auto__,"cognitect.transit/t19710");
});

cognitect.transit.__GT_t19710 = (function __GT_t19710(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta19711){
return (new cognitect.transit.t19710(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta19711));
});

}

return (new cognitect.transit.t19710(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),79,new cljs.core.Keyword(null,"end-line","end-line",1837326455),259,new cljs.core.Keyword(null,"column","column",2078222095),6,new cljs.core.Keyword(null,"line","line",212345235),254,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/uris77/Development/clojure/6pedos/public-pedos/resources/public/js/out/cognitect/transit.cljs"], null)));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){
return com.cognitect.transit.types.integer.call(null,s);
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});
