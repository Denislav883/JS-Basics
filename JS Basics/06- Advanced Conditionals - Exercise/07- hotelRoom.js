function hotelRoom(month, overnightStayCount) {
    let totalPriceStudio = 0;
    let totalPriceApartment = 0;

    switch (month) {
        case "May":
        case "October":
            totalPriceStudio = 50 * overnightStayCount;
            totalPriceApartment = 65 * overnightStayCount;

            if (overnightStayCount > 14) {
                totalPriceStudio *= 0.70;
            } else if (overnightStayCount > 7) {
                totalPriceStudio *= 0.95; 
            }
            break;

        case "June":
        case "September":
            totalPriceStudio = 75.20 * overnightStayCount;
            totalPriceApartment = 68.70 * overnightStayCount;

            if (overnightStayCount > 14) {
                totalPriceStudio *= 0.80;
            }
            break;

        case "July":
        case "August":
            totalPriceStudio = 76 * overnightStayCount;
            totalPriceApartment = 77 * overnightStayCount;
            break;
    }

    if (overnightStayCount > 14) {
        totalPriceApartment *= 0.90;
    }

    console.log(`Apartment: ${totalPriceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${totalPriceStudio.toFixed(2)} lv.`);
}
hotelRoom();