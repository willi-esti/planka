const io = require('sails.io.js')(require('socket.io-client'));

io.sails.url = 'http://localhost:1337';

// Replace 'your-access-token' with the actual token you obtained
const accessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjI2MGM2MTFjLTRmMzEtNDljNy1hZjAxLTgwY2U5NTc2MjExNSJ9';

// '/api/send-email',
io.socket.post(
  '/api/users',
  {
    to: 'recipient@example.com',
    subject: 'Test Email',
    html: '<p>This is a test email.</p>',
  },
  function (data, jwres) {
    if (jwres.error) {
      console.error('Error sending email:', jwres.error);
    } else {
      console.log('Email sent successfully:', data);
    }
  },
  {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  },
);
