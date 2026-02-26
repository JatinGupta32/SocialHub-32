const emailTemplate = (otp) => {
	return `
	<!DOCTYPE html>
	<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>SocialHub OTP Verification</title>
		<style>
			body {
				font-family: Arial, sans-serif;
				background-color: #f4f4f4;
				margin: 0;
				padding: 0;
			}
			.container {
				width: 100%;
				max-width: 600px;
				margin: 20px auto;
				background: #ffffff;
				border-radius: 8px;
				box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
				overflow: hidden;
			}
			.header {
				background: #721ebb;
				color: #ffffff;
				padding: 20px;
				text-align: center;
				font-size: 24px;
				font-weight: bold;
				letter-spacing: 1px;
			}
			.content {
				padding: 20px;
				text-align: center;
				font-size: 18px;
				color: #333;
			}
			.otp {
				font-size: 30px;
				font-weight: bold;
				background: #721ebb;
				color: #ffffff;
				display: inline-block;
				padding: 10px 20px;
				border-radius: 5px;
				margin: 20px 0;
			}
			.footer {
				text-align: center;
				font-size: 14px;
				color: #888;
				padding: 15px;
				background: #f4f4f4;
				border-top: 1px solid #ddd;
			}
			.brand {
				font-size: 22px;
				font-weight: bold;
				color: #e7d9f4;
			}
		</style>
	</head>
	<body>
		<div class="container">
			<div class="header">
				Welcome to <span class="brand">SocialHub</span> 🔹
			</div>
			<div class="content">
				<p>Dear User,</p>
				<p>Your One-Time Password (OTP) for SocialHub verification is:</p>
				<div class="otp">${otp}</div>
				<p>This OTP is valid for <b>5 minutes</b>. Please do not share it with anyone.</p>
				<p>If you did not request this, please ignore this email.</p>
			</div>
			<div class="footer">
				© 2025 <b>SocialHub</b> | All rights reserved.<br>
				Need help? Contact us at <a href="mailto:support@socialhub.com">support@socialhub.com</a>
			</div>
		</div>
	</body>
	</html>
	`;
};

module.exports = emailTemplate;
