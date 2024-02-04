import $ from "cash-dom";
import "normalize.css";

$("#input").on("input", update);
$("#use-slash-x").on("change", update);

function update() {
  const inputValue = $("#input").val();
  const useSlashX = $("#use-slash-x").is(":checked");
  const hexString = toHex(inputValue, useSlashX);
  $("#output").val(hexString);
}

/**
 * Convert a string to a hexadecimal string
 * @param {string} str The string to convert
 * @param {number} useSlashX Whether to use `\x` over `0x`
 * @returns {string} The hexadecimal string
 */
function toHex(str, useSlashX) {
  return Array.from(str)
    .map((char) => {
      const hex = char.charCodeAt(0).toString(16);
      return useSlashX ? `\\x${hex}` : `0x${hex} `;
    })
    .join("");
}
