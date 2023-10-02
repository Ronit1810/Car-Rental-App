import { request, gql } from "graphql-request";

export const getCarList = async() => {

    
    const query = gql`
    query CarLists {
      carLists {
        carAvg
        createdAt
        id
        name
        price
        publishedAt
        updatedAt
        carBrand
        carType
        image {
          url
        }
      }
    }
    `

    const result = await request("https://api-ap-south-1.hygraph.com/v2/clmvorqbi0uty01t2311we92d/master", query)
    return result;
}