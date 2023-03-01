let a = +prompt('Введите первое число: ')
let opr = prompt("Введите действие, которое хотите выполнить: '+' '-' '*' '/' '%' '^' или сгенерировать случайный пароль 'pass' ")
let b
let c
let d = Math.pow(10, a)
let e = Math.random()

if ( (opr == 'pass') && (e < 0.01) ) {
    // c = (d * e) * 100
    alert(Math.trunc((d * e) * 100)) 
} else if ( (opr == 'pass') && (e < 0.1) ) {
    // c = (d * e) * 10
    alert(Math.trunc((d * e) * 10)) 
} else if ( (opr == 'pass') ) {
    // c = d * e
    alert(Math.trunc(d * e))
} else if (opr != 'pass') {
    b = +prompt('Введите второе число: ')
    switch (opr) {
        case '+':
            c = a + b
            break;
        case '-':
            c = a - b
            break;
        case '*':
            c = a * b
            break;
        case '/':
            c = a / b
            break;
        case '%':
            c = (a / 100) * b
            break;
        case '^':
            c = Math.pow(a, b)
        default:
            c = 'Неправильное использование калькулятора, напрягите мозги и попробуйте еще раз ;)'
            break;
    }   
    alert(`${a} ${opr} ${b} = ${c}`)
}

let students = [ 
    ['Артём', 33], 
    ['Арслан', 21], 
    ['Максим', 35], 
    ['Жасур', 31], 
    ['Александр', 29]
]

let name = prompt('Введите имя')
let age = +prompt('Введите Ваш возраст')

students.push([name, age])
console.log(students)

alert(`${name} ${age}`)
