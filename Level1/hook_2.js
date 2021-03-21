
setImmediate(function(){
    Java.perform(function(){
        var system = Java.use("java.lang.System");
        system.exit.overload("int").implementation = function(var0){
            console.log("Override uscita");
        }

        var algorithm = Java.use("sg.vantagepoint.a.a"); //Hook della funzione
        algorithm.a.overload("[B","[B").implementation = function(var0,var1){
            var ret = this.a.overload("[B","[B").call(this,var0,var1);         
            for(var i = 0;i<ret.length;i++){
                console.log(ret[i])
            }
            return ret;
        }


    });
});