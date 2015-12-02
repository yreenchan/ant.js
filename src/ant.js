function log() {
    var args = ['%c[Log  @' + new Date().toTimeString().slice(0,8) + ']', 'color:#999;'];
    var temp = Array.prototype.slice.call(arguments);
    for (var i = 0; i < temp.length; i++) {
        args.push(temp[i]);
    };
    console.log.apply(console, args);
}
log.warn = function() {
    var args = ['%c[Warn @' + new Date().toTimeString().slice(0,8) + ']', 'color:#FF9800;'];
    var temp = Array.prototype.slice.call(arguments);
    for (var i = 0; i < temp.length; i++) {
        args.push(temp[i]);
    };
    console.warn.apply(console, args);
};


var Ant = function(options) {
    this._init(options);
};

Ant.prototype._init = function(options) {
    log('_init', options);
    options = options || {};

    this.$el = document.getElementById(options.el);

    this._data = {};

    this._initScope();

};


Ant.prototype._initScope = function() {
    log('_initScope');
    this._initProps();
};

Ant.prototype._initProps = function() {

};