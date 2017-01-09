'use strict';

$(document)
    .ready(function() {
        console.log("it's working");
        $("#login")
            .on('click', function(event) {
                event.preventDefault();
                console.log('you clicked login');
                let user_name = $('#userName')
                    .val();
                let password = $('#password')
                    .val();
                console.log(user_name, password);
                $.ajax({
                    url: '/dashboard',
                    method: "POST",
                    data: {
                      user_name: user_name,
                      password: password
                    },
                    success: function(response) {
                      console.log(response);
                    }
                });
            });
        $("#register")
            .on('click', function(event) {
                event.preventDefault();
                console.log('you clicked register');
                let registerUserName = $('#registerUserName')
                    .val();
                let registerPassword = $('#registerPassword')
                    .val();
                console.log(registerUserName, registerPassword);
                $.ajax({
                    url: '/users',
                    method: "POST",
                    data: {
                      user_name: registerUserName,
                      password: registerPassword
                    },
                    success: function(user_name, password) {
                    }
                });
            });
    });
