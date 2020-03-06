class CountrySerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :size, :population, :language, :currency, :created_at, :updated_at
  has_one :continent
  belongs_to :continent
end
