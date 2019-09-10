class GameSerializer < ActiveModel::Serializer
  attributes :id, :userId, :totScore
end
