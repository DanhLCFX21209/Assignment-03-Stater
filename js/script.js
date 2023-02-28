document.querySelector(".submit").addEventListener("click", function () {
  const email = document.querySelector(".email").value;
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const check = email.match(regex);
  console.log(check);
  if (!email || !check) {
    document.querySelector(".message").textContent = "không hợp lê!";
    document.querySelector(".message").style.color = "#ff0000";
  } else {
    console.log("co gia tri");
    document.querySelector(".check-info").classList.add("hidden");
    document.querySelector(".information").classList.remove("hidden");
  }
});

const contentList = document.querySelectorAll(".content");
const viewMore = document.querySelectorAll(".view-more");
const title = document.querySelectorAll(".row-title");
const item = document.querySelectorAll(".item");
// const overlay = document.querySelector(".overlay");

for (let i = 0; i < contentList.length; i++) {
  title[i].addEventListener("mouseover", function () {
    viewMore[i].style.display = "block";
  });
  item[i].addEventListener("mouseleave", function () {
    viewMore[i].style.display = "none";
  });
  viewMore[i].addEventListener("click", function () {
    if (viewMore[i].classList.contains("view-more")) {
      contentList[i].classList.remove("hidden");
      viewMore[i].textContent = "View Less";
      viewMore[i].classList.add("view-less");
      viewMore[i].classList.remove("view-more");
      console.log(viewMore[i]);
    } else {
      contentList[i].classList.add("hidden");
      viewMore[i].textContent = "View More";
      viewMore[i].classList.remove("view-less");
      viewMore[i].classList.add("view-more");
      console.log(viewMore[i]);
    }
  });
}
