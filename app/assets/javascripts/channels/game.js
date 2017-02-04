$( document ).ready(function() {
  App.game = App.cable.subscriptions.create("GameChannel", {
    connected: function() {
      // Called when the subscription is ready for use on the server
    },

    disconnected: function() {
      // Called when the subscription has been terminated by the server
      console.log('Player disconnected')
    },

    received: function(message) {
        // Called when there's incoming data on the websocket for this channel
        alert(message)
    },

    speak: function(message) {
      this.perform('speak', { message: message })
    }
  });
});


