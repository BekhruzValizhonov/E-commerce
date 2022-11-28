import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const homeShopApi = createApi({
  reducerPath: "homeShopApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://homeshop.uicgroup.tech/api/v1/",
  }),
  tagTypes: ["Post", "Menu", "Banner", "Single", "Search"],

  endpoints: (build) => ({
    fetchNavbarCategories: build.query({
      query: (language) => ({
        url: "menu/categories/",
        headers: {
          "Accept-Language": language,
        },
      }),
      providesTags: ["Menu"],
    }),

    fetchBannerSlider: build.query({
      query: (limit) => ({
        url: "information/slider/",
        params: {
          _limit: limit,
        },
      }),
      providesTags: ["Banner"],
    }),

    fetchService: build.query({
      query: (language, limit) => ({
        url: "information/service/",
        headers: {
          "Accept-Language": language,
        },
        params: {
          _limit: limit,
        },
      }),
      providesTags: ["Post"],
    }),

    fetchFeaturedProducts: build.query({
      query: (language, limit) => ({
        url: "product-app/all-products/?price__gte=&price__lte=&category__in=1",
        headers: {
          "Accept-Language": language,
        },
        params: {
          _limit: limit,
        },
      }),
      providesTags: ["Post"],
    }),

    fetchOffer: build.query({
      query: (limit) => ({
        url: "information/banner/",
        params: {
          _limit: limit,
        },
      }),
      providesTags: ["Banner"],
    }),

    fetchKitchenProducts: build.query({
      query: (language, limit) => ({
        url: "product-app/all-products/?ordering=-sold_amount",
        headers: {
          "Accept-Language": language,
        },
        params: {
          _limit: limit,
        },
      }),
      providesTags: ["Post"],
    }),

    fetchBathProducts: build.query({
      query: (language, limit) => ({
        url: "product-app/all-products/?price__gte=&price__lte=&category__in=3",
        headers: {
          "Accept-Language": language,
        },
        params: {
          _limit: limit,
        },
      }),
      providesTags: ["Post"],
    }),

    fetchPopularProducts: build.query({
      query: (language, limit) => ({
        url: "product-app/all-products/?price__gte=&price__lte=&category__in=4",
        headers: {
          "Accept-Language": language,
        },
        params: {
          _limit: limit,
        },
      }),
      providesTags: ["Post"],
    }),

    fetchSingleProducts: build.query({
      query: (id, language) => ({
        url: `product-app/single-product/${id}/detail`,
        headers: {
          "Accept-Language": language,
        },
      }),
      providesTags: ["Post"],
    }),

    searchProduct: build.query({
      query: (id) => ({
        url: `product-app/single-product/${id}/detail`,
      }),
      providesTags: ["Search"],
    }),

    fetchContact: build.query({
      query: (limit) => ({
        url: "information/contact/",
        params: {
          _limit: limit,
        },
      }),
      providesTags: ["Post"],
    }),

    fetchSocialMedia: build.query({
      query: (limit) => ({
        url: "information/social-media/",
        params: {
          _limit: limit,
        },
      }),
      providesTags: ["Post"],
    }),

    fetchBrands: build.query({
      query: (language, limit) => ({
        url: "product-app/brand/",
        headers: {
          "Accept-Language": language,
        },
        params: {
          _limit: limit,
        },
      }),
      providesTags: ["Post"],
    }),

    fetchFloors: build.query({
      query: (language, limit) => ({
        url: "product-app/floor/",
        headers: {
          "Accept-Language": language,
        },
        params: {
          _limit: limit,
        },
      }),
      providesTags: ["Post"],
    }),

    fetchSize: build.query({
      query: (language, limit) => ({
        url: "product-app/size/",
        headers: {
          "Accept-Language": language,
        },
        params: {
          _limit: limit,
        },
      }),
      providesTags: ["Post"],
    }),

    userInformation: build.mutation({
      query: (values) => ({
        url: "information/app-form/",
        method: "POST",
        body: values,
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export default homeShopApi;
