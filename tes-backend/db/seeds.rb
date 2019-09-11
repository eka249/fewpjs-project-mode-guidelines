# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).






gr= "green"
pu= "purple"
re ="red"

so="solid"
st="stripe"
op="open"

di="diamond"
ov="oval"
sq="squiggly"

#color, shape, shading,  number

pu_sq_op_1= Card.create(img:"tes-backend/app/images/cards/green1squiggly-open-3.jpg" , color: "purple", shape: "squiggly", shading: "open",  number: 1) 
pu_sq_st_1= Card.create(img:"tes-backend/app/images/cards/green1squiggly-open-3.jpg" , color: "purple", shape: "squiggly", shading: "striped",  number: 1) 
pu_sq_op_1= Card.create(img:"tes-backend/app/images/cards/green1squiggly-open-3.jpg" , color: "purple", shape: "squiggly", shading: "open",  number: 1) 
pu_sq_op_1= Card.create(img:"tes-backend/app/images/cards/green1squiggly-open-3.jpg" , color: "purple", shape: "squiggly", shading: "open",  number: 1) 







psd1= Card.create(img:"" , color: "purple", shape: "diamond", shading: "solid", number: 1)





#####################
psd1= Card.create(img:"" , color: "purple", shape: "diamond", shading: "solid", number: 1)  



# def seed_cards (color, pattern, shape, numberObj, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
#     Card.create(color, pattern, shape, numberObj, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
# end

# seed_cards(squiggle, diamond, 1, 0, 0, )
# seed_cards()

# img.src = "./../images/image1.jpg"