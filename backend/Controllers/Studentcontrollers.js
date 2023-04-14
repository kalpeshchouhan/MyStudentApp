const studentschema = require("../Models/studentdata");

exports.Addstudents = async (req, res) => {
  const filter = {};
  const filtertwo = {};
  if (req.body.class && req.body.rollno) {
    filter.classes = req.body.class;
    filter.rollno = req.body.rollno;
  }

  if (req.body.ragistrationno) {
    filtertwo.ragistrationno = req.body.ragistrationno;
  }

  await studentschema.findOne(
    { $or: [filter, filtertwo] },
    async (err, result) => {
      if (err) {
        console.log(err);
      }
      if (!result) {
        const stdata = new studentschema({
          name: req.body.name,
          rollno: req.body.rollno,
          classes: req.body.class,
          ragistrationno: req.body.ragistrationno,
          fathername: req.body.fathername,
          mothername: req.body.mothername,
          fatherphoneno: req.body.fathermobileno,
          motherphoneno: req.body.mothermobileno,
          address: [
            {
              street: req.body.street,
              city: req.body.city,
              state: req.body.state,
              zip: req.body.zip,
            },
          ],
        });
        await stdata
          .save()
          .then(() =>
            res.status(200).json({
              message: "succesfull inserted",
            })
          )
          .catch((error) =>
            res.status(500).json({
              message: error,
            })
          );
      } else {
        if (result.rollno == req.body.rollno) {
          res.status(401).json({
            message: "rollno present",
          });
        }
        if (result.ragistrationno == req.body.ragistrationno) {
          res.status(401).json({
            message: "Ragistarno already present",
          });
        }
        console.log("rollno present");
      }
    }
  );
};

exports.fetchstudentdata = async (req, res) => {
  await studentschema
    .find()
    .then(async (result) => {
      await res.status(200).json({
        message: "fetch succes",
        data: result,
      });
    })
    .catch((error) => console.log(error));
};
exports.fetchstudentdatabyreg = async (req, res) => {
  let regno = req.params.regno;

  await studentschema
    .find({ ragistrationno: regno })
    .then(async (result) => {
      await res.status(200).json({
        message: "fetch succes",
        data: result,
      });
      // console.log(...result);
    })
    .catch((error) => console.log(error));
};

exports.deletestudentdata = async (req, res) => {
  let regno = req.params.regno;
  await studentschema
    .deleteOne({ ragistrationno: regno })
    .then(async (result) => {
      await res.status(200).json({
        message: "delect success",
        data: result,
      });
    })
    .catch((error) => console.log(error));
};

exports.searchbynameandclass = async (req, res) => {
  let filter = {};
  if (req.body.name && req.body.class) {
    filter.name = { $regex: req.body.name, $options: "i" };
    filter.classes = req.body.class;
  }
  if (req.body.name) {
    filter.name = { $regex: req.body.name, $options: "i" };
  }
  if (req.body.class) {
    filter.classes = req.body.class;
  }

  await studentschema
    .find(filter)
    .then(async (result) => {
      await res.status(200).json({
        message: "fetch success",
        data: result,
      });
    })
    .catch((error) => console.log(error));
};

exports.fetchtoupdate = async (req, res) => {
  let reg = req.params.byregno;
  await studentschema
    .findOne({ ragistrationno: reg })
    .then(async (result) => {
      await res.status(200).json({
        message: "successfully fetched",
        data: result,
      });
    })
    .catch((error) => console.log(error));
};

exports.updatestudentdata = async (req, res) => {
  let query = { ragistrationno: req.params.rgno };
  const updateDoc = {
    $set: {
      name: req.body.name,
      rollno: req.body.rollno,
      classes: req.body.class,
      ragistrationno: req.body.ragistrationno,
      fathername: req.body.fathername,
      mothername: req.body.mothername,
      fatherphoneno: req.body.fathermobileno,
      motherphoneno: req.body.mothermobileno,
      address: [
        {
          street: req.body.street,
          city: req.body.city,
          state: req.body.state,
          zip: req.body.zip,
        },
      ],
    },
  };
  await studentschema
    .updateOne(query, updateDoc)
    .then(async () => {
      await res.status(200).json({
        message: "update succesfully",
      });
    })
    .catch((error) => console.log(error));
};
