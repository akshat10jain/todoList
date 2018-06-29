const User = require('../models/User');

const nodemailer=require('nodemailer')


//add task
module.exports.addToUserTasks = function(user, taskObj) {
    User.findOneAndUpdate(
        { username: user.username },
        { $push: { tasks: taskObj } }, function (err, succ) {
            if (err) {
                console.log(err);
            }
            
            
        }
    );
}
//completed task
module.exports.addToUserCompletedTasks = function(user, taskObj) {
    User.findOneAndUpdate(
        { username: user.username },
        { $push: { completedTasks: taskObj } }, function (err, succ) {
            if (err) {
                console.log(err);
            }
        }
    );
}

// remove task
module.exports.removeFromUserTasks = function(user, taskObj) {
    User.findOneAndUpdate(
        { username: user.username },
        { $pull: { tasks: { _id: taskObj._id } } }, function (err, succ) {
            if (err) {
                console.log(err);
            }
        }
    );
}

// remove completed  task
module.exports.removeFromUserCompletedTasks = function(user, taskObj) {
    User.findOneAndUpdate(
        { username: user.username },
        { $pull: { completedTasks: { _id: taskObj._id } } }, function (err, succ) {
            if (err) {
                console.log(err);
            }
        }
    );
}



// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: config.Email,
//       pass: config.Password
//     }
//   });

// //   var token = jwt.sign({body}, config.HASH);
//  // var link="http://"+req.get('host');

//   let mailOptions = {
//     from: '"Todo" <akshat.ajin100896@gmail.com>', // sender address
//     to: `${body.email}`, // list of receivers
//     subject: 'Hello stranger!', // Subject line
//     html: `<p>Please click on the link to confirm your email <br/></p>`, // plain text body
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       res.status(400).send(error);
//     }
//     console.log('Message %s sent: %s', info.messageId, info.response);
//     res.status(200).send(body);
//   });
