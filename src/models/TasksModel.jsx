export class TaskData {
  constructor({ number, message, position, task , nDirect, time}) {
    this.number = number ?? 0;
    this.message = message ?? "NA";
    this.position = position ?? 0;
    this.task = task ?? "NA";
    this.nDirect = nDirect ?? 0;
    this.time = time ?? 0;
  }

  toString() {
    return `${this.number}, ${this.message}, ${this.position}, ${this.task}, ${this.nDirect}, ${this.time}`;
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
      nDirect: taskData.nDirect ?? 0,
      time: taskData.time ?? 0,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    const task = new TaskData({
      number: data.number ?? 0,
      message: data.message ?? "NA",
      position: data.position ?? 0,
      task: data.task ?? "NA",
      nDirect: data.nDirect ?? 0,
      time: data.time ?? 0,
    });
    return task;
  },
};
