const fetchNotes = async () => {
  const response = await axios({
    url: "https://scaler-dec-bootcamp.herokuapp.com",
    method: "GET",
  });

  const notesList = response.data;

  const noteListTag = document.getElementById("view-note-list");
  console.log(noteListTag);

  for (let i = 0; i < notesList.length; i++) {
    // notesList[i] => {notes, author}
    const tag = `
      <li class="view-note-block">
        <div>${notesList[i].notes}</div>
        <div class="view-note-author">${notesList[i].author}</div>
      </li>
    `;

    noteListTag.innerHTML += tag;
  }
};

fetchNotes();
