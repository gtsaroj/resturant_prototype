import { makeRequest } from "../makeRequest";

export const getWebhook = async () => {
  try {
    const response = await makeRequest({
      method: "get",
      url :"/webhook"
    });

    return response.data
  } catch (error) {
    throw new Error("Error while fetching webhook " + error);
  }
};

export const verifyWebhook = async () => {
  try {
    const response = await makeRequest({
      method: "post",
    });

    return response;
  } catch (error) {
    throw new Error("Error while verify webhook " + error);
  }
};
