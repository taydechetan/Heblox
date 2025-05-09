const APPConfig = { API_URL: "https://heblox.aercjbp.com:3003/api/" }

const ApiEndPoints = {
    CategoryList: `${APPConfig.API_URL}/get-categories`,
    ProductByCategory: `${APPConfig.API_URL}/products-by-category/`,
    ProductsByid: `${APPConfig.API_URL}/product-slug/`,
    SubscribeNow: `${APPConfig.API_URL}create-subscriber`,
    HomePageProducts: `${APPConfig.API_URL}/products-on-homepage`,
    CreateEnquiry: `${APPConfig.API_URL}/create-enquiry`,
}

export default ApiEndPoints;
