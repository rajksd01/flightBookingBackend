const { AeroplaneRepository } = require("../repository");
const aeroplaneRepository = new AeroplaneRepository();

function createAeroplane(data) {
  try {
    const aeroplane = aeroplaneRepository.create(data);
    return aeroplane;
  } catch (error) {
    throw error;
  }
}

function deleteAeroplane(data) {
  try {
    const aeroplane = aeroplaneRepository.destroy(data);
    return aeroplane;
  } catch (error) {
    throw error;
  }
}

function getAeroplane(data) {
  try {
    const aeroplane = aeroplaneRepository.findByPk(data);
    return aeroplane;
  } catch (error) {
    throw error;
  }
}
function getAllAeroplane() {
  try {
    const aeroplane = aeroplaneRepository.findAll();
    return aeroplane;
  } catch (error) {
    throw error;
  }
}
function updateAeroplane(id, data) {
  try {
    const aeroplane = aeroplaneRepository.update(id, data);
    return aeroplane;
  } catch (error) {
    throw error;
  }
}
module.exports = {
  createAeroplane,
  deleteAeroplane,
  getAeroplane,
  getAllAeroplane,
  updateAeroplane,
};
