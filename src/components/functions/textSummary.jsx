let textSummary = (text) => {
  let t = text.split(".");

  return t;
};

export default textSummary;

/* let textSummary = (text) => {
    let t = text.split(".");
    let newText = t.reduce((acc, cur) => {
      acc.push(`<p>${cur}</p>`);
      return acc;
    }, []);
  
    return newText.join(" ");
  };
 */
