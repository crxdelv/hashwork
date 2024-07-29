/**
 * Hashwork v1.0.4
 * https://github.com/creuserr/hashwork
 *
 * Released under the MIT license
 * https://github.com/creuserr/hashwork#license
 *
 * Date: 2024-07-29
 */

(function (global, factory) {
  if(typeof module === "object" && typeof module.exports === "object") {
    // For Node.js or CommonJS
    module.exports = factory();
  } else if(typeof define === "function" && define.amd) {
    // For AMD (Asynchronous Module Definition) like RequireJS
    define(factory);
  } else {
    // For browser global environment
    global.Hashwork = factory();
  }
}(typeof window !== "undefined" ? window : this, function() {

async function hashwork(text="", config={}) {
  const charset = config.charset || hashwork.CHARSET_DEFAULT;
  let buffer;
  if("require" in globalThis) {
    const crypto = require("crypto");
    buffer = Array.from(crypto.createHash(config.algorithm || "SHA-1").update(text.toString()).digest());
  } else {
    const uint = new TextEncoder().encode(text.toString());
    buffer = Array.from(new Uint8Array(await crypto.subtle.digest(config.algorithm || "SHA-1", uint)));
  }
  const array = buffer.slice(0, config.height || 5).map(i => Math.sin(i).toString().split(".")[1].slice(0, config.width || 10));
  const seed = array.map(i => i.split("").map(x => charset[x % charset.length]).join(""));
  if(!config.wrap) return seed;
  const stroke = `+${"-".repeat(10)}+`;
  const art = seed.map(i => `|${i}|`).join("\n");
  return `${stroke}\n${art}\n${stroke}`;
}

hashwork.CHARSET_RAIN = [" ", " ", " ", " ", ","];
hashwork.CHARSET_ROAD = ["=", "=", "=", "=", "≤"];
hashwork.CHARSET_EGGS = ["_", "_", "_", "_", "0"];
hashwork.CHARSET_PIN = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
hashwork.CHARSET_SEA = ["~", "~", "~", "≥", "~", "~", "~"];
hashwork.CHARSET_HUH = [" ", " ", " ", " ", "?"];
hashwork.CHARSET_WTF = [" ", " ", " ", "!", "?"];
hashwork.CHARSET_EMOTE = [" ", " ", " ", ":", "(", ")"];
hashwork.CHARSET_GLITTER = [":", ":", ":", ":", "."];
hashwork.CHARSET_MORSE = [".", "-", "/"];
hashwork.CHARSET_MONEY = ["$", " ", " ", " ", " "];
hashwork.CHARSET_NOTE = ["_", "_", "_", "_", "_", "a", "b", "c"];
hashwork.CHARSET_MATH = ["+", "-", "*", "/", "="];;
hashwork.CHARSET_HAIR = ["|", "|", "|", "!"];
hashwork.CHARSET_DEFAULT = [" ", " ", " ", ".", "x", "+"];

hashwork.VERSION = "1.0.4";

return hashwork;

}));