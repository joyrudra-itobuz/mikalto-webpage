console.log("Starts, getting Card Data");

//Getting Experience Matter Card Data from Backend

const experienceMatterCards = document.querySelectorAll(
  ".experience-matters-card"
);
const experienceCardImg = document.querySelectorAll(
  ".experience-matters-card img"
);
const experienceCardHeaders = document.querySelectorAll(
  ".experience-matters-card h2"
);
const experienceCardContents = document.querySelectorAll(
  ".experience-matters-card .content"
);
const experienceMatterCategory = document.querySelectorAll(
  ".experience-matters-card .category-type"
);

const fetchCardData = () => {
  const apiUrl = "http://127.0.0.1:5050/get_experience-card_data";

  const response = fetch(apiUrl)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
  return response;
};

const getCardData = () => {
  fetchCardData()
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      for (let i = 0; i < experienceMatterCards.length; i++) {
        experienceMatterCategory[i].textContent = res[i].type;
        experienceCardImg[i].src = `${res[i].imgSrc}`;
        experienceCardContents[i].textContent = res[i].content;
        experienceCardHeaders[i].textContent = res[i].header;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

(async () => {
  getCardData();
})();
