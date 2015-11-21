$(function() {

  var pusherId = "your_pusher_id"
  var channel = "your_channel"
  var pusherEvent = "your_event"

  Pusher.log = function(message) {
      if (window.console && window.console.log) {
        window.console.log(message);
      }
    };

    var pusher = new Pusher(pusherId, {
      encrypted: true
    });
    var channel = pusher.subscribe(channel);
    channel.bind(pusherEvent, function(data) {
       console.log(data.message);
      $('.odometer').html(data.message)
    });

});
