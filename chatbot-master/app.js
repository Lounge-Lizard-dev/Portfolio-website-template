//Initialising the bot and script
var botui = new BotUI('botui-app');
    
botui.message.add({
    content: 'Hello there' 
        }).then(function(){
        return botui.message.bot ({
        delay: 800,
        content: 'I am '
    });
}).then(function() {
    return botui.message.bot ({
    delay: 800,
    content: 'What is your name?'
    });
}).then(function() {
    botui.action.text({
        delay: 800,
    addMessage: false,
    action: {
       value: 'Your name',
      placeholder: 'Your Name'
    }
    }).then(function(res) {
    botui.message.add({
        delay: 200,
    content: 'Alright ' + res.value + ', Lets get started then.'
    });

}).then(function() {
    return botui.action.button ({
        delay: 800,
        action: [
            {
                text: 'okay, got it.',
                value: 'okay'
            },
            {
                text: 'How can I reach out to you?',
                value: '1'
            }
        ]
    });
}).then(function(res){
        if(res.value == '1')
        {
            return botui.message.add({
            loading:true,
            delay:2000,
            content: ''
            });
        }
        else
        {
            return botui.message.add(
                {
                    delay: 1000,
                    content:'Great.'
                }
            );
        }
    }).then(function(){
        return botui.action.button({
            delay:1000,
            action:[
                {
                    text: '',
                    value: '2'
                },
                {
                    text: '',
                    value: '3'
                },
                {
                    text: '',
                    value: '4'
                }
            ]
        });
    }).then(function(res){
        if(res.value == '2')
        {
            return botui.message.add({
                delay: 500,
                content: ''
            }).then(function(){
                return botui.message.add({delay: 500,
                content: ''
            }).then(function(){
                return botui.message.add({
                    delay: 500,
                    content: '.'
                }).then(function(){
                    return botui.action.button({
                        delay:1000,
                        action:[
                            {
                                text: '',
                                value: '5'
                            },
                            {
                                text: '',
                                value: '6'
                            }
                        ]
                    });
                })
            });
            });
        }
        else if(res.value=='5')
        {
            return botui.message.add({
                delay: 500,
                content: ''
            }).then(function(){
                return botui.message.add({delay: 500,
                content: ''
            }).then(function(){
                return botui.message.add({
                    delay: 500,
                    content: ''
                }).then(function(){
                    return botui.action.button({
                        delay:1000,
                        action:[
                            {
                                text: 'Share your journey.',
                                value: 'SYJ'
                            },
                            {
                                text: 'Share some of your skills',
                                value: 'SSOYS'
                            }
                        ]
                    });
                })
            });
            });
        }
        else
        {
            return botui.message.add({
                delay: 500,
                content: ''
            }).then(function(){
                return botui.message.add({delay: 500,
                content: ''
            }).then(function(){
                return botui.message.add({
                    delay: 500,
                    content: ''
                }).then(function(){
                    return botui.action.button({
                        delay:1000,
                        action:[
                            {
                                text: '',
                                value: '7'
                            },
                            {
                                text: '',
                                value: '8'
                            }
                        ]
                    });
                })
            });
            }); 
        }
    }).then(function(res){
        if(res.value == '7')
        {
            return botui.message.add({
                delay: 500,
                content: ''
            }).then(function(){
                return botui.message.add({delay: 500,
                content: ''
            }).then(function(){
                return botui.message.add({
                    delay: 500,
                    content: ''
                })
            });
            });
        }
        else if(res.value=='8')
        {
            return botui.message.add({
                delay: 500,
                content: ''
            }).then(function(){
                return botui.message.add({delay: 500,
                content: ''
            }).then(function(){
                return botui.message.add({
                    delay: 500,
                    content: ''
                })
            });
            });
        }
        else
        {
            return botui.message.add({
                delay: 500,
                content: ''
            }).then(function(){
                return botui.message.add({delay: 500,
                content: ''
            }).then(function(){
                return botui.message.add({
                    delay: 500,
                    content: ''
                })
            });
            }); 
        }
    }).then(function(){
        return botui.action.button({
            delay:1000,
            action:[
                {
                    text: '',
                    value: '1'
                },
                {
                    text: '',
                    value: '2'
                }
            ]
        }).then(function(res){
            if(res.value == '1')
            {
                return botui.message.add({
                    delay: 500,
                    content: ''
                });
            }
            else
            {
                return botui.message.add({
                    delay: 500,
                    content: ''
                })
            }
        })
    });
});
