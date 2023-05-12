// Khai bao 
const URL_API = `https://demo-deploy-web31-api-beta.vercel.app/products`;
const URL_IMG = `https://demo-deploy-web31-api-beta.vercel.app`;

// Lay du lieu tu API

const getProduct = async (API) => {
    try {
        // goi du lieu
        const res = await axios.get(API);

        // luu du lieu vao bien data
        const data = await res.data

        // goi den function showProduct de hien thi du lieu
        showProduct(data);
    } catch (error) {
        console.log(error);
    }
}
getProduct(URL_API);

// hien thu du lieu ra frondend
const showProduct = (data) => {
    console.log(data);
    let htmlCode = ``;
    // lap qua mang
    data.map((value) => {
        htmlCode +=
        `
        <div class="col-12 col-sm-6 col-md-3">
                    <div class="item">
                        <div class="content-images">
                            <img src="${URL_IMG + value.image}" alt="anh 1">
                        </div>
                        <div class="content-text">
                            <h3>${value.name}</h3>
                            <p>Price: ${value.price} vnd</p>
                        </div>
                    </div>
                </div>
        `
        // truy cap phan tu
        const content = document.querySelector(".product-listing .row");
        content.innerHTML = htmlCode;
    })
}