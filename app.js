const board = document.querySelector('#board')
const colors = [
  '#ccdcec',
  '#d4daae',
  '#f7efdc',
  '#f0ead0',
  '#d9d8bc',
  '#f2e6cc',
  '#ecd8d7',
  '#dcdbbf',
  '#efdfd2',
  '#fdecb8',
  '#f2f3c9',
  '#f6f1dd',
  '#d5dbaf',
  '#e7c0b8',
  '#f3cccd',
]
const SQUARE_NUMBER = 500

for (let i = 0; i < SQUARE_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))

  square.addEventListener('mouseleave', () => removeColor(square))

  board.append(square)

  function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
  }

  function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
  }
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}
