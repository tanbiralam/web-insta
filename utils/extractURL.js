export function extractURL(inputText) {
    return inputText.match(/(https?|http):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|]/ig);
  }
  