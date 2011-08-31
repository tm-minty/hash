function HashListener(){

    var hash = '';

    this.addMethod = function(name, func){
        this[name] = func;
    }

    /* Функция выполнения методов HashListener, соответствующих window.location.hash */
    this.hashListener = function(){
        if ( window.location.hash != hash ){
            hash = window.location.hash;

            var request = hash.replace('#!', '').split('/');
            var method = request[0];
            var args = new Array();

            if ( request.length > 1 )
                for ( i = 1; i < request.length; i++)
                    args.push(request[i]);

            if ( typeof(this[method]) == 'function' )
                this[method].call(this, args);
        }
    }

    this.hashListener();
}
