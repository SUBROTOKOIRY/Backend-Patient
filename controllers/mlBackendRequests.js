require('dotenv').config()
const BACKEND_ML_HOST = process.env.BACKEND_ML_HOST
const axios = require('axios')

exports.getDoctorIdsFromSymptoms = async (patient_info, text, constraints) => {
  try {
    const response = await axios.post(`${BACKEND_ML_HOST}/disease`, {
      patient_info,
      text,
      constraints,
    })

    if (response.status != 200) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const doctors_ids = response.data.doctors_ids

    return doctors_ids
  } catch (err) {
    throw new Error(err.message)
  }
}

exports.getDoctorIdsFromRecommenderSystem = async (patient_info) => {
  try {
    const response = await axios.post(`${BACKEND_ML_HOST}/bestdocs`, {
      patient_info,
    })

    if (response.status != 200) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const doctor_ids = response.data.doctors_ids

    return doctor_ids
  } catch (error) {
    throw new Error(error.message)
  }
}

exports.getHospitalIdsFromRecommenderSystem = async (patient_info) => {
  try{
    const response = await axios.post(`${BACKEND_ML_HOST}/besthos`, {
      patient_info,
    })

    if (response.status != 200) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const hospital_ids = response.data.doctors_ids

    return hospital_ids
  }
  catch(err){
    throw new Error(err.message)
  }
}