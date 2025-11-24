import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors()); // 모든 브라우저 요청 허용

// React에서 요청할 엔드포인트
app.get("/food-api", async (req, res) => {
  const { foodName } = req.query;
  const SERVICE_KEY = process.env.FOOD_API_KEY;

  const apiUrl = `https://api.data.go.kr/openapi/tn_pubr_public_nutri_info_api?serviceKey=${SERVICE_KEY}&_type=json&foodName=${encodeURIComponent(
    foodName
  )}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json(); // JSON 변환
    res.json(data); // React로 전달
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
