class GameChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(message)
    p "******************************************"
    p message
    p message[:identifier]
    p message[:data]
    ActionCable.server.broadcast("game_channel", message[:data])
  end
end
