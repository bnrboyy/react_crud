import axios from "axios";

export const getBookApi = async () => {
  return await axios
    .get("http://192.168.1.54:5234/api/Books")
    .then((res) => {
     return res
    })
    .catch((err) => {
      console.log(err);
      return err
    });
};


export const createBook = async (data) => {
    return await axios({
        url: "http://192.168.1.54:5234/api/Books",
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json", //type jsan
        // },
        data: data,
      })
        .then((res) => {
          console.log(res);
          return res
        })
        .catch((err) => {
          console.log(err);
        });
}


export const edit = async (id) => {
    await axios({
        url: `http://192.168.1.54:5234/api/Books/${id}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json", //type jsan
        },
      }).then(res => {
        return res
      })
}