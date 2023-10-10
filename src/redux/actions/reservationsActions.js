export const newReservation = (data) => async (dispatch) => {
    console.log(data)
    const reservationsData = {
        listingId: data?.listingData?._id,
        authorId: data?.listingData?.author,
        checkIn: data?.formattedStartDate,
        checkOut: data?.formattedEndDate,
        nightStaying: data?.nightsStaying,
        guestNumber: data?.totalGuest,
        basePrice: data?.reservationBasePrice,
        taxes: data?.tax,
        authorEarnedPrice: data?.authorEarned,
    }
    dispatch({
        type: "NEW_RESERVATIONS_DATA",
        payload: reservationsData
    })
}
