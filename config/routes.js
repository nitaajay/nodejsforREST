var express = require("express");
var dashboardcontroller = require("../controllers/dashboardcontrollers");

var router = express.Router();

router.route("/api/user").get(dashboardcontroller.getuser);
router.route("/api/user/:id").get(dashboardcontroller.getuserusingid);
router.route("/api/userLogin").post(dashboardcontroller.getuserLogin);
router.route("/api/TotalACAEmployees").get(dashboardcontroller.getTotalACAEmployees);
router.route("/api/TotalACAHealthRecords").get(dashboardcontroller.getTotalACAHealthRecords);
router.route("/api/TotalACAPaymentRecords").get(dashboardcontroller.getTotalACAPaymentRecords);
router.route("/api/TotalACATransRecords").get(dashboardcontroller.getTotalACATransRecords);
router.route("/api/DataRefreshLog").get(dashboardcontroller.getDataRefreshLog);
router.route("/api/TotalEmployeeWithoutStreet").get(dashboardcontroller.getTotalEmployeeWithoutStreet);
router.route("/api/TotalEmployeeWithoutCity").get(dashboardcontroller.getTotalEmployeeWithoutCity);
router.route("/api/TotalEmployeeWithoutState").get(dashboardcontroller.getTotalEmployeeWithoutState);
router.route("/api/TotalEmployeeWithoutZip").get(dashboardcontroller.getTotalEmployeeWithoutZip);


module.exports = router;