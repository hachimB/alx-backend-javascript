export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;
  if (trueOrFalse) {
    const task = true;
    const task2 = false;
    console.log(`${task} and ${task2}`);
  }

  return [task, task2];
}
