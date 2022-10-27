var total=(ticket,passQty,petrol,milage,distance,maintanance,driver)=>
((ticket*passQty)-milage/distance*petrol+(maintanance+driver))

total(700,40,100,20,100)