export function renderFooter(){

    //create div
    const div = document.createElement("div");
    div.classList.add("footer")

    //create email text
    const email = document.createElement("p");
    email.textContent = "restaurant@example.com";
    div.appendChild(email);

    //create number text
    const number = document.createElement("p");
    number.textContent = "+123 456 789"
    div.appendChild(number);

    document.body.appendChild(div);
}