const val11 = 465;
const val12 = 342;

const val21 = 38;
const val22 = 291;
// I've got to admit i don't belive myself to be very good at handling linked lists

function sumLinkedList(l1, l2) {
  return linkedListToInt(l1) + linkedListToInt(l2);
}

function linkedListToInt(node) {
  let acc = node.value;

  function innerFunc(node) {
    if (node.next) {
      acc += node.next.value;
      innerFunc(node.next);
    }
  }

  innerFunc(node);

  return Number(
    acc
      .split("")
      .reverse()
      .join("")
  );
}

function buildALinkedList(int) {
  const digits = String(int).split("");
  return digits.reduce((prev, cur) => ({ value: cur, next: prev }), null);
}

console.log(sumLinkedList(buildALinkedList(val11), buildALinkedList(val12)));
console.log(sumLinkedList(buildALinkedList(val21), buildALinkedList(val22)));
