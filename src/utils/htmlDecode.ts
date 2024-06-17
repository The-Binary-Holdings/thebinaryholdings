const htmlDecode = (content: string) => {
  let e = document.createElement("div");
  e.innerHTML = content;
  if (e.childNodes.length === 0 || e.childNodes[0].nodeValue == null) return "";
  return e.childNodes[0].nodeValue;
};

export default htmlDecode;
