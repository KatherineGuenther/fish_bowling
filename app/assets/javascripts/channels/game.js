$( document ).ready(function() {
  App.game = App.cable.subscriptions.create("GameChannel", {
    connected: function() {
      // Called when the subscription is ready for use on the server
      // this.perform('speak', { message: 'Hello world' })
    },

    disconnected: function() {
      // Called when the subscription has been terminated by the server
      console.log('Player disconnected')
    },

    received: function(message) {
      // Called when there's incoming data on the websocket for this channel
      alert(message['message'])
    },

    speak: function(message) {
      this.perform('speak', { message: message })
    }
  });

  $('#join-game-form').on('submit', function(event) {
    event.preventDefault()
    alert('Listening on join game')
    $.ajax({
      url: '/games/join',
      method: 'POST'
      // data: { channel: App.game }
      // success: function(result) {
      //   alert(result)
      // }
    })
  })
});


