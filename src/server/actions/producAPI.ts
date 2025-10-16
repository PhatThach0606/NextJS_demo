export const fetchProduct = async () => {
  try {
    const response = await fetch(
      "https://apistore.cybersoft.edu.vn/api/Product"
    );
    const result = await response.json();
    return result.content;
  } catch (error) {
    console.log("Error data:", error);
  }
};

export const fetchProductById = async (id: number) => {
  try {
    const response = await fetch(
      `https://apistore.cybersoft.edu.vn/api/Product/getid?id=${id}`
    );
    const result = await response.json();
    return result.content;
  } catch (error) {
    console.log("Error data", error);
  }
};

export const fetchProductKeyword = async (keyword: string) => {
  try {
    const respose = await fetch(
      `https://apistore.cybersoft.edu.vn/api/Product?keyword=${keyword}`
    );
    const result = await respose.json();
    return result.content;
  } catch (error) {
    console.log("Error data", error);
  }
};
