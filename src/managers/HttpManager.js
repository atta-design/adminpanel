import Cookies from "js-cookie";
import axios from "axios";

const baseURL = "//api-portal.saeedsafaee.ir";

async function getRequestOptions() {
  const GetRequestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: await getCookie(),
    },
  };
  return GetRequestOptions;
}

async function postRequestOptions(contentType) {
  let ct = "application/json";

  if (contentType != null && contentType === "media") {
    ct = "multipart/form-data";
  }
  const PostRequestOptions = {
    method: "Post",
    headers: { "Content-Type": ct, Authorization: await getCookie() },
    body: {},
  };
  return PostRequestOptions;
}

async function getCookie() {
  let retVal = Cookies.get("authtoken");
  if (retVal === null || retVal === undefined) {
    retVal = "authtoken";
  }
  return retVal;
}

async function GetDataApi(url) {
  const retval = { status: 0, content: null, message: null };

  try {
    const response = await fetch(baseURL + url, await getRequestOptions());
    const data = await response.json();
    retval.status = data.status;
    if (data.status === 1) {
      retval.content = data.content;
      retval.message = data.message;
    } else {
      //handel error
    }
  } catch (e) {
    console.error(e);
  }

  return retval;
}

async function PostApi(url, postData, contenttype) {
  const retval = { status: 0, content: null };

  try {
    var obj = await postRequestOptions(contenttype);
    obj.body = JSON.stringify(postData);

    const response = await fetch(baseURL + url, obj);
    const data = await response.json();

    retval.status = data.status;
    if (data.status === 1) {
      retval.content = data.content;
    } else {
      //handel error
    }
  } catch (e) {
    console.error(e);
  }

  return retval;
}
async function axiosPut(url, postData,) {
  const retval = { status: 0, content: null };

  const { data } = await axios.patch(baseURL + url, postData).catch((error) => {
  });
  retval.status = data.status;
  if (data.status === 1) {
    retval.content = data.content;
  }

  return retval;
}
async function axiosPost(url, postData, contenttype) {
  const retval = { status: 0, content: null };

  const { data } = await axios.post(baseURL + url, postData).catch((error) => {
  });
  retval.status = data.status;
  if (data.status === 1) {
    retval.content = data.content;
  }

  return retval;
}

export { GetDataApi, getCookie, PostApi, baseURL, axiosPost,axiosPut };
