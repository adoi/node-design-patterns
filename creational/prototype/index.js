const departmentPrototype = {
    init(section) {
        this.section = section;
    },
    getSection() {
        console.log(`The ${this.section} section`);
    }
};

const science = Object.create(departmentPrototype);

science.init('Computer Science');

console.log(science.section);
