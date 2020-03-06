class CountriesSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :continent
end
