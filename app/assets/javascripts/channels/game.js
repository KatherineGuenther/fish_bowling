$( document ).ready(function() {
  App.game = App.cable.subscriptions.create("GameChannel", {
    speak: function(message) {
      this.perform('speak', message )
    },

    connected: function() {
      // Called when the subscription is ready for use on the server
      console.log('Player connected')
      this.speak('Howdy!')
      console.log('Sent a howdy')
    },

    disconnected: function() {
      // Called when the subscription has been terminated by the server
      console.log('Player disconnected')
    },

    received: function(message) {
        // Called when there's incoming data on the websocket for this channel
        alert(message)
    }
  });
});


