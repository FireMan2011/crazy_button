const translate = [
    "translate(-200px)",
    "translate(-100px)",
    "translate(0px)",
    "translate(100px)",
    "translate(200px)",
]

const itemNum = () => {
    return Math.floor(Math.random() * 4);
}

const duplicate = (prev, next) => {
    return prev === next
}

const changePosition = (itemNum, position) => {
    itemNum.style.transform = translate[position];
}

button_1.onmouseover = () => {

    // 1) Перевіряємл чи є певний клас
    // 2) Якщо клас є то видаляємо його
    // 3)якщо класу немає то додаємо його

    // // Пепевіряємо наявність класу
    // if (button_1.classList.contains('active')) {
    //     // Якщо клас присутній то видаляємо його
    //     button_1.classList.remove("active")
    // } else {
    //     // Якщо клас відсутній то додаємо його
    //     button_1.classList.add("active")
    // }

    // button_1.classList.toggle("active");

    let position = itemNum();
    let dup = duplicate(translate[position], button_1.style.transform);

    while (dup) {
        position = itemNum();
        dup = duplicate(translate[position], button_1.style.transform);
    }

    changePosition(button_1, position);
}

// button_1.onmouseover = () => {
//     button_1.classList.toggle("active");
// }