// Compiled by ClojureScript 0.0-2657 {}
if(!goog.isProvided_('cljs.core.async')) {
goog.provide('cljs.core.async');
}
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t21620 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21620 = (function (f,fn_handler,meta21621){
this.f = f;
this.fn_handler = fn_handler;
this.meta21621 = meta21621;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21620.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21620.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t21620.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t21620.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21622){
var self__ = this;
var _21622__$1 = this;
return self__.meta21621;
});

cljs.core.async.t21620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21622,meta21621__$1){
var self__ = this;
var _21622__$1 = this;
return (new cljs.core.async.t21620(self__.f,self__.fn_handler,meta21621__$1));
});

cljs.core.async.t21620.cljs$lang$type = true;

cljs.core.async.t21620.cljs$lang$ctorStr = "cljs.core.async/t21620";

cljs.core.async.t21620.cljs$lang$ctorPrWriter = (function (this__13413__auto__,writer__13414__auto__,opt__13415__auto__){
return cljs.core._write.call(null,writer__13414__auto__,"cljs.core.async/t21620");
});

cljs.core.async.__GT_t21620 = (function __GT_t21620(f__$1,fn_handler__$1,meta21621){
return (new cljs.core.async.t21620(f__$1,fn_handler__$1,meta21621));
});

}

return (new cljs.core.async.t21620(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/uris77/Development/clojure/6pedos/public-pedos/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__21624 = buff;
if(G__21624){
var bit__13507__auto__ = null;
if(cljs.core.truth_((function (){var or__12826__auto__ = bit__13507__auto__;
if(cljs.core.truth_(or__12826__auto__)){
return or__12826__auto__;
} else {
return G__21624.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__21624.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21624);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21624);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21625 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21625);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21625,ret){
return (function (){
return fn1.call(null,val_21625);
});})(val_21625,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__13713__auto___21626 = n;
var x_21627 = (0);
while(true){
if((x_21627 < n__13713__auto___21626)){
(a[x_21627] = (0));

var G__21628 = (x_21627 + (1));
x_21627 = G__21628;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__21629 = (i + (1));
i = G__21629;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t21633 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21633 = (function (flag,alt_flag,meta21634){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta21634 = meta21634;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21633.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21633.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t21633.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t21633.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21635){
var self__ = this;
var _21635__$1 = this;
return self__.meta21634;
});})(flag))
;

cljs.core.async.t21633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21635,meta21634__$1){
var self__ = this;
var _21635__$1 = this;
return (new cljs.core.async.t21633(self__.flag,self__.alt_flag,meta21634__$1));
});})(flag))
;

cljs.core.async.t21633.cljs$lang$type = true;

cljs.core.async.t21633.cljs$lang$ctorStr = "cljs.core.async/t21633";

cljs.core.async.t21633.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13413__auto__,writer__13414__auto__,opt__13415__auto__){
return cljs.core._write.call(null,writer__13414__auto__,"cljs.core.async/t21633");
});})(flag))
;

cljs.core.async.__GT_t21633 = ((function (flag){
return (function __GT_t21633(flag__$1,alt_flag__$1,meta21634){
return (new cljs.core.async.t21633(flag__$1,alt_flag__$1,meta21634));
});})(flag))
;

}

return (new cljs.core.async.t21633(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/uris77/Development/clojure/6pedos/public-pedos/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t21639 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21639 = (function (cb,flag,alt_handler,meta21640){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta21640 = meta21640;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21639.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21639.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t21639.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t21639.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21641){
var self__ = this;
var _21641__$1 = this;
return self__.meta21640;
});

cljs.core.async.t21639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21641,meta21640__$1){
var self__ = this;
var _21641__$1 = this;
return (new cljs.core.async.t21639(self__.cb,self__.flag,self__.alt_handler,meta21640__$1));
});

cljs.core.async.t21639.cljs$lang$type = true;

cljs.core.async.t21639.cljs$lang$ctorStr = "cljs.core.async/t21639";

cljs.core.async.t21639.cljs$lang$ctorPrWriter = (function (this__13413__auto__,writer__13414__auto__,opt__13415__auto__){
return cljs.core._write.call(null,writer__13414__auto__,"cljs.core.async/t21639");
});

cljs.core.async.__GT_t21639 = (function __GT_t21639(cb__$1,flag__$1,alt_handler__$1,meta21640){
return (new cljs.core.async.t21639(cb__$1,flag__$1,alt_handler__$1,meta21640));
});

}

