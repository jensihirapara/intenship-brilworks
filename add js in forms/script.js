const from = document.querySelector("from"),
  nextbtn = form.querySelector(".nextbtn"),
  backbtn = form.querySelector(".backbtn"),
  allinput = form.querySelector(".first input");

nextbtn.addEventListener("click", () => {
  allinput.forEach((input) => {
    if (input.value != "") {
      form.classlists.add("secActive");
    }else{
        form.classlists.remove("secActive");
        alert("input is empty")
    }
  });
});
