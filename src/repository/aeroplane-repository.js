const CrudRepository = require("./crud-repository");
const { aeroplane } = require("../models");

class AeroplaneRepository extends CrudRepository {
  constructor() {
    super(aeroplane);
  }
}

module.exports = AeroplaneRepository;
