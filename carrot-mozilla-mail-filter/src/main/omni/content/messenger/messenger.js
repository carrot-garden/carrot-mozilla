Components.utils.reportError("messenger");

let modules = {};

Components.utils.import("resource://${thisPath}/modules/dependencies.js", modules);
Components.utils.import("resource://${thisPath}/modules/services.js", modules);

modules.dependencies.hello(this);
modules.services.hello(this);

