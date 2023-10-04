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



//query for taking booking details
export const BookingDetail = async (formValue : any) => {
  const mutation = gql `
    mutation MyMutation {
      createBooking(
        data: {
          location: "`+formValue.location+`",
          pickupDate: "`+formValue.pickupDate+`", 
          pickupTime: "`+formValue.pickupTime+`",
          dropoffTime: "`+formValue.dropoffTime+`", 
          dropoffDate: "`+formValue.dropoffDate+`", 
          contact: "`+formValue.contact+`",
          carId: {connect: {id: "`+formValue.carId+`"}}, 
          username: "`+formValue.username+`"
        }
      ) {
        id
      }
    }
  `

  const result = await request("https://api-ap-south-1.hygraph.com/v2/clmvorqbi0uty01t2311we92d/master", mutation)
    return result;
}