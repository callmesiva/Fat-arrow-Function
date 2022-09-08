class Student {

    static count = 0;

    constructor(name, age, phone, number, mark) {
        this.Name = name,
            this.Age = age,
            this.Phone = phone,
            this.Number = number,
            this.Mark = mark
        Student.countStudent();

    }
    printDetails() {
        console.log(this.Name, this.Age, this.Phone, this.Number, this.Mark);
    }

    eligibility() {
        if (this.Mark >= 40) {
            console.log(`${this.Name} Is Eligible for College`)
        }
        else {
            console.log(`${this.Name} Is Not Eligible for College`)

        }
    }

    static countStudent() {
        return (Student.count++);
    }

    EligibleForPlacement(MinMark) {

        return (MinAge) => {
            if (this.Mark > MinMark && this.Age > MinAge) {
                console.log(`${this.Name} is Eligible for Placement`)
            }
            else {
                console.log(`${this.Name} is Not Eligible for Placement`)
            }
        }

    }

}

let ramya = new Student("Ramya", 22, 893656237, 1, 64);
let priya = new Student("Priya", 21, 972460237, 2, 98);
let Avesh = new Student("Avesh", 22, 698356237, 3, 42);
let Saini = new Student("Saini", 22, 893945237, 4, 24);
let kumar = new Student("Kumar", 21, 798487644, 5, 37);

ramya.EligibleForPlacement(40)(21)
priya.EligibleForPlacement(40)(21)
Avesh.EligibleForPlacement(40)(21)
Saini.EligibleForPlacement(40)(21)
kumar.EligibleForPlacement(40)(21)
