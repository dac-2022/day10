window.onload = () => {
  makeAjaxCall();

  /*setTimeout(() => {
    makeAjaxCall();
  }, 5000);*/
};

const makeAjaxCall = async () => {
  try {
    const url = `https://jsonplaceholder.typicode.com/postsasdfasfadsfdasfsa`;

    let res = await fetch(url);
    if (res.status !== 200) {
      throw new Error(`Error: ${res.status}`);
    }

    let list = await res.json();

    const parent = document.querySelector("#output");
    let newValueOuter = "";
    for (let item of list) {
      const newValue = `<div style="background: lightblue; padding: 8px; margin-bottom: 1px">
                            <h3>${item.userId}. ${item.title}.</h3>
                            <p>${item.body}</p>
                        </div>`;
      newValueOuter = newValue + newValueOuter;
    }

    // Performaance Improvement
    parent.innerHTML = newValueOuter + parent.innerHTML;
  } catch (e) {
    // alert("Exception Occurred");
    console.error(e.message);
    console.error(e);

    let parent = document.querySelector("#output");
    parent.innerHTML = `<h1 style="color:red">Exception Occurred!</h1>`;
  }
};
