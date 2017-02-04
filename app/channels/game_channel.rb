class GameChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    p "******************************************"
    p data[:message]
    # p message
    # p message[:message]
    # p message
    # p message[:identifier]
    # p message[:data]
    # ActionCable.server.broadcast("game_channel", message[:data])
  end
end
