class Country < ApplicationRecord
  belongs_to :continent
  validates :continent_id, presence: true
  # validates :currency, length: { minimum: 1, maximum: 10 }, allow_blank: false
end
