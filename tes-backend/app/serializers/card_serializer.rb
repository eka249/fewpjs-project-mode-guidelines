class CardSerializer < ActiveModel::Serializer
  attributes :id, :img, :color, :shape, :pattern, :numberShape
end
