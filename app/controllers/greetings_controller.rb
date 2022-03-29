class GreetingsController < ApplicationController
  def index
  end

  def show
    @greetings = Greeting.all
    @greeting_random = @greetings.sample.body
  end
end
