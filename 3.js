const makeAjaxCall = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  jQuery.get(url).done((data) => {
    let newValue = "";
    for (let item of data) {
      newValue += `<div style="background: lightblue; padding: 8px; margin-bottom: 1px">
                    <h3>${item.title}</h3>
                    <p>
                      ${item.body}
                    </p>
                  </div>`;
    }

    //$("#output").html(newValue);
    document.querySelector("#output").innerHTML = newValue;
  });
};
