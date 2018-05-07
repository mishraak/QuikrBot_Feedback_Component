const keys = require("../../config/keys");

module.exports = survey => {
	return `
		<html>
			<body>
				<div style="text-align : center;">
					<h3>I'd like your input</h3>
					<p>	Glad that you used our service. Was our response on below tweet helpful? </p>
					<p> ${survey.title} </p>
					<div>
						<a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes"> Yes </a>						
					</div>
					<div>
					<a href="${keys.redirectDomain}/api/surveys/${survey.id}/no"> No </a>
					</div>
				</div>
			</body>
		</html>
	`;
};
