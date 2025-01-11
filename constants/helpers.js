//Function takes in the array of allHeaders and the specific desired header
//and returns that text
export default function grabText(key, headers){
    const textArr = headers[0][key]
    const desiredText = textArr ? textArr[0].children[0].text: ''
    return desiredText
  }