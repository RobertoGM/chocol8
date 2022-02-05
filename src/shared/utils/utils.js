// Params:
//  @val: string of the textarea
//  @prevVal: string of the previous value of the textarea
//  @maxLength: number of the maximum characters per line
//  @maxLines: number of the maximum amount of line
// Given a value of a textarea, set a maximum characters per
// line and allow to set a new line once reached the limit and a maximum amount of lines.
export function splitLines(val, prevVal, maxLength, maxLines) {
  let lines = val.split('\n');

  // Prevent line checking on backspacing
  if (val.length > prevVal.length) {
    //Main loop over the lines
    for (var i = 0; i < lines.length; i++) {
      //Check for limit of characters
      if (lines[i].length >= maxLength) {
        let lineVal = lines[i].substring(0, maxLength);

        //Create a new line with any extra character on the line
        if (lines[i + 1]) {
          lines[i + 1].insertString(0, lines[i].substring(maxLength));
        } else {
          lines[i + 1] = lines[i].substring(maxLength);
        }

        //Set the value of the line
        lines[i] = lineVal;
      }
    }

    // Remove any extra line above the limit
    while (lines.length > maxLines) {
      lines.pop();
    }
  }

  // join the array as a string with a new line between each line.
  return lines.join('\n');
}
