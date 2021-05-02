const GenerateRequestOptions = async (
  requestType,
  requestPath,
  token,
  data
) => {
  let url = "http://localhost:5001/api/" + requestPath;

  const options = {
    method: requestType,
    url: url,
    headers: {
      Authorization: "Bearer " + token,
      "Content-type": "application/json",
    },
  };

  if (data != null) {
    options.data = data;
  }
  return options;
};

export default GenerateRequestOptions;
