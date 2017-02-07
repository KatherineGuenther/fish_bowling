function Timer(time) {
  this.minutes = time['minutes'] || 0
  this.seconds = time['seconds'] || 0
  this.paused = false
}

Timer.prototype.reset = function(time) {
  this.minutes = time['minutes'] || 0 
  this.seconds = time['seconds'] || 0
  this.paused = false  
}

// Timer.prototype.pause = function {
//   this.paused = true
// }

// Timer.prototype.resume = function {
//   this.paused = false
// }

Timer.prototype.tick = function() {
  this.seconds--
  var timer_id = document.getElementById('timer')
  console.log('In tick:', this.minutes)
  console.log('In tick:', this.seconds)  
  $(timer_id).html(String(this.minutes) + ':' + (this.seconds < 10 ? '0' : '') + String(this.seconds))
}

Timer.prototype.countdown = function() {
  while (this.seconds || this.minutes) {
    if (this.seconds) {
      setTimeout(this.tick.bind(this), 1000)
    }
    else {
      this.minutes--
      this.seconds = 60
      console.log('minutes', this.minutes)        
      console.log('seconds', this.seconds)  
    }
  }
  alert("Time's up!")
  // this.reset({minutes: 1})  
}

