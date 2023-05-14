async function responseHandler(req, res, api, data, isOuterResponse) {
  try {
    // Call the api function with the provided data and get the result
    const result = await api(data);
  
    // If isOuterResponse is true, add some outer wrapper to the response
    if (isOuterResponse) {
      return res.json({
        status: "success",
        data: result
      });
    } else {
      return res.json(result);
    }
  } catch (error) {
    // Handle any errors that occurred while calling the api function
    console.error(error);
    return res.status(500).json({
      message: "An error occurred."
    });
  }
}

module.exports = {responseHandler};