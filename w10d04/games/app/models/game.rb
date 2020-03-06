class Game < ApplicationRecord
  belongs_to :developer
  belongs_to :genre
  has_and_belongs_to_many :genres
end
