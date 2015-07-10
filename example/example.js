"use strict"

var baboon = require("luminance")(require("baboon-image"))
var savePixels = require("save-pixels")
var blur = require("../gauss")

savePixels(blur(baboon, 5), "png").pipe(process.stdout)