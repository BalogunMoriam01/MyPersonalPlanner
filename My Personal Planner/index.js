$(document).ready(function () {
    var myDataRef = new Firebase('https://glaring-torch-2477.firebaseio.com/');


    myDataRef.once('value', function (dataSnapshot) {
        dataSnapshot.forEach(function (snap) {
            var task = snap.val();
            $('<div>').appendTo('.border')
            $('<div/>').text(' ').prepend($('<em/>').text(task.date)).appendTo($('.divv'))
            $('<div/>').text(' ').prepend($('<em/>').text(task.time)).appendTo($('.divv'))
            $('<div/><br/>').text(' ').prepend($('<em/>').text(task.task)).appendTo($('.divv'))
        });
    });

    $('#submit').click(function () {
        var date = $('#date').val();
        var time = $('#time').val();
        var task = $('#task').val();

        myDataRef.push({ date: date, time: time, task: task });
        myDataRef.limitToLast(1).on('child_added', function (snapshot) {
            var task = snapshot.val();
            dataSnapshot.forEach(function (snap) {
                var task = snap.val();
                $('<div/>').text(' ').prepend($('<em/>').text(task.date + '  ' + task.time + ' ' + task.task)).appendTo($('.divv'))
            });
            //       $('<div/>').text(' ').prepend($('<em/>').text(task.date + '  '+task.time + ' '+task.task)).appendTo($('.divv'))
        });
    });
});
