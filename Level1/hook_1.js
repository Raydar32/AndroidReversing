setImmediate(function(){
    console.log("Avvio dell'hook");
    Java.perform(function(){
        var c_class = Java.use("sg.vantagepoint.a.c");
        c_class.a.overload().implementation=function(){
            console.log("Override del metodo a");
            return false;
        }
    });

    Java.perform(function(){
        var c_class = Java.use("sg.vantagepoint.a.c");
        c_class.b.overload().implementation=function(){
            console.log("Override del metodo b");
            return false;
        }
    });

    Java.perform(function(){
        var c_class = Java.use("sg.vantagepoint.a.c");
        c_class.c.overload().implementation=function(){
            console.log("Override del metodo c");
            return false;
        }
    });
});

