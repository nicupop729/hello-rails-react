class V1::GreetingsController < ApplicationController
  def index
    greeting_random = Greeting.all.sample.body
    render json: { greeting: greeting_random }.to_json
  end
end
