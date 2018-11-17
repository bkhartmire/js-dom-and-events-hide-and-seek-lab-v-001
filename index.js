function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nodeChild = node.children[0]
  while (nodeChild) {
    node = nodeChild
    nodeChild = node.children[0]
  }
  return node
}

function increaseRankBy(n) {
  const list = document.querySelectorAll('.ranked-list')
  for (let i=0; i < list.length; i++) {
    list[i].innerHTML = (parseInt(list[i].innerHTML) + n).toString()
  }
}
