const makeAjaxCall = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const res = await axios.get(url);

  let parent = document.querySelector("#output");
  for (let item of res.data) {
    let newElement = `<div style="background: lightblue; padding: 8px; margin-bottom: 1px">
                        <h3>${item.title}</h3>
                        <p>
                        ${item.body}
                        </p>
                    </div>`;

    parent.innerHTML = newElement + parent.innerHTML;
  }
};
