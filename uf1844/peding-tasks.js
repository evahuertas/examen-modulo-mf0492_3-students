
// NOTA: para comprobar el código deberá escribirse en terminal el comando 'node peding-tasks.js' en lugar de 'node pending-tasks.js', porque hay un typo en el nombre del archivo

function filterPendingTaks(tasks) {
  return tasks.filter(task => !task.completed);
}

const tasks = [
  { task: "Wash the dishes", completed: true },
  { task: "Exercise", completed: false },
  { task: "Study programming", completed: false },
  { task: "Clean the house", completed: true },
];

const result = filterPendingTaks(tasks);
console.log(result);
/**
 * // Pending tasks
  { task: "Exercise", completed: false },
  { task: "Study programming", completed: false }
 */


