const translate = [
    "translate(-200px)",
    "translate(-100px)",
    "translate(0px)",
    "translate(100px)",
    "translate(200px)",
]

const item = () => {
    return Math.floor(Math.random() * 4);
}

const duplicate = (prev, next) => {
    console.log(prev == next);
    console.log(prev);
    console.log(next);
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

    // let position = item();

    // if (duplicate(translate[position], button_1.style.transform)) {
    //     position = item();
    //     console.log(position);
    // } else {
    //     button_1.style.transform = translate[position];
    //     // console.log(duplicate(translate[position], button_1.style.transform));
    // }
}

button_1.onmouseover = () => {
    button_1.classList.toggle("active");
}