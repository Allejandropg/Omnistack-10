const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async index(req, res){
    const { latitude, longitude, techs } = req.query;
    
    const techsArray = parseStringAsArray(techs);
    console.log('techsArray',techsArray)
    // TODO validation if has return or not
    const devs = await Dev.find({
      techs: {
        $in: techsArray,
      },
      location: {
        $near: {
          $geometry:{
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        },
      },
    });
    // console.log('AFTER',devs);
    return res.json({ devs });
  }
}