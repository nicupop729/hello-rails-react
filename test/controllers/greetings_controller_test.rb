require "test_helper"

class GreetingsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get greetings_index_url
    assert_response :success
  end

  test "should get show" do
    get greetings_show_url
    assert_response :success
  end
end
