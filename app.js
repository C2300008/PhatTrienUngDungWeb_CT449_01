const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// app.get("/", (req, res) => {
//   res.json({ message: "welcome to contact book application." });
// });
const contactRoutes = require("./app/routes/contact.route");
app.use("/api/contacts", contactRoutes);

const ApiError = require("./app/api-error");

// handle 404 response
app.use((req, res, next) => {
  //code ở đây sẽ chạy khi không tìm thấy route
  // khớp với yêu cầu. Gọi next() để chuyển sang middleware xử lý lỗi
  return next(new ApiError(404, "Resource not found"));
});

// define error-handling middleware last, after other app.use() and routes calls
app.use((err, req, res, next) => {
  //middleware xử lý lỗi tập trung
  // Trong các đoạn code xử ở các route nếu gọi next(err) thì sẽ chuyển về middleware xử lý lỗi này
  res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
  });
});

module.exports = app;
