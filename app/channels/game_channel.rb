class GameChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'game_channel'
    end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    p "******************************************"
    p message: data['message']
    p "****************************"
    ActionCable.server.broadcast('game_channel', message: render_message(data['message']))
  end

  # def broadcast(message)
  #   ActionCable.server.broadcast('game_channel', message)
  # end

  private

  def render_message(message)
    # ApplicationController.renderer.render(partial: 'messages/message',
                                         # locals: { message: message })

    ApplicationController.render(template: 'games/dummy_show')
  end
end
