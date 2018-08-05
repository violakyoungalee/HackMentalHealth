import PropTypes from 'prop-types';

const Rice = props => (
	<div id="sallyport">
		<img id="building" src="../static/images/mental-health.jpg" />
	</div>
);

Rice.propTypes = {
	timeout: PropTypes.bool
};

export default Rice;

{/* <img
	src="../static/images/logo.png"
	transform="grow-18"
	className="logo"
/> */}
