require 'test_helper'

class ContinentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @continent = continents(:one)
  end

  test "should get index" do
    get continents_url, as: :json
    assert_response :success
  end

  test "should create continent" do
    assert_difference('Continent.count') do
      post continents_url, params: { continent: { created_at: @continent.created_at, name: @continent.name, updated_at: @continent.updated_at } }, as: :json
    end

    assert_response 201
  end

  test "should show continent" do
    get continent_url(@continent), as: :json
    assert_response :success
  end

  test "should update continent" do
    patch continent_url(@continent), params: { continent: { created_at: @continent.created_at, name: @continent.name, updated_at: @continent.updated_at } }, as: :json
    assert_response 200
  end

  test "should destroy continent" do
    assert_difference('Continent.count', -1) do
      delete continent_url(@continent), as: :json
    end

    assert_response 204
  end
end
