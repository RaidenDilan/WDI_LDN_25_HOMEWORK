class ContinentSerializer < ActiveModel::Serializer
  attributes :id, :name, :created_at, :updated_at
  # belongs_to :country
  has_many :countries
end
