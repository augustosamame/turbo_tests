require "test_helper"

class MainControllerTest < ActionDispatch::IntegrationTest
  test "should get page_A" do
    get main_page_A_url
    assert_response :success
  end

  test "should get page_B" do
    get main_page_B_url
    assert_response :success
  end
end