return (new cljs.core.async.t21639(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/uris77/Development/clojure/6pedos/public-pedos/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21642_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21642_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21643_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21643_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__12826__auto__ = wport;
if(cljs.core.truth_(or__12826__auto__)){
return or__12826__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21644 = (i + (1));
i = G__21644;
continue;
}
} else {
return null;
}
break;
}
})();
var or__12826__auto__ = ret;
if(cljs.core.truth_(or__12826__auto__)){
return or__12826__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__12814__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__12814__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__12814__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__21645){
var map__21647 = p__21645;
var map__21647__$1 = ((cljs.core.seq_QMARK_.call(null,map__21647))?cljs.core.apply.call(null,cljs.core.hash_map,map__21647):map__21647);
var opts = map__21647__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__21645 = null;
if (arguments.length > 1) {
  p__21645 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__21645);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__21648){
var ports = cljs.core.first(arglist__21648);
var p__21645 = cljs.core.rest(arglist__21648);
return alts_BANG___delegate(ports,p__21645);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__16483__auto___21743 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16483__auto___21743){
return (function (){
var f__16484__auto__ = (function (){var switch__16427__auto__ = ((function (c__16483__auto___21743){
return (function (state_21719){
var state_val_21720 = (state_21719[(1)]);
if((state_val_21720 === (7))){
var inst_21715 = (state_21719[(2)]);
var state_21719__$1 = state_21719;
var statearr_21721_21744 = state_21719__$1;
(statearr_21721_21744[(2)] = inst_21715);

(statearr_21721_21744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21720 === (1))){
var state_21719__$1 = state_21719;
var statearr_21722_21745 = state_21719__$1;
(statearr_21722_21745[(2)] = null);

(statearr_21722_21745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21720 === (4))){
var inst_21698 = (state_21719[(7)]);
var inst_21698__$1 = (state_21719[(2)]);
var inst_21699 = (inst_21698__$1 == null);
var state_21719__$1 = (function (){var statearr_21723 = state_21719;
(statearr_21723[(7)] = inst_21698__$1);

return statearr_21723;
})();
if(cljs.core.truth_(inst_21699)){
var statearr_21724_21746 = state_21719__$1;
(statearr_21724_21746[(1)] = (5));

} else {
var statearr_21725_21747 = state_21719__$1;
(statearr_21725_21747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21720 === (13))){
var state_21719__$1 = state_21719;
var statearr_21726_21748 = state_21719__$1;
(statearr_21726_21748[(2)] = null);

(statearr_21726_21748[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21720 === (6))){
var inst_21698 = (state_21719[(7)]);
var state_21719__$1 = state_21719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21719__$1,(11),to,inst_21698);
} else {
if((state_val_21720 === (3))){
var inst_21717 = (state_21719[(2)]);
var state_21719__$1 = state_21719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21719__$1,inst_21717);
} else {
if((state_val_21720 === (12))){
var state_21719__$1 = state_21719;
var statearr_21727_21749 = state_21719__$1;
(statearr_21727_21749[(2)] = null);

(statearr_21727_21749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21720 === (2))){
var state_21719__$1 = state_21719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21719__$1,(4),from);
} else {
if((state_val_21720 === (11))){
var inst_21708 = (state_21719[(2)]);
var state_21719__$1 = state_21719;
if(cljs.core.truth_(inst_21708)){
var statearr_21728_21750 = state_21719__$1;
(statearr_21728_21750[(1)] = (12));

} else {
var statearr_21729_21751 = state_21719__$1;
(statearr_21729_21751[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21720 === (9))){
var state_21719__$1 = state_21719;
var statearr_21730_21752 = state_21719__$1;
(statearr_21730_21752[(2)] = null);

(statearr_21730_21752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21720 === (5))){
var state_21719__$1 = state_21719;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21731_21753 = state_21719__$1;
(statearr_21731_21753[(1)] = (8));

} else {
var statearr_21732_21754 = state_21719__$1;
(statearr_21732_21754[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21720 === (14))){
var inst_21713 = (state_21719[(2)]);
var state_21719__$1 = state_21719;
var statearr_21733_21755 = state_21719__$1;
(statearr_21733_21755[(2)] = inst_21713);

(statearr_21733_21755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21720 === (10))){
var inst_21705 = (state_21719[(2)]);
var state_21719__$1 = state_21719;
var statearr_21734_21756 = state_21719__$1;
(statearr_21734_21756[(2)] = inst_21705);

(statearr_21734_21756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21720 === (8))){
var inst_21702 = cljs.core.async.close_BANG_.call(null,to);
var state_21719__$1 = state_21719;
var statearr_21735_21757 = state_21719__$1;
(statearr_21735_21757[(2)] = inst_21702);

(statearr_21735_21757[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16483__auto___21743))
;
return ((function (switch__16427__auto__,c__16483__auto___21743){
return (function() {
var state_machine__16428__auto__ = null;
var state_machine__16428__auto____0 = (function (){
var statearr_21739 = [null,null,null,null,null,null,null,null];
(statearr_21739[(0)] = state_machine__16428__auto__);

(statearr_21739[(1)] = (1));

return statearr_21739;
});
var state_machine__16428__auto____1 = (function (state_21719){
while(true){
var ret_value__16429__auto__ = (function (){try{while(true){
var result__16430__auto__ = switch__16427__auto__.call(null,state_21719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16430__auto__;
}
break;
}
}catch (e21740){if((e21740 instanceof Object)){
var ex__16431__auto__ = e21740;
var statearr_21741_21758 = state_21719;
(statearr_21741_21758[(5)] = ex__16431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21759 = state_21719;
state_21719 = G__21759;
continue;
} else {
return ret_value__16429__auto__;
}
break;
}
});
state_machine__16428__auto__ = function(state_21719){
switch(arguments.length){
case 0:
return state_machine__16428__auto____0.call(this);
case 1:
return state_machine__16428__auto____1.call(this,state_21719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16428__auto____0;
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16428__auto____1;
return state_machine__16428__auto__;
})()
;})(switch__16427__auto__,c__16483__auto___21743))
})();
var state__16485__auto__ = (function (){var statearr_21742 = f__16484__auto__.call(null);
(statearr_21742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16483__auto___21743);

return statearr_21742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16485__auto__);
});})(c__16483__auto___21743))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__21943){
var vec__21944 = p__21943;
var v = cljs.core.nth.call(null,vec__21944,(0),null);
var p = cljs.core.nth.call(null,vec__21944,(1),null);
var job = vec__21944;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__16483__auto___22126 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16483__auto___22126,res,vec__21944,v,p,job,jobs,results){
return (function (){
var f__16484__auto__ = (function (){var switch__16427__auto__ = ((function (c__16483__auto___22126,res,vec__21944,v,p,job,jobs,results){
return (function (state_21949){
var state_val_21950 = (state_21949[(1)]);
if((state_val_21950 === (2))){
var inst_21946 = (state_21949[(2)]);
var inst_21947 = cljs.core.async.close_BANG_.call(null,res);
var state_21949__$1 = (function (){var statearr_21951 = state_21949;
(statearr_21951[(7)] = inst_21946);

return statearr_21951;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21949__$1,inst_21947);
} else {
if((state_val_21950 === (1))){
var state_21949__$1 = state_21949;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21949__$1,(2),res,v);
} else {
return null;
}
}
});})(c__16483__auto___22126,res,vec__21944,v,p,job,jobs,results))
;
return ((function (switch__16427__auto__,c__16483__auto___22126,res,vec__21944,v,p,job,jobs,results){
return (function() {
var state_machine__16428__auto__ = null;
var state_machine__16428__auto____0 = (function (){
var statearr_21955 = [null,null,null,null,null,null,null,null];
(statearr_21955[(0)] = state_machine__16428__auto__);

(statearr_21955[(1)] = (1));

return statearr_21955;
});
var state_machine__16428__auto____1 = (function (state_21949){
while(true){
var ret_value__16429__auto__ = (function (){try{while(true){
var result__16430__auto__ = switch__16427__auto__.call(null,state_21949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16430__auto__;
}
break;
}
}catch (e21956){if((e21956 instanceof Object)){
var ex__16431__auto__ = e21956;
var statearr_21957_22127 = state_21949;
(statearr_21957_22127[(5)] = ex__16431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22128 = state_21949;
state_21949 = G__22128;
continue;
} else {
return ret_value__16429__auto__;
}
break;
}
});
state_machine__16428__auto__ = function(state_21949){
switch(arguments.length){
case 0:
return state_machine__16428__auto____0.call(this);
case 1:
return state_machine__16428__auto____1.call(this,state_21949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16428__auto____0;
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16428__auto____1;
return state_machine__16428__auto__;
})()
;})(switch__16427__auto__,c__16483__auto___22126,res,vec__21944,v,p,job,jobs,results))
})();
var state__16485__auto__ = (function (){var statearr_21958 = f__16484__auto__.call(null);
(statearr_21958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16483__auto___22126);

return statearr_21958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16485__auto__);
});})(c__16483__auto___22126,res,vec__21944,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21959){
var vec__21960 = p__21959;
var v = cljs.core.nth.call(null,vec__21960,(0),null);
var p = cljs.core.nth.call(null,vec__21960,(1),null);
var job = vec__21960;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__13713__auto___22129 = n;
var __22130 = (0);
while(true){
if((__22130 < n__13713__auto___22129)){
var G__21961_22131 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21961_22131) {
case "async":
var c__16483__auto___22133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22130,c__16483__auto___22133,G__21961_22131,n__13713__auto___22129,jobs,results,process,async){
return (function (){
var f__16484__auto__ = (function (){var switch__16427__auto__ = ((function (__22130,c__16483__auto___22133,G__21961_22131,n__13713__auto___22129,jobs,results,process,async){
return (function (state_21974){
var state_val_21975 = (state_21974[(1)]);
if((state_val_21975 === (7))){
var inst_21970 = (state_21974[(2)]);
var state_21974__$1 = state_21974;
var statearr_21976_22134 = state_21974__$1;
(statearr_21976_22134[(2)] = inst_21970);

(statearr_21976_22134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (6))){
var state_21974__$1 = state_21974;
var statearr_21977_22135 = state_21974__$1;
(statearr_21977_22135[(2)] = null);

(statearr_21977_22135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (5))){
var state_21974__$1 = state_21974;
var statearr_21978_22136 = state_21974__$1;
(statearr_21978_22136[(2)] = null);

(statearr_21978_22136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (4))){
var inst_21964 = (state_21974[(2)]);
var inst_21965 = async.call(null,inst_21964);
var state_21974__$1 = state_21974;
if(cljs.core.truth_(inst_21965)){
var statearr_21979_22137 = state_21974__$1;
(statearr_21979_22137[(1)] = (5));

} else {
var statearr_21980_22138 = state_21974__$1;
(statearr_21980_22138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21975 === (3))){
var inst_21972 = (state_21974[(2)]);
var state_21974__$1 = state_21974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21974__$1,inst_21972);
} else {
if((state_val_21975 === (2))){
var state_21974__$1 = state_21974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21974__$1,(4),jobs);
} else {
if((state_val_21975 === (1))){
var state_21974__$1 = state_21974;
var statearr_21981_22139 = state_21974__$1;
(statearr_21981_22139[(2)] = null);

(statearr_21981_22139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__22130,c__16483__auto___22133,G__21961_22131,n__13713__auto___22129,jobs,results,process,async))
;
return ((function (__22130,switch__16427__auto__,c__16483__auto___22133,G__21961_22131,n__13713__auto___22129,jobs,results,process,async){
return (function() {
var state_machine__16428__auto__ = null;
var state_machine__16428__auto____0 = (function (){
var statearr_21985 = [null,null,null,null,null,null,null];
(statearr_21985[(0)] = state_machine__16428__auto__);

(statearr_21985[(1)] = (1));

return statearr_21985;
});
var state_machine__16428__auto____1 = (function (state_21974){
while(true){
var ret_value__16429__auto__ = (function (){try{while(true){
var result__16430__auto__ = switch__16427__auto__.call(null,state_21974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16430__auto__;
}
break;
}
}catch (e21986){if((e21986 instanceof Object)){
var ex__16431__auto__ = e21986;
var statearr_21987_22140 = state_21974;
(statearr_21987_22140[(5)] = ex__16431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22141 = state_21974;
state_21974 = G__22141;
continue;
} else {
return ret_value__16429__auto__;
}
break;
}
});
state_machine__16428__auto__ = function(state_21974){
switch(arguments.length){
case 0:
return state_machine__16428__auto____0.call(this);
case 1:
return state_machine__16428__auto____1.call(this,state_21974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16428__auto____0;
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16428__auto____1;
return state_machine__16428__auto__;
})()
;})(__22130,switch__16427__auto__,c__16483__auto___22133,G__21961_22131,n__13713__auto___22129,jobs,results,process,async))
})();
var state__16485__auto__ = (function (){var statearr_21988 = f__16484__auto__.call(null);
(statearr_21988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16483__auto___22133);

return statearr_21988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16485__auto__);
});})(__22130,c__16483__auto___22133,G__21961_22131,n__13713__auto___22129,jobs,results,process,async))
);


break;
case "compute":
var c__16483__auto___22142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22130,c__16483__auto___22142,G__21961_22131,n__13713__auto___22129,jobs,results,process,async){
return (function (){
var f__16484__auto__ = (function (){var switch__16427__auto__ = ((function (__22130,c__16483__auto___22142,G__21961_22131,n__13713__auto___22129,jobs,results,process,async){
return (function (state_22001){
var state_val_22002 = (state_22001[(1)]);
if((state_val_22002 === (7))){
var inst_21997 = (state_22001[(2)]);
var state_22001__$1 = state_22001;
var statearr_22003_22143 = state_22001__$1;
(statearr_22003_22143[(2)] = inst_21997);

(statearr_22003_22143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22002 === (6))){
var state_22001__$1 = state_22001;
var statearr_22004_22144 = state_22001__$1;
(statearr_22004_22144[(2)] = null);

(statearr_22004_22144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22002 === (5))){
var state_22001__$1 = state_22001;
var statearr_22005_22145 = state_22001__$1;
(statearr_22005_22145[(2)] = null);

(statearr_22005_22145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22002 === (4))){
var inst_21991 = (state_22001[(2)]);
var inst_21992 = process.call(null,inst_21991);
var state_22001__$1 = state_22001;
if(cljs.core.truth_(inst_21992)){
var statearr_22006_22146 = state_22001__$1;
(statearr_22006_22146[(1)] = (5));

} else {
var statearr_22007_22147 = state_22001__$1;
(statearr_22007_22147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22002 === (3))){
var inst_21999 = (state_22001[(2)]);
var state_22001__$1 = state_22001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22001__$1,inst_21999);
} else {
if((state_val_22002 === (2))){
var state_22001__$1 = state_22001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22001__$1,(4),jobs);
} else {
if((state_val_22002 === (1))){
var state_22001__$1 = state_22001;
var statearr_22008_22148 = state_22001__$1;
(statearr_22008_22148[(2)] = null);

(statearr_22008_22148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__22130,c__16483__auto___22142,G__21961_22131,n__13713__auto___22129,jobs,results,process,async))
;
return ((function (__22130,switch__16427__auto__,c__16483__auto___22142,G__21961_22131,n__13713__auto___22129,jobs,results,process,async){
return (function() {
var state_machine__16428__auto__ = null;
var state_machine__16428__auto____0 = (function (){
var statearr_22012 = [null,null,null,null,null,null,null];
(statearr_22012[(0)] = state_machine__16428__auto__);

(statearr_22012[(1)] = (1));

return statearr_22012;
});
var state_machine__16428__auto____1 = (function (state_22001){
while(true){
var ret_value__16429__auto__ = (function (){try{while(true){
var result__16430__auto__ = switch__16427__auto__.call(null,state_22001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16430__auto__;
}
break;
}
}catch (e22013){if((e22013 instanceof Object)){
var ex__16431__auto__ = e22013;
var statearr_22014_22149 = state_22001;
(statearr_22014_22149[(5)] = ex__16431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22150 = state_22001;
state_22001 = G__22150;
continue;
} else {
return ret_value__16429__auto__;
}
break;
}
});
state_machine__16428__auto__ = function(state_22001){
switch(arguments.length){
case 0:
return state_machine__16428__auto____0.call(this);
case 1:
return state_machine__16428__auto____1.call(this,state_22001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16428__auto____0;
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16428__auto____1;
return state_machine__16428__auto__;
})()
;})(__22130,switch__16427__auto__,c__16483__auto___22142,G__21961_22131,n__13713__auto___22129,jobs,results,process,async))
})();
var state__16485__auto__ = (function (){var statearr_22015 = f__16484__auto__.call(null);
(statearr_22015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16483__auto___22142);

return statearr_22015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16485__auto__);
});})(__22130,c__16483__auto___22142,G__21961_22131,n__13713__auto___22129,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22151 = (__22130 + (1));
__22130 = G__22151;
continue;
} else {
}
break;
}

var c__16483__auto___22152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16483__auto___22152,jobs,results,process,async){
return (function (){
var f__16484__auto__ = (function (){var switch__16427__auto__ = ((function (c__16483__auto___22152,jobs,results,process,async){
return (function (state_22037){
var state_val_22038 = (state_22037[(1)]);
if((state_val_22038 === (9))){
var inst_22030 = (state_22037[(2)]);
var state_22037__$1 = (function (){var statearr_22039 = state_22037;
(statearr_22039[(7)] = inst_22030);

return statearr_22039;
})();
var statearr_22040_22153 = state_22037__$1;
(statearr_22040_22153[(2)] = null);

(statearr_22040_22153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22038 === (8))){
var inst_22023 = (state_22037[(8)]);
var inst_22028 = (state_22037[(2)]);
var state_22037__$1 = (function (){var statearr_22041 = state_22037;
(statearr_22041[(9)] = inst_22028);

return statearr_22041;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22037__$1,(9),results,inst_22023);
} else {
if((state_val_22038 === (7))){
var inst_22033 = (state_22037[(2)]);
var state_22037__$1 = state_22037;
var statearr_22042_22154 = state_22037__$1;
(statearr_22042_22154[(2)] = inst_22033);

(statearr_22042_22154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22038 === (6))){
var inst_22023 = (state_22037[(8)]);
var inst_22018 = (state_22037[(10)]);
var inst_22023__$1 = cljs.core.async.chan.call(null,(1));
var inst_22024 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22025 = [inst_22018,inst_22023__$1];
var inst_22026 = (new cljs.core.PersistentVector(null,2,(5),inst_22024,inst_22025,null));
var state_22037__$1 = (function (){var statearr_22043 = state_22037;
(statearr_22043[(8)] = inst_22023__$1);

return statearr_22043;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22037__$1,(8),jobs,inst_22026);
} else {
if((state_val_22038 === (5))){
var inst_22021 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22037__$1 = state_22037;
var statearr_22044_22155 = state_22037__$1;
(statearr_22044_22155[(2)] = inst_22021);

(statearr_22044_22155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22038 === (4))){
var inst_22018 = (state_22037[(10)]);
var inst_22018__$1 = (state_22037[(2)]);
var inst_22019 = (inst_22018__$1 == null);
var state_22037__$1 = (function (){var statearr_22045 = state_22037;
(statearr_22045[(10)] = inst_22018__$1);

return statearr_22045;
})();
if(cljs.core.truth_(inst_22019)){
var statearr_22046_22156 = state_22037__$1;
(statearr_22046_22156[(1)] = (5));

} else {
var statearr_22047_22157 = state_22037__$1;
(statearr_22047_22157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22038 === (3))){
var inst_22035 = (state_22037[(2)]);
var state_22037__$1 = state_22037;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22037__$1,inst_22035);
} else {
if((state_val_22038 === (2))){
var state_22037__$1 = state_22037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22037__$1,(4),from);
} else {
if((state_val_22038 === (1))){
var state_22037__$1 = state_22037;
var statearr_22048_22158 = state_22037__$1;
(statearr_22048_22158[(2)] = null);

(statearr_22048_22158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__16483__auto___22152,jobs,results,process,async))
;
return ((function (switch__16427__auto__,c__16483__auto___22152,jobs,results,process,async){
return (function() {
var state_machine__16428__auto__ = null;
var state_machine__16428__auto____0 = (function (){
var statearr_22052 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22052[(0)] = state_machine__16428__auto__);

(statearr_22052[(1)] = (1));

return statearr_22052;
});
var state_machine__16428__auto____1 = (function (state_22037){
while(true){
var ret_value__16429__auto__ = (function (){try{while(true){
var result__16430__auto__ = switch__16427__auto__.call(null,state_22037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16430__auto__;
}
break;
}
}catch (e22053){if((e22053 instanceof Object)){
var ex__16431__auto__ = e22053;
var statearr_22054_22159 = state_22037;
(statearr_22054_22159[(5)] = ex__16431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22160 = state_22037;
state_22037 = G__22160;
continue;
} else {
return ret_value__16429__auto__;
}
break;
}
});
state_machine__16428__auto__ = function(state_22037){
switch(arguments.length){
case 0:
return state_machine__16428__auto____0.call(this);
case 1:
return state_machine__16428__auto____1.call(this,state_22037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16428__auto____0;
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16428__auto____1;
return state_machine__16428__auto__;
})()
;})(switch__16427__auto__,c__16483__auto___22152,jobs,results,process,async))
})();
var state__16485__auto__ = (function (){var statearr_22055 = f__16484__auto__.call(null);
(statearr_22055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16483__auto___22152);

return statearr_22055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16485__auto__);
});})(c__16483__auto___22152,jobs,results,process,async))
);


var c__16483__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16483__auto__,jobs,results,process,async){
return (function (){
var f__16484__auto__ = (function (){var switch__16427__auto__ = ((function (c__16483__auto__,jobs,results,process,async){
return (function (state_22093){
var state_val_22094 = (state_22093[(1)]);
if((state_val_22094 === (7))){
var inst_22089 = (state_22093[(2)]);
var state_22093__$1 = state_22093;
var statearr_22095_22161 = state_22093__$1;
(statearr_22095_22161[(2)] = inst_22089);

(statearr_22095_22161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22094 === (20))){
var state_22093__$1 = state_22093;
var statearr_22096_22162 = state_22093__$1;
(statearr_22096_22162[(2)] = null);

(statearr_22096_22162[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22094 === (1))){
var state_22093__$1 = state_22093;
var statearr_22097_22163 = state_22093__$1;
(statearr_22097_22163[(2)] = null);

(statearr_22097_22163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22094 === (4))){
var inst_22058 = (state_22093[(7)]);
var inst_22058__$1 = (state_22093[(2)]);
var inst_22059 = (inst_22058__$1 == null);
var state_22093__$1 = (function (){var statearr_22098 = state_22093;
(statearr_22098[(7)] = inst_22058__$1);

return statearr_22098;
})();
if(cljs.core.truth_(inst_22059)){
var statearr_22099_22164 = state_22093__$1;
(statearr_22099_22164[(1)] = (5));

} else {
var statearr_22100_22165 = state_22093__$1;
(statearr_22100_22165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22094 === (15))){
var inst_22071 = (state_22093[(8)]);
var state_22093__$1 = state_22093;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22093__$1,(18),to,inst_22071);
} else {
if((state_val_22094 === (21))){
var inst_22084 = (state_22093[(2)]);
var state_22093__$1 = state_22093;
var statearr_22101_22166 = state_22093__$1;
(statearr_22101_22166[(2)] = inst_22084);

(statearr_22101_22166[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22094 === (13))){
var inst_22086 = (state_22093[(2)]);
var state_22093__$1 = (function (){var statearr_22102 = state_22093;
(statearr_22102[(9)] = inst_22086);

return statearr_22102;
})();
var statearr_22103_22167 = state_22093__$1;
(statearr_22103_22167[(2)] = null);

(statearr_22103_22167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22094 === (6))){
var inst_22058 = (state_22093[(7)]);
var state_22093__$1 = state_22093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22093__$1,(11),inst_22058);
} else {
if((state_val_22094 === (17))){
var inst_22079 = (state_22093[(2)]);
var state_22093__$1 = state_22093;
if(cljs.core.truth_(inst_22079)){
var statearr_22104_22168 = state_22093__$1;
(statearr_22104_22168[(1)] = (19));

} else {
var statearr_22105_22169 = state_22093__$1;
(statearr_22105_22169[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22094 === (3))){
var inst_22091 = (state_22093[(2)]);
var state_22093__$1 = state_22093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22093__$1,inst_22091);
} else {
if((state_val_22094 === (12))){
var inst_22068 = (state_22093[(10)]);
var state_22093__$1 = state_22093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22093__$1,(14),inst_22068);
} else {
if((state_val_22094 === (2))){
var state_22093__$1 = state_22093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22093__$1,(4),results);
} else {
if((state_val_22094 === (19))){
var state_22093__$1 = state_22093;
var statearr_22106_22170 = state_22093__$1;
(statearr_22106_22170[(2)] = null);

(statearr_22106_22170[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22094 === (11))){
var inst_22068 = (state_22093[(2)]);
var state_22093__$1 = (function (){var statearr_22107 = state_22093;
(statearr_22107[(10)] = inst_22068);

return statearr_22107;
})();
var statearr_22108_22171 = state_22093__$1;
(statearr_22108_22171[(2)] = null);

(statearr_22108_22171[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22094 === (9))){
var state_22093__$1 = state_22093;
var statearr_22109_22172 = state_22093__$1;
(statearr_22109_22172[(2)] = null);

(statearr_22109_22172[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22094 === (5))){
var state_22093__$1 = state_22093;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22110_22173 = state_22093__$1;
(statearr_22110_22173[(1)] = (8));

} else {
var statearr_22111_22174 = state_22093__$1;
(statearr_22111_22174[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22094 === (14))){
var inst_22071 = (state_22093[(8)]);
var inst_22073 = (state_22093[(11)]);
var inst_22071__$1 = (state_22093[(2)]);
var inst_22072 = (inst_22071__$1 == null);
var inst_22073__$1 = cljs.core.not.call(null,inst_22072);
var state_22093__$1 = (function (){var statearr_22112 = state_22093;
(statearr_22112[(8)] = inst_22071__$1);

(statearr_22112[(11)] = inst_22073__$1);

return statearr_22112;
})();
if(inst_22073__$1){
var statearr_22113_22175 = state_22093__$1;
(statearr_22113_22175[(1)] = (15));

} else {
var statearr_22114_22176 = state_22093__$1;
(statearr_22114_22176[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22094 === (16))){
var inst_22073 = (state_22093[(11)]);
var state_22093__$1 = state_22093;
var statearr_22115_22177 = state_22093__$1;
(statearr_22115_22177[(2)] = inst_22073);

(statearr_22115_22177[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22094 === (10))){
var inst_22065 = (state_22093[(2)]);
var state_22093__$1 = state_22093;
var statearr_22116_22178 = state_22093__$1;
(statearr_22116_22178[(2)] = inst_22065);

(statearr_22116_22178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22094 === (18))){
var inst_22076 = (state_22093[(2)]);
var state_22093__$1 = state_22093;
var statearr_22117_22179 = state_22093__$1;
(statearr_22117_22179[(2)] = inst_22076);

(statearr_22117_22179[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22094 === (8))){
var inst_22062 = cljs.core.async.close_BANG_.call(null,to);
var state_22093__$1 = state_22093;
var statearr_22118_22180 = state_22093__$1;
(statearr_22118_22180[(2)] = inst_22062);

(statearr_22118_22180[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16483__auto__,jobs,results,process,async))
;
return ((function (switch__16427__auto__,c__16483__auto__,jobs,results,process,async){
return (function() {
var state_machine__16428__auto__ = null;
var state_machine__16428__auto____0 = (function (){
var statearr_22122 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22122[(0)] = state_machine__16428__auto__);

(statearr_22122[(1)] = (1));

return statearr_22122;
});
var state_machine__16428__auto____1 = (function (state_22093){
while(true){
var ret_value__16429__auto__ = (function (){try{while(true){
var result__16430__auto__ = switch__16427__auto__.call(null,state_22093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16430__auto__;
}
break;
}
}catch (e22123){if((e22123 instanceof Object)){
var ex__16431__auto__ = e22123;
var statearr_22124_22181 = state_22093;
(statearr_22124_22181[(5)] = ex__16431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22182 = state_22093;
state_22093 = G__22182;
continue;
} else {
return ret_value__16429__auto__;
}
break;
}
});
state_machine__16428__auto__ = function(state_22093){
switch(arguments.length){
case 0:
return state_machine__16428__auto____0.call(this);
case 1:
return state_machine__16428__auto____1.call(this,state_22093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16428__auto____0;
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16428__auto____1;
return state_machine__16428__auto__;
})()
;})(switch__16427__auto__,c__16483__auto__,jobs,results,process,async))
})();
var state__16485__auto__ = (function (){var statearr_22125 = f__16484__auto__.call(null);
(statearr_22125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16483__auto__);

return statearr_22125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16485__auto__);
});})(c__16483__auto__,jobs,results,process,async))
);

return c__16483__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__16483__auto___22283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16483__auto___22283,tc,fc){
return (function (){
var f__16484__auto__ = (function (){var switch__16427__auto__ = ((function (c__16483__auto___22283,tc,fc){
return (function (state_22258){
var state_val_22259 = (state_22258[(1)]);
if((state_val_22259 === (7))){
var inst_22254 = (state_22258[(2)]);
var state_22258__$1 = state_22258;
var statearr_22260_22284 = state_22258__$1;
(statearr_22260_22284[(2)] = inst_22254);

(statearr_22260_22284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22259 === (1))){
var state_22258__$1 = state_22258;
var statearr_22261_22285 = state_22258__$1;
(statearr_22261_22285[(2)] = null);

(statearr_22261_22285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22259 === (4))){
var inst_22235 = (state_22258[(7)]);
var inst_22235__$1 = (state_22258[(2)]);
var inst_22236 = (inst_22235__$1 == null);
var state_22258__$1 = (function (){var statearr_22262 = state_22258;
(statearr_22262[(7)] = inst_22235__$1);

return statearr_22262;
})();
if(cljs.core.truth_(inst_22236)){
var statearr_22263_22286 = state_22258__$1;
(statearr_22263_22286[(1)] = (5));

} else {
var statearr_22264_22287 = state_22258__$1;
(statearr_22264_22287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22259 === (13))){
var state_22258__$1 = state_22258;
var statearr_22265_22288 = state_22258__$1;
(statearr_22265_22288[(2)] = null);

(statearr_22265_22288[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22259 === (6))){
var inst_22235 = (state_22258[(7)]);
var inst_22241 = p.call(null,inst_22235);
var state_22258__$1 = state_22258;
if(cljs.core.truth_(inst_22241)){
var statearr_22266_22289 = state_22258__$1;
(statearr_22266_22289[(1)] = (9));

} else {
var statearr_22267_22290 = state_22258__$1;
(statearr_22267_22290[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22259 === (3))){
var inst_22256 = (state_22258[(2)]);
var state_22258__$1 = state_22258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22258__$1,inst_22256);
} else {
if((state_val_22259 === (12))){
var state_22258__$1 = state_22258;
var statearr_22268_22291 = state_22258__$1;
(statearr_22268_22291[(2)] = null);

(statearr_22268_22291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22259 === (2))){
var state_22258__$1 = state_22258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22258__$1,(4),ch);
} else {
if((state_val_22259 === (11))){
var inst_22235 = (state_22258[(7)]);
var inst_22245 = (state_22258[(2)]);
var state_22258__$1 = state_22258;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22258__$1,(8),inst_22245,inst_22235);
} else {
if((state_val_22259 === (9))){
var state_22258__$1 = state_22258;
var statearr_22269_22292 = state_22258__$1;
(statearr_22269_22292[(2)] = tc);

(statearr_22269_22292[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22259 === (5))){
var inst_22238 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22239 = cljs.core.async.close_BANG_.call(null,fc);
var state_22258__$1 = (function (){var statearr_22270 = state_22258;
(statearr_22270[(8)] = inst_22238);

return statearr_22270;
})();
var statearr_22271_22293 = state_22258__$1;
(statearr_22271_22293[(2)] = inst_22239);

(statearr_22271_22293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22259 === (14))){
var inst_22252 = (state_22258[(2)]);
var state_22258__$1 = state_22258;
var statearr_22272_22294 = state_22258__$1;
(statearr_22272_22294[(2)] = inst_22252);

(statearr_22272_22294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22259 === (10))){
var state_22258__$1 = state_22258;
var statearr_22273_22295 = state_22258__$1;
(statearr_22273_22295[(2)] = fc);

(statearr_22273_22295[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22259 === (8))){
var inst_22247 = (state_22258[(2)]);
var state_22258__$1 = state_22258;
if(cljs.core.truth_(inst_22247)){
var statearr_22274_22296 = state_22258__$1;
(statearr_22274_22296[(1)] = (12));

} else {
var statearr_22275_22297 = state_22258__$1;
(statearr_22275_22297[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16483__auto___22283,tc,fc))
;
return ((function (switch__16427__auto__,c__16483__auto___22283,tc,fc){
return (function() {
var state_machine__16428__auto__ = null;
var state_machine__16428__auto____0 = (function (){
var statearr_22279 = [null,null,null,null,null,null,null,null,null];
(statearr_22279[(0)] = state_machine__16428__auto__);

(statearr_22279[(1)] = (1));

return statearr_22279;
});
var state_machine__16428__auto____1 = (function (state_22258){
while(true){
var ret_value__16429__auto__ = (function (){try{while(true){
var result__16430__auto__ = switch__16427__auto__.call(null,state_22258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16430__auto__;
}
break;
}
}catch (e22280){if((e22280 instanceof Object)){
var ex__16431__auto__ = e22280;
var statearr_22281_22298 = state_22258;
(statearr_22281_22298[(5)] = ex__16431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22299 = state_22258;
state_22258 = G__22299;
continue;
} else {
return ret_value__16429__auto__;
}
break;
}
});
state_machine__16428__auto__ = function(state_22258){
switch(arguments.length){
case 0:
return state_machine__16428__auto____0.call(this);
case 1:
return state_machine__16428__auto____1.call(this,state_22258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16428__auto____0;
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16428__auto____1;
return state_machine__16428__auto__;
})()
;})(switch__16427__auto__,c__16483__auto___22283,tc,fc))
})();
var state__16485__auto__ = (function (){var statearr_22282 = f__16484__auto__.call(null);
(statearr_22282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16483__auto___22283);

return statearr_22282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16485__auto__);
});})(c__16483__auto___22283,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__16483__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16483__auto__){
return (function (){
var f__16484__auto__ = (function (){var switch__16427__auto__ = ((function (c__16483__auto__){
return (function (state_22346){
var state_val_22347 = (state_22346[(1)]);
if((state_val_22347 === (7))){
var inst_22342 = (state_22346[(2)]);
var state_22346__$1 = state_22346;
var statearr_22348_22364 = state_22346__$1;
(statearr_22348_22364[(2)] = inst_22342);

(statearr_22348_22364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22347 === (6))){
var inst_22335 = (state_22346[(7)]);
var inst_22332 = (state_22346[(8)]);
var inst_22339 = f.call(null,inst_22332,inst_22335);
var inst_22332__$1 = inst_22339;
var state_22346__$1 = (function (){var statearr_22349 = state_22346;
(statearr_22349[(8)] = inst_22332__$1);

return statearr_22349;
})();
var statearr_22350_22365 = state_22346__$1;
(statearr_22350_22365[(2)] = null);

(statearr_22350_22365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22347 === (5))){
var inst_22332 = (state_22346[(8)]);
var state_22346__$1 = state_22346;
var statearr_22351_22366 = state_22346__$1;
(statearr_22351_22366[(2)] = inst_22332);

(statearr_22351_22366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22347 === (4))){
var inst_22335 = (state_22346[(7)]);
var inst_22335__$1 = (state_22346[(2)]);
var inst_22336 = (inst_22335__$1 == null);
var state_22346__$1 = (function (){var statearr_22352 = state_22346;
(statearr_22352[(7)] = inst_22335__$1);

return statearr_22352;
})();
if(cljs.core.truth_(inst_22336)){
var statearr_22353_22367 = state_22346__$1;
(statearr_22353_22367[(1)] = (5));

} else {
var statearr_22354_22368 = state_22346__$1;
(statearr_22354_22368[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22347 === (3))){
var inst_22344 = (state_22346[(2)]);
var state_22346__$1 = state_22346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22346__$1,inst_22344);
} else {
if((state_val_22347 === (2))){
var state_22346__$1 = state_22346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22346__$1,(4),ch);
} else {
if((state_val_22347 === (1))){
var inst_22332 = init;
var state_22346__$1 = (function (){var statearr_22355 = state_22346;
(statearr_22355[(8)] = inst_22332);

return statearr_22355;
})();
var statearr_22356_22369 = state_22346__$1;
(statearr_22356_22369[(2)] = null);

(statearr_22356_22369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__16483__auto__))
;
return ((function (switch__16427__auto__,c__16483__auto__){
return (function() {
var state_machine__16428__auto__ = null;
var state_machine__16428__auto____0 = (function (){
var statearr_22360 = [null,null,null,null,null,null,null,null,null];
(statearr_22360[(0)] = state_machine__16428__auto__);

(statearr_22360[(1)] = (1));

return statearr_22360;
});
var state_machine__16428__auto____1 = (function (state_22346){
while(true){
var ret_value__16429__auto__ = (function (){try{while(true){
var result__16430__auto__ = switch__16427__auto__.call(null,state_22346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16430__auto__;
}
break;
}
}catch (e22361){if((e22361 instanceof Object)){
var ex__16431__auto__ = e22361;
var statearr_22362_22370 = state_22346;
(statearr_22362_22370[(5)] = ex__16431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22371 = state_22346;
state_22346 = G__22371;
continue;
} else {
return ret_value__16429__auto__;
}
break;
}
});
state_machine__16428__auto__ = function(state_22346){
switch(arguments.length){
case 0:
return state_machine__16428__auto____0.call(this);
case 1:
return state_machine__16428__auto____1.call(this,state_22346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16428__auto____0;
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16428__auto____1;
return state_machine__16428__auto__;
})()
;})(switch__16427__auto__,c__16483__auto__))
})();
var state__16485__auto__ = (function (){var statearr_22363 = f__16484__auto__.call(null);
(statearr_22363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16483__auto__);

return statearr_22363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16485__auto__);
});})(c__16483__auto__))
);

return c__16483__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__16483__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16483__auto__){
return (function (){
var f__16484__auto__ = (function (){var switch__16427__auto__ = ((function (c__16483__auto__){
return (function (state_22445){
var state_val_22446 = (state_22445[(1)]);
if((state_val_22446 === (7))){
var inst_22427 = (state_22445[(2)]);
var state_22445__$1 = state_22445;
var statearr_22447_22470 = state_22445__$1;
(statearr_22447_22470[(2)] = inst_22427);

(statearr_22447_22470[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22446 === (1))){
var inst_22421 = cljs.core.seq.call(null,coll);
var inst_22422 = inst_22421;
var state_22445__$1 = (function (){var statearr_22448 = state_22445;
(statearr_22448[(7)] = inst_22422);

return statearr_22448;
})();
var statearr_22449_22471 = state_22445__$1;
(statearr_22449_22471[(2)] = null);

(statearr_22449_22471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22446 === (4))){
var inst_22422 = (state_22445[(7)]);
var inst_22425 = cljs.core.first.call(null,inst_22422);
var state_22445__$1 = state_22445;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22445__$1,(7),ch,inst_22425);
} else {
if((state_val_22446 === (13))){
var inst_22439 = (state_22445[(2)]);
var state_22445__$1 = state_22445;
var statearr_22450_22472 = state_22445__$1;
(statearr_22450_22472[(2)] = inst_22439);

(statearr_22450_22472[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22446 === (6))){
var inst_22430 = (state_22445[(2)]);
var state_22445__$1 = state_22445;
if(cljs.core.truth_(inst_22430)){
var statearr_22451_22473 = state_22445__$1;
(statearr_22451_22473[(1)] = (8));

} else {
var statearr_22452_22474 = state_22445__$1;
(statearr_22452_22474[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22446 === (3))){
var inst_22443 = (state_22445[(2)]);
var state_22445__$1 = state_22445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22445__$1,inst_22443);
} else {
if((state_val_22446 === (12))){
var state_22445__$1 = state_22445;
var statearr_22453_22475 = state_22445__$1;
(statearr_22453_22475[(2)] = null);

(statearr_22453_22475[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22446 === (2))){
var inst_22422 = (state_22445[(7)]);
var state_22445__$1 = state_22445;
if(cljs.core.truth_(inst_22422)){
var statearr_22454_22476 = state_22445__$1;
(statearr_22454_22476[(1)] = (4));

} else {
var statearr_22455_22477 = state_22445__$1;
(statearr_22455_22477[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22446 === (11))){
var inst_22436 = cljs.core.async.close_BANG_.call(null,ch);
var state_22445__$1 = state_22445;
var statearr_22456_22478 = state_22445__$1;
(statearr_22456_22478[(2)] = inst_22436);

(statearr_22456_22478[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22446 === (9))){
var state_22445__$1 = state_22445;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22457_22479 = state_22445__$1;
(statearr_22457_22479[(1)] = (11));

} else {
var statearr_22458_22480 = state_22445__$1;
(statearr_22458_22480[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22446 === (5))){
var inst_22422 = (state_22445[(7)]);
var state_22445__$1 = state_22445;
var statearr_22459_22481 = state_22445__$1;
(statearr_22459_22481[(2)] = inst_22422);

(statearr_22459_22481[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22446 === (10))){
var inst_22441 = (state_22445[(2)]);
var state_22445__$1 = state_22445;
var statearr_22460_22482 = state_22445__$1;
(statearr_22460_22482[(2)] = inst_22441);

(statearr_22460_22482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22446 === (8))){
var inst_22422 = (state_22445[(7)]);
var inst_22432 = cljs.core.next.call(null,inst_22422);
var inst_22422__$1 = inst_22432;
var state_22445__$1 = (function (){var statearr_22461 = state_22445;
(statearr_22461[(7)] = inst_22422__$1);

return statearr_22461;
})();
var statearr_22462_22483 = state_22445__$1;
(statearr_22462_22483[(2)] = null);

(statearr_22462_22483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16483__auto__))
;
return ((function (switch__16427__auto__,c__16483__auto__){
return (function() {
var state_machine__16428__auto__ = null;
var state_machine__16428__auto____0 = (function (){
var statearr_22466 = [null,null,null,null,null,null,null,null];
(statearr_22466[(0)] = state_machine__16428__auto__);

(statearr_22466[(1)] = (1));

return statearr_22466;
});
var state_machine__16428__auto____1 = (function (state_22445){
while(true){
var ret_value__16429__auto__ = (function (){try{while(true){
var result__16430__auto__ = switch__16427__auto__.call(null,state_22445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16430__auto__;
}
break;
}
}catch (e22467){if((e22467 instanceof Object)){
var ex__16431__auto__ = e22467;
var statearr_22468_22484 = state_22445;
(statearr_22468_22484[(5)] = ex__16431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22485 = state_22445;
state_22445 = G__22485;
continue;
} else {
return ret_value__16429__auto__;
}
break;
}
});
state_machine__16428__auto__ = function(state_22445){
switch(arguments.length){
case 0:
return state_machine__16428__auto____0.call(this);
case 1:
return state_machine__16428__auto____1.call(this,state_22445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16428__auto____0;
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16428__auto____1;
return state_machine__16428__auto__;
})()
;})(switch__16427__auto__,c__16483__auto__))
})();
var state__16485__auto__ = (function (){var statearr_22469 = f__16484__auto__.call(null);
(statearr_22469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16483__auto__);

return statearr_22469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16485__auto__);
});})(c__16483__auto__))
);

return c__16483__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj22487 = {};
return obj22487;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__12814__auto__ = _;
if(and__12814__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__12814__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__13470__auto__ = (((_ == null))?null:_);
return (function (){var or__12826__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__13470__auto__)]);
if(or__12826__auto__){
return or__12826__auto__;
} else {
var or__12826__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__12826__auto____$1){
return or__12826__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj22489 = {};
return obj22489;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__12814__auto__ = m;
if(and__12814__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__12814__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__13470__auto__ = (((m == null))?null:m);
return (function (){var or__12826__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__13470__auto__)]);
if(or__12826__auto__){
return or__12826__auto__;
} else {
var or__12826__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__12826__auto____$1){
return or__12826__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__12814__auto__ = m;
if(and__12814__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__12814__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__13470__auto__ = (((m == null))?null:m);
return (function (){var or__12826__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__13470__auto__)]);
if(or__12826__auto__){
return or__12826__auto__;
} else {
var or__12826__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__12826__auto____$1){
return or__12826__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__12814__auto__ = m;
if(and__12814__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__12814__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__13470__auto__ = (((m == null))?null:m);
return (function (){var or__12826__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__13470__auto__)]);
if(or__12826__auto__){
return or__12826__auto__;
} else {
var or__12826__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__12826__auto____$1){
return or__12826__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t22711 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22711 = (function (cs,ch,mult,meta22712){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta22712 = meta22712;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22711.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t22711.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t22711.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t22711.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t22711.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t22711.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t22711.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22713){
var self__ = this;
var _22713__$1 = this;
return self__.meta22712;
});})(cs))
;

cljs.core.async.t22711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22713,meta22712__$1){
var self__ = this;
var _22713__$1 = this;
return (new cljs.core.async.t22711(self__.cs,self__.ch,self__.mult,meta22712__$1));
});})(cs))
;

cljs.core.async.t22711.cljs$lang$type = true;

cljs.core.async.t22711.cljs$lang$ctorStr = "cljs.core.async/t22711";

cljs.core.async.t22711.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13413__auto__,writer__13414__auto__,opt__13415__auto__){
return cljs.core._write.call(null,writer__13414__auto__,"cljs.core.async/t22711");
});})(cs))
;

cljs.core.async.__GT_t22711 = ((function (cs){
return (function __GT_t22711(cs__$1,ch__$1,mult__$1,meta22712){
return (new cljs.core.async.t22711(cs__$1,ch__$1,mult__$1,meta22712));
});})(cs))
;

}

return (new cljs.core.async.t22711(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/uris77/Development/clojure/6pedos/public-pedos/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__16483__auto___22932 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16483__auto___22932,cs,m,dchan,dctr,done){
return (function (){
var f__16484__auto__ = (function (){var switch__16427__auto__ = ((function (c__16483__auto___22932,cs,m,dchan,dctr,done){
return (function (state_22844){
var state_val_22845 = (state_22844[(1)]);
if((state_val_22845 === (7))){
var inst_22840 = (state_22844[(2)]);
var state_22844__$1 = state_22844;
var statearr_22846_22933 = state_22844__$1;
(statearr_22846_22933[(2)] = inst_22840);

(statearr_22846_22933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (20))){
var inst_22745 = (state_22844[(7)]);
var inst_22755 = cljs.core.first.call(null,inst_22745);
var inst_22756 = cljs.core.nth.call(null,inst_22755,(0),null);
var inst_22757 = cljs.core.nth.call(null,inst_22755,(1),null);
var state_22844__$1 = (function (){var statearr_22847 = state_22844;
(statearr_22847[(8)] = inst_22756);

return statearr_22847;
})();
if(cljs.core.truth_(inst_22757)){
var statearr_22848_22934 = state_22844__$1;
(statearr_22848_22934[(1)] = (22));

} else {
var statearr_22849_22935 = state_22844__$1;
(statearr_22849_22935[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (27))){
var inst_22787 = (state_22844[(9)]);
var inst_22792 = (state_22844[(10)]);
var inst_22716 = (state_22844[(11)]);
var inst_22785 = (state_22844[(12)]);
var inst_22792__$1 = cljs.core._nth.call(null,inst_22785,inst_22787);
var inst_22793 = cljs.core.async.put_BANG_.call(null,inst_22792__$1,inst_22716,done);
var state_22844__$1 = (function (){var statearr_22850 = state_22844;
(statearr_22850[(10)] = inst_22792__$1);

return statearr_22850;
})();
if(cljs.core.truth_(inst_22793)){
var statearr_22851_22936 = state_22844__$1;
(statearr_22851_22936[(1)] = (30));

} else {
var statearr_22852_22937 = state_22844__$1;
(statearr_22852_22937[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (1))){
var state_22844__$1 = state_22844;
var statearr_22853_22938 = state_22844__$1;
(statearr_22853_22938[(2)] = null);

(statearr_22853_22938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (24))){
var inst_22745 = (state_22844[(7)]);
var inst_22762 = (state_22844[(2)]);
var inst_22763 = cljs.core.next.call(null,inst_22745);
var inst_22725 = inst_22763;
var inst_22726 = null;
var inst_22727 = (0);
var inst_22728 = (0);
var state_22844__$1 = (function (){var statearr_22854 = state_22844;
(statearr_22854[(13)] = inst_22728);

(statearr_22854[(14)] = inst_22726);

(statearr_22854[(15)] = inst_22725);

(statearr_22854[(16)] = inst_22727);

(statearr_22854[(17)] = inst_22762);

return statearr_22854;
})();
var statearr_22855_22939 = state_22844__$1;
(statearr_22855_22939[(2)] = null);

(statearr_22855_22939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (39))){
var state_22844__$1 = state_22844;
var statearr_22859_22940 = state_22844__$1;
(statearr_22859_22940[(2)] = null);

(statearr_22859_22940[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (4))){
var inst_22716 = (state_22844[(11)]);
var inst_22716__$1 = (state_22844[(2)]);
var inst_22717 = (inst_22716__$1 == null);
var state_22844__$1 = (function (){var statearr_22860 = state_22844;
(statearr_22860[(11)] = inst_22716__$1);

return statearr_22860;
})();
if(cljs.core.truth_(inst_22717)){
var statearr_22861_22941 = state_22844__$1;
(statearr_22861_22941[(1)] = (5));

} else {
var statearr_22862_22942 = state_22844__$1;
(statearr_22862_22942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (15))){
var inst_22728 = (state_22844[(13)]);
var inst_22726 = (state_22844[(14)]);
var inst_22725 = (state_22844[(15)]);
var inst_22727 = (state_22844[(16)]);
var inst_22741 = (state_22844[(2)]);
var inst_22742 = (inst_22728 + (1));
var tmp22856 = inst_22726;
var tmp22857 = inst_22725;
var tmp22858 = inst_22727;
var inst_22725__$1 = tmp22857;
var inst_22726__$1 = tmp22856;
var inst_22727__$1 = tmp22858;
var inst_22728__$1 = inst_22742;
var state_22844__$1 = (function (){var statearr_22863 = state_22844;
(statearr_22863[(18)] = inst_22741);

(statearr_22863[(13)] = inst_22728__$1);

(statearr_22863[(14)] = inst_22726__$1);

(statearr_22863[(15)] = inst_22725__$1);

(statearr_22863[(16)] = inst_22727__$1);

return statearr_22863;
})();
var statearr_22864_22943 = state_22844__$1;
(statearr_22864_22943[(2)] = null);

(statearr_22864_22943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (21))){
var inst_22766 = (state_22844[(2)]);
var state_22844__$1 = state_22844;
var statearr_22868_22944 = state_22844__$1;
(statearr_22868_22944[(2)] = inst_22766);

(statearr_22868_22944[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (31))){
var inst_22792 = (state_22844[(10)]);
var inst_22796 = done.call(null,null);
var inst_22797 = cljs.core.async.untap_STAR_.call(null,m,inst_22792);
var state_22844__$1 = (function (){var statearr_22869 = state_22844;
(statearr_22869[(19)] = inst_22796);

return statearr_22869;
})();
var statearr_22870_22945 = state_22844__$1;
(statearr_22870_22945[(2)] = inst_22797);

(statearr_22870_22945[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (32))){
var inst_22786 = (state_22844[(20)]);
var inst_22787 = (state_22844[(9)]);
var inst_22784 = (state_22844[(21)]);
var inst_22785 = (state_22844[(12)]);
var inst_22799 = (state_22844[(2)]);
var inst_22800 = (inst_22787 + (1));
var tmp22865 = inst_22786;
var tmp22866 = inst_22784;
var tmp22867 = inst_22785;
var inst_22784__$1 = tmp22866;
var inst_22785__$1 = tmp22867;
var inst_22786__$1 = tmp22865;
var inst_22787__$1 = inst_22800;
var state_22844__$1 = (function (){var statearr_22871 = state_22844;
(statearr_22871[(20)] = inst_22786__$1);

(statearr_22871[(22)] = inst_22799);

(statearr_22871[(9)] = inst_22787__$1);

(statearr_22871[(21)] = inst_22784__$1);

(statearr_22871[(12)] = inst_22785__$1);

return statearr_22871;
})();
var statearr_22872_22946 = state_22844__$1;
(statearr_22872_22946[(2)] = null);

(statearr_22872_22946[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (40))){
var inst_22812 = (state_22844[(23)]);
var inst_22816 = done.call(null,null);
var inst_22817 = cljs.core.async.untap_STAR_.call(null,m,inst_22812);
var state_22844__$1 = (function (){var statearr_22873 = state_22844;
(statearr_22873[(24)] = inst_22816);

return statearr_22873;
})();
var statearr_22874_22947 = state_22844__$1;
(statearr_22874_22947[(2)] = inst_22817);

(statearr_22874_22947[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (33))){
var inst_22803 = (state_22844[(25)]);
var inst_22805 = cljs.core.chunked_seq_QMARK_.call(null,inst_22803);
var state_22844__$1 = state_22844;
if(inst_22805){
var statearr_22875_22948 = state_22844__$1;
(statearr_22875_22948[(1)] = (36));

} else {
var statearr_22876_22949 = state_22844__$1;
(statearr_22876_22949[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (13))){
var inst_22735 = (state_22844[(26)]);
var inst_22738 = cljs.core.async.close_BANG_.call(null,inst_22735);
var state_22844__$1 = state_22844;
var statearr_22877_22950 = state_22844__$1;
(statearr_22877_22950[(2)] = inst_22738);

(statearr_22877_22950[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (22))){
var inst_22756 = (state_22844[(8)]);
var inst_22759 = cljs.core.async.close_BANG_.call(null,inst_22756);
var state_22844__$1 = state_22844;
var statearr_22878_22951 = state_22844__$1;
(statearr_22878_22951[(2)] = inst_22759);

(statearr_22878_22951[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (36))){
var inst_22803 = (state_22844[(25)]);
var inst_22807 = cljs.core.chunk_first.call(null,inst_22803);
var inst_22808 = cljs.core.chunk_rest.call(null,inst_22803);
var inst_22809 = cljs.core.count.call(null,inst_22807);
var inst_22784 = inst_22808;
var inst_22785 = inst_22807;
var inst_22786 = inst_22809;
var inst_22787 = (0);
var state_22844__$1 = (function (){var statearr_22879 = state_22844;
(statearr_22879[(20)] = inst_22786);

(statearr_22879[(9)] = inst_22787);

(statearr_22879[(21)] = inst_22784);

(statearr_22879[(12)] = inst_22785);

return statearr_22879;
})();
var statearr_22880_22952 = state_22844__$1;
(statearr_22880_22952[(2)] = null);

(statearr_22880_22952[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (41))){
var inst_22803 = (state_22844[(25)]);
var inst_22819 = (state_22844[(2)]);
var inst_22820 = cljs.core.next.call(null,inst_22803);
var inst_22784 = inst_22820;
var inst_22785 = null;
var inst_22786 = (0);
var inst_22787 = (0);
var state_22844__$1 = (function (){var statearr_22881 = state_22844;
(statearr_22881[(20)] = inst_22786);

(statearr_22881[(9)] = inst_22787);

(statearr_22881[(21)] = inst_22784);

(statearr_22881[(27)] = inst_22819);

(statearr_22881[(12)] = inst_22785);

return statearr_22881;
})();
var statearr_22882_22953 = state_22844__$1;
(statearr_22882_22953[(2)] = null);

(statearr_22882_22953[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (43))){
var state_22844__$1 = state_22844;
var statearr_22883_22954 = state_22844__$1;
(statearr_22883_22954[(2)] = null);

(statearr_22883_22954[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (29))){
var inst_22828 = (state_22844[(2)]);
var state_22844__$1 = state_22844;
var statearr_22884_22955 = state_22844__$1;
(statearr_22884_22955[(2)] = inst_22828);

(statearr_22884_22955[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (44))){
var inst_22837 = (state_22844[(2)]);
var state_22844__$1 = (function (){var statearr_22885 = state_22844;
(statearr_22885[(28)] = inst_22837);

return statearr_22885;
})();
var statearr_22886_22956 = state_22844__$1;
(statearr_22886_22956[(2)] = null);

(statearr_22886_22956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (6))){
var inst_22776 = (state_22844[(29)]);
var inst_22775 = cljs.core.deref.call(null,cs);
var inst_22776__$1 = cljs.core.keys.call(null,inst_22775);
var inst_22777 = cljs.core.count.call(null,inst_22776__$1);
var inst_22778 = cljs.core.reset_BANG_.call(null,dctr,inst_22777);
var inst_22783 = cljs.core.seq.call(null,inst_22776__$1);
var inst_22784 = inst_22783;
var inst_22785 = null;
var inst_22786 = (0);
var inst_22787 = (0);
var state_22844__$1 = (function (){var statearr_22887 = state_22844;
(statearr_22887[(20)] = inst_22786);

(statearr_22887[(9)] = inst_22787);

(statearr_22887[(21)] = inst_22784);

(statearr_22887[(30)] = inst_22778);

(statearr_22887[(29)] = inst_22776__$1);

(statearr_22887[(12)] = inst_22785);

return statearr_22887;
})();
var statearr_22888_22957 = state_22844__$1;
(statearr_22888_22957[(2)] = null);

(statearr_22888_22957[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (28))){
var inst_22784 = (state_22844[(21)]);
var inst_22803 = (state_22844[(25)]);
var inst_22803__$1 = cljs.core.seq.call(null,inst_22784);
var state_22844__$1 = (function (){var statearr_22889 = state_22844;
(statearr_22889[(25)] = inst_22803__$1);

return statearr_22889;
})();
if(inst_22803__$1){
var statearr_22890_22958 = state_22844__$1;
(statearr_22890_22958[(1)] = (33));

} else {
var statearr_22891_22959 = state_22844__$1;
(statearr_22891_22959[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (25))){
var inst_22786 = (state_22844[(20)]);
var inst_22787 = (state_22844[(9)]);
var inst_22789 = (inst_22787 < inst_22786);
var inst_22790 = inst_22789;
var state_22844__$1 = state_22844;
if(cljs.core.truth_(inst_22790)){
var statearr_22892_22960 = state_22844__$1;
(statearr_22892_22960[(1)] = (27));

} else {
var statearr_22893_22961 = state_22844__$1;
(statearr_22893_22961[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (34))){
var state_22844__$1 = state_22844;
var statearr_22894_22962 = state_22844__$1;
(statearr_22894_22962[(2)] = null);

(statearr_22894_22962[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (17))){
var state_22844__$1 = state_22844;
var statearr_22895_22963 = state_22844__$1;
(statearr_22895_22963[(2)] = null);

(statearr_22895_22963[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (3))){
var inst_22842 = (state_22844[(2)]);
var state_22844__$1 = state_22844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22844__$1,inst_22842);
} else {
if((state_val_22845 === (12))){
var inst_22771 = (state_22844[(2)]);
var state_22844__$1 = state_22844;
var statearr_22896_22964 = state_22844__$1;
(statearr_22896_22964[(2)] = inst_22771);

(statearr_22896_22964[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (2))){
var state_22844__$1 = state_22844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22844__$1,(4),ch);
} else {
if((state_val_22845 === (23))){
var state_22844__$1 = state_22844;
var statearr_22897_22965 = state_22844__$1;
(statearr_22897_22965[(2)] = null);

(statearr_22897_22965[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (35))){
var inst_22826 = (state_22844[(2)]);
var state_22844__$1 = state_22844;
var statearr_22898_22966 = state_22844__$1;
(statearr_22898_22966[(2)] = inst_22826);

(statearr_22898_22966[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (19))){
var inst_22745 = (state_22844[(7)]);
var inst_22749 = cljs.core.chunk_first.call(null,inst_22745);
var inst_22750 = cljs.core.chunk_rest.call(null,inst_22745);
var inst_22751 = cljs.core.count.call(null,inst_22749);
var inst_22725 = inst_22750;
var inst_22726 = inst_22749;
var inst_22727 = inst_22751;
var inst_22728 = (0);
var state_22844__$1 = (function (){var statearr_22899 = state_22844;
(statearr_22899[(13)] = inst_22728);

(statearr_22899[(14)] = inst_22726);

(statearr_22899[(15)] = inst_22725);

(statearr_22899[(16)] = inst_22727);

return statearr_22899;
})();
var statearr_22900_22967 = state_22844__$1;
(statearr_22900_22967[(2)] = null);

(statearr_22900_22967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (11))){
var inst_22745 = (state_22844[(7)]);
var inst_22725 = (state_22844[(15)]);
var inst_22745__$1 = cljs.core.seq.call(null,inst_22725);
var state_22844__$1 = (function (){var statearr_22901 = state_22844;
(statearr_22901[(7)] = inst_22745__$1);

return statearr_22901;
})();
if(inst_22745__$1){
var statearr_22902_22968 = state_22844__$1;
(statearr_22902_22968[(1)] = (16));

} else {
var statearr_22903_22969 = state_22844__$1;
(statearr_22903_22969[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (9))){
var inst_22773 = (state_22844[(2)]);
var state_22844__$1 = state_22844;
var statearr_22904_22970 = state_22844__$1;
(statearr_22904_22970[(2)] = inst_22773);

(statearr_22904_22970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (5))){
var inst_22723 = cljs.core.deref.call(null,cs);
var inst_22724 = cljs.core.seq.call(null,inst_22723);
var inst_22725 = inst_22724;
var inst_22726 = null;
var inst_22727 = (0);
var inst_22728 = (0);
var state_22844__$1 = (function (){var statearr_22905 = state_22844;
(statearr_22905[(13)] = inst_22728);

(statearr_22905[(14)] = inst_22726);

(statearr_22905[(15)] = inst_22725);

(statearr_22905[(16)] = inst_22727);

return statearr_22905;
})();
var statearr_22906_22971 = state_22844__$1;
(statearr_22906_22971[(2)] = null);

(statearr_22906_22971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (14))){
var state_22844__$1 = state_22844;
var statearr_22907_22972 = state_22844__$1;
(statearr_22907_22972[(2)] = null);

(statearr_22907_22972[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (45))){
var inst_22834 = (state_22844[(2)]);
var state_22844__$1 = state_22844;
var statearr_22908_22973 = state_22844__$1;
(statearr_22908_22973[(2)] = inst_22834);

(statearr_22908_22973[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (26))){
var inst_22776 = (state_22844[(29)]);
var inst_22830 = (state_22844[(2)]);
var inst_22831 = cljs.core.seq.call(null,inst_22776);
var state_22844__$1 = (function (){var statearr_22909 = state_22844;
(statearr_22909[(31)] = inst_22830);

return statearr_22909;
})();
if(inst_22831){
var statearr_22910_22974 = state_22844__$1;
(statearr_22910_22974[(1)] = (42));

} else {
var statearr_22911_22975 = state_22844__$1;
(statearr_22911_22975[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (16))){
var inst_22745 = (state_22844[(7)]);
var inst_22747 = cljs.core.chunked_seq_QMARK_.call(null,inst_22745);
var state_22844__$1 = state_22844;
if(inst_22747){
var statearr_22912_22976 = state_22844__$1;
(statearr_22912_22976[(1)] = (19));

} else {
var statearr_22913_22977 = state_22844__$1;
(statearr_22913_22977[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (38))){
var inst_22823 = (state_22844[(2)]);
var state_22844__$1 = state_22844;
var statearr_22914_22978 = state_22844__$1;
(statearr_22914_22978[(2)] = inst_22823);

(statearr_22914_22978[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (30))){
var state_22844__$1 = state_22844;
var statearr_22915_22979 = state_22844__$1;
(statearr_22915_22979[(2)] = null);

(statearr_22915_22979[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (10))){
var inst_22728 = (state_22844[(13)]);
var inst_22726 = (state_22844[(14)]);
var inst_22734 = cljs.core._nth.call(null,inst_22726,inst_22728);
var inst_22735 = cljs.core.nth.call(null,inst_22734,(0),null);
var inst_22736 = cljs.core.nth.call(null,inst_22734,(1),null);
var state_22844__$1 = (function (){var statearr_22916 = state_22844;
(statearr_22916[(26)] = inst_22735);

return statearr_22916;
})();
if(cljs.core.truth_(inst_22736)){
var statearr_22917_22980 = state_22844__$1;
(statearr_22917_22980[(1)] = (13));

} else {
var statearr_22918_22981 = state_22844__$1;
(statearr_22918_22981[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (18))){
var inst_22769 = (state_22844[(2)]);
var state_22844__$1 = state_22844;
var statearr_22919_22982 = state_22844__$1;
(statearr_22919_22982[(2)] = inst_22769);

(statearr_22919_22982[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (42))){
var state_22844__$1 = state_22844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22844__$1,(45),dchan);
} else {
if((state_val_22845 === (37))){
var inst_22716 = (state_22844[(11)]);
var inst_22803 = (state_22844[(25)]);
var inst_22812 = (state_22844[(23)]);
var inst_22812__$1 = cljs.core.first.call(null,inst_22803);
var inst_22813 = cljs.core.async.put_BANG_.call(null,inst_22812__$1,inst_22716,done);
var state_22844__$1 = (function (){var statearr_22920 = state_22844;
(statearr_22920[(23)] = inst_22812__$1);

return statearr_22920;
})();
if(cljs.core.truth_(inst_22813)){
var statearr_22921_22983 = state_22844__$1;
(statearr_22921_22983[(1)] = (39));

} else {
var statearr_22922_22984 = state_22844__$1;
(statearr_22922_22984[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (8))){
var inst_22728 = (state_22844[(13)]);
var inst_22727 = (state_22844[(16)]);
var inst_22730 = (inst_22728 < inst_22727);
var inst_22731 = inst_22730;
var state_22844__$1 = state_22844;
if(cljs.core.truth_(inst_22731)){
var statearr_22923_22985 = state_22844__$1;
(statearr_22923_22985[(1)] = (10));

} else {
var statearr_22924_22986 = state_22844__$1;
(statearr_22924_22986[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16483__auto___22932,cs,m,dchan,dctr,done))
;
return ((function (switch__16427__auto__,c__16483__auto___22932,cs,m,dchan,dctr,done){
return (function() {
var state_machine__16428__auto__ = null;
var state_machine__16428__auto____0 = (function (){
var statearr_22928 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22928[(0)] = state_machine__16428__auto__);

(statearr_22928[(1)] = (1));

return statearr_22928;
});
var state_machine__16428__auto____1 = (function (state_22844){
while(true){
var ret_value__16429__auto__ = (function (){try{while(true){
var result__16430__auto__ = switch__16427__auto__.call(null,state_22844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16430__auto__;
}
break;
}
}catch (e22929){if((e22929 instanceof Object)){
var ex__16431__auto__ = e22929;
var statearr_22930_22987 = state_22844;
(statearr_22930_22987[(5)] = ex__16431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22988 = state_22844;
state_22844 = G__22988;
continue;
} else {
return ret_value__16429__auto__;
}
break;
}
});
state_machine__16428__auto__ = function(state_22844){
switch(arguments.length){
case 0:
return state_machine__16428__auto____0.call(this);
case 1:
return state_machine__16428__auto____1.call(this,state_22844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16428__auto____0;
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16428__auto____1;
return state_machine__16428__auto__;
})()
;})(switch__16427__auto__,c__16483__auto___22932,cs,m,dchan,dctr,done))
})();
var state__16485__auto__ = (function (){var statearr_22931 = f__16484__auto__.call(null);
(statearr_22931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16483__auto___22932);

return statearr_22931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16485__auto__);
});})(c__16483__auto___22932,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj22990 = {};
return obj22990;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__12814__auto__ = m;
if(and__12814__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__12814__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__13470__auto__ = (((m == null))?null:m);
return (function (){var or__12826__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__13470__auto__)]);
if(or__12826__auto__){
return or__12826__auto__;
} else {
var or__12826__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__12826__auto____$1){
return or__12826__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__12814__auto__ = m;
if(and__12814__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__12814__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__13470__auto__ = (((m == null))?null:m);
return (function (){var or__12826__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__13470__auto__)]);
if(or__12826__auto__){
return or__12826__auto__;
} else {
var or__12826__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__12826__auto____$1){
return or__12826__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__12814__auto__ = m;
if(and__12814__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__12814__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__13470__auto__ = (((m == null))?null:m);
return (function (){var or__12826__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__13470__auto__)]);
if(or__12826__auto__){
return or__12826__auto__;
} else {
var or__12826__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__12826__auto____$1){
return or__12826__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__12814__auto__ = m;
if(and__12814__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__12814__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__13470__auto__ = (((m == null))?null:m);
return (function (){var or__12826__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__13470__auto__)]);
if(or__12826__auto__){
return or__12826__auto__;
} else {
var or__12826__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__12826__auto____$1){
return or__12826__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__12814__auto__ = m;
if(and__12814__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__12814__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__13470__auto__ = (((m == null))?null:m);
return (function (){var or__12826__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__13470__auto__)]);
if(or__12826__auto__){
return or__12826__auto__;
} else {
var or__12826__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__12826__auto____$1){
return or__12826__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__22991){
var map__22996 = p__22991;
var map__22996__$1 = ((cljs.core.seq_QMARK_.call(null,map__22996))?cljs.core.apply.call(null,cljs.core.hash_map,map__22996):map__22996);
var opts = map__22996__$1;
var statearr_22997_23000 = state;
(statearr_22997_23000[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__22996,map__22996__$1,opts){
return (function (val){
var statearr_22998_23001 = state;
(statearr_22998_23001[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22996,map__22996__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_22999_23002 = state;
(statearr_22999_23002[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__22991 = null;
if (arguments.length > 3) {
  p__22991 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__22991);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__23003){
var state = cljs.core.first(arglist__23003);
arglist__23003 = cljs.core.next(arglist__23003);
var cont_block = cljs.core.first(arglist__23003);
arglist__23003 = cljs.core.next(arglist__23003);
var ports = cljs.core.first(arglist__23003);
var p__22991 = cljs.core.rest(arglist__23003);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__22991);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t23123 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23123 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23124){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23124 = meta23124;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23123.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t23123.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23123.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23123.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23123.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23123.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23123.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t23123.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23123.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23125){
var self__ = this;
var _23125__$1 = this;
return self__.meta23124;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23125,meta23124__$1){
var self__ = this;
var _23125__$1 = this;
return (new cljs.core.async.t23123(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23124__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23123.cljs$lang$type = true;

cljs.core.async.t23123.cljs$lang$ctorStr = "cljs.core.async/t23123";

cljs.core.async.t23123.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13413__auto__,writer__13414__auto__,opt__13415__auto__){
return cljs.core._write.call(null,writer__13414__auto__,"cljs.core.async/t23123");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t23123 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t23123(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23124){
return (new cljs.core.async.t23123(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23124));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t23123(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/uris77/Development/clojure/6pedos/public-pedos/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__16483__auto___23242 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16483__auto___23242,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16484__auto__ = (function (){var switch__16427__auto__ = ((function (c__16483__auto___23242,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23195){
var state_val_23196 = (state_23195[(1)]);
if((state_val_23196 === (7))){
var inst_23139 = (state_23195[(7)]);
var inst_23144 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23139);
var state_23195__$1 = state_23195;
var statearr_23197_23243 = state_23195__$1;
(statearr_23197_23243[(2)] = inst_23144);

(statearr_23197_23243[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (20))){
var inst_23154 = (state_23195[(8)]);
var state_23195__$1 = state_23195;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23195__$1,(23),out,inst_23154);
} else {
if((state_val_23196 === (1))){
var inst_23129 = (state_23195[(9)]);
var inst_23129__$1 = calc_state.call(null);
var inst_23130 = cljs.core.seq_QMARK_.call(null,inst_23129__$1);
var state_23195__$1 = (function (){var statearr_23198 = state_23195;
(statearr_23198[(9)] = inst_23129__$1);

return statearr_23198;
})();
if(inst_23130){
var statearr_23199_23244 = state_23195__$1;
(statearr_23199_23244[(1)] = (2));

} else {
var statearr_23200_23245 = state_23195__$1;
(statearr_23200_23245[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (24))){
var inst_23147 = (state_23195[(10)]);
var inst_23139 = inst_23147;
var state_23195__$1 = (function (){var statearr_23201 = state_23195;
(statearr_23201[(7)] = inst_23139);

return statearr_23201;
})();
var statearr_23202_23246 = state_23195__$1;
(statearr_23202_23246[(2)] = null);

(statearr_23202_23246[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (4))){
var inst_23129 = (state_23195[(9)]);
var inst_23135 = (state_23195[(2)]);
var inst_23136 = cljs.core.get.call(null,inst_23135,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23137 = cljs.core.get.call(null,inst_23135,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23138 = cljs.core.get.call(null,inst_23135,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23139 = inst_23129;
var state_23195__$1 = (function (){var statearr_23203 = state_23195;
(statearr_23203[(7)] = inst_23139);

(statearr_23203[(11)] = inst_23137);

(statearr_23203[(12)] = inst_23138);

(statearr_23203[(13)] = inst_23136);

return statearr_23203;
})();
var statearr_23204_23247 = state_23195__$1;
(statearr_23204_23247[(2)] = null);

(statearr_23204_23247[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (15))){
var state_23195__$1 = state_23195;
var statearr_23205_23248 = state_23195__$1;
(statearr_23205_23248[(2)] = null);

(statearr_23205_23248[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (21))){
var inst_23147 = (state_23195[(10)]);
var inst_23139 = inst_23147;
var state_23195__$1 = (function (){var statearr_23206 = state_23195;
(statearr_23206[(7)] = inst_23139);

return statearr_23206;
})();
var statearr_23207_23249 = state_23195__$1;
(statearr_23207_23249[(2)] = null);

(statearr_23207_23249[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (13))){
var inst_23191 = (state_23195[(2)]);
var state_23195__$1 = state_23195;
var statearr_23208_23250 = state_23195__$1;
(statearr_23208_23250[(2)] = inst_23191);

(statearr_23208_23250[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (22))){
var inst_23189 = (state_23195[(2)]);
var state_23195__$1 = state_23195;
var statearr_23209_23251 = state_23195__$1;
(statearr_23209_23251[(2)] = inst_23189);

(statearr_23209_23251[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (6))){
var inst_23193 = (state_23195[(2)]);
var state_23195__$1 = state_23195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23195__$1,inst_23193);
} else {
if((state_val_23196 === (25))){
var state_23195__$1 = state_23195;
var statearr_23210_23252 = state_23195__$1;
(statearr_23210_23252[(2)] = null);

(statearr_23210_23252[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (17))){
var inst_23169 = (state_23195[(14)]);
var state_23195__$1 = state_23195;
var statearr_23211_23253 = state_23195__$1;
(statearr_23211_23253[(2)] = inst_23169);

(statearr_23211_23253[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (3))){
var inst_23129 = (state_23195[(9)]);
var state_23195__$1 = state_23195;
var statearr_23212_23254 = state_23195__$1;
(statearr_23212_23254[(2)] = inst_23129);

(statearr_23212_23254[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (12))){
var inst_23155 = (state_23195[(15)]);
var inst_23169 = (state_23195[(14)]);
var inst_23150 = (state_23195[(16)]);
var inst_23169__$1 = inst_23150.call(null,inst_23155);
var state_23195__$1 = (function (){var statearr_23213 = state_23195;
(statearr_23213[(14)] = inst_23169__$1);

return statearr_23213;
})();
if(cljs.core.truth_(inst_23169__$1)){
var statearr_23214_23255 = state_23195__$1;
(statearr_23214_23255[(1)] = (17));

} else {
var statearr_23215_23256 = state_23195__$1;
(statearr_23215_23256[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (2))){
var inst_23129 = (state_23195[(9)]);
var inst_23132 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23129);
var state_23195__$1 = state_23195;
var statearr_23216_23257 = state_23195__$1;
(statearr_23216_23257[(2)] = inst_23132);

(statearr_23216_23257[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (23))){
var inst_23180 = (state_23195[(2)]);
var state_23195__$1 = state_23195;
if(cljs.core.truth_(inst_23180)){
var statearr_23217_23258 = state_23195__$1;
(statearr_23217_23258[(1)] = (24));

} else {
var statearr_23218_23259 = state_23195__$1;
(statearr_23218_23259[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (19))){
var inst_23177 = (state_23195[(2)]);
var state_23195__$1 = state_23195;
if(cljs.core.truth_(inst_23177)){
var statearr_23219_23260 = state_23195__$1;
(statearr_23219_23260[(1)] = (20));

} else {
var statearr_23220_23261 = state_23195__$1;
(statearr_23220_23261[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (11))){
var inst_23154 = (state_23195[(8)]);
var inst_23160 = (inst_23154 == null);
var state_23195__$1 = state_23195;
if(cljs.core.truth_(inst_23160)){
var statearr_23221_23262 = state_23195__$1;
(statearr_23221_23262[(1)] = (14));

} else {
var statearr_23222_23263 = state_23195__$1;
(statearr_23222_23263[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (9))){
var inst_23147 = (state_23195[(10)]);
var inst_23147__$1 = (state_23195[(2)]);
var inst_23148 = cljs.core.get.call(null,inst_23147__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23149 = cljs.core.get.call(null,inst_23147__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23150 = cljs.core.get.call(null,inst_23147__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_23195__$1 = (function (){var statearr_23223 = state_23195;
(statearr_23223[(16)] = inst_23150);

(statearr_23223[(10)] = inst_23147__$1);

(statearr_23223[(17)] = inst_23149);

return statearr_23223;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23195__$1,(10),inst_23148);
} else {
if((state_val_23196 === (5))){
var inst_23139 = (state_23195[(7)]);
var inst_23142 = cljs.core.seq_QMARK_.call(null,inst_23139);
var state_23195__$1 = state_23195;
if(inst_23142){
var statearr_23224_23264 = state_23195__$1;
(statearr_23224_23264[(1)] = (7));

} else {
var statearr_23225_23265 = state_23195__$1;
(statearr_23225_23265[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (14))){
var inst_23155 = (state_23195[(15)]);
var inst_23162 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23155);
var state_23195__$1 = state_23195;
var statearr_23226_23266 = state_23195__$1;
(statearr_23226_23266[(2)] = inst_23162);

(statearr_23226_23266[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (26))){
var inst_23185 = (state_23195[(2)]);
var state_23195__$1 = state_23195;
var statearr_23227_23267 = state_23195__$1;
(statearr_23227_23267[(2)] = inst_23185);

(statearr_23227_23267[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (16))){
var inst_23165 = (state_23195[(2)]);
var inst_23166 = calc_state.call(null);
var inst_23139 = inst_23166;
var state_23195__$1 = (function (){var statearr_23228 = state_23195;
(statearr_23228[(7)] = inst_23139);

(statearr_23228[(18)] = inst_23165);

return statearr_23228;
})();
var statearr_23229_23268 = state_23195__$1;
(statearr_23229_23268[(2)] = null);

(statearr_23229_23268[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (10))){
var inst_23154 = (state_23195[(8)]);
var inst_23155 = (state_23195[(15)]);
var inst_23153 = (state_23195[(2)]);
var inst_23154__$1 = cljs.core.nth.call(null,inst_23153,(0),null);
var inst_23155__$1 = cljs.core.nth.call(null,inst_23153,(1),null);
var inst_23156 = (inst_23154__$1 == null);
var inst_23157 = cljs.core._EQ_.call(null,inst_23155__$1,change);
var inst_23158 = (inst_23156) || (inst_23157);
var state_23195__$1 = (function (){var statearr_23230 = state_23195;
(statearr_23230[(8)] = inst_23154__$1);

(statearr_23230[(15)] = inst_23155__$1);

return statearr_23230;
})();
if(cljs.core.truth_(inst_23158)){
var statearr_23231_23269 = state_23195__$1;
(statearr_23231_23269[(1)] = (11));

} else {
var statearr_23232_23270 = state_23195__$1;
(statearr_23232_23270[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (18))){
var inst_23155 = (state_23195[(15)]);
var inst_23150 = (state_23195[(16)]);
var inst_23149 = (state_23195[(17)]);
var inst_23172 = cljs.core.empty_QMARK_.call(null,inst_23150);
var inst_23173 = inst_23149.call(null,inst_23155);
var inst_23174 = cljs.core.not.call(null,inst_23173);
var inst_23175 = (inst_23172) && (inst_23174);
var state_23195__$1 = state_23195;
var statearr_23233_23271 = state_23195__$1;
(statearr_23233_23271[(2)] = inst_23175);

(statearr_23233_23271[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (8))){
var inst_23139 = (state_23195[(7)]);
var state_23195__$1 = state_23195;
var statearr_23234_23272 = state_23195__$1;
(statearr_23234_23272[(2)] = inst_23139);

(statearr_23234_23272[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16483__auto___23242,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16427__auto__,c__16483__auto___23242,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__16428__auto__ = null;
var state_machine__16428__auto____0 = (function (){
var statearr_23238 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23238[(0)] = state_machine__16428__auto__);

(statearr_23238[(1)] = (1));

return statearr_23238;
});
var state_machine__16428__auto____1 = (function (state_23195){
while(true){
var ret_value__16429__auto__ = (function (){try{while(true){
var result__16430__auto__ = switch__16427__auto__.call(null,state_23195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16430__auto__;
}
break;
}
}catch (e23239){if((e23239 instanceof Object)){
var ex__16431__auto__ = e23239;
var statearr_23240_23273 = state_23195;
(statearr_23240_23273[(5)] = ex__16431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23274 = state_23195;
state_23195 = G__23274;
continue;
} else {
return ret_value__16429__auto__;
}
break;
}
});
state_machine__16428__auto__ = function(state_23195){
switch(arguments.length){
case 0:
return state_machine__16428__auto____0.call(this);
case 1:
return state_machine__16428__auto____1.call(this,state_23195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16428__auto____0;
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16428__auto____1;
return state_machine__16428__auto__;
})()
;})(switch__16427__auto__,c__16483__auto___23242,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16485__auto__ = (function (){var statearr_23241 = f__16484__auto__.call(null);
(statearr_23241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16483__auto___23242);

return statearr_23241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16485__auto__);
});})(c__16483__auto___23242,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj23276 = {};
return obj23276;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__12814__auto__ = p;
if(and__12814__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__12814__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__13470__auto__ = (((p == null))?null:p);
return (function (){var or__12826__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__13470__auto__)]);
if(or__12826__auto__){
return or__12826__auto__;
} else {
var or__12826__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__12826__auto____$1){
return or__12826__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__12814__auto__ = p;
if(and__12814__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__12814__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__13470__auto__ = (((p == null))?null:p);
return (function (){var or__12826__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__13470__auto__)]);
if(or__12826__auto__){
return or__12826__auto__;
} else {
var or__12826__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__12826__auto____$1){
return or__12826__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__12814__auto__ = p;
if(and__12814__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__12814__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__13470__auto__ = (((p == null))?null:p);
return (function (){var or__12826__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13470__auto__)]);
if(or__12826__auto__){
return or__12826__auto__;
} else {
var or__12826__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__12826__auto____$1){
return or__12826__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__12814__auto__ = p;
if(and__12814__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__12814__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__13470__auto__ = (((p == null))?null:p);
return (function (){var or__12826__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13470__auto__)]);
if(or__12826__auto__){
return or__12826__auto__;
} else {
var or__12826__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__12826__auto____$1){
return or__12826__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__12826__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__12826__auto__)){
return or__12826__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__12826__auto__,mults){
return (function (p1__23277_SHARP_){
if(cljs.core.truth_(p1__23277_SHARP_.call(null,topic))){
return p1__23277_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23277_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__12826__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t23400 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23400 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta23401){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta23401 = meta23401;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23400.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t23400.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t23400.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t23400.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t23400.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t23400.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t23400.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t23400.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23402){
var self__ = this;
var _23402__$1 = this;
return self__.meta23401;
});})(mults,ensure_mult))
;

cljs.core.async.t23400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23402,meta23401__$1){
var self__ = this;
var _23402__$1 = this;
return (new cljs.core.async.t23400(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta23401__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t23400.cljs$lang$type = true;

cljs.core.async.t23400.cljs$lang$ctorStr = "cljs.core.async/t23400";

cljs.core.async.t23400.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13413__auto__,writer__13414__auto__,opt__13415__auto__){
return cljs.core._write.call(null,writer__13414__auto__,"cljs.core.async/t23400");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t23400 = ((function (mults,ensure_mult){
return (function __GT_t23400(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23401){
return (new cljs.core.async.t23400(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23401));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t23400(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/uris77/Development/clojure/6pedos/public-pedos/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__16483__auto___23522 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16483__auto___23522,mults,ensure_mult,p){
return (function (){
var f__16484__auto__ = (function (){var switch__16427__auto__ = ((function (c__16483__auto___23522,mults,ensure_mult,p){
return (function (state_23474){
var state_val_23475 = (state_23474[(1)]);
if((state_val_23475 === (7))){
var inst_23470 = (state_23474[(2)]);
var state_23474__$1 = state_23474;
var statearr_23476_23523 = state_23474__$1;
(statearr_23476_23523[(2)] = inst_23470);

(statearr_23476_23523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23475 === (20))){
var state_23474__$1 = state_23474;
var statearr_23477_23524 = state_23474__$1;
(statearr_23477_23524[(2)] = null);

(statearr_23477_23524[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23475 === (1))){
var state_23474__$1 = state_23474;
var statearr_23478_23525 = state_23474__$1;
(statearr_23478_23525[(2)] = null);

(statearr_23478_23525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23475 === (24))){
var inst_23453 = (state_23474[(7)]);
var inst_23462 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23453);
var state_23474__$1 = state_23474;
var statearr_23479_23526 = state_23474__$1;
(statearr_23479_23526[(2)] = inst_23462);

(statearr_23479_23526[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23475 === (4))){
var inst_23405 = (state_23474[(8)]);
var inst_23405__$1 = (state_23474[(2)]);
var inst_23406 = (inst_23405__$1 == null);
var state_23474__$1 = (function (){var statearr_23480 = state_23474;
(statearr_23480[(8)] = inst_23405__$1);

return statearr_23480;
})();
if(cljs.core.truth_(inst_23406)){
var statearr_23481_23527 = state_23474__$1;
(statearr_23481_23527[(1)] = (5));

} else {
var statearr_23482_23528 = state_23474__$1;
(statearr_23482_23528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23475 === (15))){
var inst_23447 = (state_23474[(2)]);
var state_23474__$1 = state_23474;
var statearr_23483_23529 = state_23474__$1;
(statearr_23483_23529[(2)] = inst_23447);

(statearr_23483_23529[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23475 === (21))){
var inst_23467 = (state_23474[(2)]);
var state_23474__$1 = (function (){var statearr_23484 = state_23474;
(statearr_23484[(9)] = inst_23467);

return statearr_23484;
})();
var statearr_23485_23530 = state_23474__$1;
(statearr_23485_23530[(2)] = null);

(statearr_23485_23530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23475 === (13))){
var inst_23429 = (state_23474[(10)]);
var inst_23431 = cljs.core.chunked_seq_QMARK_.call(null,inst_23429);
var state_23474__$1 = state_23474;
if(inst_23431){
var statearr_23486_23531 = state_23474__$1;
(statearr_23486_23531[(1)] = (16));

} else {
var statearr_23487_23532 = state_23474__$1;
(statearr_23487_23532[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23475 === (22))){
var inst_23459 = (state_23474[(2)]);
var state_23474__$1 = state_23474;
if(cljs.core.truth_(inst_23459)){
var statearr_23488_23533 = state_23474__$1;
(statearr_23488_23533[(1)] = (23));

} else {
var statearr_23489_23534 = state_23474__$1;
(statearr_23489_23534[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23475 === (6))){
var inst_23453 = (state_23474[(7)]);
var inst_23455 = (state_23474[(11)]);
var inst_23405 = (state_23474[(8)]);
var inst_23453__$1 = topic_fn.call(null,inst_23405);
var inst_23454 = cljs.core.deref.call(null,mults);
var inst_23455__$1 = cljs.core.get.call(null,inst_23454,inst_23453__$1);
var state_23474__$1 = (function (){var statearr_23490 = state_23474;
(statearr_23490[(7)] = inst_23453__$1);

(statearr_23490[(11)] = inst_23455__$1);

return statearr_23490;
})();
if(cljs.core.truth_(inst_23455__$1)){
var statearr_23491_23535 = state_23474__$1;
(statearr_23491_23535[(1)] = (19));

} else {
var statearr_23492_23536 = state_23474__$1;
(statearr_23492_23536[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23475 === (25))){
var inst_23464 = (state_23474[(2)]);
var state_23474__$1 = state_23474;
var statearr_23493_23537 = state_23474__$1;
(statearr_23493_23537[(2)] = inst_23464);

(statearr_23493_23537[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23475 === (17))){
var inst_23429 = (state_23474[(10)]);
var inst_23438 = cljs.core.first.call(null,inst_23429);
var inst_23439 = cljs.core.async.muxch_STAR_.call(null,inst_23438);
var inst_23440 = cljs.core.async.close_BANG_.call(null,inst_23439);
var inst_23441 = cljs.core.next.call(null,inst_23429);
var inst_23415 = inst_23441;
var inst_23416 = null;
var inst_23417 = (0);
var inst_23418 = (0);
var state_23474__$1 = (function (){var statearr_23494 = state_23474;
(statearr_23494[(12)] = inst_23418);

(statearr_23494[(13)] = inst_23415);

(statearr_23494[(14)] = inst_23440);

(statearr_23494[(15)] = inst_23417);

(statearr_23494[(16)] = inst_23416);

return statearr_23494;
})();
var statearr_23495_23538 = state_23474__$1;
(statearr_23495_23538[(2)] = null);

(statearr_23495_23538[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23475 === (3))){
var inst_23472 = (state_23474[(2)]);
var state_23474__$1 = state_23474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23474__$1,inst_23472);
} else {
if((state_val_23475 === (12))){
var inst_23449 = (state_23474[(2)]);
var state_23474__$1 = state_23474;
var statearr_23496_23539 = state_23474__$1;
(statearr_23496_23539[(2)] = inst_23449);

(statearr_23496_23539[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23475 === (2))){
var state_23474__$1 = state_23474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23474__$1,(4),ch);
} else {
if((state_val_23475 === (23))){
var state_23474__$1 = state_23474;
var statearr_23497_23540 = state_23474__$1;
(statearr_23497_23540[(2)] = null);

(statearr_23497_23540[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23475 === (19))){
var inst_23455 = (state_23474[(11)]);
var inst_23405 = (state_23474[(8)]);
var inst_23457 = cljs.core.async.muxch_STAR_.call(null,inst_23455);
var state_23474__$1 = state_23474;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23474__$1,(22),inst_23457,inst_23405);
} else {
if((state_val_23475 === (11))){
var inst_23429 = (state_23474[(10)]);
var inst_23415 = (state_23474[(13)]);
var inst_23429__$1 = cljs.core.seq.call(null,inst_23415);
var state_23474__$1 = (function (){var statearr_23498 = state_23474;
(statearr_23498[(10)] = inst_23429__$1);

return statearr_23498;
})();
if(inst_23429__$1){
var statearr_23499_23541 = state_23474__$1;
(statearr_23499_23541[(1)] = (13));

} else {
var statearr_23500_23542 = state_23474__$1;
(statearr_23500_23542[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23475 === (9))){
var inst_23451 = (state_23474[(2)]);
var state_23474__$1 = state_23474;
var statearr_23501_23543 = state_23474__$1;
(statearr_23501_23543[(2)] = inst_23451);

(statearr_23501_23543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23475 === (5))){
var inst_23412 = cljs.core.deref.call(null,mults);
var inst_23413 = cljs.core.vals.call(null,inst_23412);
var inst_23414 = cljs.core.seq.call(null,inst_23413);
var inst_23415 = inst_23414;
var inst_23416 = null;
var inst_23417 = (0);
var inst_23418 = (0);
var state_23474__$1 = (function (){var statearr_23502 = state_23474;
(statearr_23502[(12)] = inst_23418);

(statearr_23502[(13)] = inst_23415);

(statearr_23502[(15)] = inst_23417);

(statearr_23502[(16)] = inst_23416);

return statearr_23502;
})();
var statearr_23503_23544 = state_23474__$1;
(statearr_23503_23544[(2)] = null);

(statearr_23503_23544[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23475 === (14))){
var state_23474__$1 = state_23474;
var statearr_23507_23545 = state_23474__$1;
(statearr_23507_23545[(2)] = null);

(statearr_23507_23545[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23475 === (16))){
var inst_23429 = (state_23474[(10)]);
var inst_23433 = cljs.core.chunk_first.call(null,inst_23429);
var inst_23434 = cljs.core.chunk_rest.call(null,inst_23429);
var inst_23435 = cljs.core.count.call(null,inst_23433);
var inst_23415 = inst_23434;
var inst_23416 = inst_23433;
var inst_23417 = inst_23435;
var inst_23418 = (0);
var state_23474__$1 = (function (){var statearr_23508 = state_23474;
(statearr_23508[(12)] = inst_23418);

(statearr_23508[(13)] = inst_23415);

(statearr_23508[(15)] = inst_23417);

(statearr_23508[(16)] = inst_23416);

return statearr_23508;
})();
var statearr_23509_23546 = state_23474__$1;
(statearr_23509_23546[(2)] = null);

(statearr_23509_23546[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23475 === (10))){
var inst_23418 = (state_23474[(12)]);
var inst_23415 = (state_23474[(13)]);
var inst_23417 = (state_23474[(15)]);
var inst_23416 = (state_23474[(16)]);
var inst_23423 = cljs.core._nth.call(null,inst_23416,inst_23418);
var inst_23424 = cljs.core.async.muxch_STAR_.call(null,inst_23423);
var inst_23425 = cljs.core.async.close_BANG_.call(null,inst_23424);
var inst_23426 = (inst_23418 + (1));
var tmp23504 = inst_23415;
var tmp23505 = inst_23417;
var tmp23506 = inst_23416;
var inst_23415__$1 = tmp23504;
var inst_23416__$1 = tmp23506;
var inst_23417__$1 = tmp23505;
var inst_23418__$1 = inst_23426;
var state_23474__$1 = (function (){var statearr_23510 = state_23474;
(statearr_23510[(12)] = inst_23418__$1);

(statearr_23510[(17)] = inst_23425);

(statearr_23510[(13)] = inst_23415__$1);

(statearr_23510[(15)] = inst_23417__$1);

(statearr_23510[(16)] = inst_23416__$1);

return statearr_23510;
})();
var statearr_23511_23547 = state_23474__$1;
(statearr_23511_23547[(2)] = null);

(statearr_23511_23547[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23475 === (18))){
var inst_23444 = (state_23474[(2)]);
var state_23474__$1 = state_23474;
var statearr_23512_23548 = state_23474__$1;
(statearr_23512_23548[(2)] = inst_23444);

(statearr_23512_23548[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23475 === (8))){
var inst_23418 = (state_23474[(12)]);
var inst_23417 = (state_23474[(15)]);
var inst_23420 = (inst_23418 < inst_23417);
var inst_23421 = inst_23420;
var state_23474__$1 = state_23474;
if(cljs.core.truth_(inst_23421)){
var statearr_23513_23549 = state_23474__$1;
(statearr_23513_23549[(1)] = (10));

} else {
var statearr_23514_23550 = state_23474__$1;
(statearr_23514_23550[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16483__auto___23522,mults,ensure_mult,p))
;
return ((function (switch__16427__auto__,c__16483__auto___23522,mults,ensure_mult,p){
return (function() {
var state_machine__16428__auto__ = null;
var state_machine__16428__auto____0 = (function (){
var statearr_23518 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23518[(0)] = state_machine__16428__auto__);

(statearr_23518[(1)] = (1));

return statearr_23518;
});
var state_machine__16428__auto____1 = (function (state_23474){
while(true){
var ret_value__16429__auto__ = (function (){try{while(true){
var result__16430__auto__ = switch__16427__auto__.call(null,state_23474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16430__auto__;
}
break;
}
}catch (e23519){if((e23519 instanceof Object)){
var ex__16431__auto__ = e23519;
var statearr_23520_23551 = state_23474;
(statearr_23520_23551[(5)] = ex__16431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23552 = state_23474;
state_23474 = G__23552;
continue;
} else {
return ret_value__16429__auto__;
}
break;
}
});
state_machine__16428__auto__ = function(state_23474){
switch(arguments.length){
case 0:
return state_machine__16428__auto____0.call(this);
case 1:
return state_machine__16428__auto____1.call(this,state_23474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16428__auto____0;
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16428__auto____1;
return state_machine__16428__auto__;
})()
;})(switch__16427__auto__,c__16483__auto___23522,mults,ensure_mult,p))
})();
var state__16485__auto__ = (function (){var statearr_23521 = f__16484__auto__.call(null);
(statearr_23521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16483__auto___23522);

return statearr_23521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16485__auto__);
});})(c__16483__auto___23522,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__16483__auto___23689 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16483__auto___23689,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16484__auto__ = (function (){var switch__16427__auto__ = ((function (c__16483__auto___23689,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23659){
var state_val_23660 = (state_23659[(1)]);
if((state_val_23660 === (7))){
var state_23659__$1 = state_23659;
var statearr_23661_23690 = state_23659__$1;
(statearr_23661_23690[(2)] = null);

(statearr_23661_23690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23660 === (1))){
var state_23659__$1 = state_23659;
var statearr_23662_23691 = state_23659__$1;
(statearr_23662_23691[(2)] = null);

(statearr_23662_23691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23660 === (4))){
var inst_23623 = (state_23659[(7)]);
var inst_23625 = (inst_23623 < cnt);
var state_23659__$1 = state_23659;
if(cljs.core.truth_(inst_23625)){
var statearr_23663_23692 = state_23659__$1;
(statearr_23663_23692[(1)] = (6));

} else {
var statearr_23664_23693 = state_23659__$1;
(statearr_23664_23693[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23660 === (15))){
var inst_23655 = (state_23659[(2)]);
var state_23659__$1 = state_23659;
var statearr_23665_23694 = state_23659__$1;
(statearr_23665_23694[(2)] = inst_23655);

(statearr_23665_23694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23660 === (13))){
var inst_23648 = cljs.core.async.close_BANG_.call(null,out);
var state_23659__$1 = state_23659;
var statearr_23666_23695 = state_23659__$1;
(statearr_23666_23695[(2)] = inst_23648);

(statearr_23666_23695[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23660 === (6))){
var state_23659__$1 = state_23659;
var statearr_23667_23696 = state_23659__$1;
(statearr_23667_23696[(2)] = null);

(statearr_23667_23696[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23660 === (3))){
var inst_23657 = (state_23659[(2)]);
var state_23659__$1 = state_23659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23659__$1,inst_23657);
} else {
if((state_val_23660 === (12))){
var inst_23645 = (state_23659[(8)]);
var inst_23645__$1 = (state_23659[(2)]);
var inst_23646 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23645__$1);
var state_23659__$1 = (function (){var statearr_23668 = state_23659;
(statearr_23668[(8)] = inst_23645__$1);

return statearr_23668;
})();
if(cljs.core.truth_(inst_23646)){
var statearr_23669_23697 = state_23659__$1;
(statearr_23669_23697[(1)] = (13));

} else {
var statearr_23670_23698 = state_23659__$1;
(statearr_23670_23698[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23660 === (2))){
var inst_23622 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23623 = (0);
var state_23659__$1 = (function (){var statearr_23671 = state_23659;
(statearr_23671[(7)] = inst_23623);

(statearr_23671[(9)] = inst_23622);

return statearr_23671;
})();
var statearr_23672_23699 = state_23659__$1;
(statearr_23672_23699[(2)] = null);

(statearr_23672_23699[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23660 === (11))){
var inst_23623 = (state_23659[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23659,(10),Object,null,(9));
var inst_23632 = chs__$1.call(null,inst_23623);
var inst_23633 = done.call(null,inst_23623);
var inst_23634 = cljs.core.async.take_BANG_.call(null,inst_23632,inst_23633);
var state_23659__$1 = state_23659;
var statearr_23673_23700 = state_23659__$1;
(statearr_23673_23700[(2)] = inst_23634);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23659__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23660 === (9))){
var inst_23623 = (state_23659[(7)]);
var inst_23636 = (state_23659[(2)]);
var inst_23637 = (inst_23623 + (1));
var inst_23623__$1 = inst_23637;
var state_23659__$1 = (function (){var statearr_23674 = state_23659;
(statearr_23674[(7)] = inst_23623__$1);

(statearr_23674[(10)] = inst_23636);

return statearr_23674;
})();
var statearr_23675_23701 = state_23659__$1;
(statearr_23675_23701[(2)] = null);

(statearr_23675_23701[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23660 === (5))){
var inst_23643 = (state_23659[(2)]);
var state_23659__$1 = (function (){var statearr_23676 = state_23659;
(statearr_23676[(11)] = inst_23643);

return statearr_23676;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23659__$1,(12),dchan);
} else {
if((state_val_23660 === (14))){
var inst_23645 = (state_23659[(8)]);
var inst_23650 = cljs.core.apply.call(null,f,inst_23645);
var state_23659__$1 = state_23659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23659__$1,(16),out,inst_23650);
} else {
if((state_val_23660 === (16))){
var inst_23652 = (state_23659[(2)]);
var state_23659__$1 = (function (){var statearr_23677 = state_23659;
(statearr_23677[(12)] = inst_23652);

return statearr_23677;
})();
var statearr_23678_23702 = state_23659__$1;
(statearr_23678_23702[(2)] = null);

(statearr_23678_23702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23660 === (10))){
var inst_23627 = (state_23659[(2)]);
var inst_23628 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23659__$1 = (function (){var statearr_23679 = state_23659;
(statearr_23679[(13)] = inst_23627);

return statearr_23679;
})();
var statearr_23680_23703 = state_23659__$1;
(statearr_23680_23703[(2)] = inst_23628);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23659__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23660 === (8))){
var inst_23641 = (state_23659[(2)]);
var state_23659__$1 = state_23659;
var statearr_23681_23704 = state_23659__$1;
(statearr_23681_23704[(2)] = inst_23641);

(statearr_23681_23704[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16483__auto___23689,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16427__auto__,c__16483__auto___23689,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__16428__auto__ = null;
var state_machine__16428__auto____0 = (function (){
var statearr_23685 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23685[(0)] = state_machine__16428__auto__);

(statearr_23685[(1)] = (1));

return statearr_23685;
});
var state_machine__16428__auto____1 = (function (state_23659){
while(true){
var ret_value__16429__auto__ = (function (){try{while(true){
var result__16430__auto__ = switch__16427__auto__.call(null,state_23659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16430__auto__;
}
break;
}
}catch (e23686){if((e23686 instanceof Object)){
var ex__16431__auto__ = e23686;
var statearr_23687_23705 = state_23659;
(statearr_23687_23705[(5)] = ex__16431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23706 = state_23659;
state_23659 = G__23706;
continue;
} else {
return ret_value__16429__auto__;
}
break;
}
});
state_machine__16428__auto__ = function(state_23659){
switch(arguments.length){
case 0:
return state_machine__16428__auto____0.call(this);
case 1:
return state_machine__16428__auto____1.call(this,state_23659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16428__auto____0;
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16428__auto____1;
return state_machine__16428__auto__;
})()
;})(switch__16427__auto__,c__16483__auto___23689,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16485__auto__ = (function (){var statearr_23688 = f__16484__auto__.call(null);
(statearr_23688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16483__auto___23689);

return statearr_23688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16485__auto__);
});})(c__16483__auto___23689,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16483__auto___23814 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16483__auto___23814,out){
return (function (){
var f__16484__auto__ = (function (){var switch__16427__auto__ = ((function (c__16483__auto___23814,out){
return (function (state_23790){
var state_val_23791 = (state_23790[(1)]);
if((state_val_23791 === (7))){
var inst_23769 = (state_23790[(7)]);
var inst_23770 = (state_23790[(8)]);
var inst_23769__$1 = (state_23790[(2)]);
var inst_23770__$1 = cljs.core.nth.call(null,inst_23769__$1,(0),null);
var inst_23771 = cljs.core.nth.call(null,inst_23769__$1,(1),null);
var inst_23772 = (inst_23770__$1 == null);
var state_23790__$1 = (function (){var statearr_23792 = state_23790;
(statearr_23792[(7)] = inst_23769__$1);

(statearr_23792[(9)] = inst_23771);

(statearr_23792[(8)] = inst_23770__$1);

return statearr_23792;
})();
if(cljs.core.truth_(inst_23772)){
var statearr_23793_23815 = state_23790__$1;
(statearr_23793_23815[(1)] = (8));

} else {
var statearr_23794_23816 = state_23790__$1;
(statearr_23794_23816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23791 === (1))){
var inst_23761 = cljs.core.vec.call(null,chs);
var inst_23762 = inst_23761;
var state_23790__$1 = (function (){var statearr_23795 = state_23790;
(statearr_23795[(10)] = inst_23762);

return statearr_23795;
})();
var statearr_23796_23817 = state_23790__$1;
(statearr_23796_23817[(2)] = null);

(statearr_23796_23817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23791 === (4))){
var inst_23762 = (state_23790[(10)]);
var state_23790__$1 = state_23790;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23790__$1,(7),inst_23762);
} else {
if((state_val_23791 === (6))){
var inst_23786 = (state_23790[(2)]);
var state_23790__$1 = state_23790;
var statearr_23797_23818 = state_23790__$1;
(statearr_23797_23818[(2)] = inst_23786);

(statearr_23797_23818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23791 === (3))){
var inst_23788 = (state_23790[(2)]);
var state_23790__$1 = state_23790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23790__$1,inst_23788);
} else {
if((state_val_23791 === (2))){
var inst_23762 = (state_23790[(10)]);
var inst_23764 = cljs.core.count.call(null,inst_23762);
var inst_23765 = (inst_23764 > (0));
var state_23790__$1 = state_23790;
if(cljs.core.truth_(inst_23765)){
var statearr_23799_23819 = state_23790__$1;
(statearr_23799_23819[(1)] = (4));

} else {
var statearr_23800_23820 = state_23790__$1;
(statearr_23800_23820[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23791 === (11))){
var inst_23762 = (state_23790[(10)]);
var inst_23779 = (state_23790[(2)]);
var tmp23798 = inst_23762;
var inst_23762__$1 = tmp23798;
var state_23790__$1 = (function (){var statearr_23801 = state_23790;
(statearr_23801[(11)] = inst_23779);

(statearr_23801[(10)] = inst_23762__$1);

return statearr_23801;
})();
var statearr_23802_23821 = state_23790__$1;
(statearr_23802_23821[(2)] = null);

(statearr_23802_23821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23791 === (9))){
var inst_23770 = (state_23790[(8)]);
var state_23790__$1 = state_23790;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23790__$1,(11),out,inst_23770);
} else {
if((state_val_23791 === (5))){
var inst_23784 = cljs.core.async.close_BANG_.call(null,out);
var state_23790__$1 = state_23790;
var statearr_23803_23822 = state_23790__$1;
(statearr_23803_23822[(2)] = inst_23784);

(statearr_23803_23822[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23791 === (10))){
var inst_23782 = (state_23790[(2)]);
var state_23790__$1 = state_23790;
var statearr_23804_23823 = state_23790__$1;
(statearr_23804_23823[(2)] = inst_23782);

(statearr_23804_23823[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23791 === (8))){
var inst_23769 = (state_23790[(7)]);
var inst_23771 = (state_23790[(9)]);
var inst_23770 = (state_23790[(8)]);
var inst_23762 = (state_23790[(10)]);
var inst_23774 = (function (){var c = inst_23771;
var v = inst_23770;
var vec__23767 = inst_23769;
var cs = inst_23762;
return ((function (c,v,vec__23767,cs,inst_23769,inst_23771,inst_23770,inst_23762,state_val_23791,c__16483__auto___23814,out){
return (function (p1__23707_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23707_SHARP_);
});
;})(c,v,vec__23767,cs,inst_23769,inst_23771,inst_23770,inst_23762,state_val_23791,c__16483__auto___23814,out))
})();
var inst_23775 = cljs.core.filterv.call(null,inst_23774,inst_23762);
var inst_23762__$1 = inst_23775;
var state_23790__$1 = (function (){var statearr_23805 = state_23790;
(statearr_23805[(10)] = inst_23762__$1);

return statearr_23805;
})();
var statearr_23806_23824 = state_23790__$1;
(statearr_23806_23824[(2)] = null);

(statearr_23806_23824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16483__auto___23814,out))
;
return ((function (switch__16427__auto__,c__16483__auto___23814,out){
return (function() {
var state_machine__16428__auto__ = null;
var state_machine__16428__auto____0 = (function (){
var statearr_23810 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23810[(0)] = state_machine__16428__auto__);

(statearr_23810[(1)] = (1));

return statearr_23810;
});
var state_machine__16428__auto____1 = (function (state_23790){
while(true){
var ret_value__16429__auto__ = (function (){try{while(true){
var result__16430__auto__ = switch__16427__auto__.call(null,state_23790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16430__auto__;
}
break;
}
}catch (e23811){if((e23811 instanceof Object)){
var ex__16431__auto__ = e23811;
var statearr_23812_23825 = state_23790;
(statearr_23812_23825[(5)] = ex__16431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23826 = state_23790;
state_23790 = G__23826;
continue;
} else {
return ret_value__16429__auto__;
}
break;
}
});
state_machine__16428__auto__ = function(state_23790){
switch(arguments.length){
case 0:
return state_machine__16428__auto____0.call(this);
case 1:
return state_machine__16428__auto____1.call(this,state_23790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16428__auto____0;
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16428__auto____1;
return state_machine__16428__auto__;
})()
;})(switch__16427__auto__,c__16483__auto___23814,out))
})();
var state__16485__auto__ = (function (){var statearr_23813 = f__16484__auto__.call(null);
(statearr_23813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16483__auto___23814);

return statearr_23813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16485__auto__);
});})(c__16483__auto___23814,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16483__auto___23919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16483__auto___23919,out){
return (function (){
var f__16484__auto__ = (function (){var switch__16427__auto__ = ((function (c__16483__auto___23919,out){
return (function (state_23896){
var state_val_23897 = (state_23896[(1)]);
if((state_val_23897 === (7))){
var inst_23878 = (state_23896[(7)]);
var inst_23878__$1 = (state_23896[(2)]);
var inst_23879 = (inst_23878__$1 == null);
var inst_23880 = cljs.core.not.call(null,inst_23879);
var state_23896__$1 = (function (){var statearr_23898 = state_23896;
(statearr_23898[(7)] = inst_23878__$1);

return statearr_23898;
})();
if(inst_23880){
var statearr_23899_23920 = state_23896__$1;
(statearr_23899_23920[(1)] = (8));

} else {
var statearr_23900_23921 = state_23896__$1;
(statearr_23900_23921[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23897 === (1))){
var inst_23873 = (0);
var state_23896__$1 = (function (){var statearr_23901 = state_23896;
(statearr_23901[(8)] = inst_23873);

return statearr_23901;
})();
var statearr_23902_23922 = state_23896__$1;
(statearr_23902_23922[(2)] = null);

(statearr_23902_23922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23897 === (4))){
var state_23896__$1 = state_23896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23896__$1,(7),ch);
} else {
if((state_val_23897 === (6))){
var inst_23891 = (state_23896[(2)]);
var state_23896__$1 = state_23896;
var statearr_23903_23923 = state_23896__$1;
(statearr_23903_23923[(2)] = inst_23891);

(statearr_23903_23923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23897 === (3))){
var inst_23893 = (state_23896[(2)]);
var inst_23894 = cljs.core.async.close_BANG_.call(null,out);
var state_23896__$1 = (function (){var statearr_23904 = state_23896;
(statearr_23904[(9)] = inst_23893);

return statearr_23904;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23896__$1,inst_23894);
} else {
if((state_val_23897 === (2))){
var inst_23873 = (state_23896[(8)]);
var inst_23875 = (inst_23873 < n);
var state_23896__$1 = state_23896;
if(cljs.core.truth_(inst_23875)){
var statearr_23905_23924 = state_23896__$1;
(statearr_23905_23924[(1)] = (4));

} else {
var statearr_23906_23925 = state_23896__$1;
(statearr_23906_23925[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23897 === (11))){
var inst_23873 = (state_23896[(8)]);
var inst_23883 = (state_23896[(2)]);
var inst_23884 = (inst_23873 + (1));
var inst_23873__$1 = inst_23884;
var state_23896__$1 = (function (){var statearr_23907 = state_23896;
(statearr_23907[(8)] = inst_23873__$1);

(statearr_23907[(10)] = inst_23883);

return statearr_23907;
})();
var statearr_23908_23926 = state_23896__$1;
(statearr_23908_23926[(2)] = null);

(statearr_23908_23926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23897 === (9))){
var state_23896__$1 = state_23896;
var statearr_23909_23927 = state_23896__$1;
(statearr_23909_23927[(2)] = null);

(statearr_23909_23927[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23897 === (5))){
var state_23896__$1 = state_23896;
var statearr_23910_23928 = state_23896__$1;
(statearr_23910_23928[(2)] = null);

(statearr_23910_23928[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23897 === (10))){
var inst_23888 = (state_23896[(2)]);
var state_23896__$1 = state_23896;
var statearr_23911_23929 = state_23896__$1;
(statearr_23911_23929[(2)] = inst_23888);

(statearr_23911_23929[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23897 === (8))){
var inst_23878 = (state_23896[(7)]);
var state_23896__$1 = state_23896;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23896__$1,(11),out,inst_23878);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16483__auto___23919,out))
;
return ((function (switch__16427__auto__,c__16483__auto___23919,out){
return (function() {
var state_machine__16428__auto__ = null;
var state_machine__16428__auto____0 = (function (){
var statearr_23915 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23915[(0)] = state_machine__16428__auto__);

(statearr_23915[(1)] = (1));

return statearr_23915;
});
var state_machine__16428__auto____1 = (function (state_23896){
while(true){
var ret_value__16429__auto__ = (function (){try{while(true){
var result__16430__auto__ = switch__16427__auto__.call(null,state_23896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16430__auto__;
}
break;
}
}catch (e23916){if((e23916 instanceof Object)){
var ex__16431__auto__ = e23916;
var statearr_23917_23930 = state_23896;
(statearr_23917_23930[(5)] = ex__16431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23931 = state_23896;
state_23896 = G__23931;
continue;
} else {
return ret_value__16429__auto__;
}
break;
}
});
state_machine__16428__auto__ = function(state_23896){
switch(arguments.length){
case 0:
return state_machine__16428__auto____0.call(this);
case 1:
return state_machine__16428__auto____1.call(this,state_23896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16428__auto____0;
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16428__auto____1;
return state_machine__16428__auto__;
})()
;})(switch__16427__auto__,c__16483__auto___23919,out))
})();
var state__16485__auto__ = (function (){var statearr_23918 = f__16484__auto__.call(null);
(statearr_23918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16483__auto___23919);

return statearr_23918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16485__auto__);
});})(c__16483__auto___23919,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t23939 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23939 = (function (ch,f,map_LT_,meta23940){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23940 = meta23940;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23939.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t23939.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t23939.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t23939.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t23942 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23942 = (function (fn1,_,meta23940,map_LT_,f,ch,meta23943){
this.fn1 = fn1;
this._ = _;
this.meta23940 = meta23940;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23943 = meta23943;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23942.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23942.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t23942.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23932_SHARP_){
return f1.call(null,(((p1__23932_SHARP_ == null))?null:self__.f.call(null,p1__23932_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t23942.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23944){
var self__ = this;
var _23944__$1 = this;
return self__.meta23943;
});})(___$1))
;

cljs.core.async.t23942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23944,meta23943__$1){
var self__ = this;
var _23944__$1 = this;
return (new cljs.core.async.t23942(self__.fn1,self__._,self__.meta23940,self__.map_LT_,self__.f,self__.ch,meta23943__$1));
});})(___$1))
;

cljs.core.async.t23942.cljs$lang$type = true;

cljs.core.async.t23942.cljs$lang$ctorStr = "cljs.core.async/t23942";

cljs.core.async.t23942.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13413__auto__,writer__13414__auto__,opt__13415__auto__){
return cljs.core._write.call(null,writer__13414__auto__,"cljs.core.async/t23942");
});})(___$1))
;

cljs.core.async.__GT_t23942 = ((function (___$1){
return (function __GT_t23942(fn1__$1,___$2,meta23940__$1,map_LT___$1,f__$1,ch__$1,meta23943){
return (new cljs.core.async.t23942(fn1__$1,___$2,meta23940__$1,map_LT___$1,f__$1,ch__$1,meta23943));
});})(___$1))
;

}

return (new cljs.core.async.t23942(fn1,___$1,self__.meta23940,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/uris77/Development/clojure/6pedos/public-pedos/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__12814__auto__ = ret;
if(cljs.core.truth_(and__12814__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__12814__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t23939.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t23939.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t23939.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t23939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23941){
var self__ = this;
var _23941__$1 = this;
return self__.meta23940;
});

cljs.core.async.t23939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23941,meta23940__$1){
var self__ = this;
var _23941__$1 = this;
return (new cljs.core.async.t23939(self__.ch,self__.f,self__.map_LT_,meta23940__$1));
});

cljs.core.async.t23939.cljs$lang$type = true;

cljs.core.async.t23939.cljs$lang$ctorStr = "cljs.core.async/t23939";

cljs.core.async.t23939.cljs$lang$ctorPrWriter = (function (this__13413__auto__,writer__13414__auto__,opt__13415__auto__){
return cljs.core._write.call(null,writer__13414__auto__,"cljs.core.async/t23939");
});

cljs.core.async.__GT_t23939 = (function __GT_t23939(ch__$1,f__$1,map_LT___$1,meta23940){
return (new cljs.core.async.t23939(ch__$1,f__$1,map_LT___$1,meta23940));
});

}

return (new cljs.core.async.t23939(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/uris77/Development/clojure/6pedos/public-pedos/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t23948 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23948 = (function (ch,f,map_GT_,meta23949){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta23949 = meta23949;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23948.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t23948.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t23948.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t23948.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t23948.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t23948.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t23948.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23950){
var self__ = this;
var _23950__$1 = this;
return self__.meta23949;
});

cljs.core.async.t23948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23950,meta23949__$1){
var self__ = this;
var _23950__$1 = this;
return (new cljs.core.async.t23948(self__.ch,self__.f,self__.map_GT_,meta23949__$1));
});

cljs.core.async.t23948.cljs$lang$type = true;

cljs.core.async.t23948.cljs$lang$ctorStr = "cljs.core.async/t23948";

cljs.core.async.t23948.cljs$lang$ctorPrWriter = (function (this__13413__auto__,writer__13414__auto__,opt__13415__auto__){
return cljs.core._write.call(null,writer__13414__auto__,"cljs.core.async/t23948");
});

cljs.core.async.__GT_t23948 = (function __GT_t23948(ch__$1,f__$1,map_GT___$1,meta23949){
return (new cljs.core.async.t23948(ch__$1,f__$1,map_GT___$1,meta23949));
});

}

return (new cljs.core.async.t23948(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/uris77/Development/clojure/6pedos/public-pedos/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t23954 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23954 = (function (ch,p,filter_GT_,meta23955){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta23955 = meta23955;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23954.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t23954.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t23954.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t23954.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t23954.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t23954.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t23954.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t23954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23956){
var self__ = this;
var _23956__$1 = this;
return self__.meta23955;
});

cljs.core.async.t23954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23956,meta23955__$1){
var self__ = this;
var _23956__$1 = this;
return (new cljs.core.async.t23954(self__.ch,self__.p,self__.filter_GT_,meta23955__$1));
});

cljs.core.async.t23954.cljs$lang$type = true;

cljs.core.async.t23954.cljs$lang$ctorStr = "cljs.core.async/t23954";

cljs.core.async.t23954.cljs$lang$ctorPrWriter = (function (this__13413__auto__,writer__13414__auto__,opt__13415__auto__){
return cljs.core._write.call(null,writer__13414__auto__,"cljs.core.async/t23954");
});

cljs.core.async.__GT_t23954 = (function __GT_t23954(ch__$1,p__$1,filter_GT___$1,meta23955){
return (new cljs.core.async.t23954(ch__$1,p__$1,filter_GT___$1,meta23955));
});

}

return (new cljs.core.async.t23954(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/uris77/Development/clojure/6pedos/public-pedos/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16483__auto___24039 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16483__auto___24039,out){
return (function (){
var f__16484__auto__ = (function (){var switch__16427__auto__ = ((function (c__16483__auto___24039,out){
return (function (state_24018){
var state_val_24019 = (state_24018[(1)]);
if((state_val_24019 === (7))){
var inst_24014 = (state_24018[(2)]);
var state_24018__$1 = state_24018;
var statearr_24020_24040 = state_24018__$1;
(statearr_24020_24040[(2)] = inst_24014);

(statearr_24020_24040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24019 === (1))){
var state_24018__$1 = state_24018;
var statearr_24021_24041 = state_24018__$1;
(statearr_24021_24041[(2)] = null);

(statearr_24021_24041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24019 === (4))){
var inst_24000 = (state_24018[(7)]);
var inst_24000__$1 = (state_24018[(2)]);
var inst_24001 = (inst_24000__$1 == null);
var state_24018__$1 = (function (){var statearr_24022 = state_24018;
(statearr_24022[(7)] = inst_24000__$1);

return statearr_24022;
})();
if(cljs.core.truth_(inst_24001)){
var statearr_24023_24042 = state_24018__$1;
(statearr_24023_24042[(1)] = (5));

} else {
var statearr_24024_24043 = state_24018__$1;
(statearr_24024_24043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24019 === (6))){
var inst_24000 = (state_24018[(7)]);
var inst_24005 = p.call(null,inst_24000);
var state_24018__$1 = state_24018;
if(cljs.core.truth_(inst_24005)){
var statearr_24025_24044 = state_24018__$1;
(statearr_24025_24044[(1)] = (8));

} else {
var statearr_24026_24045 = state_24018__$1;
(statearr_24026_24045[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24019 === (3))){
var inst_24016 = (state_24018[(2)]);
var state_24018__$1 = state_24018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24018__$1,inst_24016);
} else {
if((state_val_24019 === (2))){
var state_24018__$1 = state_24018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24018__$1,(4),ch);
} else {
if((state_val_24019 === (11))){
var inst_24008 = (state_24018[(2)]);
var state_24018__$1 = state_24018;
var statearr_24027_24046 = state_24018__$1;
(statearr_24027_24046[(2)] = inst_24008);

(statearr_24027_24046[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24019 === (9))){
var state_24018__$1 = state_24018;
var statearr_24028_24047 = state_24018__$1;
(statearr_24028_24047[(2)] = null);

(statearr_24028_24047[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24019 === (5))){
var inst_24003 = cljs.core.async.close_BANG_.call(null,out);
var state_24018__$1 = state_24018;
var statearr_24029_24048 = state_24018__$1;
(statearr_24029_24048[(2)] = inst_24003);

(statearr_24029_24048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24019 === (10))){
var inst_24011 = (state_24018[(2)]);
var state_24018__$1 = (function (){var statearr_24030 = state_24018;
(statearr_24030[(8)] = inst_24011);

return statearr_24030;
})();
var statearr_24031_24049 = state_24018__$1;
(statearr_24031_24049[(2)] = null);

(statearr_24031_24049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24019 === (8))){
var inst_24000 = (state_24018[(7)]);
var state_24018__$1 = state_24018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24018__$1,(11),out,inst_24000);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16483__auto___24039,out))
;
return ((function (switch__16427__auto__,c__16483__auto___24039,out){
return (function() {
var state_machine__16428__auto__ = null;
var state_machine__16428__auto____0 = (function (){
var statearr_24035 = [null,null,null,null,null,null,null,null,null];
(statearr_24035[(0)] = state_machine__16428__auto__);

(statearr_24035[(1)] = (1));

return statearr_24035;
});
var state_machine__16428__auto____1 = (function (state_24018){
while(true){
var ret_value__16429__auto__ = (function (){try{while(true){
var result__16430__auto__ = switch__16427__auto__.call(null,state_24018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16430__auto__;
}
break;
}
}catch (e24036){if((e24036 instanceof Object)){
var ex__16431__auto__ = e24036;
var statearr_24037_24050 = state_24018;
(statearr_24037_24050[(5)] = ex__16431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24051 = state_24018;
state_24018 = G__24051;
continue;
} else {
return ret_value__16429__auto__;
}
break;
}
});
state_machine__16428__auto__ = function(state_24018){
switch(arguments.length){
case 0:
return state_machine__16428__auto____0.call(this);
case 1:
return state_machine__16428__auto____1.call(this,state_24018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16428__auto____0;
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16428__auto____1;
return state_machine__16428__auto__;
})()
;})(switch__16427__auto__,c__16483__auto___24039,out))
})();
var state__16485__auto__ = (function (){var statearr_24038 = f__16484__auto__.call(null);
(statearr_24038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16483__auto___24039);

return statearr_24038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16485__auto__);
});})(c__16483__auto___24039,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__16483__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16483__auto__){
return (function (){
var f__16484__auto__ = (function (){var switch__16427__auto__ = ((function (c__16483__auto__){
return (function (state_24217){
var state_val_24218 = (state_24217[(1)]);
if((state_val_24218 === (7))){
var inst_24213 = (state_24217[(2)]);
var state_24217__$1 = state_24217;
var statearr_24219_24260 = state_24217__$1;
(statearr_24219_24260[(2)] = inst_24213);

(statearr_24219_24260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24218 === (20))){
var inst_24183 = (state_24217[(7)]);
var inst_24194 = (state_24217[(2)]);
var inst_24195 = cljs.core.next.call(null,inst_24183);
var inst_24169 = inst_24195;
var inst_24170 = null;
var inst_24171 = (0);
var inst_24172 = (0);
var state_24217__$1 = (function (){var statearr_24220 = state_24217;
(statearr_24220[(8)] = inst_24171);

(statearr_24220[(9)] = inst_24194);

(statearr_24220[(10)] = inst_24169);

(statearr_24220[(11)] = inst_24170);

(statearr_24220[(12)] = inst_24172);

return statearr_24220;
})();
var statearr_24221_24261 = state_24217__$1;
(statearr_24221_24261[(2)] = null);

(statearr_24221_24261[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24218 === (1))){
var state_24217__$1 = state_24217;
var statearr_24222_24262 = state_24217__$1;
(statearr_24222_24262[(2)] = null);

(statearr_24222_24262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24218 === (4))){
var inst_24158 = (state_24217[(13)]);
var inst_24158__$1 = (state_24217[(2)]);
var inst_24159 = (inst_24158__$1 == null);
var state_24217__$1 = (function (){var statearr_24223 = state_24217;
(statearr_24223[(13)] = inst_24158__$1);

return statearr_24223;
})();
if(cljs.core.truth_(inst_24159)){
var statearr_24224_24263 = state_24217__$1;
(statearr_24224_24263[(1)] = (5));

} else {
var statearr_24225_24264 = state_24217__$1;
(statearr_24225_24264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24218 === (15))){
var state_24217__$1 = state_24217;
var statearr_24229_24265 = state_24217__$1;
(statearr_24229_24265[(2)] = null);

(statearr_24229_24265[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24218 === (21))){
var state_24217__$1 = state_24217;
var statearr_24230_24266 = state_24217__$1;
(statearr_24230_24266[(2)] = null);

(statearr_24230_24266[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24218 === (13))){
var inst_24171 = (state_24217[(8)]);
var inst_24169 = (state_24217[(10)]);
var inst_24170 = (state_24217[(11)]);
var inst_24172 = (state_24217[(12)]);
var inst_24179 = (state_24217[(2)]);
var inst_24180 = (inst_24172 + (1));
var tmp24226 = inst_24171;
var tmp24227 = inst_24169;
var tmp24228 = inst_24170;
var inst_24169__$1 = tmp24227;
var inst_24170__$1 = tmp24228;
var inst_24171__$1 = tmp24226;
var inst_24172__$1 = inst_24180;
var state_24217__$1 = (function (){var statearr_24231 = state_24217;
(statearr_24231[(8)] = inst_24171__$1);

(statearr_24231[(14)] = inst_24179);

(statearr_24231[(10)] = inst_24169__$1);

(statearr_24231[(11)] = inst_24170__$1);

(statearr_24231[(12)] = inst_24172__$1);

return statearr_24231;
})();
var statearr_24232_24267 = state_24217__$1;
(statearr_24232_24267[(2)] = null);

(statearr_24232_24267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24218 === (22))){
var state_24217__$1 = state_24217;
var statearr_24233_24268 = state_24217__$1;
(statearr_24233_24268[(2)] = null);

(statearr_24233_24268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24218 === (6))){
var inst_24158 = (state_24217[(13)]);
var inst_24167 = f.call(null,inst_24158);
var inst_24168 = cljs.core.seq.call(null,inst_24167);
var inst_24169 = inst_24168;
var inst_24170 = null;
var inst_24171 = (0);
var inst_24172 = (0);
var state_24217__$1 = (function (){var statearr_24234 = state_24217;
(statearr_24234[(8)] = inst_24171);

(statearr_24234[(10)] = inst_24169);

(statearr_24234[(11)] = inst_24170);

(statearr_24234[(12)] = inst_24172);

return statearr_24234;
})();
var statearr_24235_24269 = state_24217__$1;
(statearr_24235_24269[(2)] = null);

(statearr_24235_24269[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24218 === (17))){
var inst_24183 = (state_24217[(7)]);
var inst_24187 = cljs.core.chunk_first.call(null,inst_24183);
var inst_24188 = cljs.core.chunk_rest.call(null,inst_24183);
var inst_24189 = cljs.core.count.call(null,inst_24187);
var inst_24169 = inst_24188;
var inst_24170 = inst_24187;
var inst_24171 = inst_24189;
var inst_24172 = (0);
var state_24217__$1 = (function (){var statearr_24236 = state_24217;
(statearr_24236[(8)] = inst_24171);

(statearr_24236[(10)] = inst_24169);

(statearr_24236[(11)] = inst_24170);

(statearr_24236[(12)] = inst_24172);

return statearr_24236;
})();
var statearr_24237_24270 = state_24217__$1;
(statearr_24237_24270[(2)] = null);

(statearr_24237_24270[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24218 === (3))){
var inst_24215 = (state_24217[(2)]);
var state_24217__$1 = state_24217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24217__$1,inst_24215);
} else {
if((state_val_24218 === (12))){
var inst_24203 = (state_24217[(2)]);
var state_24217__$1 = state_24217;
var statearr_24238_24271 = state_24217__$1;
(statearr_24238_24271[(2)] = inst_24203);

(statearr_24238_24271[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24218 === (2))){
var state_24217__$1 = state_24217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24217__$1,(4),in$);
} else {
if((state_val_24218 === (23))){
var inst_24211 = (state_24217[(2)]);
var state_24217__$1 = state_24217;
var statearr_24239_24272 = state_24217__$1;
(statearr_24239_24272[(2)] = inst_24211);

(statearr_24239_24272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24218 === (19))){
var inst_24198 = (state_24217[(2)]);
var state_24217__$1 = state_24217;
var statearr_24240_24273 = state_24217__$1;
(statearr_24240_24273[(2)] = inst_24198);

(statearr_24240_24273[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24218 === (11))){
var inst_24183 = (state_24217[(7)]);
var inst_24169 = (state_24217[(10)]);
var inst_24183__$1 = cljs.core.seq.call(null,inst_24169);
var state_24217__$1 = (function (){var statearr_24241 = state_24217;
(statearr_24241[(7)] = inst_24183__$1);

return statearr_24241;
})();
if(inst_24183__$1){
var statearr_24242_24274 = state_24217__$1;
(statearr_24242_24274[(1)] = (14));

} else {
var statearr_24243_24275 = state_24217__$1;
(statearr_24243_24275[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24218 === (9))){
var inst_24205 = (state_24217[(2)]);
var inst_24206 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24217__$1 = (function (){var statearr_24244 = state_24217;
(statearr_24244[(15)] = inst_24205);

return statearr_24244;
})();
if(cljs.core.truth_(inst_24206)){
var statearr_24245_24276 = state_24217__$1;
(statearr_24245_24276[(1)] = (21));

} else {
var statearr_24246_24277 = state_24217__$1;
(statearr_24246_24277[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24218 === (5))){
var inst_24161 = cljs.core.async.close_BANG_.call(null,out);
var state_24217__$1 = state_24217;
var statearr_24247_24278 = state_24217__$1;
(statearr_24247_24278[(2)] = inst_24161);

(statearr_24247_24278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24218 === (14))){
var inst_24183 = (state_24217[(7)]);
var inst_24185 = cljs.core.chunked_seq_QMARK_.call(null,inst_24183);
var state_24217__$1 = state_24217;
if(inst_24185){
var statearr_24248_24279 = state_24217__$1;
(statearr_24248_24279[(1)] = (17));

} else {
var statearr_24249_24280 = state_24217__$1;
(statearr_24249_24280[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24218 === (16))){
var inst_24201 = (state_24217[(2)]);
var state_24217__$1 = state_24217;
var statearr_24250_24281 = state_24217__$1;
(statearr_24250_24281[(2)] = inst_24201);

(statearr_24250_24281[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24218 === (10))){
var inst_24170 = (state_24217[(11)]);
var inst_24172 = (state_24217[(12)]);
var inst_24177 = cljs.core._nth.call(null,inst_24170,inst_24172);
var state_24217__$1 = state_24217;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24217__$1,(13),out,inst_24177);
} else {
if((state_val_24218 === (18))){
var inst_24183 = (state_24217[(7)]);
var inst_24192 = cljs.core.first.call(null,inst_24183);
var state_24217__$1 = state_24217;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24217__$1,(20),out,inst_24192);
} else {
if((state_val_24218 === (8))){
var inst_24171 = (state_24217[(8)]);
var inst_24172 = (state_24217[(12)]);
var inst_24174 = (inst_24172 < inst_24171);
var inst_24175 = inst_24174;
var state_24217__$1 = state_24217;
if(cljs.core.truth_(inst_24175)){
var statearr_24251_24282 = state_24217__$1;
(statearr_24251_24282[(1)] = (10));

} else {
var statearr_24252_24283 = state_24217__$1;
(statearr_24252_24283[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16483__auto__))
;
return ((function (switch__16427__auto__,c__16483__auto__){
return (function() {
var state_machine__16428__auto__ = null;
var state_machine__16428__auto____0 = (function (){
var statearr_24256 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24256[(0)] = state_machine__16428__auto__);

(statearr_24256[(1)] = (1));

return statearr_24256;
});
var state_machine__16428__auto____1 = (function (state_24217){
while(true){
var ret_value__16429__auto__ = (function (){try{while(true){
var result__16430__auto__ = switch__16427__auto__.call(null,state_24217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16430__auto__;
}
break;
}
}catch (e24257){if((e24257 instanceof Object)){
var ex__16431__auto__ = e24257;
var statearr_24258_24284 = state_24217;
(statearr_24258_24284[(5)] = ex__16431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24285 = state_24217;
state_24217 = G__24285;
continue;
} else {
return ret_value__16429__auto__;
}
break;
}
});
state_machine__16428__auto__ = function(state_24217){
switch(arguments.length){
case 0:
return state_machine__16428__auto____0.call(this);
case 1:
return state_machine__16428__auto____1.call(this,state_24217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16428__auto____0;
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16428__auto____1;
return state_machine__16428__auto__;
})()
;})(switch__16427__auto__,c__16483__auto__))
})();
var state__16485__auto__ = (function (){var statearr_24259 = f__16484__auto__.call(null);
(statearr_24259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16483__auto__);

return statearr_24259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16485__auto__);
});})(c__16483__auto__))
);

return c__16483__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16483__auto___24382 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16483__auto___24382,out){
return (function (){
var f__16484__auto__ = (function (){var switch__16427__auto__ = ((function (c__16483__auto___24382,out){
return (function (state_24357){
var state_val_24358 = (state_24357[(1)]);
if((state_val_24358 === (7))){
var inst_24352 = (state_24357[(2)]);
var state_24357__$1 = state_24357;
var statearr_24359_24383 = state_24357__$1;
(statearr_24359_24383[(2)] = inst_24352);

(statearr_24359_24383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24358 === (1))){
var inst_24334 = null;
var state_24357__$1 = (function (){var statearr_24360 = state_24357;
(statearr_24360[(7)] = inst_24334);

return statearr_24360;
})();
var statearr_24361_24384 = state_24357__$1;
(statearr_24361_24384[(2)] = null);

(statearr_24361_24384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24358 === (4))){
var inst_24337 = (state_24357[(8)]);
var inst_24337__$1 = (state_24357[(2)]);
var inst_24338 = (inst_24337__$1 == null);
var inst_24339 = cljs.core.not.call(null,inst_24338);
var state_24357__$1 = (function (){var statearr_24362 = state_24357;
(statearr_24362[(8)] = inst_24337__$1);

return statearr_24362;
})();
if(inst_24339){
var statearr_24363_24385 = state_24357__$1;
(statearr_24363_24385[(1)] = (5));

} else {
var statearr_24364_24386 = state_24357__$1;
(statearr_24364_24386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24358 === (6))){
var state_24357__$1 = state_24357;
var statearr_24365_24387 = state_24357__$1;
(statearr_24365_24387[(2)] = null);

(statearr_24365_24387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24358 === (3))){
var inst_24354 = (state_24357[(2)]);
var inst_24355 = cljs.core.async.close_BANG_.call(null,out);
var state_24357__$1 = (function (){var statearr_24366 = state_24357;
(statearr_24366[(9)] = inst_24354);

return statearr_24366;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24357__$1,inst_24355);
} else {
if((state_val_24358 === (2))){
var state_24357__$1 = state_24357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24357__$1,(4),ch);
} else {
if((state_val_24358 === (11))){
var inst_24337 = (state_24357[(8)]);
var inst_24346 = (state_24357[(2)]);
var inst_24334 = inst_24337;
var state_24357__$1 = (function (){var statearr_24367 = state_24357;
(statearr_24367[(7)] = inst_24334);

(statearr_24367[(10)] = inst_24346);

return statearr_24367;
})();
var statearr_24368_24388 = state_24357__$1;
(statearr_24368_24388[(2)] = null);

(statearr_24368_24388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24358 === (9))){
var inst_24337 = (state_24357[(8)]);
var state_24357__$1 = state_24357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24357__$1,(11),out,inst_24337);
} else {
if((state_val_24358 === (5))){
var inst_24337 = (state_24357[(8)]);
var inst_24334 = (state_24357[(7)]);
var inst_24341 = cljs.core._EQ_.call(null,inst_24337,inst_24334);
var state_24357__$1 = state_24357;
if(inst_24341){
var statearr_24370_24389 = state_24357__$1;
(statearr_24370_24389[(1)] = (8));

} else {
var statearr_24371_24390 = state_24357__$1;
(statearr_24371_24390[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24358 === (10))){
var inst_24349 = (state_24357[(2)]);
var state_24357__$1 = state_24357;
var statearr_24372_24391 = state_24357__$1;
(statearr_24372_24391[(2)] = inst_24349);

(statearr_24372_24391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24358 === (8))){
var inst_24334 = (state_24357[(7)]);
var tmp24369 = inst_24334;
var inst_24334__$1 = tmp24369;
var state_24357__$1 = (function (){var statearr_24373 = state_24357;
(statearr_24373[(7)] = inst_24334__$1);

return statearr_24373;
})();
var statearr_24374_24392 = state_24357__$1;
(statearr_24374_24392[(2)] = null);

(statearr_24374_24392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16483__auto___24382,out))
;
return ((function (switch__16427__auto__,c__16483__auto___24382,out){
return (function() {
var state_machine__16428__auto__ = null;
var state_machine__16428__auto____0 = (function (){
var statearr_24378 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24378[(0)] = state_machine__16428__auto__);

(statearr_24378[(1)] = (1));

return statearr_24378;
});
var state_machine__16428__auto____1 = (function (state_24357){
while(true){
var ret_value__16429__auto__ = (function (){try{while(true){
var result__16430__auto__ = switch__16427__auto__.call(null,state_24357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16430__auto__;
}
break;
}
}catch (e24379){if((e24379 instanceof Object)){
var ex__16431__auto__ = e24379;
var statearr_24380_24393 = state_24357;
(statearr_24380_24393[(5)] = ex__16431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24394 = state_24357;
state_24357 = G__24394;
continue;
} else {
return ret_value__16429__auto__;
}
break;
}
});
state_machine__16428__auto__ = function(state_24357){
switch(arguments.length){
case 0:
return state_machine__16428__auto____0.call(this);
case 1:
return state_machine__16428__auto____1.call(this,state_24357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16428__auto____0;
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16428__auto____1;
return state_machine__16428__auto__;
})()
;})(switch__16427__auto__,c__16483__auto___24382,out))
})();
var state__16485__auto__ = (function (){var statearr_24381 = f__16484__auto__.call(null);
(statearr_24381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16483__auto___24382);

return statearr_24381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16485__auto__);
});})(c__16483__auto___24382,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16483__auto___24529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16483__auto___24529,out){
return (function (){
var f__16484__auto__ = (function (){var switch__16427__auto__ = ((function (c__16483__auto___24529,out){
return (function (state_24499){
var state_val_24500 = (state_24499[(1)]);
if((state_val_24500 === (7))){
var inst_24495 = (state_24499[(2)]);
var state_24499__$1 = state_24499;
var statearr_24501_24530 = state_24499__$1;
(statearr_24501_24530[(2)] = inst_24495);

(statearr_24501_24530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24500 === (1))){
var inst_24462 = (new Array(n));
var inst_24463 = inst_24462;
var inst_24464 = (0);
var state_24499__$1 = (function (){var statearr_24502 = state_24499;
(statearr_24502[(7)] = inst_24463);

(statearr_24502[(8)] = inst_24464);

return statearr_24502;
})();
var statearr_24503_24531 = state_24499__$1;
(statearr_24503_24531[(2)] = null);

(statearr_24503_24531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24500 === (4))){
var inst_24467 = (state_24499[(9)]);
var inst_24467__$1 = (state_24499[(2)]);
var inst_24468 = (inst_24467__$1 == null);
var inst_24469 = cljs.core.not.call(null,inst_24468);
var state_24499__$1 = (function (){var statearr_24504 = state_24499;
(statearr_24504[(9)] = inst_24467__$1);

return statearr_24504;
})();
if(inst_24469){
var statearr_24505_24532 = state_24499__$1;
(statearr_24505_24532[(1)] = (5));

} else {
var statearr_24506_24533 = state_24499__$1;
(statearr_24506_24533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24500 === (15))){
var inst_24489 = (state_24499[(2)]);
var state_24499__$1 = state_24499;
var statearr_24507_24534 = state_24499__$1;
(statearr_24507_24534[(2)] = inst_24489);

(statearr_24507_24534[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24500 === (13))){
var state_24499__$1 = state_24499;
var statearr_24508_24535 = state_24499__$1;
(statearr_24508_24535[(2)] = null);

(statearr_24508_24535[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24500 === (6))){
var inst_24464 = (state_24499[(8)]);
var inst_24485 = (inst_24464 > (0));
var state_24499__$1 = state_24499;
if(cljs.core.truth_(inst_24485)){
var statearr_24509_24536 = state_24499__$1;
(statearr_24509_24536[(1)] = (12));

} else {
var statearr_24510_24537 = state_24499__$1;
(statearr_24510_24537[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24500 === (3))){
var inst_24497 = (state_24499[(2)]);
var state_24499__$1 = state_24499;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24499__$1,inst_24497);
} else {
if((state_val_24500 === (12))){
var inst_24463 = (state_24499[(7)]);
var inst_24487 = cljs.core.vec.call(null,inst_24463);
var state_24499__$1 = state_24499;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24499__$1,(15),out,inst_24487);
} else {
if((state_val_24500 === (2))){
var state_24499__$1 = state_24499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24499__$1,(4),ch);
} else {
if((state_val_24500 === (11))){
var inst_24479 = (state_24499[(2)]);
var inst_24480 = (new Array(n));
var inst_24463 = inst_24480;
var inst_24464 = (0);
var state_24499__$1 = (function (){var statearr_24511 = state_24499;
(statearr_24511[(7)] = inst_24463);

(statearr_24511[(8)] = inst_24464);

(statearr_24511[(10)] = inst_24479);

return statearr_24511;
})();
var statearr_24512_24538 = state_24499__$1;
(statearr_24512_24538[(2)] = null);

(statearr_24512_24538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24500 === (9))){
var inst_24463 = (state_24499[(7)]);
var inst_24477 = cljs.core.vec.call(null,inst_24463);
var state_24499__$1 = state_24499;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24499__$1,(11),out,inst_24477);
} else {
if((state_val_24500 === (5))){
var inst_24472 = (state_24499[(11)]);
var inst_24463 = (state_24499[(7)]);
var inst_24467 = (state_24499[(9)]);
var inst_24464 = (state_24499[(8)]);
var inst_24471 = (inst_24463[inst_24464] = inst_24467);
var inst_24472__$1 = (inst_24464 + (1));
var inst_24473 = (inst_24472__$1 < n);
var state_24499__$1 = (function (){var statearr_24513 = state_24499;
(statearr_24513[(11)] = inst_24472__$1);

(statearr_24513[(12)] = inst_24471);

return statearr_24513;
})();
if(cljs.core.truth_(inst_24473)){
var statearr_24514_24539 = state_24499__$1;
(statearr_24514_24539[(1)] = (8));

} else {
var statearr_24515_24540 = state_24499__$1;
(statearr_24515_24540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24500 === (14))){
var inst_24492 = (state_24499[(2)]);
var inst_24493 = cljs.core.async.close_BANG_.call(null,out);
var state_24499__$1 = (function (){var statearr_24517 = state_24499;
(statearr_24517[(13)] = inst_24492);

return statearr_24517;
})();
var statearr_24518_24541 = state_24499__$1;
(statearr_24518_24541[(2)] = inst_24493);

(statearr_24518_24541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24500 === (10))){
var inst_24483 = (state_24499[(2)]);
var state_24499__$1 = state_24499;
var statearr_24519_24542 = state_24499__$1;
(statearr_24519_24542[(2)] = inst_24483);

(statearr_24519_24542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24500 === (8))){
var inst_24472 = (state_24499[(11)]);
var inst_24463 = (state_24499[(7)]);
var tmp24516 = inst_24463;
var inst_24463__$1 = tmp24516;
var inst_24464 = inst_24472;
var state_24499__$1 = (function (){var statearr_24520 = state_24499;
(statearr_24520[(7)] = inst_24463__$1);

(statearr_24520[(8)] = inst_24464);

return statearr_24520;
})();
var statearr_24521_24543 = state_24499__$1;
(statearr_24521_24543[(2)] = null);

(statearr_24521_24543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16483__auto___24529,out))
;
return ((function (switch__16427__auto__,c__16483__auto___24529,out){
return (function() {
var state_machine__16428__auto__ = null;
var state_machine__16428__auto____0 = (function (){
var statearr_24525 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24525[(0)] = state_machine__16428__auto__);

(statearr_24525[(1)] = (1));

return statearr_24525;
});
var state_machine__16428__auto____1 = (function (state_24499){
while(true){
var ret_value__16429__auto__ = (function (){try{while(true){
var result__16430__auto__ = switch__16427__auto__.call(null,state_24499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16430__auto__;
}
break;
}
}catch (e24526){if((e24526 instanceof Object)){
var ex__16431__auto__ = e24526;
var statearr_24527_24544 = state_24499;
(statearr_24527_24544[(5)] = ex__16431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24545 = state_24499;
state_24499 = G__24545;
continue;
} else {
return ret_value__16429__auto__;
}
break;
}
});
state_machine__16428__auto__ = function(state_24499){
switch(arguments.length){
case 0:
return state_machine__16428__auto____0.call(this);
case 1:
return state_machine__16428__auto____1.call(this,state_24499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16428__auto____0;
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16428__auto____1;
return state_machine__16428__auto__;
})()
;})(switch__16427__auto__,c__16483__auto___24529,out))
})();
var state__16485__auto__ = (function (){var statearr_24528 = f__16484__auto__.call(null);
(statearr_24528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16483__auto___24529);

return statearr_24528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16485__auto__);
});})(c__16483__auto___24529,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16483__auto___24688 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16483__auto___24688,out){
return (function (){
var f__16484__auto__ = (function (){var switch__16427__auto__ = ((function (c__16483__auto___24688,out){
return (function (state_24658){
var state_val_24659 = (state_24658[(1)]);
if((state_val_24659 === (7))){
var inst_24654 = (state_24658[(2)]);
var state_24658__$1 = state_24658;
var statearr_24660_24689 = state_24658__$1;
(statearr_24660_24689[(2)] = inst_24654);

(statearr_24660_24689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24659 === (1))){
var inst_24617 = [];
var inst_24618 = inst_24617;
var inst_24619 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24658__$1 = (function (){var statearr_24661 = state_24658;
(statearr_24661[(7)] = inst_24619);

(statearr_24661[(8)] = inst_24618);

return statearr_24661;
})();
var statearr_24662_24690 = state_24658__$1;
(statearr_24662_24690[(2)] = null);

(statearr_24662_24690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24659 === (4))){
var inst_24622 = (state_24658[(9)]);
var inst_24622__$1 = (state_24658[(2)]);
var inst_24623 = (inst_24622__$1 == null);
var inst_24624 = cljs.core.not.call(null,inst_24623);
var state_24658__$1 = (function (){var statearr_24663 = state_24658;
(statearr_24663[(9)] = inst_24622__$1);

return statearr_24663;
})();
if(inst_24624){
var statearr_24664_24691 = state_24658__$1;
(statearr_24664_24691[(1)] = (5));

} else {
var statearr_24665_24692 = state_24658__$1;
(statearr_24665_24692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24659 === (15))){
var inst_24648 = (state_24658[(2)]);
var state_24658__$1 = state_24658;
var statearr_24666_24693 = state_24658__$1;
(statearr_24666_24693[(2)] = inst_24648);

(statearr_24666_24693[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24659 === (13))){
var state_24658__$1 = state_24658;
var statearr_24667_24694 = state_24658__$1;
(statearr_24667_24694[(2)] = null);

(statearr_24667_24694[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24659 === (6))){
var inst_24618 = (state_24658[(8)]);
var inst_24643 = inst_24618.length;
var inst_24644 = (inst_24643 > (0));
var state_24658__$1 = state_24658;
if(cljs.core.truth_(inst_24644)){
var statearr_24668_24695 = state_24658__$1;
(statearr_24668_24695[(1)] = (12));

} else {
var statearr_24669_24696 = state_24658__$1;
(statearr_24669_24696[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24659 === (3))){
var inst_24656 = (state_24658[(2)]);
var state_24658__$1 = state_24658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24658__$1,inst_24656);
} else {
if((state_val_24659 === (12))){
var inst_24618 = (state_24658[(8)]);
var inst_24646 = cljs.core.vec.call(null,inst_24618);
var state_24658__$1 = state_24658;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24658__$1,(15),out,inst_24646);
} else {
if((state_val_24659 === (2))){
var state_24658__$1 = state_24658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24658__$1,(4),ch);
} else {
if((state_val_24659 === (11))){
var inst_24626 = (state_24658[(10)]);
var inst_24622 = (state_24658[(9)]);
var inst_24636 = (state_24658[(2)]);
var inst_24637 = [];
var inst_24638 = inst_24637.push(inst_24622);
var inst_24618 = inst_24637;
var inst_24619 = inst_24626;
var state_24658__$1 = (function (){var statearr_24670 = state_24658;
(statearr_24670[(7)] = inst_24619);

(statearr_24670[(8)] = inst_24618);

(statearr_24670[(11)] = inst_24636);

(statearr_24670[(12)] = inst_24638);

return statearr_24670;
})();
var statearr_24671_24697 = state_24658__$1;
(statearr_24671_24697[(2)] = null);

(statearr_24671_24697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24659 === (9))){
var inst_24618 = (state_24658[(8)]);
var inst_24634 = cljs.core.vec.call(null,inst_24618);
var state_24658__$1 = state_24658;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24658__$1,(11),out,inst_24634);
} else {
if((state_val_24659 === (5))){
var inst_24619 = (state_24658[(7)]);
var inst_24626 = (state_24658[(10)]);
var inst_24622 = (state_24658[(9)]);
var inst_24626__$1 = f.call(null,inst_24622);
var inst_24627 = cljs.core._EQ_.call(null,inst_24626__$1,inst_24619);
var inst_24628 = cljs.core.keyword_identical_QMARK_.call(null,inst_24619,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24629 = (inst_24627) || (inst_24628);
var state_24658__$1 = (function (){var statearr_24672 = state_24658;
(statearr_24672[(10)] = inst_24626__$1);

return statearr_24672;
})();
if(cljs.core.truth_(inst_24629)){
var statearr_24673_24698 = state_24658__$1;
(statearr_24673_24698[(1)] = (8));

} else {
var statearr_24674_24699 = state_24658__$1;
(statearr_24674_24699[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24659 === (14))){
var inst_24651 = (state_24658[(2)]);
var inst_24652 = cljs.core.async.close_BANG_.call(null,out);
var state_24658__$1 = (function (){var statearr_24676 = state_24658;
(statearr_24676[(13)] = inst_24651);

return statearr_24676;
})();
var statearr_24677_24700 = state_24658__$1;
(statearr_24677_24700[(2)] = inst_24652);

(statearr_24677_24700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24659 === (10))){
var inst_24641 = (state_24658[(2)]);
var state_24658__$1 = state_24658;
var statearr_24678_24701 = state_24658__$1;
(statearr_24678_24701[(2)] = inst_24641);

(statearr_24678_24701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24659 === (8))){
var inst_24618 = (state_24658[(8)]);
var inst_24626 = (state_24658[(10)]);
var inst_24622 = (state_24658[(9)]);
var inst_24631 = inst_24618.push(inst_24622);
var tmp24675 = inst_24618;
var inst_24618__$1 = tmp24675;
var inst_24619 = inst_24626;
var state_24658__$1 = (function (){var statearr_24679 = state_24658;
(statearr_24679[(7)] = inst_24619);

(statearr_24679[(8)] = inst_24618__$1);

(statearr_24679[(14)] = inst_24631);

return statearr_24679;
})();
var statearr_24680_24702 = state_24658__$1;
(statearr_24680_24702[(2)] = null);

(statearr_24680_24702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16483__auto___24688,out))
;
return ((function (switch__16427__auto__,c__16483__auto___24688,out){
return (function() {
var state_machine__16428__auto__ = null;
var state_machine__16428__auto____0 = (function (){
var statearr_24684 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24684[(0)] = state_machine__16428__auto__);

(statearr_24684[(1)] = (1));

return statearr_24684;
});
var state_machine__16428__auto____1 = (function (state_24658){
while(true){
var ret_value__16429__auto__ = (function (){try{while(true){
var result__16430__auto__ = switch__16427__auto__.call(null,state_24658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16430__auto__;
}
break;
}
}catch (e24685){if((e24685 instanceof Object)){
var ex__16431__auto__ = e24685;
var statearr_24686_24703 = state_24658;
(statearr_24686_24703[(5)] = ex__16431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24704 = state_24658;
state_24658 = G__24704;
continue;
} else {
return ret_value__16429__auto__;
}
break;
}
});
state_machine__16428__auto__ = function(state_24658){
switch(arguments.length){
case 0:
return state_machine__16428__auto____0.call(this);
case 1:
return state_machine__16428__auto____1.call(this,state_24658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16428__auto____0;
state_machine__16428__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16428__auto____1;
return state_machine__16428__auto__;
})()
;})(switch__16427__auto__,c__16483__auto___24688,out))
})();
var state__16485__auto__ = (function (){var statearr_24687 = f__16484__auto__.call(null);
(statearr_24687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16483__auto___24688);

return statearr_24687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16485__auto__);
});})(c__16483__auto___24688,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
