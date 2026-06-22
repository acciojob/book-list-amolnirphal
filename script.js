//your JS code here. If required.

// Create form container (since HTML is empty)
const container = document.createElement("div");
container.className = "form-group";
document.body.appendChild(container);

// Heading
const heading = document.createElement("h1");
heading.textContent = "MyBookList";
document.body.appendChild(heading);

// Create inputs
const title = document.createElement("input");
title.id = "title";
title.placeholder = "Title";

const author = document.createElement("input");
author.id = "author";
author.placeholder = "Author";

const isbn = document.createElement("input");
isbn.id = "isbn";
isbn.placeholder = "ISBN";

// Submit button
const submit = document.createElement("button");
submit.id = "submit";
submit.textContent = "Submit";

// Append form elements
container.append(title, author, isbn, submit);

// Table
const table = document.createElement("table");
table.className = "table table-striped";

table.innerHTML = `
  <thead>
    <tr>
      <th>Title</th>
      <th>Author</th>
      <th>ISBN#</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody id="book-list"></tbody>
`;

document.body.appendChild(table);

// Add book function
submit.addEventListener("click", function (e) {
    e.preventDefault();

    const t = title.value.trim();
    const a = author.value.trim();
    const i = isbn.value.trim();

    if (t === "" || a === "" || i === "") return;

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${t}</td>
        <td>${a}</td>
        <td>${i}</td>
        <td><button class="delete">Clear</button></td>
    `;

    document.getElementById("book-list").appendChild(row);

    // delete row
    row.querySelector(".delete").addEventListener("click", function () {
        row.remove();
    });

    // clear inputs
    title.value = "";
    author.value = "";
    isbn.value = "";
});