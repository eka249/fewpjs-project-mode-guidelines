# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#

#   Character.create(name: 'Luke', movie: movies.first)
gr = "green"
pu = "purple"
re = "red"

so = "solid"
st = "striped"
op = "open"

di = "diamond"
ov = "oval"
sq = "squiggly"

gso3 = Card.create(img: "tes-backend/app/images/cards/green1squiggly-open-3.jpg")



psd1= Card.create(img:'https://cdn1.imggmi.com/uploads/2019/9/11/ee7c90bb5cc310a08aa07cd7f8948aef-full.jpg', color: "purple", shading: "solid", shape: "diamond", ,  number: 1)  


# def seed_cards (color, pattern, shape, numberObj, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
#     Card.create(color, pattern, shape, numberObj, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
# end

# seed_cards(squiggle, diamond, 1, 0, 0, )
# seed_cards()

img.src = "./../images/image1.jpg"