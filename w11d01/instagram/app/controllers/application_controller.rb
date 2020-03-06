class ApplicationController < ActionController::API
  before_action :authenticate_user!

  def authenticate_user!
    render json: { errors: "Unauthorized" }, status: 401 unless user_sign_in?
  end

  def user_sign_in?
    !!current_user
  end

  def current_user
    @current_user ||= User.find(decoded_token[:id]) if id_found?
  rescue
    nil
  end

  private

  def id_found?
    token && decoded_token && decoded_token[:id]
  end

  def decoded_token
    @decoded_token ||= Auth.decode(token) if token
  end

  def token
    @token ||= if request.headers["Authorization"].present?
      request.headers["Authorization"].split.last
    end
  end
end
