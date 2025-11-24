const SERVICE_KEY = import.meta.env.VITE_FOOD_API_KEY;
const baseUrl = "http://api.data.go.kr/openapi/tn_pubr_public_nutri_info_api";

const params = new URLSearchParams({
  serviceKey: SERVICE_KEY,
  _type: "json",
  foodName: "당근",
});

fetch(`${baseUrl}?${params}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    return data;
  })
  .catch((err) => console.log(err));
