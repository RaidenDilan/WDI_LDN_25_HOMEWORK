class User < ApplicationRecord
  has_secure_password validations: false

  has_many :posts

  validates :username, presence: true
  validates :email, presence: true, uniqueness: true, unless: :oauth_login?
  validates :password, presence: true, confirmation: true, unless: :oauth_login?, on: :create

  def oauth_login?
    github_id.present?
    # facebook_id.present?
  end
end
