import $ from "cash-dom";
import "normalize.css";

$("#input").on("input", () => {
  const input = $("#input").val();
  const hex = toHex(input, true);
  $("#output").val(hex);
});

/**
 * Convert a string to a hexadecimal string
 * @param {string} str The string to convert
 * @param {number} withX Whether to include `\x`
 * @returns {string} The hexadecimal string
 */
function toHex(str, withX) {
  return Array.from(str)
    .map((c) => (withX ? "\\x" : "") + c.charCodeAt(0).toString(16))
    .join("");
}
