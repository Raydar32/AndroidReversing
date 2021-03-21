Java.perform(function () {
  const sysexit = Java.use("java.lang.System");
  sysexit.exit.overload("int").implementation = function(a0) {
    console.log("Override dell'uscita");
  };
});


Interceptor.attach(Module.findExportByName("libc.so", "strncmp"), {
    onEnter: function (args) {
        var bt = backtrace(this);
        if (bt.includes("libfoo.so")) {
          console.log("----------------------------------");
          console.log("Estrazione degli argomenti")
          console.log(Memory.readUtf8String(args[0]));
          console.log(Memory.readUtf8String(args[1]));
          console.log(Memory.readUtf8String(args[2]));
          console.log("----------------------------------");
        }
    }
});


function backtrace(c) {
    return (Thread.backtrace(c.context, Backtracer.ACCURATE)
            .map(DebugSymbol.fromAddress).join("\n") + "\n");
}
