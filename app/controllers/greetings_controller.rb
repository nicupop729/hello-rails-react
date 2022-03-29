class GreetingsController < ApplicationController
  def index
    @greetings = Greeting.all
    @greeting_random = @greetings.sample.body
  end
end
