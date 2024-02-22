const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const getUsers = (request, response) => {
  pool.query("SELECT * FROM empolyee", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createUser = (request, response) => {
  const {
    employeeName,
    designation,
    department,
    gender,
    salary,
    employeeId,
    dob,
  } = request.body;
  console.log(request.body);
  pool.query(
    "INSERT INTO empolyee (First_name, Emp_id, Department, DOB, Gender, Designation, Salary) VALUES ($1, $2, $3, $4, $5, $6, $7) ",
    [employeeName, employeeId, department, dob, gender, designation, salary],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send("Added successfully...");
    }
  );
};

app.get("/api/getEmp", (req, res) => {
  getUsers(req, res);
});

app.post("/api/newEmp", (req, res) => {
  createUser(req, res);
});

app.listen(process.env.PORT, () => {
  console.log("listening on port 3000");
});
