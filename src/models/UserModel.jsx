
export class Student {
    constructor({ id, fname, lname, email, phone, age, currentClass, goal, schoolName, city, state }) {
        this.id = id
        this.fname = fname
        this.lname = lname
        this.email = email
        this.phone = phone
        this.age = age
        this.currentClass = currentClass
        this.goal = goal
        this.schoolName = schoolName
        this.city = city
        this.state = state
    }
    toString() {
        return this.id + ', ' + this.fname + ', ' + this.lname + ', ' + this.email + ', ' + this.phone + ', ' + this.age + ', ' + this.currentClass + ', ' + this.goal + ', ' + this.schoolName + ', ' + this.city + ', ' + this.state;
    }
}

// Firestore data converter
export const studentConverter = {
    toFirestore: (student) => {
        return {
            id: student.id ?? "NA",
            fname: student.fname ?? "NA",
            lname: student.lname ?? "NA",
            email: student.email ?? "NA",
            phone: student.phone ?? "NA",
            age: student.age ?? "NA",
            currentClass: student.currentClass ?? "NA",
            goal: student.goal ?? "NA",
            schoolName: student.schoolName ?? "NA",
            city: student.city ?? "NA",
            state: student.state ?? "NA"
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        const student = new Student({
            id: data.id,
            fname: data.fname, 
            lname: data.lname, 
            email: data.email, 
            phone: data.phone, 
            age: data.age, 
            currentClass: data.currentClass,
            goal: data.goal,
            schoolName: data.schoolName, 
            city: data.city, 
            state: data.state
        }
        );
        return student;
    }
};
