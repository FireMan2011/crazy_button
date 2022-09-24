const translateX = [
    "-400px",
    "-300px",
    "-200px",
    "-100px",
    "0px",
    "100px",
    "200px",
    "300px",
    "400px",
]

const translateY = [
    "-300px",
    "-200px",
    "-100px",
    "0px",
    "100px",
    "200px",
    "300px",
]

const itemNum = (positionArr) => {
    return Math.floor(Math.random() * (positionArr.length - 1));
}

const duplicate = (prev, next) => {
    return prev === next
}

const translateParams = (positionX, positionY) => {
    return `translate(${translateX[positionX]}, ${translateY[positionY]})`;
}

const changePosition = (itemNum, positionX, positionY) => {
    itemNum.style.transform = translateParams(positionX, positionY);
}

const crazyButton = () => {
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

    let positionX = itemNum(translateX);
    let positionY = itemNum(translateY);
    let dup = duplicate(translateParams(positionX, positionY), button_1.style.transform);

    while (dup) {
        positionX = itemNum(translateX);
        positionY = itemNum(translateY);
        dup = duplicate(translateParams(positionX, positionY), button_1.style.transform);
    }

    changePosition(button_1, positionX, positionY);
}

button_1.onmouseover = () => {
    crazyButton();
}

button_1.onmousedown = () => {
    console.log("тицьнули");
    crazyButton();
}

// button_1.onmouseover = () => {
//     button_1.classList.toggle("active");
// }