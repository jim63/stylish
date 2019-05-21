var campaign__Container__SlidingBanner = document.querySelector(
  ".campaign__Container__SlidingBanner"
);
var timeOutId;
var preload = document.querySelector(".preload");

document.addEventListener("DOMContentLoaded", () => {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let responseText__JSON = JSON.parse(xhr.responseText)["data"];
      creatElement__campaign__Container__SlidingBanner__Dot(responseText__JSON);
    }
  };
  xhr.open("GET", `https://api.appworks-school.tw/api/1.0/marketing/campaigns`);
  xhr.send();
});

const creatElement__campaign__Container__SlidingBanner__Dot = productObj => {
  var campaign__Container__SlidingBanner__container = document.createElement(
    "div"
  );
  campaign__Container__SlidingBanner__container.className +=
    "campaign__Container__SlidingBanner__container";

  var img__Preload = [];

  for (
    let numOfCampaign = 0;
    numOfCampaign < productObj.length;
    numOfCampaign++
  ) {
    img__Preload[numOfCampaign] = `https://api.appworks-school.tw${
      productObj[numOfCampaign]["picture"]
    }`;
    var campaign__Container__SlidingBanner__Dot__A = document.createElement(
      "a"
    );
    var campaign__Container__SlidingBanner__Dot = document.createElement("div");
    campaign__Container__SlidingBanner__Dot.className +=
      "campaign__Container__SlidingBanner__Dot";
    campaign__Container__SlidingBanner__Dot.className += ` image__${numOfCampaign}`;
    campaign__Container__SlidingBanner__Dot__A.appendChild(
      campaign__Container__SlidingBanner__Dot
    );
    campaign__Container__SlidingBanner__container.appendChild(
      campaign__Container__SlidingBanner__Dot__A
    );

    var preload__Img__Div = document.createElement("div");
    preload__Img__Div.style.backgroundImage = `url('${
      img__Preload[numOfCampaign]
    }')`;
    preload.appendChild(preload__Img__Div);
  }

  showDivs(0, productObj);

  campaign__Container__SlidingBanner.appendChild(
    campaign__Container__SlidingBanner__container
  );
  const campaign__Container__SlidingBanner__Dot__All = document.querySelectorAll(
    ".campaign__Container__SlidingBanner__Dot"
  );
  campaign__Container__SlidingBanner__Dot__All.forEach(item => {
    let classNames = item.className;
    var numOfImg = Number(classNames.substr(classNames.length - 1));
    item.addEventListener("click", () => {
      showDivs(numOfImg, productObj);
    });
  });
};

const showDivs = function(targetImage, productObj) {
  clearTimeout(timeOutId);
  const campaign__Container = document.querySelector(".campaign__Container");
  campaign__Container.style.backgroundImage = `url('https://api.appworks-school.tw${
    productObj[targetImage % productObj.length]["picture"]
  }')`;

  changeSlogon(targetImage, productObj);
  timeOutId = setTimeout(() => {
    showDivs(targetImage + 1, productObj);
  }, 11000);
};

const changeSlogon = function(targetImage, productObj) {
  var target = targetImage % productObj.length;
  var slogon = productObj[target]["story"];

  var campaign__Container__Slogon = document.querySelector(
    ".campaign__Container__Slogon"
  );

  var campaign__Container__Slogon__Text__1 = document.createElement("p");
  campaign__Container__Slogon__Text__1.className =
    "campaign__Container__Slogon__Text";
  var campaign__Container__Slogon__Text__1__TextNode = document.createTextNode(
    slogon.split(`\r\n`)[0]
  );
  campaign__Container__Slogon__Text__1.appendChild(
    campaign__Container__Slogon__Text__1__TextNode
  );

  var campaign__Container__Slogon__Text__2 = document.createElement("p");
  campaign__Container__Slogon__Text__2.className =
    "campaign__Container__Slogon__Text";
  var campaign__Container__Slogon__Text__2__TextNode = document.createTextNode(
    slogon.split(`\r\n`)[1]
  );
  campaign__Container__Slogon__Text__2.appendChild(
    campaign__Container__Slogon__Text__2__TextNode
  );

  var campaign__Container__Slogon__Text__3 = document.createElement("p");
  campaign__Container__Slogon__Text__3.className =
    "campaign__Container__Slogon__Text";
  var campaign__Container__Slogon__Text__3__TextNode = document.createTextNode(
    slogon.split(`\r\n`)[2]
  );
  campaign__Container__Slogon__Text__3.appendChild(
    campaign__Container__Slogon__Text__3__TextNode
  );

  var campaign__Container__Slogon__Source = document.createElement("p");
  campaign__Container__Slogon__Source.className =
    "campaign__Container__Slogon__Source";
  var campaign__Container__Slogon__Source__TextNode = document.createTextNode(
    slogon.split(`\r\n`)[3]
  );
  campaign__Container__Slogon__Source.appendChild(
    campaign__Container__Slogon__Source__TextNode
  );
  campaign__Container__Slogon.innerHTML = "";
  campaign__Container__Slogon
    .appendChild(campaign__Container__Slogon__Text__1)
    .appendChild(campaign__Container__Slogon__Text__2)
    .appendChild(campaign__Container__Slogon__Text__3)
    .appendChild(campaign__Container__Slogon__Source);
};
