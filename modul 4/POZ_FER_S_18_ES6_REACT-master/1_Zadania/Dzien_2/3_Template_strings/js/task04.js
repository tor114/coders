const button = {
  text: "Send message",
  id: "sendMsg",
  width: 100,
  padding: 20
};

function createElement({ type = "button", text, id, width, padding }) {
  const element = document.createElement(type);
  element.innerText = text;
  element.id = id;
  element.style.width = width;
  element.style.padding = padding;
  return element;
}

function renderElement({ type = "button", text, id, width, padding }) {
  return `<${type} id="${id}" style="width: ${width}px; padding: ${padding}px">${text}</${type}>`;
}

document.querySelector('#buttonContainer').innerHTML = renderElement(button);