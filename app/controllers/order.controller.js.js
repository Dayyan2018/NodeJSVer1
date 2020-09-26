const db = require("../models");
const ItemMaster = db.items;
const OrderInfo = db.orders;
const Op = db.Sequelize.Op;

// create and save a new tutorial

exports.create = (req,res) => {
//validate request
if(!req.body.custid) {
  res.status(400).send({
    message:"Customer can not be empty!"
  });
 return;
 } //if(!req.body.title)


const order = {
custid: req.body.custid ,
info: req.body.info
} ; 

// Save Tutorial in the database
OrderInfo.create(order)
	.then(data => {
		res.send(data);
	})
        .catch(err => {
 		res.status(500).send({
		message:
			err.message || "Some error occurred while creating the customer order."
		});
	});


}; // export.create end



// Retrieve all tutorials from the database.

exports.findAll = (req,res) => {
  const custid = req.query.custid;
  var condition = custid ? { custid: { [Op.iLike]: `%${custid}%` } } : null;

  OrderInfo.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });

};

// Find a single tutorial with an Id
exports.findOne = (req,res) => {
  const id = req.params.id;

  OrderInfo.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};

//Update a tutorial by the id in the request

exports.update = (req,res) => {
  const id = req.params.id;

  OrderInfo.update(req.body, {
    where: { id : id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Order was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Order with id=${id}. Maybe Order was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Order with id=" + id
      });
    });
};


// Delete a Tutorial with specified id in the request

exports.delete = (req,res) => {

  const id = req.params.id;

  Tutorial.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req,res) => {
  Tutorial.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Tutorials were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};


// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    Tutorial.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};






