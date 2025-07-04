const content = document.querySelector("#content");

export function renderFooter(){


    const div = document.createElement("div");
    div.classList.add("footer")

    const email = document.createElement("p");
    email.textContent = "restaurant@example.com";
    div.appendChild(email);

    const number = document.createElement("p");
    number.textContent = "+123 456 789"
    div.appendChild(number);

    content.appendChild(div);
}