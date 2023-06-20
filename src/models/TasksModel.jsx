export class TaskData {
  constructor({ number, message, position, task }) {
    this.number = number ?? 0;
    this.message = message ?? "NA";
    this.position = position ?? 0;
    this.task = task ?? "NA";
  }

  toString() {
    return `${this.number}, ${this.message}, ${this.position}, ${this.task}`;
  }
}

// Firestore data converter
export const taskDataConverter = {
  toFirestore: (taskData) => {
    return {
      number: taskData.number ?? 0,
      message: taskData.message ?? "NA",
      position: taskData.position ?? 0,
      task: taskData.task ?? "NA",
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    const task = new TaskData({
      number: data.number ?? 0,
      message: data.message ?? "NA",
      position: data.position ?? 0,
      task: data.task ?? "NA",
    });
    return task;
  },
};
